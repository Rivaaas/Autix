import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * Agregar o actualizar pregunta con imagen
 * Uso: npx tsx scripts/add-question-with-image.ts
 */

interface Answer {
  text: string;
  isCorrect: boolean;
}

async function addOrUpdateQuestion(
  questionText: string,
  answers: Answer[],
  imagePath: string
) {
  console.log(`🔍 Buscando pregunta: "${questionText.substring(0, 60)}..."`);

  // Buscar si ya existe
  const existing = await prisma.question.findFirst({
    where: {
      text: {
        contains: questionText.substring(0, 30),
        mode: 'insensitive'
      }
    }
  });

  if (existing) {
    // Actualizar imagen
    await prisma.question.update({
      where: { id: existing.id },
      data: { imageUrl: imagePath }
    });
    console.log(`✅ Pregunta existente actualizada con imagen: ${imagePath}`);
    return;
  }

  // Crear nueva pregunta
  console.log(`📝 Creando nueva pregunta...`);
  
  const question = await prisma.question.create({
    data: {
      text: questionText,
      category: 'General',
      imageUrl: imagePath,
      answers: {
        create: answers
      }
    }
  });

  console.log(`🎉 Pregunta creada exitosamente!`);
  console.log(`   ID: ${question.id}`);
  console.log(`   Imagen: ${imagePath}`);
  console.log(`   Respuestas: ${answers.length}`);
}

// Ejecutar
const questionText = `¿En cuál o cuáles situaciones el vehículo está mal estacionado?`;

const answers: Answer[] = [
  {
    text: "A",
    isCorrect: true
  },
  {
    text: "B",
    isCorrect: true
  },
  {
    text: "C",
    isCorrect: true
  },
  {
    text: "D",
    isCorrect: false
  }
];

addOrUpdateQuestion(questionText, answers, '/images/questions/img-049.png')
  .catch(console.error)
  .finally(() => prisma.$disconnect());
