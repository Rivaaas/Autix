import { PrismaClient } from '@prisma/client'

// Asegurar que Prisma solo se use en el servidor
if (typeof window !== 'undefined') {
  throw new Error(
    'PrismaClient no debe importarse en el lado del cliente. ' +
    'Asegúrate de que este archivo solo se importe en Server Components o Server Actions.'
  )
}

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

export const prisma = globalForPrisma.prisma || new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
})

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

