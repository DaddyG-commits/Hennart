'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { requestPasswordReset } from '@/lib/auth'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  const [resetPath, setResetPath] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const result = await requestPasswordReset(email)
    setLoading(false)
    setDone(true)
    if (result.ok && result.token) {
      setResetPath(`/reset-password?token=${encodeURIComponent(result.token)}`)
    } else {
      setResetPath(null)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-md mx-auto w-full px-5 py-12">
        <div className="bg-white border border-stone-200 rounded-2xl p-7 space-y-5">
          <div>
            <h1 className="text-2xl font-bold">Reset password</h1>
            <p className="text-sm text-stone-600 mt-1">
              Enter the email on your Hennaart account.
            </p>
          </div>

          {!done ? (
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
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-henna-800 text-white py-3 rounded-xl font-semibold hover:bg-henna-900 disabled:opacity-60"
              >
                {loading ? 'Sending…' : 'Send reset link'}
              </button>
            </form>
          ) : (
            <div className="space-y-4 text-sm text-stone-700">
              <p>
                If an account exists for that email, a reset link is ready. In production this would
                be emailed; for this site the link is shown below when the account is found.
              </p>
              {resetPath ? (
                <Link
                  href={resetPath}
                  className="block text-center bg-henna-800 text-white py-3 rounded-xl font-semibold hover:bg-henna-900"
                >
                  Continue to set a new password
                </Link>
              ) : (
                <p className="text-stone-500">You can try again or contact support if needed.</p>
              )}
            </div>
          )}

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
