import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function testMultipleAnswersValidation() {
  console.log('🧪 Probando validación de preguntas con 2 o 3 respuestas correctas\n')

  // Buscar preguntas con múltiples respuestas correctas
  const questions = await prisma.question.findMany({
    include: {
      answers: true
    }
  })

  const multipleChoiceQuestions = questions.filter(q => 
    q.answers.filter(a => a.isCorrect).length > 1
  )

  if (multipleChoiceQuestions.length === 0) {
    console.log('❌ No se encontraron preguntas con múltiples respuestas correctas')
    return
  }

  // Tomar una pregunta con 3 respuestas correctas
  const question3 = multipleChoiceQuestions.find(q => 
    q.answers.filter(a => a.isCorrect).length === 3
  )

  // Tomar una pregunta con 2 respuestas correctas
  const question2 = multipleChoiceQuestions.find(q => 
    q.answers.filter(a => a.isCorrect).length === 2
  )

  // Función de validación (igual a la de actions.ts)
  const validateAnswer = (selectedIds: string[], correctIds: string[]) => {
    const selectedSorted = [...selectedIds].sort()
    const correctSorted = [...correctIds].sort()
    const isCorrect = JSON.stringify(correctSorted) === JSON.stringify(selectedSorted)
    console.log(`   Correctas: [${correctSorted.length}]`, correctSorted.map(id => id.substring(0, 8)))
    console.log(`   Seleccionadas: [${selectedSorted.length}]`, selectedSorted.map(id => id.substring(0, 8)))
    console.log(`   Resultado:`, isCorrect ? '✅ CORRECTA' : '❌ INCORRECTA')
    return isCorrect
  }

  // Probar pregunta con 3 respuestas correctas
  if (question3) {
    const correctIds = question3.answers.filter(a => a.isCorrect).map(a => a.id)
    const incorrectIds = question3.answers.filter(a => !a.isCorrect).map(a => a.id)

    console.log('📝 PREGUNTA CON 3 RESPUESTAS CORRECTAS:')
    console.log(question3.text.substring(0, 80) + '...\n')
    
    console.log('✅ Respuestas correctas (3):')
    question3.answers.filter(a => a.isCorrect).forEach((a, i) => {
      console.log(`   ${i + 1}. ${a.text.substring(0, 60)}...`)
    })

    console.log('\n❌ Respuestas incorrectas:')
    question3.answers.filter(a => !a.isCorrect).forEach((a, i) => {
      console.log(`   ${i + 1}. ${a.text.substring(0, 60)}...`)
    })

    console.log('\n🧪 CASOS DE PRUEBA:\n')

    console.log('1️⃣ Usuario selecciona las 3 correctas:')
    validateAnswer(correctIds, correctIds)
    console.log()

    console.log('2️⃣ Usuario selecciona solo 2 de las 3 correctas (falta 1):')
    validateAnswer(correctIds.slice(0, 2), correctIds)
    console.log()

    console.log('3️⃣ Usuario selecciona 2 correctas + 1 incorrecta:')
    if (incorrectIds.length > 0) {
      validateAnswer([...correctIds.slice(0, 2), incorrectIds[0]], correctIds)
    }
    console.log()

    console.log('4️⃣ Usuario selecciona las 3 correctas + 1 incorrecta:')
    if (incorrectIds.length > 0) {
      validateAnswer([...correctIds, incorrectIds[0]], correctIds)
    }
    console.log()

    console.log('5️⃣ Usuario no selecciona ninguna:')
    validateAnswer([], correctIds)
    console.log()
  }

  // Probar pregunta con 2 respuestas correctas
  if (question2) {
    const correctIds = question2.answers.filter(a => a.isCorrect).map(a => a.id)
    const incorrectIds = question2.answers.filter(a => !a.isCorrect).map(a => a.id)

    console.log('\n' + '='.repeat(80))
    console.log('\n📝 PREGUNTA CON 2 RESPUESTAS CORRECTAS:')
    console.log(question2.text.substring(0, 80) + '...\n')
    
    console.log('✅ Respuestas correctas (2):')
    question2.answers.filter(a => a.isCorrect).forEach((a, i) => {
      console.log(`   ${i + 1}. ${a.text.substring(0, 60)}...`)
    })

    console.log('\n🧪 CASOS DE PRUEBA:\n')

    console.log('1️⃣ Usuario selecciona las 2 correctas:')
    validateAnswer(correctIds, correctIds)
    console.log()

    console.log('2️⃣ Usuario selecciona solo 1 de las 2 correctas:')
    validateAnswer([correctIds[0]], correctIds)
    console.log()

    console.log('3️⃣ Usuario selecciona 1 correcta + 1 incorrecta:')
    if (incorrectIds.length > 0) {
      validateAnswer([correctIds[0], incorrectIds[0]], correctIds)
    }
    console.log()
  }

  console.log('\n' + '='.repeat(80))
  console.log('\n📊 CONCLUSIÓN:')
  console.log('La lógica actual marca la pregunta como CORRECTA solo si:')
  console.log('  ✅ El usuario selecciona TODAS las respuestas correctas')
  console.log('  ✅ Y NO selecciona NINGUNA respuesta incorrecta')
  console.log('  ✅ La cantidad debe coincidir exactamente')
  console.log('\n❌ Si falta alguna correcta → INCORRECTA')
  console.log('❌ Si incluye alguna incorrecta → INCORRECTA')
  console.log('❌ Si no selecciona ninguna → INCORRECTA')

  await prisma.$disconnect()
}

testMultipleAnswersValidation()
