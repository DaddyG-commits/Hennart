'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Package, Truck, MapPin } from 'lucide-react'

export default function ShippingPage() {
  const [tracking, setTracking] = useState('')
  const [result, setResult] = useState<string | null>(null)

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault()
    const code = tracking.trim().toUpperCase()
    if (!code) {
      setResult('Enter a tracking number to continue.')
      return
    }
    setResult(
      `Tracking ${code}: demo status — Order received in Victoria, BC. Live Canada Post tracking will appear here once checkout is connected.`
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-3xl mx-auto w-full px-5 py-10 space-y-10">
        <div>
          <h1 className="text-3xl font-bold">Shipping & pickup</h1>
          <p className="text-stone-600 mt-2">
            Based in Victoria, BC. Order online or via email. Shipped with Canada Post, or pick up in the Victoria area.
          </p>
        </div>

        <section className="grid sm:grid-cols-3 gap-4">
          <div className="bg-white border border-stone-200 rounded-2xl p-5 space-y-2">
            <Package className="w-6 h-6 text-henna-800" />
            <h2 className="font-semibold">Order online or email</h2>
            <p className="text-sm text-stone-600">Shop the site, or email kareliasunflower@hotmail.com to place an order.</p>
          </div>
          <div className="bg-white border border-stone-200 rounded-2xl p-5 space-y-2">
            <Truck className="w-6 h-6 text-henna-800" />
            <h2 className="font-semibold">Canada Post</h2>
            <p className="text-sm text-stone-600">Orders ship with Canada Post from Victoria, BC.</p>
          </div>
          <div className="bg-white border border-stone-200 rounded-2xl p-5 space-y-2">
            <MapPin className="w-6 h-6 text-henna-800" />
            <h2 className="font-semibold">Local pickup</h2>
            <p className="text-sm text-stone-600">Pick up in the Victoria area — arrange by email.</p>
          </div>
        </section>

        <section className="bg-white border border-stone-200 rounded-2xl p-6 space-y-4">
          <h2 className="text-xl font-bold">Track your order</h2>
          <p className="text-sm text-stone-600">
            Enter the Canada Post tracking number from your confirmation email.
          </p>
          <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-3">
            <input
              value={tracking}
              onChange={(e) => setTracking(e.target.value)}
              placeholder="e.g. Canada Post tracking number"
              className="flex-1 border border-stone-300 rounded-xl px-4 py-2.5 text-sm"
            />
            <button type="submit" className="bg-henna-800 text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-henna-900">
              Track
            </button>
          </form>
          {result && (
            <div className="text-sm bg-henna-50 border border-henna-100 rounded-xl p-4 text-stone-800">
              {result}
            </div>
          )}
        </section>

        <section className="text-sm text-stone-600 space-y-2">
          <h2 className="font-semibold text-stone-900">Notes</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Tracking numbers are emailed when your order ships with Canada Post.</li>
            <li>Victoria-area pickup can be arranged by email.</li>
            <li>
              Private henna appointments: email{' '}
              <a href="mailto:kareliasunflower@hotmail.com" className="text-henna-800 font-semibold underline">
                kareliasunflower@hotmail.com
              </a>
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  )
}
