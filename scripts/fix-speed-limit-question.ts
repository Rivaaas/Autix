import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function fixSpeedLimitQuestion() {
  try {
    // Buscar la pregunta sobre la señal de velocidad máxima 70
    const questions = await prisma.question.findMany({
      where: {
        text: {
          contains: 'circulando en su vehículo usted enfrenta esta señal'
        }
      },
      include: {
        answers: true
      }
    })

    if (questions.length === 0) {
      console.log('❌ No se encontró la pregunta')
      return
    }

    console.log(`✅ Encontrada(s) ${questions.length} pregunta(s)`)

    for (const question of questions) {
      console.log('\n📝 Pregunta:', question.text.substring(0, 80) + '...')
      console.log('Respuestas actuales:')
      
      question.answers.forEach(answer => {
        console.log(`  ${answer.isCorrect ? '✓' : '✗'} ${answer.text}`)
      })

      // Encontrar la respuesta correcta: "Que usted no debe exceder esta velocidad"
      const correctAnswer = question.answers.find(a => 
        a.text.toLowerCase().includes('no debe exceder') || 
        a.text.toLowerCase().includes('no deb')
      )

      if (!correctAnswer) {
        console.log('⚠️ No se encontró la respuesta correcta esperada')
        continue
      }

      // Actualizar: marcar todas como incorrectas primero
      await prisma.answer.updateMany({
        where: {
          questionId: question.id
        },
        data: {
          isCorrect: false
        }
      })

      // Marcar solo la correcta
      await prisma.answer.update({
        where: {
          id: correctAnswer.id
        },
        data: {
          isCorrect: true
        }
      })

      console.log('\n✅ Respuesta corregida:')
      console.log(`  ✓ ${correctAnswer.text}`)
    }

    console.log('\n🎉 Corrección completada')

  } catch (error) {
    console.error('Error:', error)
  } finally {
    await prisma.$disconnect()
  }
}

fixSpeedLimitQuestion()
