'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-[#faf6f1]/95 backdrop-blur border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl tracking-tight text-henna-800">
          Hennart
          <span className="block text-[10px] font-medium tracking-[0.2em] uppercase text-henna-700">Henna Art Canada</span>
        </Link>

        <div className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-800">
          <Link href="/#story" className="hover:text-henna-800">Our story</Link>
          <Link href="/#shop" className="hover:text-henna-800">Shop</Link>
          <Link href="/#learn" className="hover:text-henna-800">Learn</Link>
          <Link href="/contact" className="bg-henna-800 text-white px-4 py-2 rounded-lg hover:bg-henna-900">Contact</Link>
        </div>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-5 flex flex-col gap-4 text-stone-800 font-medium border-t border-stone-200">
          <Link href="/#story" onClick={() => setOpen(false)}>Our story</Link>
          <Link href="/#shop" onClick={() => setOpen(false)}>Shop</Link>
          <Link href="/#learn" onClick={() => setOpen(false)}>Learn</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="bg-henna-800 text-white text-center py-3 rounded-lg">Contact</Link>
        </div>
      )}
    </nav>
  )
}
