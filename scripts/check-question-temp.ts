import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function checkQuestion() {
  const q = await prisma.question.findFirst({
    where: {
      text: {
        contains: 'El conductor detrás suyo le sigue muy de cerca',
        mode: 'insensitive'
      }
    },
    include: {
      answers: true
    }
  });
  
  if (q) {
    console.log('Pregunta:', q.text);
    console.log('\nAlternativas:');
    q.answers.forEach((a, i) => {
      console.log(`${i+1}. ${a.text} - ${a.isCorrect ? '✓ Correcta' : 'Incorrecta'}`);
    });
    console.log(`\nTotal: ${q.answers.length} alternativas`);
  } else {
    console.log('No encontrada');
  }
  
  await prisma.$disconnect();
}

checkQuestion();
