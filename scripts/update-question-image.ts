import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * Script para actualizar la imagen de una pregunta específica
 * Uso: npx tsx scripts/update-question-image.ts "texto de la pregunta" "ruta/imagen.jpg"
 */

async function updateQuestionImage() {
  const args = process.argv.slice(2);
  
  if (args.length < 2) {
    console.log('❌ Uso: npx tsx scripts/update-question-image.ts "texto de la pregunta" "ruta/imagen.jpg"');
    console.log('\nEjemplo:');
    console.log('  npx tsx scripts/update-question-image.ts "De acuerdo a las circunstancias" "/images/questions/q35.jpg"');
    process.exit(1);
  }

  const searchText = args[0].toLowerCase();
  const imagePath = args[1];

  console.log(`🔍 Buscando pregunta que contenga: "${searchText}"`);

  // Buscar la pregunta
  const questions = await prisma.question.findMany({
    where: {
      text: {
        contains: searchText,
        mode: 'insensitive'
      }
    }
  });

  if (questions.length === 0) {
    console.log('❌ No se encontró ninguna pregunta con ese texto');
    process.exit(1);
  }

  if (questions.length > 1) {
    console.log(`⚠️  Se encontraron ${questions.length} preguntas:`);
    questions.forEach((q, i) => {
      console.log(`\n${i + 1}. ${q.text.substring(0, 100)}...`);
    });
    console.log('\n❌ Por favor, usa un texto más específico');
    process.exit(1);
  }

  const question = questions[0];
  console.log(`\n✅ Pregunta encontrada:`);
  console.log(`   ID: ${question.id}`);
  console.log(`   Texto: ${question.text.substring(0, 100)}...`);
  console.log(`   Imagen actual: ${question.imageUrl || 'Sin imagen'}`);

  // Actualizar la imagen
  await prisma.question.update({
    where: { id: question.id },
    data: { imageUrl: imagePath }
  });

  console.log(`\n🎉 Imagen actualizada a: ${imagePath}`);
}

updateQuestionImage()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
