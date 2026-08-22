'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ShoppingCart, User, ChevronDown } from 'lucide-react'
import { useCart } from '@/lib/cart'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [shopOpen, setShopOpen] = useState(false)
  const { count } = useCart()

  return (
    <nav className="sticky top-0 z-50 bg-[#faf6f1]/95 backdrop-blur border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
        <Link href="/" className="font-bold text-xl tracking-tight text-henna-800 shrink-0">
          Hennart
          <span className="block text-[10px] font-medium tracking-[0.2em] uppercase text-henna-700">Henna Art Canada</span>
        </Link>

        <div className="hidden md:flex items-center gap-5 lg:gap-6 text-sm font-medium text-stone-800">
          <div
            className="relative"
            onMouseEnter={() => setShopOpen(true)}
            onMouseLeave={() => setShopOpen(false)}
          >
            <button
              type="button"
              className="inline-flex items-center gap-1 hover:text-henna-800"
              onClick={() => setShopOpen((v) => !v)}
              aria-expanded={shopOpen}
            >
              Shop <ChevronDown className="w-4 h-4" />
            </button>
            {shopOpen && (
              <div className="absolute left-0 top-full pt-2">
                <div className="bg-white border border-stone-200 rounded-xl shadow-lg min-w-[11rem] py-2">
                  <Link href="/#shop" className="block px-4 py-2 hover:bg-henna-50" onClick={() => setShopOpen(false)}>
                    Products
                  </Link>
                  <Link href="/gift-card" className="block px-4 py-2 hover:bg-henna-50" onClick={() => setShopOpen(false)}>
                    Gift Card
                  </Link>
                </div>
              </div>
            )}
          </div>
          <Link href="/about" className="hover:text-henna-800">About</Link>
          <Link href="/blog" className="hover:text-henna-800">Blog</Link>
          <Link href="/shipping" className="hover:text-henna-800">Shipping</Link>
          <Link href="/contact" className="hover:text-henna-800">Contact</Link>
          <Link href="/login" className="hover:text-henna-800 inline-flex items-center gap-1">
            <User className="w-4 h-4" /> Account
          </Link>
          <Link href="/cart" className="relative inline-flex items-center gap-1.5 bg-henna-800 text-white px-3 py-2 rounded-lg hover:bg-henna-900">
            <ShoppingCart className="w-4 h-4" />
            Cart
            {count > 0 && (
              <span className="absolute -top-2 -right-2 bg-white text-henna-800 text-xs font-bold min-w-[1.25rem] h-5 px-1 rounded-full flex items-center justify-center border border-henna-800">
                {count}
              </span>
            )}
          </Link>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <Link href="/cart" className="relative p-2" aria-label="Cart">
            <ShoppingCart className="w-6 h-6 text-stone-800" />
            {count > 0 && (
              <span className="absolute top-0 right-0 bg-henna-800 text-white text-[10px] font-bold min-w-[1rem] h-4 px-1 rounded-full flex items-center justify-center">
                {count}
              </span>
            )}
          </Link>
          <button className="p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-5 flex flex-col gap-4 text-stone-800 font-medium border-t border-stone-200 pt-3">
          <Link href="/#shop" onClick={() => setOpen(false)}>Shop products</Link>
          <Link href="/gift-card" onClick={() => setOpen(false)}>Gift Card</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/blog" onClick={() => setOpen(false)}>Blog</Link>
          <Link href="/shipping" onClick={() => setOpen(false)}>Shipping & tracking</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
          <Link href="/login" onClick={() => setOpen(false)}>Login</Link>
          <Link href="/register" onClick={() => setOpen(false)}>Sign up</Link>
          <Link href="/dashboard" onClick={() => setOpen(false)}>Dashboard</Link>
        </div>
      )}
    </nav>
  )
}
