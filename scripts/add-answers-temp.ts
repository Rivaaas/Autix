import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function addAnswers() {
  // Buscar la pregunta
  const question = await prisma.question.findFirst({
    where: {
      text: {
        contains: 'El conductor detrás suyo le sigue muy de cerca',
        mode: 'insensitive'
      }
    }
  });

  if (!question) {
    console.log('❌ Pregunta no encontrada');
    return;
  }

  console.log('✅ Pregunta encontrada:', question.text);
  console.log('ID:', question.id);

  // Agregar las alternativas
  const answers = [
    {
      text: 'Señaliza a la derecha y le indica con lo mano para que lo adelante.',
      isCorrect: false,
      questionId: question.id
    },
    {
      text: 'Disminuye la velocidad y le permite que lo adelante.',
      isCorrect: false,
      questionId: question.id
    },
    {
      text: 'No hace nada y se mantiene dentro del límite de velocidad.',
      isCorrect: true,
      questionId: question.id
    },
    {
      text: 'Se acerca hacia el centro de la calzada.',
      isCorrect: false,
      questionId: question.id
    }
  ];

  console.log('\n📝 Agregando alternativas...');
  
  for (const answer of answers) {
    await prisma.answer.create({
      data: answer
    });
    console.log(`  - ${answer.text} ${answer.isCorrect ? '✓' : ''}`);
  }

  console.log('\n🎉 Alternativas agregadas exitosamente');

  // Verificar
  const updated = await prisma.question.findUnique({
    where: { id: question.id },
    include: { answers: true }
  });

  console.log(`\nTotal de alternativas: ${updated?.answers.length}`);
}

addAnswers()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
