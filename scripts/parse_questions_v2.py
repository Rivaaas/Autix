import re
import json
import os

def parse_questions(filename):
    if not os.path.exists(filename):
        print(f"File {filename} not found")
        return []
        
    with open(filename, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    questions = []
    current_q = None
    seen_questions = set()

    # Regex patterns
    q_start_pattern = re.compile(r'^\s*(\d+)\s+(.+)')
    option_pattern = re.compile(r'^\s*([a-z])\)\s+(.+)')
    image_pattern = re.compile(r'^imagen\s*$', re.IGNORECASE)
    ignore_pattern = re.compile(r'^(Anterior|Siguiente|Examen Municipal|Preguntas =|Tiempo en|Puntaje minimo|Tiempo utilizado|Marque|00:|Volver \|).*', re.IGNORECASE)

    for line in lines:
        line = line.strip()
        if not line:
            continue
        
        # Check for ignore lines
        if ignore_pattern.match(line):
            continue

        # Check for new question
        q_match = q_start_pattern.match(line)
        if q_match:
            # Save previous question
            if current_q:
                # Deduplicate
                q_text_norm = current_q['text'].strip().lower()
                if q_text_norm not in seen_questions and len(current_q['answers']) > 0:
                    seen_questions.add(q_text_norm)
                    questions.append(current_q)
                current_q = None

            # Start new question
            current_q = {
                'text': q_match.group(2).strip(),
                'answers': [],
                'image': None
            }
            continue

        # Check for option
        opt_match = option_pattern.match(line)
        if opt_match:
            if current_q:
                current_q['answers'].append({
                    'text': opt_match.group(2).strip(),
                    'isCorrect': False # Will set defaults later
                })
            continue

        # Check for image
        if image_pattern.match(line):
            if current_q:
                current_q['image'] = '/placeholder-image.png' # Placeholder
            continue

        # Append to question text if it's a continuation and we are inside a question and BEFORE any options
        if current_q and not current_q['answers']:
            current_q['text'] += " " + line

    # Add last question
    if current_q:
        q_text_norm = current_q['text'].strip().lower()
        if q_text_norm not in seen_questions and len(current_q['answers']) > 0:
            questions.append(current_q)

    # Post-processing: Set default correct answer
    for q in questions:
        if q['answers']:
            q['answers'][0]['isCorrect'] = True

    return questions

def generate_seed_file(questions):
    ts_output = """import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const questionsData: any[] = [
"""
    for q in questions:
        ts_output += "  {\n"
        ts_output += f"    text: {json.dumps(q['text'])},\n"
        # Only add image field if it exists, otherwise prisma handles default null if defined, or we pass null explicitly
        if q['image']:
             ts_output += f"    image: {json.dumps(q['image'])},\n"
        else:
             ts_output += "    image: null,\n"
             
        ts_output += "    answers: [\n"
        for ans in q['answers']:
            ts_output += "      {\n"
            ts_output += f"        text: {json.dumps(ans['text'])},\n"
            ts_output += f"        isCorrect: {str(ans['isCorrect']).lower()}\n"
            ts_output += "      },\n"
        ts_output += "    ]\n"
        ts_output += "  },\n"
    
    ts_output += """];

async function main() {
  console.log("Start seeding ...");
  
  // Limpiar la base de datos para evitar duplicados al correr el seed varias veces
  try {
      await prisma.answer.deleteMany();
      await prisma.question.deleteMany();
      // await prisma.exam.deleteMany(); // Opcional, si quieres borrar exámenes pasados
  } catch(e) {
      console.log("Tables might not exist yet, continuing...");
  }

  for (const q of questionsData) {
    const question = await prisma.question.create({
      data: {
        text: q.text,
        category: "General", 
        imageUrl: q.image,
        answers: {
          create: q.answers,
        },
      },
    });
    // console.log(`Created question with id: ${question.id}`);
  }
  console.log(`Seeding finished. ${questionsData.length} questions inserted.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
"""
    return ts_output

if __name__ == "__main__":
    questions = parse_questions('questions.txt')
    print(f"Parsed {len(questions)} unique questions.")
    
    seed_content = generate_seed_file(questions)
    
    # Writing to prisma/seed.ts
    with open('prisma/seed.ts', 'w', encoding='utf-8') as f:
        f.write(seed_content)
