import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function verifyQuestions() {
  console.log('📊 Verificando estado de preguntas...\n');

  const total = await prisma.question.count();
  const withImages = await prisma.question.count({
    where: { 
      imageUrl: { 
        not: null,
        notIn: ['/placeholder-image.png']
      } 
    }
  });
  const withPlaceholder = await prisma.question.count({
    where: { 
      OR: [
        { imageUrl: { contains: 'placeholder' } },
        { imageUrl: { contains: 'placehold.co' } }
      ]
    }
  });

  console.log(`Total de preguntas: ${total}`);
  console.log(`Con imágenes reales: ${withImages}`);
  console.log(`Con placeholders: ${withPlaceholder}`);
  console.log(`Sin imagen: ${total - withImages - withPlaceholder}`);

  // Verificar duplicados por texto
  const allQuestions = await prisma.question.findMany({
    select: { text: true }
  });

  const uniqueTexts = new Set(allQuestions.map(q => q.text.trim().toLowerCase()));
  console.log(`\n🔍 Análisis de duplicados:`);
  console.log(`   Registros totales: ${allQuestions.length}`);
  console.log(`   Textos únicos: ${uniqueTexts.size}`);
  console.log(`   Duplicados: ${allQuestions.length - uniqueTexts.size}`);

  if (allQuestions.length !== uniqueTexts.size) {
    console.log(`\n⚠️  ¡Hay duplicados! Ejecuta: npx tsx scripts/clean-duplicates.ts`);
  } else {
    console.log(`\n✅ No hay duplicados`);
  }
}

verifyQuestions()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
