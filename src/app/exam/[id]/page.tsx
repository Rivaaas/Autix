import { prisma } from "@/lib/prisma"
import { notFound } from "next/navigation"
import ExamRunner from "../../../components/exam/ExamRunner"
import { Suspense } from "react"
import ExamSkeleton from "@/components/exam/ExamSkeleton"
import type { Metadata } from "next"

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  return {
    title: `Examen en curso - Autix`,
    description: 'Simulación de examen de conducir clase B en progreso',
  }
}

async function ExamContent({ id }: { id: string }) {
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
                selectedAnswer: true // Incluir para compatibilidad
            }
        }
    }
  })

  if (!attempt) notFound()

  // Shuffle answers for each question so "A" isn't always the first option visually
  // This is important because our seed data currently defaults to the first option being correct.
  attempt.examAnswers.forEach(ea => {
    if (ea.question && ea.question.answers) {
        // Simple Fisher-Yates shuffle
        for (let i = ea.question.answers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = ea.question.answers[i];
            const item = ea.question.answers[j];
            if (temp && item) {
              ea.question.answers[i] = item;
              ea.question.answers[j] = temp;
            }
        }
    }
  })

  return <ExamRunner attempt={attempt} />
}

export default async function ExamPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  
  return (
    <Suspense fallback={<ExamSkeleton />}>
      <ExamContent id={id} />
    </Suspense>
  )
}
