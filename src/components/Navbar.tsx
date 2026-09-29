'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, X, ShoppingCart, User, ChevronDown, LogOut } from 'lucide-react'
import { useCart } from '@/lib/cart'
import { clearSession, getSession, type SessionUser } from '@/lib/auth'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [shopOpen, setShopOpen] = useState(false)
  const [user, setUser] = useState<SessionUser | null>(null)
  const [ready, setReady] = useState(false)
  const { count } = useCart()
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    setUser(getSession())
    setReady(true)
  }, [pathname])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const logout = () => {
    clearSession()
    setUser(null)
    setOpen(false)
    router.push('/login')
  }

  const initial = user?.name?.trim()?.charAt(0)?.toUpperCase() || 'U'
  const isAccountArea = pathname?.startsWith('/dashboard')

  return (
    <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-2.5 shrink-0 min-w-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="Henna Art logo"
            className="w-16 h-16 sm:w-[4.75rem] sm:h-[4.75rem] rounded-full object-cover object-[center_18%] bg-white border border-stone-200 shrink-0"
            onError={(e) => {
              e.currentTarget.src = '/products/indo-arabic-ebook.jpg'
            }}
          />
          <span className="font-bold text-xl tracking-tight text-henna-800">
            <span className="inline-flex items-center gap-1.5">
              Hennaart <span className="text-[1.05em] leading-none" aria-hidden>🍁</span>
            </span>
            <span className="block text-[10px] font-medium tracking-[0.2em] uppercase text-henna-700">
              Henna Art Canada
            </span>
          </span>
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
                <div className="bg-white border border-stone-200 rounded-xl shadow-lg min-w-[12rem] py-2">
                  <Link href="/shop" className="block px-4 py-2 hover:bg-henna-50" onClick={() => setShopOpen(false)}>
                    Shop Now — Catalog
                  </Link>
                  <Link href="/gift-card" className="block px-4 py-2 hover:bg-henna-50" onClick={() => setShopOpen(false)}>
                    Gift Card
                  </Link>
                </div>
              </div>
            )}
          </div>
          <Link href="/shop" className="border border-stone-800 rounded-lg px-3 py-1.5 hover:bg-stone-900 hover:text-white">
            Shop Now
          </Link>
          <Link href="/about" className="hover:text-henna-800">About</Link>
          <Link href="/blog" className="hover:text-henna-800">Blog</Link>
          <Link href="/shipping" className="hover:text-henna-800">Shipping</Link>
          <Link href="/contact" className="hover:text-henna-800">Contact</Link>

          {ready && user ? (
            <>
              {isAccountArea && (
                <Link
                  href="/dashboard"
                  className="ha-back-btn"
                >
                  ← Dashboard
                </Link>
              )}
              <Link href="/dashboard" className="hover:text-henna-800 inline-flex items-center gap-1">
                <User className="w-4 h-4" /> Dashboard
              </Link>
            </>
          ) : ready ? (
            <Link href="/login" className="hover:text-henna-800 inline-flex items-center gap-1">
              <User className="w-4 h-4" /> Account
            </Link>
          ) : null}

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
          <Link href="/shop" className="text-xs font-semibold border border-stone-800 rounded-lg px-2 py-1">
            Shop Now
          </Link>
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
          {user ? (
            <>
              <p className="text-[10px] font-bold tracking-widest uppercase text-stone-500 m-0">Account</p>
              <Link href="/dashboard" onClick={() => setOpen(false)}>Dashboard</Link>
              <Link href="/dashboard/settings" onClick={() => setOpen(false)}>Settings</Link>
              <Link href="/shop" onClick={() => setOpen(false)}>Shop Now — Catalog</Link>
              <Link href="/cart" onClick={() => setOpen(false)}>Cart</Link>
              <Link href="/gift-card" onClick={() => setOpen(false)}>Gift Card</Link>
              <Link href="/shipping" onClick={() => setOpen(false)}>Shipping & tracking</Link>
              <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
              <Link href="/" onClick={() => setOpen(false)}>Home</Link>

              <div className="flex items-center gap-3 mt-1 p-3 rounded-2xl bg-stone-100 border border-stone-200">
                <span className="w-9 h-9 rounded-full bg-henna-800 text-white font-bold text-sm grid place-items-center shrink-0">
                  {initial}
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold truncate m-0">{user.name}</p>
                  <p className="text-xs text-stone-500 truncate m-0">{user.email}</p>
                </div>
              </div>

              <button
                type="button"
                onClick={logout}
                className="w-full inline-flex items-center justify-center gap-2 border border-stone-300 rounded-full py-3 text-sm font-semibold hover:bg-stone-50"
              >
                <LogOut className="w-4 h-4" /> Sign out
              </button>
            </>
          ) : (
            <>
              <Link href="/shop" onClick={() => setOpen(false)}>Shop Now — Catalog</Link>
              <Link href="/gift-card" onClick={() => setOpen(false)}>Gift Card</Link>
              <Link href="/about" onClick={() => setOpen(false)}>About</Link>
              <Link href="/blog" onClick={() => setOpen(false)}>Blog</Link>
              <Link href="/shipping" onClick={() => setOpen(false)}>Shipping & tracking</Link>
              <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
              {ready && (
                <>
                  <Link
                    href="/login"
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center justify-center bg-henna-800 text-white rounded-xl py-3 font-semibold"
                  >
                    Login
                  </Link>
                  <Link href="/register" onClick={() => setOpen(false)} className="text-center">
                    Sign up
                  </Link>
                </>
              )}
            </>
          )}
        </div>
      )}
    </nav>
  )
}
