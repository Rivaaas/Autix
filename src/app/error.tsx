'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { XCircle, Home, RotateCcw } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application Error:', error)
  }, [error])

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex items-center justify-center p-8">
      <div className="max-w-md w-full bg-white dark:bg-zinc-900 rounded-3xl shadow-xl p-10 text-center border border-zinc-200 dark:border-zinc-800">
        <div className="mb-6 inline-flex items-center justify-center p-4 bg-red-100 dark:bg-red-900/30 rounded-full">
          <XCircle className="w-12 h-12 text-red-500" />
        </div>

        <h1 className="text-3xl font-bold mb-3 text-zinc-900 dark:text-white">
          Algo salió mal
        </h1>

        <p className="text-zinc-600 dark:text-zinc-400 mb-8">
          {error.message || 'Ha ocurrido un error inesperado. Por favor, intenta nuevamente.'}
        </p>

        <div className="flex flex-col gap-3">
          <Button onClick={reset} size="lg" className="w-full">
            <RotateCcw className="w-4 h-4 mr-2" /> Intentar de nuevo
          </Button>

          <Link href="/" className="w-full">
            <Button variant="outline" size="lg" className="w-full">
              <Home className="w-4 h-4 mr-2" /> Volver al inicio
            </Button>
          </Link>
        </div>

        {error.digest && (
          <p className="mt-6 text-xs text-zinc-400">
            Error ID: {error.digest}
          </p>
        )}
      </div>
    </div>
  )
}
