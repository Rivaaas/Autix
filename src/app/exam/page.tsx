import { Button } from "@/components/ui/button"
import { startExam } from "@/app/actions"
import { Clock, ShieldCheck } from "lucide-react"

export default function StartExamPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white flex items-center justify-center p-4">
      <div className="max-w-xl w-full bg-white dark:bg-zinc-900 rounded-3xl p-8 md:p-12 shadow-xl border border-zinc-200 dark:border-zinc-800 text-center">
        <h1 className="text-3xl font-bold mb-6">Modo Examen</h1>
        
        <div className="grid grid-cols-2 gap-4 mb-8 text-left">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl">
                <Clock className="w-6 h-6 text-blue-600 mb-2" />
                <h3 className="font-semibold text-sm uppercase text-blue-800 dark:text-blue-300">Tiempo</h3>
                <p className="text-2xl font-bold">45 min</p>
            </div>
             <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl">
                <ShieldCheck className="w-6 h-6 text-green-600 mb-2" />
                <h3 className="font-semibold text-sm uppercase text-green-800 dark:text-green-300">Preguntas</h3>
                <p className="text-2xl font-bold">35</p>
            </div>
        </div>

        <p className="text-zinc-500 dark:text-zinc-400 mb-8 leading-relaxed">
            Estás a punto de iniciar una simulación oficial. 
            El tiempo correrá apenas presiones el botón. 
            No podrás pausar el examen. ¡Buena suerte!
        </p>

        <form action={startExam}>
            <Button size="lg" className="w-full text-lg h-14 bg-blue-600 hover:bg-blue-700 rounded-xl">
                Comenzar Ahora
            </Button>
        </form>
      </div>
    </div>
  )
}
