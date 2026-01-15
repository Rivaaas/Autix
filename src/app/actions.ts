'use server'

import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation"

export async function startExam() {
  // Obtener TODAS las preguntas únicas disponibles
  const allQuestions = await prisma.question.findMany({ 
    select: { id: true },
    // Asegurarse de que solo tomamos preguntas con respuestas válidas
    where: {
      answers: {
        some: {}
      }
    }
  })
  
  if (allQuestions.length === 0) {
    throw new Error("No hay preguntas en la base de datos. Ejecuta el seed.")
  }

  if (allQuestions.length < 35) {
    throw new Error(`Solo hay ${allQuestions.length} preguntas. Se requieren al menos 35.`)
  }

  // Selección aleatoria de Fisher-Yates (más robusta que sort random)
  const shuffled = [...allQuestions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  // Tomar exactamente 35 preguntas aleatorias
  const selected = shuffled.slice(0, 35);

  const attempt = await prisma.examAttempt.create({
    data: {
        examAnswers: {
            create: selected.map((q: { id: string }) => ({
                questionId: q.id
            }))
        }
    }
  })

  redirect(`/exam/${attempt.id}`)
}

export async function submitAnswer(examAnswerId: string, answerIds: string | string[]) {
    // Normalizar a array
    const selectedIds = Array.isArray(answerIds) ? answerIds : [answerIds]
    
    // Obtener la pregunta con todas sus respuestas
    const examAnswer = await prisma.examAnswer.findUnique({
        where: { id: examAnswerId },
        include: {
            question: {
                include: { answers: true }
            }
        }
    })
    
    if (!examAnswer) throw new Error("Exam answer not found")
    
    // Obtener las respuestas correctas de la pregunta
    const correctAnswerIds = examAnswer.question.answers
        .filter(a => a.isCorrect)
        .map(a => a.id)
        .sort()
    
    // Comparar las respuestas seleccionadas con las correctas
    const selectedSorted = [...selectedIds].sort()
    const isCorrect = JSON.stringify(correctAnswerIds) === JSON.stringify(selectedSorted)
    
    await prisma.examAnswer.update({
        where: { id: examAnswerId },
        data: {
            selectedAnswerId: selectedIds[0], // Mantener compatibilidad
            selectedAnswerIds: selectedIds,
            isCorrect
        }
    })
    
    return { success: true, isCorrect }
}

export async function finishExam(attemptId: string) {
    const answers = await prisma.examAnswer.findMany({
        where: { examAttemptId: attemptId }
    })
    
    // Chile Class B Exam Logic: 
    // Standard is 35 questions. Passing requires minimal errors.
    // User requested: "solo se pueda equivocar en 2-3".
    // We set passing score to 32 correct (allows 3 mistakes). 
    // This aligns with user request "equivocar en 2-3".
    
    const correctCount = answers.filter((a: { isCorrect: boolean | null }) => a.isCorrect).length
    const passed = correctCount >= 32 
    
    await prisma.examAttempt.update({
        where: { id: attemptId },
        data: {
            finishedAt: new Date(),
            score: correctCount,
            passed
        }
    })
    
    redirect(`/exam/result/${attemptId}`)
}
