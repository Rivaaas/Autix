"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { jsPDF } from "jspdf"

interface ExamAnswer {
  id: string
  isCorrect: boolean | null
  selectedAnswer: { text: string } | null
  selectedAnswerId: string | null
  selectedAnswerIds: string[]
  question: {
    text: string
    answers: Array<{
      id: string
      text: string
      isCorrect: boolean
    }>
  }
}

interface DownloadPDFProps {
  attempt: {
    id: string
    score: number
    passed: boolean
    finishedAt: Date | null
    examAnswers: ExamAnswer[]
  }
}

export default function DownloadPDF({ attempt }: DownloadPDFProps) {
  const handleDownload = () => {
    const doc = new jsPDF()
    const pageWidth = doc.internal.pageSize.getWidth()
    const margin = 15
    const contentWidth = pageWidth - margin * 2
    let yPosition = 20

    // Helper function to add text with wrapping
    const addWrappedText = (text: string, x: number, y: number, maxWidth: number, fontSize: number = 10) => {
      doc.setFontSize(fontSize)
      const lines = doc.splitTextToSize(text, maxWidth)
      doc.text(lines, x, y)
      return lines.length * (fontSize * 0.4) // Return height used
    }

    // Helper to check if we need a new page
    const checkPageBreak = (requiredSpace: number) => {
      if (yPosition + requiredSpace > doc.internal.pageSize.getHeight() - 20) {
        doc.addPage()
        yPosition = 20
      }
    }

    // Title
    doc.setFontSize(20)
    doc.setFont("helvetica", "bold")
    doc.text("Resultado Examen Clase B", pageWidth / 2, yPosition, { align: "center" })
    yPosition += 10

    // Subtitle
    doc.setFontSize(12)
    doc.setFont("helvetica", "normal")
    doc.text("Autix - Sistema de Examenes", pageWidth / 2, yPosition, { align: "center" })
    yPosition += 15

    // Date
    const examDate = attempt.finishedAt 
      ? new Date(attempt.finishedAt).toLocaleDateString("es-CL", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit"
        })
      : "No disponible"
    doc.setFontSize(10)
    doc.text(`Fecha: ${examDate}`, margin, yPosition)
    yPosition += 10

    // Results summary
    const total = attempt.examAnswers.length
    const correct = attempt.score
    const incorrect = total - correct
    const percentage = Math.round((correct / total) * 100)

    doc.setFontSize(14)
    doc.setFont("helvetica", "bold")
    const statusText = attempt.passed ? "APROBADO" : "REPROBADO"
    const statusColor = attempt.passed ? [0, 128, 0] : [255, 0, 0]
    doc.setTextColor(statusColor[0], statusColor[1], statusColor[2])
    doc.text(statusText, margin, yPosition)
    yPosition += 8

    doc.setTextColor(0, 0, 0)
    doc.setFontSize(12)
    doc.setFont("helvetica", "normal")
    doc.text(`Puntaje: ${percentage}% (${correct}/${total})`, margin, yPosition)
    yPosition += 6
    doc.text(`Correctas: ${correct} | Incorrectas: ${incorrect}`, margin, yPosition)
    yPosition += 15

    // Divider line
    doc.setDrawColor(200, 200, 200)
    doc.line(margin, yPosition, pageWidth - margin, yPosition)
    yPosition += 10

    // Questions review
    doc.setFontSize(14)
    doc.setFont("helvetica", "bold")
    doc.text("Revision de Preguntas", margin, yPosition)
    yPosition += 10

    attempt.examAnswers.forEach((ea, index) => {
      const isCorrect = ea.isCorrect
      const correctAnswers = ea.question.answers.filter(a => a.isCorrect)
      const isMultipleChoice = correctAnswers.length > 1
      
      // Get selected answer IDs
      const selectedIds = isMultipleChoice 
        ? ea.selectedAnswerIds 
        : (ea.selectedAnswerId ? [ea.selectedAnswerId] : [])

      // Calculate space needed for question + all answers
      const questionHeight = addWrappedText(`${index + 1}. ${ea.question.text}`, 0, 0, contentWidth, 11)
      const estimatedSpace = questionHeight + (ea.question.answers.length * 12) + 20
      
      checkPageBreak(estimatedSpace)

      // Question number and icon
      doc.setFontSize(11)
      doc.setFont("helvetica", "bold")
      const icon = isCorrect ? "✓" : "✗"
      const iconColor = isCorrect ? [0, 128, 0] : [255, 0, 0]
      doc.setTextColor(iconColor[0], iconColor[1], iconColor[2])
      doc.text(icon, margin, yPosition)
      
      doc.setTextColor(0, 0, 0)
      yPosition += addWrappedText(`${index + 1}. ${ea.question.text}`, margin + 8, yPosition, contentWidth - 8, 11)
      yPosition += 6

      // Show all answers
      doc.setFontSize(9)
      ea.question.answers.forEach((answer) => {
        const isAnswerCorrect = answer.isCorrect
        const isSelected = selectedIds.includes(answer.id)
        
        // Check if we need a new page for this answer
        checkPageBreak(15)
        
        // Answer icon and text
        let answerIcon = ""
        let answerColor: [number, number, number] = [0, 0, 0]
        
        if (isAnswerCorrect && isSelected) {
          answerIcon = "✓ "
          answerColor = [0, 128, 0]
        } else if (isAnswerCorrect) {
          answerIcon = "✓ "
          answerColor = [0, 128, 0]
        } else if (isSelected) {
          answerIcon = "✗ "
          answerColor = [255, 0, 0]
        } else {
          answerIcon = "○ "
          answerColor = [150, 150, 150]
        }
        
        doc.setTextColor(answerColor[0], answerColor[1], answerColor[2])
        doc.text(answerIcon, margin + 10, yPosition)
        
        // Answer text
        doc.setFont("helvetica", isAnswerCorrect || isSelected ? "bold" : "normal")
        yPosition += addWrappedText(answer.text, margin + 16, yPosition, contentWidth - 16, 9)
        
        // Label
        if (isAnswerCorrect && isSelected) {
          doc.setFontSize(8)
          doc.text("(Tu respuesta - Correcta)", margin + 16, yPosition)
          yPosition += 4
        } else if (isAnswerCorrect) {
          doc.setFontSize(8)
          doc.text("(Correcta)", margin + 16, yPosition)
          yPosition += 4
        } else if (isSelected) {
          doc.setFontSize(8)
          doc.text("(Tu respuesta)", margin + 16, yPosition)
          yPosition += 4
        }
        
        doc.setFontSize(9)
        yPosition += 3
      })

      // No answer message
      if (selectedIds.length === 0) {
        doc.setTextColor(200, 150, 0)
        doc.setFont("helvetica", "italic")
        doc.text("Sin responder", margin + 10, yPosition)
        yPosition += 5
      }

      doc.setTextColor(0, 0, 0)
      yPosition += 5

      // Light divider between questions
      doc.setDrawColor(230, 230, 230)
      doc.line(margin, yPosition, pageWidth - margin, yPosition)
      yPosition += 8
    })

    // Footer on last page
    const totalPages = doc.getNumberOfPages()
    for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i)
      doc.setFontSize(8)
      doc.setTextColor(150, 150, 150)
      doc.text(
        `Pagina ${i} de ${totalPages}`,
        pageWidth / 2,
        doc.internal.pageSize.getHeight() - 10,
        { align: "center" }
      )
      doc.text(
        "© 2026 Victor Rivas - Autix",
        pageWidth / 2,
        doc.internal.pageSize.getHeight() - 6,
        { align: "center" }
      )
    }

    // Save the PDF
    const fileName = `Examen_Clase_B_${attempt.id.substring(0, 8)}_${Date.now()}.pdf`
    doc.save(fileName)
  }

  return (
    <Button onClick={handleDownload} size="lg" variant="outline">
      <Download className="w-4 h-4 mr-2" /> Descargar Resultados PDF
    </Button>
  )
}
