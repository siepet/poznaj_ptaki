import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Poznaj Ptaki',
  description: 'Próbuj zgadnąć jaki to ptak na podstawie obrazka.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const classNames = inter.className + " " + "bg-slate-900 text-white min-h-screen flex flex-col"

  return (
    <html lang="en">
      <body className={classNames}>{children}</body>
    </html>
  )
}
