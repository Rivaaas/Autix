'use server'

import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation"

export async function startExam() {
  const allQuestions = await prisma.question.findMany({ select: { id: true } })
  
  if (allQuestions.length === 0) {
    // Fallback logic if DB is empty for demo purposes? 
    // Usually we should throw or redirect to an error page.
    // For now, let's just create an empty attempt or error.
    throw new Error("No hay preguntas en la base de datos. Ejecuta el seed.")
  }

  const shuffled = allQuestions.sort(() => 0.5 - Math.random())
  const selected = shuffled.slice(0, 35)

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
