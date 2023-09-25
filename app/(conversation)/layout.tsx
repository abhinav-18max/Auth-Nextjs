
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function AuthLayout({
  children,
}: {
  children: any
}) {
  return (
    <html lang="en">
      <body>
      <main className="h-screen flex flex-col">
      {children}
      </main>
      </body>
    </html>
  )
}
