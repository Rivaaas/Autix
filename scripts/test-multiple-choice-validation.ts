import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function testMultipleChoiceLogic() {
  console.log('🧪 Probando lógica de validación de respuestas múltiples\n')

  // Buscar una pregunta con múltiples respuestas correctas
  const question = await prisma.question.findFirst({
    where: {
      answers: {
        some: {
          isCorrect: true
        }
      }
    },
    include: {
      answers: true
    }
  })

  if (!question) {
    console.log('❌ No se encontró ninguna pregunta')
    return
  }

  const correctAnswers = question.answers.filter(a => a.isCorrect)
  const incorrectAnswers = question.answers.filter(a => !a.isCorrect)

  console.log('📝 Pregunta:', question.text.substring(0, 80) + '...')
  console.log('✅ Respuestas correctas:', correctAnswers.length)
  correctAnswers.forEach(a => console.log('   -', a.text.substring(0, 60)))
  
  console.log('❌ Respuestas incorrectas:', incorrectAnswers.length)
  incorrectAnswers.forEach(a => console.log('   -', a.text.substring(0, 60)))

  // Función de validación (igual a la de actions.ts)
  const validateAnswer = (selectedIds: string[], correctIds: string[]) => {
    const selectedSorted = [...selectedIds].sort()
    const correctSorted = [...correctIds].sort()
    return JSON.stringify(correctSorted) === JSON.stringify(selectedSorted)
  }

  const correctIds = correctAnswers.map(a => a.id)

  console.log('\n🧪 Casos de prueba:\n')

  // Caso 1: Todas correctas
  const allCorrect = validateAnswer(correctIds, correctIds)
  console.log('1️⃣ Seleccionar TODAS las correctas:', allCorrect ? '✅ CORRECTA' : '❌ INCORRECTA')

  // Caso 2: Solo algunas correctas (falta una)
  if (correctIds.length > 1) {
    const someCorrect = validateAnswer(correctIds.slice(0, -1), correctIds)
    console.log('2️⃣ Seleccionar solo ' + (correctIds.length - 1) + ' de ' + correctIds.length + ' correctas:', someCorrect ? '✅ CORRECTA' : '❌ INCORRECTA')
  }

  // Caso 3: Correctas + una incorrecta
  if (incorrectAnswers.length > 0) {
    const mixedIds = [...correctIds, incorrectAnswers[0].id]
    const withIncorrect = validateAnswer(mixedIds, correctIds)
    console.log('3️⃣ Seleccionar todas las correctas + 1 incorrecta:', withIncorrect ? '✅ CORRECTA' : '❌ INCORRECTA')
  }

  // Caso 4: Una correcta + una incorrecta (cuando hay múltiples)
  if (correctIds.length > 1 && incorrectAnswers.length > 0) {
    const mixedPartial = validateAnswer([correctIds[0], incorrectAnswers[0].id], correctIds)
    console.log('4️⃣ Seleccionar 1 correcta + 1 incorrecta:', mixedPartial ? '✅ CORRECTA' : '❌ INCORRECTA')
  }

  // Caso 5: Ninguna seleccionada
  const noneSelected = validateAnswer([], correctIds)
  console.log('5️⃣ No seleccionar ninguna:', noneSelected ? '✅ CORRECTA' : '❌ INCORRECTA')

  // Caso 6: Solo incorrectas
  if (incorrectAnswers.length > 0) {
    const onlyIncorrect = validateAnswer([incorrectAnswers[0].id], correctIds)
    console.log('6️⃣ Seleccionar solo incorrectas:', onlyIncorrect ? '✅ CORRECTA' : '❌ INCORRECTA')
  }

  console.log('\n📊 Resumen:')
  console.log('La pregunta se marca como CORRECTA solo si:')
  console.log('  ✅ Se seleccionan TODAS las respuestas correctas')
  console.log('  ✅ Y NINGUNA respuesta incorrecta')
  console.log('  ✅ La cantidad exacta debe coincidir')
  console.log('\nEn cualquier otro caso, se marca como INCORRECTA.')

  await prisma.$disconnect()
}

testMultipleChoiceLogic()
