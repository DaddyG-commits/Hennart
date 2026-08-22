'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Demo: mark session and go to dashboard until Neon auth is wired
    if (typeof window !== 'undefined') {
      localStorage.setItem('hennart-user', JSON.stringify({ email, name: email.split('@')[0] }))
    }
    router.push('/dashboard')
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-md mx-auto w-full px-5 py-12">
        <div className="bg-white border border-stone-200 rounded-2xl p-7 space-y-5">
          <div>
            <h1 className="text-2xl font-bold">Sign in</h1>
            <p className="text-sm text-stone-600 mt-1">Access your Hennart account</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold mb-1">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-stone-300 rounded-xl px-4 py-2.5 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-stone-300 rounded-xl px-4 py-2.5 text-sm"
              />
            </div>
            <button type="submit" className="w-full bg-henna-800 text-white py-3 rounded-xl font-semibold hover:bg-henna-900">
              Sign in
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
