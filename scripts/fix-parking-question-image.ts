import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function fixParkingQuestionImage() {
  try {
    // Buscar la pregunta sobre mal estacionamiento
    const questions = await prisma.question.findMany({
      where: {
        text: {
          contains: 'situaciones el vehículo está mal estacionado'
        }
      }
    })

    if (questions.length === 0) {
      console.log('❌ No se encontró la pregunta')
      return
    }

    console.log(`✅ Encontrada(s) ${questions.length} pregunta(s)`)

    for (const question of questions) {
      console.log('\n📝 Pregunta:', question.text)
      console.log('Imagen actual:', question.imageUrl)

      // Actualizar la imagen
      await prisma.question.update({
        where: {
          id: question.id
        },
        data: {
          imageUrl: 'img-051.png'
        }
      })

      console.log('✅ Imagen actualizada a: img-051.png')
    }

    console.log('\n🎉 Corrección completada')

  } catch (error) {
    console.error('Error:', error)
  } finally {
    await prisma.$disconnect()
  }
}

fixParkingQuestionImage()
