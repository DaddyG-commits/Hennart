import { createHash } from 'crypto'

export function hashPassword(password: string) {
  return createHash('sha256').update(`${password}::hennaart-v1`).digest('hex')
}

export function publicUser(user: {
  id: string
  name: string
  email: string
  phone: string | null
  phoneCountry: string | null
  address: string | null
  city: string | null
  region: string | null
  postalCode: string | null
  country: string | null
  createdAt: Date
}) {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    phone: user.phone || '',
    phoneCountry: (user.phoneCountry as 'CA' | 'US') || 'CA',
    address: user.address || '',
    city: user.city || '',
    region: user.region || '',
    postalCode: user.postalCode || '',
    country: (user.country as 'CA' | 'US') || 'CA',
    createdAt: user.createdAt.toISOString(),
  }
}
