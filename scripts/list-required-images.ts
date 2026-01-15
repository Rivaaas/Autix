import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function listRequiredImages() {
  const questionsWithImages = await prisma.question.findMany({
    where: {
      imageUrl: {
        not: null,
        notIn: ['/placeholder-image.png']
      }
    },
    select: {
      id: true,
      text: true,
      imageUrl: true
    },
    orderBy: {
      imageUrl: 'asc'
    }
  });

  console.log(`\n📸 Imágenes requeridas (${questionsWithImages.length} preguntas con imagen):\n`);

  const uniqueImages = new Map<string, number>();
  
  questionsWithImages.forEach(q => {
    if (q.imageUrl && !q.imageUrl.includes('placehold.co')) {
      const count = uniqueImages.get(q.imageUrl) || 0;
      uniqueImages.set(q.imageUrl, count + 1);
    }
  });

  console.log('📋 Archivos de imagen únicos:\n');
  uniqueImages.forEach((count, url) => {
    const filename = url.split('/').pop();
    console.log(`   ${filename} (usado en ${count} pregunta${count > 1 ? 's' : ''})`);
  });

  console.log(`\n📂 Crear estos archivos en: public/images/questions/\n`);
  uniqueImages.forEach((count, url) => {
    const filename = url.split('/').pop();
    console.log(`   - ${filename}`);
  });

  console.log(`\n💡 Total de archivos únicos: ${uniqueImages.size}`);
}

listRequiredImages()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
