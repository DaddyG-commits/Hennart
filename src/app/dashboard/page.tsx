'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Package, MapPin, ShoppingBag, LogOut } from 'lucide-react'

type SessionUser = { name: string; email: string }

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<SessionUser | null>(null)

  useEffect(() => {
    try {
      const raw = localStorage.getItem('hennart-user')
      if (raw) setUser(JSON.parse(raw))
      else setUser(null)
    } catch {
      setUser(null)
    }
  }, [])

  const logout = () => {
    localStorage.removeItem('hennart-user')
    router.push('/login')
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-3xl mx-auto w-full px-5 py-10 space-y-8">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-stone-600 mt-1">
              {user ? `Welcome, ${user.name}` : 'Sign in to see your account details.'}
            </p>
          </div>
          {user && (
            <button onClick={logout} className="inline-flex items-center gap-2 text-sm font-medium text-stone-700 border px-3 py-2 rounded-lg hover:bg-white">
              <LogOut className="w-4 h-4" /> Log out
            </button>
          )}
        </div>

        {!user ? (
          <div className="bg-white border border-stone-200 rounded-2xl p-6 space-y-4">
            <p className="text-stone-600">You are not signed in.</p>
            <div className="flex gap-3">
              <Link href="/login" className="bg-henna-800 text-white px-5 py-2.5 rounded-xl font-semibold">Sign in</Link>
              <Link href="/register" className="border px-5 py-2.5 rounded-xl font-semibold">Sign up</Link>
            </div>
          </div>
        ) : (
          <>
            <div className="bg-white border border-stone-200 rounded-2xl p-5">
              <p className="text-sm text-stone-500">Email</p>
              <p className="font-medium">{user.email}</p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/#shop" className="bg-white border border-stone-200 rounded-2xl p-5 hover:border-henna-700 transition space-y-2">
                <ShoppingBag className="w-5 h-5 text-henna-800" />
                <h2 className="font-semibold">Shop</h2>
                <p className="text-sm text-stone-600">Browse henna & supplies</p>
              </Link>
              <Link href="/cart" className="bg-white border border-stone-200 rounded-2xl p-5 hover:border-henna-700 transition space-y-2">
                <Package className="w-5 h-5 text-henna-800" />
                <h2 className="font-semibold">Orders</h2>
                <p className="text-sm text-stone-600">History appears after checkout</p>
              </Link>
              <Link href="/shipping" className="bg-white border border-stone-200 rounded-2xl p-5 hover:border-henna-700 transition space-y-2">
                <MapPin className="w-5 h-5 text-henna-800" />
                <h2 className="font-semibold">Track</h2>
                <p className="text-sm text-stone-600">Shipping & tracking</p>
              </Link>
            </div>

            <div className="bg-henna-50 border border-henna-100 rounded-2xl p-5 text-sm text-stone-700">
              Order history and saved addresses will sync to Neon once production auth is connected.
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  )
}
