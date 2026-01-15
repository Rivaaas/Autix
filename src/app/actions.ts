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

export async function submitAnswer(examAnswerId: string, answerId: string) {
    const answer = await prisma.answer.findUnique({
        where: { id: answerId }
    })
    
    if (!answer) throw new Error("Answer not found")
    
    await prisma.examAnswer.update({
        where: { id: examAnswerId },
        data: {
            selectedAnswerId: answerId,
            isCorrect: answer.isCorrect
        }
    })
    
    return { success: true, isCorrect: answer.isCorrect }
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
