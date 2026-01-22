'use server'

import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation"
import { submitAnswerSchema, finishExamSchema } from "@/lib/validations"
import { z } from "zod"

export async function startExam() {
  try {
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
      const temp = shuffled[i];
      const item = shuffled[j];
      if (temp && item) {
        shuffled[i] = item;
        shuffled[j] = temp;
      }
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
  } catch (error) {
    console.error('Error starting exam:', error)
    throw error
  }
}

export async function submitAnswer(examAnswerId: string, answerIds: string | string[]) {
    try {
      // Validar inputs
      const validated = submitAnswerSchema.parse({ examAnswerId, answerIds })
      
      // Normalizar a array
      const selectedIds = Array.isArray(validated.answerIds) 
        ? validated.answerIds 
        : [validated.answerIds]
      
      // Obtener la pregunta con todas sus respuestas
      const examAnswer = await prisma.examAnswer.findUnique({
          where: { id: validated.examAnswerId },
          include: {
              question: {
                  include: { answers: true }
              }
          }
      })
      
      if (!examAnswer) {
        throw new Error("Respuesta de examen no encontrada")
      }
      
      // Obtener las respuestas correctas de la pregunta
      const correctAnswerIds = examAnswer.question.answers
          .filter(a => a.isCorrect)
          .map(a => a.id)
          .sort()
      
      // Comparar las respuestas seleccionadas con las correctas
      const selectedSorted = [...selectedIds].sort()
      const isCorrect = JSON.stringify(correctAnswerIds) === JSON.stringify(selectedSorted)
      
      await prisma.examAnswer.update({
          where: { id: validated.examAnswerId },
          data: {
              selectedAnswerId: selectedIds[0], // Mantener compatibilidad
              selectedAnswerIds: selectedIds,
              isCorrect
          }
      })
      
      return { success: true, isCorrect }
    } catch (error) {
      if (error instanceof z.ZodError) {
        const messages = error.issues.map(e => e.message).join(', ')
        throw new Error(`Datos inválidos: ${messages}`)
      }
      console.error('Error submitting answer:', error)
      throw error
    }
}

export async function finishExam(attemptId: string) {
    try {
      // Validar input
      const validated = finishExamSchema.parse({ attemptId })
      
      const answers = await prisma.examAnswer.findMany({
          where: { examAttemptId: validated.attemptId }
      })
      
      // Chile Class B Exam Logic: 
      // Standard is 35 questions. Passing requires minimal errors.
      // User requested: "solo se pueda equivocar en 2-3".
      // We set passing score to 32 correct (allows 3 mistakes). 
      // This aligns with user request "equivocar en 2-3".
      
      const correctCount = answers.filter((a) => a.isCorrect).length
      const passed = correctCount >= 32 
      
      await prisma.examAttempt.update({
          where: { id: validated.attemptId },
          data: {
              finishedAt: new Date(),
              score: correctCount,
              passed
          }
      })
      
      redirect(`/exam/result/${validated.attemptId}`)
    } catch (error) {
      if (error instanceof z.ZodError) {
        const messages = error.issues.map(e => e.message).join(', ')
        throw new Error(`Datos inválidos: ${messages}`)
      }
      console.error('Error finishing exam:', error)
      throw error
    }
}
