import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function addImage004ToQuestion() {
  try {
    // Actualizar la segunda pregunta sobre preferencia (con diferentes alternativas)
    const result = await prisma.question.update({
      where: {
        id: '67d68f5b-d006-4bad-b600-314d9b19e8db'
      },
      data: {
        imageUrl: 'img-004.png'
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

addImage004ToQuestion()
