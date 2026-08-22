'use client'

import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useCart } from '@/lib/cart'
import { formatCAD } from '@/lib/products'
import { Minus, Plus, Trash2 } from 'lucide-react'

export default function CartPage() {
  const { items, updateQty, removeItem, subtotal, clear } = useCart()

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-3xl mx-auto w-full px-5 py-10">
        <h1 className="text-3xl font-bold mb-6">Your cart</h1>

        {items.length === 0 ? (
          <div className="bg-white border border-stone-200 rounded-2xl p-8 text-center space-y-4">
            <p className="text-stone-600">Your cart is empty.</p>
            <Link href="/#shop" className="inline-block bg-henna-800 text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-henna-900">
              Browse products
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="bg-white border border-stone-200 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-1 min-w-0">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-stone-600">{formatCAD(item.price)} each</p>
                </div>
                <div className="flex items-center gap-3">
                  <button type="button" onClick={() => updateQty(item.id, item.quantity - 1)} className="p-1.5 border rounded-lg" aria-label="Decrease">
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center font-medium">{item.quantity}</span>
                  <button type="button" onClick={() => updateQty(item.id, item.quantity + 1)} className="p-1.5 border rounded-lg" aria-label="Increase">
                    <Plus className="w-4 h-4" />
                  </button>
                  <button type="button" onClick={() => removeItem(item.id)} className="p-1.5 text-red-700" aria-label="Remove">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <p className="font-bold text-henna-800 sm:w-24 sm:text-right">{formatCAD(item.price * item.quantity)}</p>
              </div>
            ))}

            <div className="bg-white border border-stone-200 rounded-2xl p-5 space-y-4">
              <div className="flex justify-between text-lg font-bold">
                <span>Subtotal</span>
                <span>{formatCAD(subtotal)}</span>
              </div>
              <p className="text-xs text-stone-500">Shipping calculated at checkout. Canada-wide delivery available.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button type="button" className="flex-1 bg-henna-800 text-white py-3 rounded-xl font-semibold hover:bg-henna-900">
                  Checkout (coming soon)
                </button>
                <button type="button" onClick={clear} className="px-4 py-3 border border-stone-300 rounded-xl font-medium hover:bg-stone-50">
                  Clear cart
                </button>
              </div>
              <Link href="/shipping" className="block text-center text-sm text-henna-800 font-semibold hover:underline">
                Shipping & tracking info →
              </Link>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
