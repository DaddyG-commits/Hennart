'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const SQUARE_GIFT_URL = 'https://squareup.com/gift/7ZMJJF53BJJ6M/order'

export default function GiftCardPage() {
  const [seconds, setSeconds] = useState(2)

  useEffect(() => {
    const tick = setInterval(() => {
      setSeconds((s) => Math.max(0, s - 1))
    }, 1000)
    const go = setTimeout(() => {
      window.location.href = SQUARE_GIFT_URL
    }, 2000)
    return () => {
      clearInterval(tick)
      clearTimeout(go)
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-lg mx-auto w-full px-5 py-16 text-center space-y-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-henna-700">Gift Card</p>
        <h1 className="text-3xl font-bold text-stone-900">Taking you to Square</h1>
        <p className="text-stone-600">
          Henna Art Canada gift cards are purchased securely on our Square storefront.
          Redirecting in {seconds}s…
        </p>
        <a
          href={SQUARE_GIFT_URL}
          className="inline-block bg-henna-800 text-white px-6 py-3 rounded-xl font-semibold hover:bg-henna-900"
        >
          Open gift cards now
        </a>
        <p className="text-xs text-stone-500">
          If nothing happens, tap the button above.
        </p>
      </main>
      <Footer />
    </div>
  )
}
