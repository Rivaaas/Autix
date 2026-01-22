import { z } from 'zod'

// Schema para validar IDs
export const idSchema = z.string().min(1, 'ID requerido')

// Schema para respuestas de examen
export const submitAnswerSchema = z.object({
  examAnswerId: z.string().min(1, 'ID de respuesta de examen requerido'),
  answerIds: z.union([
    z.string().min(1, 'Al menos una respuesta debe ser seleccionada'),
    z.array(z.string().min(1)).min(1, 'Al menos una respuesta debe ser seleccionada')
  ])
})

// Schema para finalizar examen
export const finishExamSchema = z.object({
  attemptId: z.string().min(1, 'ID de intento requerido')
})

// Tipos inferidos
export type SubmitAnswerInput = z.infer<typeof submitAnswerSchema>
export type FinishExamInput = z.infer<typeof finishExamSchema>
