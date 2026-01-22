import { Skeleton } from "@/components/ui/skeleton"
import { Card } from "@/components/ui/card"

export default function ExamSkeleton() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex flex-col font-sans">
      {/* Header Skeleton */}
      <header className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 p-4">
        <div className="container mx-auto max-w-4xl flex items-center justify-between">
          <Skeleton className="h-8 w-32" />
          <Skeleton className="h-8 w-24" />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto max-w-4xl p-4 md:p-8">
        {/* Progress Bar */}
        <div className="mb-4">
          <Skeleton className="h-2 w-full rounded-full" />
        </div>

        {/* Question Card */}
        <Card className="p-5 shadow-lg">
          <div className="mb-4">
            <Skeleton className="h-5 w-24 rounded-full" />
          </div>
          
          <Skeleton className="h-8 w-full mb-2" />
          <Skeleton className="h-8 w-3/4 mb-6" />

          {/* Image placeholder */}
          <Skeleton className="h-48 w-full rounded-lg mb-6" />

          {/* Answer options */}
          <div className="space-y-3">
            <Skeleton className="h-14 w-full rounded-lg" />
            <Skeleton className="h-14 w-full rounded-lg" />
            <Skeleton className="h-14 w-full rounded-lg" />
            <Skeleton className="h-14 w-full rounded-lg" />
          </div>
        </Card>

        {/* Navigation */}
        <div className="mt-6 flex justify-between">
          <Skeleton className="h-10 w-32" />
          <Skeleton className="h-10 w-32" />
        </div>
      </main>
    </div>
  )
}
