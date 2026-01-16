import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function addImageToPreferenceQuestion() {
  try {
    // Actualizar la pregunta específica
    const result = await prisma.question.update({
      where: {
        id: '9c3e90a8-e73d-43ff-8dd8-e1f383ad8bc8'
      },
      data: {
        imageUrl: 'img-026.png'
      }
    })

    console.log('✅ Imagen agregada a la pregunta:')
    console.log('   Pregunta:', result.text)
    console.log('   Imagen:', result.imageUrl)
    console.log('\n🎉 Actualización completada')

  } catch (error) {
    console.error('Error:', error)
  } finally {
    await prisma.$disconnect()
  }
}

addImageToPreferenceQuestion()
