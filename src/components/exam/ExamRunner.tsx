'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { submitAnswer, finishExam } from '@/app/actions'
import { useRouter } from 'next/navigation'
import { CheckCircle, XCircle, Clock, AlertTriangle, ArrowRight, ArrowLeft } from 'lucide-react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

// Types (should be in types/index.ts usually)
type Answer = { id: string; text: string; isCorrect: boolean }
type Question = { id: string; text: string; imageUrl?: string | null; category: string; answers: Answer[] }
type ExamAnswer = { id: string; question: Question; selectedAnswerId: string | null; selectedAnswerIds: string[]; isCorrect: boolean | null }
type ExamAttempt = { id: string; startedAt: Date; examAnswers: ExamAnswer[] }

export default function ExamRunner({ attempt }: { attempt: ExamAttempt }) {
  const router = useRouter()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [timeLeft, setTimeLeft] = useState(35 * 60) // 35 mins based on exam data
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [localAnswers, setLocalAnswers] = useState<Record<string, string[]>>({}) // examAnswerId -> answerId[]
  const [answerFeedback, setAnswerFeedback] = useState<Record<string, boolean | null>>({}) // examAnswerId -> isCorrect

  const currentExamAnswer = attempt.examAnswers[currentIndex]
  const question = currentExamAnswer?.question
  
  // Detectar si la pregunta tiene múltiples respuestas correctas
  const isMultipleChoice = (question?.answers.filter(a => a.isCorrect).length ?? 0) > 1

  // Timer Logic
  useEffect(() => {
    const startTime = new Date(attempt.startedAt).getTime()
    const endTime = startTime + 35 * 60 * 1000
    
    const interval = setInterval(() => {
      const now = Date.now()
      const diff = Math.ceil((endTime - now) / 1000)
      
      if (diff <= 0) {
        clearInterval(interval)
        handleFinish()
      } else {
        setTimeLeft(diff)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [attempt.startedAt])

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60)
    const s = seconds % 60
    return `${m}:${s.toString().padStart(2, '0')}`
  }

  const handleSelectAnswer = async (answerId: string) => {
    const currentAnswers = localAnswers[currentExamAnswer.id] || []
    
    if (isMultipleChoice) {
      // Para preguntas de opción múltiple, permitir toggle
      let newAnswers: string[]
      if (currentAnswers.includes(answerId)) {
        // Deseleccionar
        newAnswers = currentAnswers.filter(id => id !== answerId)
      } else {
        // Seleccionar
        newAnswers = [...currentAnswers, answerId]
      }
      
      setLocalAnswers(prev => ({ ...prev, [currentExamAnswer.id]: newAnswers }))
    } else {
      // Para preguntas de una sola opción, bloquear después de responder
      if (currentAnswers.length > 0) return // Already answered
      
      const newAnswers = [answerId]
      setLocalAnswers(prev => ({ ...prev, [currentExamAnswer.id]: newAnswers }))
      
      // Enviar inmediatamente para preguntas simples
      try {
        const result = await submitAnswer(currentExamAnswer.id, answerId)
        setAnswerFeedback(prev => ({ ...prev, [currentExamAnswer.id]: result.isCorrect }))
      } catch (error) {
        console.error("Error submitting answer", error)
      }
    }
  }
  
  const handleConfirmMultiple = async () => {
    const selectedAnswers = localAnswers[currentExamAnswer.id] || []
    if (selectedAnswers.length === 0) return
    
    try {
      const result = await submitAnswer(currentExamAnswer.id, selectedAnswers)
      setAnswerFeedback(prev => ({ ...prev, [currentExamAnswer.id]: result.isCorrect }))
    } catch (error) {
      console.error("Error submitting answer", error)
    }
  }

  const handleNext = () => {
    if (currentIndex < attempt.examAnswers.length - 1) {
        setCurrentIndex(prev => prev + 1)
    }
  }

    const handlePrev = () => {
    if (currentIndex > 0) {
        setCurrentIndex(prev => prev - 1)
    }
  }

  const handleFinish = useCallback(async () => {
    setIsSubmitting(true)
    await finishExam(attempt.id)
  }, [attempt.id])
  
  // Hydrate local state from server state (if resuming)
  useEffect(() => {
    const initialAnswers: Record<string, string[]> = {}
    const initialFeedback: Record<string, boolean | null> = {}
    attempt.examAnswers.forEach(ea => {
        if (ea.selectedAnswerIds && ea.selectedAnswerIds.length > 0) {
            initialAnswers[ea.id] = ea.selectedAnswerIds
            initialFeedback[ea.id] = ea.isCorrect
        } else if (ea.selectedAnswerId) {
            // Compatibilidad con datos antiguos
            initialAnswers[ea.id] = [ea.selectedAnswerId]
            initialFeedback[ea.id] = ea.isCorrect
        }
    })
    setLocalAnswers(initialAnswers)
    setAnswerFeedback(initialFeedback)
  }, [attempt.examAnswers])

  if (!question) return <div>Cargando pregunta...</div>

  const isAnswered = answerFeedback[currentExamAnswer.id] !== undefined
  const currentSelections = localAnswers[currentExamAnswer.id] || []
  const isLastQuestion = currentIndex === attempt.examAnswers.length - 1
  const progress = ((currentIndex + 1) / attempt.examAnswers.length) * 100
  const isTimeCritical = timeLeft < 300 // 5 mins
  const canConfirmMultiple = isMultipleChoice && currentSelections.length > 0 && !isAnswered

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex flex-col font-sans">
      {/* Header / Top Bar */}
      <header className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 p-4 sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto max-w-4xl flex items-center justify-between">
            <div className="flex items-center gap-4">
                <span className="font-bold text-lg text-blue-600">Autix</span>
                <div className="h-6 w-px bg-zinc-300 dark:bg-zinc-700 mx-2 hidden sm:block"></div>
                <div className="text-sm font-medium text-zinc-500">
                    Pregunta {currentIndex + 1} de {attempt.examAnswers.length}
                </div>
            </div>

            <div className={cn("flex items-center gap-2 font-mono text-lg font-medium px-3 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800", isTimeCritical && "text-red-500 bg-red-50 dark:bg-red-900/20")}>
                <Clock className="w-4 h-4" />
                {formatTime(timeLeft)}
            </div>
        </div>
        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-zinc-200 dark:bg-zinc-800">
            <motion.div 
                className="h-full bg-blue-600"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
            />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto max-w-3xl p-3 md:p-4 flex flex-col justify-center">
        <AnimatePresence mode="wait">
            <motion.div
                key={question.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full"
            >
                <Card className="p-3 md:p-5 shadow-lg border-none bg-white/50 backdrop-blur-sm dark:bg-zinc-900/50">
                    <div className="mb-2 flex justify-between items-start">
                         <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                            {question.category}
                        </span>
                    </div>

                    <h2 className="text-lg md:text-xl font-bold mb-3 leading-tight text-zinc-800 dark:text-zinc-100">
                        {question.text}
                    </h2>

                    {question.imageUrl && !question.imageUrl.includes('placehold.co') && (
                        <div className="mb-3 relative rounded-lg overflow-hidden shadow-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-800">
                             <Image 
                                src={question.imageUrl.startsWith('/') ? question.imageUrl : `/images/questions/${question.imageUrl}`}
                                alt="Imagen de la pregunta" 
                                width={800}
                                height={400}
                                className="w-full h-auto object-contain max-h-40 md:max-h-52"
                                priority={currentIndex === 0}
                                onError={(e) => {
                                    // Ocultar imagen si falla al cargar
                                    (e.target as HTMLImageElement).style.display = 'none';
                                }}
                             />
                        </div>
                    )}

                    {isMultipleChoice && !isAnswered && (
                        <div className="mb-3 p-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                            <p className="text-xs text-blue-700 dark:text-blue-300 font-medium">
                                ✓ Esta pregunta tiene múltiples respuestas correctas. Selecciona todas las que apliquen.
                            </p>
                        </div>
                    )}

                    <div className="space-y-2">
                        {question.answers.map((answer) => {
                            const isSelected = currentSelections.includes(answer.id)
                            const showCorrect = isAnswered && answer.isCorrect
                            const showIncorrect = isAnswered && isSelected && !answer.isCorrect
                            
                            return (
                                <button
                                    key={answer.id}
                                    onClick={() => handleSelectAnswer(answer.id)}
                                    disabled={isAnswered || (!isMultipleChoice && currentSelections.length > 0)}
                                    className={cn(
                                        "w-full text-left p-2.5 md:p-3 rounded-lg border-2 transition-all duration-200 flex items-center justify-between group relative overflow-hidden",
                                        !isAnswered && !isSelected && "hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/10 border-zinc-200 dark:border-zinc-800",
                                        isSelected && !isAnswered && "border-blue-600 bg-blue-50 dark:bg-blue-900/10",
                                        showCorrect && "border-green-500 bg-green-50 dark:bg-green-900/20 dark:border-green-500",
                                        showIncorrect && "border-red-500 bg-red-50 dark:bg-red-900/20 dark:border-red-500",
                                        isAnswered && !isSelected && !showCorrect && "opacity-50 grayscale"
                                    )}
                                >
                                    <span className={cn("text-sm md:text-base font-medium", showCorrect ? "text-green-700 dark:text-green-400" : showIncorrect ? "text-red-700 dark:text-red-400" : "text-zinc-700 dark:text-zinc-300")}>
                                        {answer.text}
                                    </span>
                                    
                                    {showCorrect && <CheckCircle className="w-5 h-5 text-green-600" />}
                                    {showIncorrect && <XCircle className="w-5 h-5 text-red-600" />}
                                    {!isAnswered && isSelected && isMultipleChoice && (
                                        <CheckCircle className="w-5 h-5 text-blue-600 fill-blue-600" />
                                    )}
                                </button>
                            )
                        })}
                    </div>
                    
                    {/* Botón de confirmar para preguntas múltiples */}
                    {canConfirmMultiple && (
                        <Button 
                            onClick={handleConfirmMultiple}
                            className="w-full mt-3 bg-blue-600 hover:bg-blue-700"
                        >
                            Confirmar {currentSelections.length} {currentSelections.length === 1 ? 'respuesta' : 'respuestas'}
                        </Button>
                    )}
                </Card>
            </motion.div>
        </AnimatePresence>

        {/* Footer Actions */}
        <div className="mt-3 flex justify-between items-center">
            <Button variant="ghost" onClick={handlePrev} disabled={currentIndex === 0 || isSubmitting} className="text-zinc-500">
                <ArrowLeft className="w-4 h-4 mr-2" /> Anterior
            </Button>

            {isLastQuestion ? (
                 <Button onClick={handleFinish} disabled={isSubmitting} size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8">
                    {isSubmitting ? 'Finalizando...' : 'Finalizar Examen'}
                 </Button>
            ) : (
                <Button onClick={handleNext} disabled={isSubmitting} size="lg" className="px-8">
                    Siguiente <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
            )}
        </div>        
        <div className="mt-6 text-center text-xs text-zinc-400">
            © 2026 Victor Rivas. Todos los derechos reservados.
        </div>      </main>
    </div>
  )
}
