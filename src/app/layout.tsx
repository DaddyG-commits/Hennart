import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { CartProvider } from '@/lib/cart'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Henna Art Canada | Hennart',
  description: 'Quality organic henna, body art supplies, and natural hair dye. Est. 2007.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}
