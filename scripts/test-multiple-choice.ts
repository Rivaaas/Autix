import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function testMultipleChoice() {
  console.log('\n🔍 Analizando preguntas con múltiples respuestas correctas...\n');

  const allQuestions = await prisma.question.findMany({
    include: {
      answers: true
    }
  });

  const multipleChoiceQuestions = allQuestions.filter(q => 
    q.answers.filter(a => a.isCorrect).length > 1
  );

  console.log(`📊 Estadísticas:`);
  console.log(`   Total de preguntas: ${allQuestions.length}`);
  console.log(`   Preguntas de opción simple: ${allQuestions.length - multipleChoiceQuestions.length}`);
  console.log(`   Preguntas de opción múltiple: ${multipleChoiceQuestions.length}\n`);

  console.log('📝 Ejemplos de preguntas de opción múltiple:\n');
  
  multipleChoiceQuestions.slice(0, 5).forEach((q, index) => {
    const correctAnswers = q.answers.filter(a => a.isCorrect);
    console.log(`${index + 1}. ${q.text.substring(0, 80)}...`);
    console.log(`   ✓ Respuestas correctas: ${correctAnswers.length}`);
    correctAnswers.forEach(a => {
      console.log(`      • ${a.text.substring(0, 60)}...`);
    });
    console.log('');
  });
}

testMultipleChoice()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
