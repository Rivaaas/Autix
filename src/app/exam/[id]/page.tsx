import { prisma } from "@/lib/prisma"
import { notFound } from "next/navigation"
import ExamRunner from "../../../components/exam/ExamRunner"

export default async function ExamPage({ params }: { params: Promise<{ id: string }> }) {
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
                }
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
            ea.question.answers[i] = ea.question.answers[j];
            ea.question.answers[j] = temp;
        }
    }
  })

  // Serialize dates/etc if needed but Prisma usually returns objects Next can handle roughly, 
  // though Date objects might warn in recent versions if passed to client directly.
  // Next.js (App Router) can pass Dates to client components.
  
  return <ExamRunner attempt={attempt} />
}
