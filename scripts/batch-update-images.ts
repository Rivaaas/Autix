import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';
import * as path from 'path';

const prisma = new PrismaClient();

/**
 * Actualización masiva de imágenes
 * 
 * Crea un archivo mapping.json con este formato:
 * [
 *   {
 *     "searchText": "De acuerdo a las circunstancias",
 *     "image": "continuara-derecho.jpg"
 *   },
 *   {
 *     "searchText": "¿Qué significa esta señal",
 *     "image": "semaforo-amarillo.jpg"
 *   }
 * ]
 */

interface ImageMapping {
  searchText: string;
  image: string;
}

async function batchUpdateImages() {
  const mappingPath = path.join(process.cwd(), 'scripts', 'mapping.json');
  
  if (!fs.existsSync(mappingPath)) {
    console.log('❌ No se encontró el archivo mapping.json');
    console.log('\nCrea scripts/mapping.json con este formato:');
    console.log(JSON.stringify([
      {
        "searchText": "De acuerdo a las circunstancias",
        "image": "img-001.jpg"
      }
    ], null, 2));
    process.exit(1);
  }

  const mappings: ImageMapping[] = JSON.parse(fs.readFileSync(mappingPath, 'utf-8'));
  
  console.log(`📋 Procesando ${mappings.length} imágenes...\n`);

  let updated = 0;
  let notFound = 0;
  let errors = 0;

  for (const mapping of mappings) {
    try {
      const questions = await prisma.question.findMany({
        where: {
          text: {
            contains: mapping.searchText,
            mode: 'insensitive'
          }
        }
      });

      if (questions.length === 0) {
        console.log(`❌ No encontrada: "${mapping.searchText.substring(0, 50)}..."`);
        notFound++;
        continue;
      }

      if (questions.length > 1) {
        console.log(`⚠️  Múltiples coincidencias para: "${mapping.searchText.substring(0, 50)}..."`);
        console.log(`   Usa un texto más específico`);
        errors++;
        continue;
      }

      const question = questions[0];
      const imagePath = `/images/questions/${mapping.image}`;

      await prisma.question.update({
        where: { id: question.id },
        data: { imageUrl: imagePath }
      });

      console.log(`✅ ${mapping.image} → "${question.text.substring(0, 60)}..."`);
      updated++;

    } catch (error) {
      console.log(`❌ Error procesando: ${mapping.searchText}`);
      console.error(error);
      errors++;
    }
  }

  console.log(`\n📊 Resumen:`);
  console.log(`   Actualizadas: ${updated}`);
  console.log(`   No encontradas: ${notFound}`);
  console.log(`   Errores: ${errors}`);
}

batchUpdateImages()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
