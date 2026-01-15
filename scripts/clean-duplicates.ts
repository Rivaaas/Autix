import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function cleanDuplicates() {
  console.log('🔍 Analizando duplicados...\n');

  // 1. Obtener todas las preguntas
  const allQuestions = await prisma.question.findMany({
    include: {
      answers: true
    }
  });

  console.log(`📊 Total de preguntas en BD: ${allQuestions.length}`);

  // 2. Agrupar por texto (normalizado)
  const questionsByText = new Map<string, typeof allQuestions>();
  
  for (const question of allQuestions) {
    const normalizedText = question.text.trim().toLowerCase();
    if (!questionsByText.has(normalizedText)) {
      questionsByText.set(normalizedText, []);
    }
    questionsByText.get(normalizedText)!.push(question);
  }

  console.log(`✅ Preguntas únicas: ${questionsByText.size}\n`);

  // 3. Identificar duplicados
  const duplicates: string[] = [];
  const toKeep: string[] = [];

  for (const [text, questions] of questionsByText) {
    if (questions.length > 1) {
      console.log(`🔄 Duplicado encontrado: "${text.substring(0, 60)}..."`);
      console.log(`   Total de copias: ${questions.length}`);
      
      // Mantener la pregunta con imagen (si existe), sino la primera
      const questionToKeep = questions.find(q => q.imageUrl && !q.imageUrl.includes('placeholder')) 
        || questions[0];
      
      toKeep.push(questionToKeep.id);
      
      // Marcar las demás para eliminación
      questions
        .filter(q => q.id !== questionToKeep.id)
        .forEach(q => duplicates.push(q.id));
    } else {
      toKeep.push(questions[0].id);
    }
  }

  console.log(`\n📋 Resumen:`);
  console.log(`   Preguntas a mantener: ${toKeep.length}`);
  console.log(`   Preguntas a eliminar: ${duplicates.length}\n`);

  if (duplicates.length === 0) {
    console.log('✨ No hay duplicados para eliminar');
    return;
  }

  // 4. Eliminar duplicados
  console.log('🗑️  Eliminando duplicados...');

  // Primero eliminar las respuestas asociadas
  await prisma.answer.deleteMany({
    where: {
      questionId: {
        in: duplicates
      }
    }
  });

  // Eliminar ExamAnswers que referencien estas preguntas
  await prisma.examAnswer.deleteMany({
    where: {
      questionId: {
        in: duplicates
      }
    }
  });

  // Finalmente eliminar las preguntas duplicadas
  const deleted = await prisma.question.deleteMany({
    where: {
      id: {
        in: duplicates
      }
    }
  });

  console.log(`✅ Eliminadas ${deleted.count} preguntas duplicadas`);
  
  // 5. Verificar resultado final
  const finalCount = await prisma.question.count();
  console.log(`\n🎉 Limpieza completada!`);
  console.log(`   Preguntas finales en BD: ${finalCount}`);
}

cleanDuplicates()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
