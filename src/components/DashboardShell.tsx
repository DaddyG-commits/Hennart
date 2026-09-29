'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import {
  LayoutDashboard,
  Settings,
  ShoppingBag,
  Package,
  MapPin,
  Gift,
  Home,
  Menu,
} from 'lucide-react'
import { clearSession, getSession, type SessionUser } from '@/lib/auth'

const NAV = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/dashboard/settings', label: 'Settings', icon: Settings },
  { href: '/shop', label: 'Shop', icon: ShoppingBag },
  { href: '/cart', label: 'Orders / Cart', icon: Package },
  { href: '/shipping', label: 'Track shipping', icon: MapPin },
  { href: '/gift-card', label: 'Gift card', icon: Gift },
  { href: '/', label: 'Home', icon: Home },
]

export default function DashboardShell({
  children,
  title,
}: {
  children: React.ReactNode
  title?: string
}) {
  const pathname = usePathname()
  const router = useRouter()
  const [user, setUser] = useState<SessionUser | null>(null)
  const [ready, setReady] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    const session = getSession()
    setUser(session)
    setReady(true)
    if (!session) {
      router.replace('/login')
    }
  }, [router, pathname])

  useEffect(() => {
    setSidebarOpen(false)
  }, [pathname])

  const logout = () => {
    clearSession()
    router.push('/login')
  }

  const initial = user?.name?.trim()?.charAt(0)?.toUpperCase() || 'U'

  if (!ready || !user) {
    return (
      <div className="min-h-screen bg-[#1a100c] flex items-center justify-center">
        <p className="text-sm text-stone-400">Loading…</p>
      </div>
    )
  }

  const sidebar = (
    <aside className="flex flex-col h-full bg-[#1a100c] text-stone-300 border-r border-white/10">
      <div className="px-5 pt-6 pb-4 flex items-center gap-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo.png"
          alt="Henna Art"
          className="w-10 h-10 rounded-full object-cover object-[center_18%] border border-white/20 shrink-0 bg-white"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
        <div className="min-w-0">
          <p className="text-white font-bold text-sm tracking-tight truncate m-0">Hennaart 🍁</p>
          <p className="text-[10px] uppercase tracking-widest text-stone-500 m-0">Henna Art Canada</p>
        </div>
      </div>

      <p className="px-5 mt-4 mb-2 text-[10px] font-bold tracking-[0.16em] uppercase text-stone-500">
        Platform
      </p>

      <nav className="flex-1 px-3 space-y-0.5 overflow-y-auto">
        {NAV.map((item) => {
          const active =
            item.href === '/dashboard'
              ? pathname === '/dashboard'
              : pathname === item.href || pathname?.startsWith(item.href + '/')
          const Icon = item.icon
          return (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition ${
                active
                  ? 'bg-white/10 text-white font-semibold'
                  : 'text-stone-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <Icon className="w-4 h-4 shrink-0 opacity-80" />
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div className="p-4 mt-auto border-t border-white/10 space-y-3">
        <div className="flex items-center gap-3 px-3 py-2.5 rounded-2xl bg-white/5 border border-white/10">
          <span className="w-9 h-9 rounded-full bg-[#6f2d14] text-white font-bold text-sm grid place-items-center shrink-0">
            {initial}
          </span>
          <div className="min-w-0">
            <p className="text-white text-sm font-semibold truncate m-0">{user.name}</p>
            <p className="text-[11px] text-stone-400 truncate m-0">{user.email}</p>
          </div>
        </div>
        <button
          type="button"
          onClick={logout}
          className="w-full py-2.5 rounded-full border border-white/15 text-sm font-semibold text-white hover:bg-white/5 transition"
        >
          Sign out
        </button>
      </div>
    </aside>
  )

  return (
    <div className="min-h-screen bg-[#221610] text-white flex">
      <div className="hidden md:flex md:w-64 lg:w-72 shrink-0 sticky top-0 h-screen">
        {sidebar}
      </div>

      {sidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/60"
            aria-label="Close menu"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 w-[min(100%,18rem)] shadow-2xl">{sidebar}</div>
        </div>
      )}

      <div className="flex-1 min-w-0 flex flex-col min-h-screen">
        <header className="sticky top-0 z-30 flex items-center justify-between gap-3 px-4 sm:px-6 py-3 border-b border-white/10 bg-[#221610]/90 backdrop-blur">
          <div className="flex items-center gap-3 min-w-0">
            <button
              type="button"
              className="md:hidden w-10 h-10 rounded-full border border-white/15 grid place-items-center text-white"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
            <h1 className="text-base sm:text-lg font-bold tracking-tight truncate">
              {title || 'Dashboard'}
            </h1>
          </div>
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-[#c4a574] text-[#c4a574] text-xs sm:text-sm font-bold hover:bg-[#c4a574]/10 transition shrink-0"
          >
            ← Dashboard
          </Link>
        </header>

        <main className="flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  )
}
