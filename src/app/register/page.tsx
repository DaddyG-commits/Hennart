'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { registerUser, type PhoneCountry } from '@/lib/auth'

export default function RegisterPage() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneCountry, setPhoneCountry] = useState<PhoneCountry>('CA')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [region, setRegion] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [country, setCountry] = useState<PhoneCountry>('CA')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (password !== confirm) {
      setError('Passwords do not match.')
      return
    }
    setLoading(true)
    const result = await registerUser({
      name,
      email,
      phone,
      phoneCountry,
      address,
      city,
      region,
      postalCode,
      country,
      password,
    })
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
      <main className="flex-1 max-w-lg mx-auto w-full px-5 py-10">
        <div className="bg-white border border-stone-200 rounded-2xl p-7 space-y-5">
          <div>
            <h1 className="text-2xl font-bold">Create account</h1>
            <p className="text-sm text-stone-600 mt-1">Join Hennaart · Henna Art Canada</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold mb-1">Full name *</label>
              <input required value={name} onChange={(e) => setName(e.target.value)} className={field} />
            </div>

            <div>
              <label className="block text-xs font-semibold mb-1">Email *</label>
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
              <label className="block text-xs font-semibold mb-1">Phone (Canada or US) *</label>
              <div className="flex gap-2">
                <select
                  value={phoneCountry}
                  onChange={(e) => setPhoneCountry(e.target.value as PhoneCountry)}
                  className="border border-stone-300 rounded-xl px-3 py-2.5 text-sm bg-white"
                >
                  <option value="CA">🇨🇦 CA +1</option>
                  <option value="US">🇺🇸 US +1</option>
                </select>
                <input
                  required
                  type="tel"
                  inputMode="tel"
                  placeholder="555-123-4567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={field}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold mb-1">Street address *</label>
              <input required value={address} onChange={(e) => setAddress(e.target.value)} className={field} />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold mb-1">City *</label>
                <input required value={city} onChange={(e) => setCity(e.target.value)} className={field} />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1">
                  {country === 'CA' ? 'Province' : 'State'} *
                </label>
                <input required value={region} onChange={(e) => setRegion(e.target.value)} className={field} />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold mb-1">
                  {country === 'CA' ? 'Postal code' : 'ZIP'} *
                </label>
                <input required value={postalCode} onChange={(e) => setPostalCode(e.target.value)} className={field} />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1">Country *</label>
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value as PhoneCountry)}
                  className={field}
                >
                  <option value="CA">Canada</option>
                  <option value="US">United States</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold mb-1">Password *</label>
              <input
                type="password"
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={field}
                autoComplete="new-password"
              />
              <p className="text-[11px] text-stone-500 mt-1">At least 6 characters</p>
            </div>

            <div>
              <label className="block text-xs font-semibold mb-1">Confirm password *</label>
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
              {loading ? 'Creating account…' : 'Sign up'}
            </button>
          </form>

          <p className="text-xs text-center text-stone-600">
            Already have an account?{' '}
            <Link href="/login" className="text-henna-800 font-semibold underline">
              Sign in
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
