import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET() {
  const count = await prisma.question.count()
  if (count > 0) return NextResponse.json({ message: "Already seeded", count })

  const questions = [
    {
      text: "El conductor de un vehículo puede sobrepasar a otro por la derecha cuando:",
      category: "Normas de Circulación",
      answers: [
          { text: "El vehículo alcanzado esté realizando o a punto de efectuar un viraje a la izquierda.", isCorrect: true },
          { text: "El vehículo alcanzado esté realizando o a punto de efectuar un viraje a la derecha.", isCorrect: false },
          { text: "Nunca.", isCorrect: false },
      ],
    },
    {
       text: "¿Cuál es la velocidad máxima permitida en zonas urbanas para vehículos livianos?",
       category: "Velocidad",
       answers: [
           { text: "60 km/h", isCorrect: false },
           { text: "50 km/h", isCorrect: true },
           { text: "40 km/h", isCorrect: false },
       ] 
    },
    {
        text: "¿Qué significa una línea continua blanca en la calzada?",
        category: "Señalización",
        answers: [
            { text: "Que se puede adelantar.", isCorrect: false },
            { text: "Que no se puede traspasar.", isCorrect: true },
            { text: "Que es una zona de estacionamiento.", isCorrect: false }
        ]
    },
     {
        text: "En un cruce no regulado, ¿quién tiene preferencia?",
        category: "Preferencias",
        answers: [
            { text: "El vehículo que llega primero.", isCorrect: false },
            { text: "El vehículo que se acerca por la derecha.", isCorrect: true },
            { text: "El vehículo más grande.", isCorrect: false }
        ]
    },
    {
        text: "La distancia de detención total es igual a:",
        category: "Seguridad Vial",
        answers: [
            { text: "Distancia de reacción + Distancia de frenado.", isCorrect: true },
            { text: "Solo distancia de frenado.", isCorrect: false },
            { text: "Distancia de reacción x 2.", isCorrect: false }
        ]
    }
  ]

  for (const q of questions) {
    await prisma.question.create({
        data: {
            text: q.text,
            category: q.category,
            answers: {
                create: q.answers
            }
        }
    })
  }
  
  return NextResponse.json({ message: "Seeding complete", count: questions.length })
}
