'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { AlertTriangle, Home } from 'lucide-react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Global Error:', error)
  }, [error])

  return (
    <html>
      <body>
        <div className="min-h-screen bg-zinc-50 flex items-center justify-center p-8">
          <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-10 text-center border border-zinc-200">
            <div className="mb-6 inline-flex items-center justify-center p-4 bg-yellow-100 rounded-full">
              <AlertTriangle className="w-12 h-12 text-yellow-600" />
            </div>

            <h1 className="text-3xl font-bold mb-3 text-zinc-900">
              Error Crítico
            </h1>

            <p className="text-zinc-600 mb-8">
              La aplicación ha encontrado un error crítico. Por favor, recarga la página.
            </p>

            <div className="flex flex-col gap-3">
              <Button onClick={reset} size="lg" className="w-full">
                Recargar aplicación
              </Button>

              <Link href="/">
                <Button variant="outline" size="lg" className="w-full">
                  <Home className="w-4 h-4 mr-2" /> Ir al inicio
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
