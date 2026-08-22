'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { loginUser } from '@/lib/auth'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    const result = await loginUser(email, password)
    setLoading(false)
    if (!result.ok) {
      setError(result.error)
      return
    }
    router.push('/dashboard')
  }

  const field =
    'w-full border border-stone-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-henna-700/30'

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-md mx-auto w-full px-5 py-12">
        <div className="bg-white border border-stone-200 rounded-2xl p-7 space-y-5">
          <div>
            <h1 className="text-2xl font-bold">Sign in</h1>
            <p className="text-sm text-stone-600 mt-1">Access your Hennaart account</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold mb-1">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={field}
                autoComplete="email"
              />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-semibold">Password</label>
                <Link href="/forgot-password" className="text-xs text-henna-800 font-medium underline">
                  Forgot password?
                </Link>
              </div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={field}
                autoComplete="current-password"
              />
            </div>

            {error && (
              <p className="text-sm text-red-700 bg-red-50 border border-red-100 rounded-xl px-3 py-2">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-henna-800 text-white py-3 rounded-xl font-semibold hover:bg-henna-900 disabled:opacity-60"
            >
              {loading ? 'Signing in…' : 'Sign in'}
            </button>
          </form>
          <p className="text-xs text-center text-stone-600">
            No account?{' '}
            <Link href="/register" className="text-henna-800 font-semibold underline">
              Create one
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
