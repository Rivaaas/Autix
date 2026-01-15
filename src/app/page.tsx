import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, ShieldCheck } from "lucide-react";
import AnimatedCarLogo from "@/components/ui/AnimatedCarLogo";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-50 font-sans">
      <main className="container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen">
        <div className="max-w-3xl text-center space-y-8">
          <div className="flex justify-center mb-6">
            <AnimatedCarLogo />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent pb-2">
            Simulador Licencia Clase B
          </h1>
          
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Prepárate para tu examen teórico con nuestra plataforma premium. 
            Simulación real, feedback instantáneo y diseño enfocado en tu aprendizaje.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
            <FeatureCard 
              icon={<Clock className="w-6 h-6 text-blue-500" />}
              title="Tiempo Real"
              description="45 minutos por ensayo, igual que el examen municipal."
            />
             <FeatureCard 
              icon={<ShieldCheck className="w-6 h-6 text-green-500" />}
              title="35 Preguntas"
              description="Selección aleatoria y ponderada según normativa."
            />
             <FeatureCard 
              icon={<CheckCircle className="w-6 h-6 text-purple-500" />}
              title="Feedback Premium"
              description="Revisa tus errores detalladamente al finalizar."
            />
          </div>

          <div className="pt-4">
            <Link href="/exam">
              <Button size="lg" className="text-lg px-10 py-8 rounded-2xl shadow-xl shadow-blue-500/20 transition-all hover:scale-105 active:scale-95">
                Comenzar Simulacro
              </Button>
            </Link>
          </div>
          
          <p className="text-sm text-zinc-400 pt-8 flex flex-col gap-2 items-center">
            <span>Basado en el Nuevo Libro del Conductor (CONASET) - Chile 2026</span>
            <span className="text-zinc-500 text-xs">© 2026 Victor Rivas. Todos los derechos reservados.</span>
          </p>
        </div>
      </main>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col items-center text-center space-y-3">
      <div className="p-3 bg-zinc-50 dark:bg-zinc-800 rounded-xl">
        {icon}
      </div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">{description}</p>
    </div>
  )
}

