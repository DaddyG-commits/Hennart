'use client'

import { Suspense, useState } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { resetPassword } from '@/lib/auth'

function ResetForm() {
  const router = useRouter()
  const search = useSearchParams()
  const token = search.get('token') || ''
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (!token) {
      setError('Missing reset token. Request a new link.')
      return
    }
    if (password !== confirm) {
      setError('Passwords do not match.')
      return
    }
    setLoading(true)
    const result = await resetPassword(token, password)
    setLoading(false)
    if (!result.ok) {
      setError(result.error)
      return
    }
    router.push('/login')
  }

  const field =
    'w-full border border-stone-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-henna-700/30'

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-xs font-semibold mb-1">New password</label>
        <input
          type="password"
          required
          minLength={6}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={field}
          autoComplete="new-password"
        />
      </div>
      <div>
        <label className="block text-xs font-semibold mb-1">Confirm password</label>
        <input
          type="password"
          required
          minLength={6}
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          className={field}
          autoComplete="new-password"
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
        {loading ? 'Updating…' : 'Set new password'}
      </button>
    </form>
  )
}

export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-md mx-auto w-full px-5 py-12">
        <div className="bg-white border border-stone-200 rounded-2xl p-7 space-y-5">
          <div>
            <h1 className="text-2xl font-bold">Choose a new password</h1>
            <p className="text-sm text-stone-600 mt-1">Your reset link is valid for one hour.</p>
          </div>
          <Suspense fallback={<p className="text-sm text-stone-500">Loading…</p>}>
            <ResetForm />
          </Suspense>
          <p className="text-xs text-center text-stone-600">
            <Link href="/login" className="text-henna-800 font-semibold underline">
              Back to sign in
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
