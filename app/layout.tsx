import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'EcoLink - Conectando Voluntários ao Impacto Sustentável',
  description: 'Plataforma de voluntariado sustentável que conecta pessoas a ONGs e projetos sociais. Ganhe pontos, conquiste badges e transforme o mundo.',
  keywords: ['voluntariado', 'sustentabilidade', 'ONG', 'impacto social', 'meio ambiente', 'ações sociais'],
  openGraph: {
    title: 'EcoLink - Voluntariado Sustentável',
    description: 'Conecte-se a causas sustentáveis e faça a diferença no mundo',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
