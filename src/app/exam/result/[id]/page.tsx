import { prisma } from "@/lib/prisma"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle, Home, RotateCcw } from "lucide-react"

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
                
                return (
                    <div key={ea.id} className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 shadow-sm overflow-hidden">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 mt-1">
                                {isCorrect ? <CheckCircle className="w-6 h-6 text-green-500" /> : <XCircle className="w-6 h-6 text-red-500" />}
                            </div>
                            <div className="flex-1 space-y-3">
                                <h3 className="font-semibold text-lg text-zinc-800 dark:text-zinc-200">{index + 1}. {ea.question.text}</h3>
                                
                                <div className="space-y-2 text-sm">
                                    <div className={`p-3 rounded-lg border flex justify-between items-center ${isCorrect ? 'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800' : 'bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800'}`}>
                                        <span className="font-medium">Tu respuesta: {ea.selectedAnswer?.text || "Sin responder"}</span>
                                    </div>
                                    
                                    {!isCorrect && (
                                         <div className="p-3 rounded-lg border bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800 flex justify-between items-center">
                                            <span className="font-medium">Correcta: {ea.question.answers.find((a: any) => a.isCorrect)?.text}</span>
                                            <CheckCircle className="w-4 h-4 text-green-600" />
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
