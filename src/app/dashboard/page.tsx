'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Package, MapPin, ShoppingBag, Settings, User } from 'lucide-react'
import DashboardShell from '@/components/DashboardShell'
import { getSession, type SessionUser } from '@/lib/auth'

export default function DashboardPage() {
  const [user, setUser] = useState<SessionUser | null>(null)

  useEffect(() => {
    setUser(getSession())
  }, [])

  return (
    <DashboardShell title="Dashboard">
      <div className="space-y-6 max-w-3xl">
        <p className="text-sm text-stone-400">
          {user ? `Welcome back, ${user.name}` : 'Your Hennaart account'}
        </p>

        {user && (
          <div className="bg-[#2a1c14] border border-white/10 rounded-2xl p-5 space-y-3">
            <div className="flex items-center justify-between gap-3">
              <h2 className="font-semibold inline-flex items-center gap-2 text-[#c4a574]">
                <User className="w-4 h-4" /> Your profile
              </h2>
              <Link
                href="/dashboard/settings"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#c4a574] hover:underline"
              >
                <Settings className="w-4 h-4" /> Settings
              </Link>
            </div>
            <dl className="grid sm:grid-cols-2 gap-3 text-sm">
              <div>
                <dt className="text-stone-500">Name</dt>
                <dd className="font-medium text-white">{user.name}</dd>
              </div>
              <div>
                <dt className="text-stone-500">Email</dt>
                <dd className="font-medium text-white break-all">{user.email}</dd>
              </div>
              <div>
                <dt className="text-stone-500">Phone</dt>
                <dd className="font-medium text-white">
                  {user.phoneCountry === 'CA' ? '🇨🇦' : '🇺🇸'} {user.phone}
                </dd>
              </div>
              <div>
                <dt className="text-stone-500">Country</dt>
                <dd className="font-medium text-white">
                  {user.country === 'CA' ? 'Canada' : 'United States'}
                </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-stone-500">Address</dt>
                <dd className="font-medium text-white">
                  {user.address}
                  <br />
                  {user.city}, {user.region} {user.postalCode}
                </dd>
              </div>
            </dl>
          </div>
        )}

        <div className="grid sm:grid-cols-3 gap-4">
          <Link
            href="/shop"
            className="bg-[#2a1c14] border border-white/10 rounded-2xl p-5 hover:border-[#c4a574]/50 transition space-y-2"
          >
            <ShoppingBag className="w-5 h-5 text-[#c4a574]" />
            <h2 className="font-semibold text-white">Shop</h2>
            <p className="text-sm text-stone-400">Browse henna & supplies</p>
          </Link>
          <Link
            href="/cart"
            className="bg-[#2a1c14] border border-white/10 rounded-2xl p-5 hover:border-[#c4a574]/50 transition space-y-2"
          >
            <Package className="w-5 h-5 text-[#c4a574]" />
            <h2 className="font-semibold text-white">Orders</h2>
            <p className="text-sm text-stone-400">Cart & checkout</p>
          </Link>
          <Link
            href="/shipping"
            className="bg-[#2a1c14] border border-white/10 rounded-2xl p-5 hover:border-[#c4a574]/50 transition space-y-2"
          >
            <MapPin className="w-5 h-5 text-[#c4a574]" />
            <h2 className="font-semibold text-white">Track</h2>
            <p className="text-sm text-stone-400">Shipping & tracking</p>
          </Link>
        </div>

        <Link
          href="/dashboard/settings"
          className="block bg-[#6f2d14]/20 border border-[#6f2d14]/40 rounded-2xl p-5 text-sm text-stone-300 hover:border-[#c4a574]/50 transition"
        >
          <span className="font-semibold text-[#c4a574]">Update your information →</span>
          <p className="mt-1 text-stone-400">Change name, phone, address, email, or password in Settings.</p>
        </Link>
      </div>
    </DashboardShell>
  )
}
