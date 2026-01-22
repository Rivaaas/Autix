import { prisma } from "@/lib/prisma"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle, Home, RotateCcw } from "lucide-react"
import DownloadPDF from "@/components/exam/DownloadPDF"
import type { Metadata } from "next"

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  
  const attempt = await prisma.examAttempt.findUnique({
    where: { id },
    select: { passed: true, score: true }
  })

  if (!attempt) {
    return {
      title: 'Resultado no encontrado - Autix'
    }
  }

  return {
    title: `${attempt.passed ? 'Aprobado' : 'Reprobado'} - ${attempt.score}/35 - Autix`,
    description: `Resultado del examen de conducir clase B: ${attempt.passed ? 'Aprobado' : 'Reprobado'} con ${attempt.score} respuestas correctas`,
  }
}

export default async function ResultPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  
  const attempt = await prisma.examAttempt.findUnique({
    where: { id },
    include: {
        examAnswers: {
            include: {
                question: {
                    include: {
                        answers: true
                    }
                },
                selectedAnswer: true
            }
        }
    }
  })

  if (!attempt) notFound()

  // Calculate stats
  const total = attempt.examAnswers.length
  const correct = attempt.score
  const incorrect = total - correct
  const percentage = Math.round((correct / total) * 100)
  const isPassed = attempt.passed

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 font-sans p-8">
      <div className="max-w-3xl mx-auto space-y-8">
        
        {/* Header Summary */}
        <div className={`text-center p-10 rounded-3xl ${isPassed ? 'bg-green-100 dark:bg-green-900/30' : 'bg-red-100 dark:bg-red-900/30'}`}>
            <div className="mb-4 inline-flex items-center justify-center p-4 bg-white dark:bg-zinc-900 rounded-full shadow-sm">
                {isPassed ? <CheckCircle className="w-12 h-12 text-green-500" /> : <XCircle className="w-12 h-12 text-red-500" />}
            </div>
            
            <h1 className="text-4xl font-bold mb-2 text-zinc-900 dark:text-white">
                {isPassed ? "¡Aprobado!" : "Reprobado"}
            </h1>
            
            <p className="text-zinc-600 dark:text-zinc-300 text-lg mb-6">
                {isPassed ? "Has demostrado los conocimientos necesarios." : "Necesitas seguir practicando. ¡No te rindas!"}
            </p>

            <div className="text-6xl font-black mb-2 tracking-tighter">
                {percentage}%
            </div>
            <div className="text-sm font-medium uppercase tracking-widest text-zinc-500">Puntaje Final</div>
            
            <div className="grid grid-cols-2 gap-4 mt-8 max-w-xs mx-auto">
                <div className="bg-white/50 dark:bg-zinc-900/50 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800">
                    <div className="text-2xl font-bold text-green-600">{correct}</div>
                    <div className="text-xs text-zinc-500">Correctas</div>
                </div>
                <div className="bg-white/50 dark:bg-zinc-900/50 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800">
                    <div className="text-2xl font-bold text-red-600">{incorrect}</div>
                    <div className="text-xs text-zinc-500">Incorrectas</div>
                </div>
            </div>
        </div>

        {/* Detailed Review */}
        <div className="space-y-4">
            <h2 className="text-xl font-bold px-2">Revisión de Preguntas</h2>
            
            {attempt.examAnswers.map((ea: any, index: number) => {
                const isCorrect = ea.isCorrect
                const isMultipleChoice = ea.question.answers.filter((a: any) => a.isCorrect).length > 1
                
                // Get selected answer IDs
                const selectedIds = isMultipleChoice 
                    ? ea.selectedAnswerIds 
                    : (ea.selectedAnswerId ? [ea.selectedAnswerId] : [])
                
                return (
                    <div key={ea.id} className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 shadow-sm overflow-hidden">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 mt-1">
                                {isCorrect ? <CheckCircle className="w-6 h-6 text-green-500" /> : <XCircle className="w-6 h-6 text-red-500" />}
                            </div>
                            <div className="flex-1 space-y-3">
                                <h3 className="font-semibold text-lg text-zinc-800 dark:text-zinc-200">{index + 1}. {ea.question.text}</h3>
                                
                                {/* Mostrar todas las alternativas */}
                                <div className="space-y-2 text-sm">
                                    {ea.question.answers.map((answer: any) => {
                                        const isAnswerCorrect = answer.isCorrect
                                        const isSelected = selectedIds.includes(answer.id)
                                        
                                        return (
                                            <div 
                                                key={answer.id} 
                                                className={`p-3 rounded-lg border flex items-start gap-3 ${
                                                    isAnswerCorrect 
                                                        ? 'bg-green-50 border-green-300 dark:bg-green-900/20 dark:border-green-700' 
                                                        : isSelected 
                                                        ? 'bg-red-50 border-red-300 dark:bg-red-900/20 dark:border-red-700'
                                                        : 'bg-zinc-50 border-zinc-200 dark:bg-zinc-800/50 dark:border-zinc-700'
                                                }`}
                                            >
                                                <div className="flex items-center gap-2 min-w-fit">
                                                    {isAnswerCorrect && (
                                                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                                                    )}
                                                    {isSelected && !isAnswerCorrect && (
                                                        <XCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                                                    )}
                                                </div>
                                                <div className="flex-1">
                                                    <span className={`${
                                                        isAnswerCorrect ? 'font-semibold text-green-800 dark:text-green-300' : 
                                                        isSelected ? 'font-semibold text-red-800 dark:text-red-300' : 
                                                        'text-zinc-600 dark:text-zinc-400'
                                                    }`}>
                                                        {answer.text}
                                                    </span>
                                                    {isAnswerCorrect && (
                                                        <span className="ml-2 text-xs text-green-600 dark:text-green-400 font-medium">
                                                            (Correcta)
                                                        </span>
                                                    )}
                                                    {isSelected && !isAnswerCorrect && (
                                                        <span className="ml-2 text-xs text-red-600 dark:text-red-400 font-medium">
                                                            (Tu respuesta)
                                                        </span>
                                                    )}
                                                    {isSelected && isAnswerCorrect && (
                                                        <span className="ml-2 text-xs text-green-600 dark:text-green-400 font-medium">
                                                            (Tu respuesta - Correcta)
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        )
                                    })}
                                    
                                    {selectedIds.length === 0 && (
                                        <div className="p-3 rounded-lg border bg-yellow-50 border-yellow-300 dark:bg-yellow-900/20 dark:border-yellow-700 text-yellow-800 dark:text-yellow-300 text-center">
                                            Sin responder
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
        
        <div className="flex justify-center gap-4 py-8">
            <DownloadPDF attempt={{
                id: attempt.id,
                score: attempt.score,
                passed: attempt.passed,
                finishedAt: attempt.finishedAt,
                examAnswers: attempt.examAnswers.map(ea => ({
                    id: ea.id,
                    isCorrect: ea.isCorrect,
                    selectedAnswer: ea.selectedAnswer,
                    selectedAnswerId: ea.selectedAnswerId,
                    selectedAnswerIds: ea.selectedAnswerIds,
                    question: {
                        text: ea.question.text,
                        answers: ea.question.answers
                    }
                }))
            }} />
            <Link href="/">
                <Button variant="outline" size="lg">
                    <Home className="w-4 h-4 mr-2" /> Ir al Inicio
                </Button>
            </Link>
             <Link href="/exam">
                <Button size="lg">
                    <RotateCcw className="w-4 h-4 mr-2" /> Intentar de nuevo
                </Button>
            </Link>
        </div>

        <div className="mt-8 text-center text-xs text-zinc-400">
            © 2026 Victor Rivas. Todos los derechos reservados.
        </div>
      </div>
    </div>
  )
}
