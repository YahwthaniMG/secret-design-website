import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Secret Design - Gerencia de Proyectos',
  description: 'Estudio de arquitectura y gestión de proyectos especializado en diseño de interiores y espacios únicos.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} ${playfair.className}`}>{children}</body>
    </html>
  )
}