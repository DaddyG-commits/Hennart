'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import DashboardShell from '@/components/DashboardShell'
import {
  getSession,
  updateUser,
  type PhoneCountry,
  type SessionUser,
} from '@/lib/auth'

export default function SettingsPage() {
  const router = useRouter()
  const [user, setUser] = useState<SessionUser | null>(null)
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
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const session = getSession()
    if (!session) {
      router.replace('/login')
      return
    }
    setUser(session)
    setName(session.name)
    setEmail(session.email)
    setPhone(session.phone)
    setPhoneCountry(session.phoneCountry)
    setAddress(session.address)
    setCity(session.city)
    setRegion(session.region)
    setPostalCode(session.postalCode)
    setCountry(session.country)
  }, [router])

  const field =
    'w-full border border-white/15 bg-[#1a100c] rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-[#c4a574]/40'

  const save = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!user) return
    setError('')
    setMessage('')
    if (password && password !== confirm) {
      setError('New passwords do not match.')
      return
    }
    setLoading(true)
    const result = await updateUser(user.id, {
      name,
      email,
      phone,
      phoneCountry,
      address,
      city,
      region,
      postalCode,
      country,
      ...(password ? { password } : {}),
    })
    setLoading(false)
    if (!result.ok) {
      setError(result.error)
      return
    }
    setUser(result.user)
    setPassword('')
    setConfirm('')
    setMessage('Your information was updated.')
  }

  if (!user) {
    return (
      <DashboardShell title="Account settings">
        <p className="text-sm text-stone-400">Loading…</p>
      </DashboardShell>
    )
  }

  return (
    <DashboardShell title="Account settings">
      <div className="max-w-lg space-y-4">
        <p className="text-sm text-stone-400">Update your contact details or password.</p>

        <form onSubmit={save} className="bg-[#2a1c14] border border-white/10 rounded-2xl p-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-stone-400 mb-1">Full name</label>
            <input required value={name} onChange={(e) => setName(e.target.value)} className={field} />
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-400 mb-1">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={field}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-400 mb-1">Phone (Canada or US)</label>
            <div className="flex gap-2">
              <select
                value={phoneCountry}
                onChange={(e) => setPhoneCountry(e.target.value as PhoneCountry)}
                className="border border-white/15 rounded-xl px-3 py-2.5 text-sm bg-[#1a100c] text-white"
              >
                <option value="CA">🇨🇦 CA +1</option>
                <option value="US">🇺🇸 US +1</option>
              </select>
              <input
                required
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={field}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-400 mb-1">Street address</label>
            <input required value={address} onChange={(e) => setAddress(e.target.value)} className={field} />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-stone-400 mb-1">City</label>
              <input required value={city} onChange={(e) => setCity(e.target.value)} className={field} />
            </div>
            <div>
              <label className="block text-xs font-semibold text-stone-400 mb-1">
                {country === 'CA' ? 'Province' : 'State'}
              </label>
              <input required value={region} onChange={(e) => setRegion(e.target.value)} className={field} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-stone-400 mb-1">
                {country === 'CA' ? 'Postal code' : 'ZIP'}
              </label>
              <input required value={postalCode} onChange={(e) => setPostalCode(e.target.value)} className={field} />
            </div>
            <div>
              <label className="block text-xs font-semibold text-stone-400 mb-1">Country</label>
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

          <hr className="border-white/10" />

          <p className="text-xs font-semibold text-stone-500 uppercase tracking-wide">Change password (optional)</p>
          <div>
            <label className="block text-xs font-semibold text-stone-400 mb-1">New password</label>
            <input
              type="password"
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={field}
              autoComplete="new-password"
              placeholder="Leave blank to keep current"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-stone-400 mb-1">Confirm new password</label>
            <input
              type="password"
              minLength={6}
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              className={field}
              autoComplete="new-password"
            />
          </div>

          {error && (
            <p className="text-sm text-red-300 bg-red-500/10 border border-red-500/20 rounded-xl px-3 py-2">{error}</p>
          )}
          {message && (
            <p className="text-sm text-[#c4a574] bg-[#c4a574]/10 border border-[#c4a574]/20 rounded-xl px-3 py-2">{message}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#6f2d14] text-white py-3 rounded-xl font-semibold hover:bg-[#8b3a1a] disabled:opacity-60"
          >
            {loading ? 'Saving…' : 'Save changes'}
          </button>
        </form>
      </div>
    </DashboardShell>
  )
}
