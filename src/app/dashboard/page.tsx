'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Package, MapPin, ShoppingBag, LogOut, Settings, User } from 'lucide-react'
import { clearSession, getSession, type SessionUser } from '@/lib/auth'

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<SessionUser | null>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setUser(getSession())
    setReady(true)
  }, [])

  const logout = () => {
    clearSession()
    router.push('/login')
  }

  if (!ready) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 max-w-3xl mx-auto w-full px-5 py-10">
          <p className="text-stone-500 text-sm">Loading…</p>
        </main>
        <Footer />
      </div>
    )
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
            <button
              onClick={logout}
              className="inline-flex items-center gap-2 text-sm font-medium text-stone-700 border px-3 py-2 rounded-lg hover:bg-white"
            >
              <LogOut className="w-4 h-4" /> Log out
            </button>
          )}
        </div>

        {!user ? (
          <div className="bg-white border border-stone-200 rounded-2xl p-6 space-y-4">
            <p className="text-stone-600">You are not signed in.</p>
            <div className="flex gap-3">
              <Link href="/login" className="bg-henna-800 text-white px-5 py-2.5 rounded-xl font-semibold">
                Sign in
              </Link>
              <Link href="/register" className="border px-5 py-2.5 rounded-xl font-semibold">
                Sign up
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div className="bg-white border border-stone-200 rounded-2xl p-5 space-y-3">
              <div className="flex items-center justify-between gap-3">
                <h2 className="font-semibold inline-flex items-center gap-2">
                  <User className="w-4 h-4 text-henna-800" /> Your profile
                </h2>
                <Link
                  href="/dashboard/settings"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-henna-800 hover:underline"
                >
                  <Settings className="w-4 h-4" /> Settings
                </Link>
              </div>
              <dl className="grid sm:grid-cols-2 gap-3 text-sm">
                <div>
                  <dt className="text-stone-500">Name</dt>
                  <dd className="font-medium">{user.name}</dd>
                </div>
                <div>
                  <dt className="text-stone-500">Email</dt>
                  <dd className="font-medium break-all">{user.email}</dd>
                </div>
                <div>
                  <dt className="text-stone-500">Phone</dt>
                  <dd className="font-medium">
                    {user.phoneCountry === 'CA' ? '🇨🇦' : '🇺🇸'} {user.phone}
                  </dd>
                </div>
                <div>
                  <dt className="text-stone-500">Country</dt>
                  <dd className="font-medium">{user.country === 'CA' ? 'Canada' : 'United States'}</dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="text-stone-500">Address</dt>
                  <dd className="font-medium">
                    {user.address}
                    <br />
                    {user.city}, {user.region} {user.postalCode}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <Link
                href="/shop"
                className="bg-white border border-stone-200 rounded-2xl p-5 hover:border-henna-700 transition space-y-2"
              >
                <ShoppingBag className="w-5 h-5 text-henna-800" />
                <h2 className="font-semibold">Shop</h2>
                <p className="text-sm text-stone-600">Browse henna & supplies</p>
              </Link>
              <Link
                href="/cart"
                className="bg-white border border-stone-200 rounded-2xl p-5 hover:border-henna-700 transition space-y-2"
              >
                <Package className="w-5 h-5 text-henna-800" />
                <h2 className="font-semibold">Orders</h2>
                <p className="text-sm text-stone-600">Cart & checkout</p>
              </Link>
              <Link
                href="/shipping"
                className="bg-white border border-stone-200 rounded-2xl p-5 hover:border-henna-700 transition space-y-2"
              >
                <MapPin className="w-5 h-5 text-henna-800" />
                <h2 className="font-semibold">Track</h2>
                <p className="text-sm text-stone-600">Shipping & tracking</p>
              </Link>
            </div>

            <Link
              href="/dashboard/settings"
              className="block bg-henna-50 border border-henna-100 rounded-2xl p-5 text-sm text-stone-700 hover:border-henna-300 transition"
            >
              <span className="font-semibold text-henna-900">Update your information →</span>
              <p className="mt-1">Change name, phone, address, email, or password anytime in Settings.</p>
            </Link>
          </>
        )}
      </main>
      <Footer />
    </div>
  )
}
