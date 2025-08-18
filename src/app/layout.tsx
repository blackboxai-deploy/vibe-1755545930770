import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hello World App',
  description: 'A modern Hello World application built with Next.js, TypeScript, and Tailwind CSS',
  keywords: ['hello world', 'nextjs', 'react', 'typescript', 'tailwind'],
  authors: [{ name: 'BLACKBOX.AI' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  )
}