import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function addImageToSignQuestion() {
  try {
    // Buscar la pregunta sobre la señal
    const questions = await prisma.question.findMany({
      where: {
        text: {
          equals: '¿Qué significa esta señal?'
        },
        imageUrl: null
      },
      include: {
        answers: true
      }
    })

    if (questions.length === 0) {
      console.log('❌ No se encontró la pregunta sin imagen')
      return
    }

    console.log(`✅ Encontrada(s) ${questions.length} pregunta(s) sin imagen`)

    for (const question of questions) {
      console.log('\n📝 Pregunta:', question.text)
      console.log('Respuestas:')
      question.answers.forEach(a => {
        console.log(`  ${a.isCorrect ? '✓' : '✗'} ${a.text}`)
      })

      // Basándome en las respuestas, parece ser sobre angostamiento de vía
      // Necesito que me digas qué imagen debería usar
      console.log('\n⚠️ Por favor indica qué imagen debe usarse (ej: img-XXX.png)')
      console.log('ID de la pregunta:', question.id)
    }

  } catch (error) {
    console.error('Error:', error)
  } finally {
    await prisma.$disconnect()
  }
}

addImageToSignQuestion()
