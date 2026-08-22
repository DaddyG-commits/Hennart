export type PhoneCountry = 'CA' | 'US'

export type UserRecord = {
  id: string
  name: string
  email: string
  phone: string
  phoneCountry: PhoneCountry
  address: string
  city: string
  region: string
  postalCode: string
  country: PhoneCountry
  passwordHash: string
  resetToken?: string
  resetExpires?: number
  createdAt: string
}

export type SessionUser = Omit<UserRecord, 'passwordHash' | 'resetToken' | 'resetExpires'>

const USERS_KEY = 'hennaart-users'
const SESSION_KEY = 'hennaart-user'

function id() {
  return `u_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 9)}`
}

export async function hashPassword(password: string): Promise<string> {
  const data = new TextEncoder().encode(`${password}::hennaart-v1`)
  const buf = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

export function getUsers(): UserRecord[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem(USERS_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function saveUsers(users: UserRecord[]) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users))
}

export function getSession(): SessionUser | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem(SESSION_KEY)
    if (!raw) return null
    return JSON.parse(raw) as SessionUser
  } catch {
    return null
  }
}

function toSession(u: UserRecord): SessionUser {
  const { passwordHash: _p, resetToken: _t, resetExpires: _e, ...rest } = u
  return rest
}

export function setSession(user: UserRecord | SessionUser) {
  const session =
    'passwordHash' in user
      ? toSession(user as UserRecord)
      : (user as SessionUser)
  localStorage.setItem(SESSION_KEY, JSON.stringify(session))
}

export function clearSession() {
  localStorage.removeItem(SESSION_KEY)
}

export async function registerUser(input: {
  name: string
  email: string
  phone: string
  phoneCountry: PhoneCountry
  address: string
  city: string
  region: string
  postalCode: string
  country: PhoneCountry
  password: string
}): Promise<{ ok: true; user: SessionUser } | { ok: false; error: string }> {
  const email = input.email.trim().toLowerCase()
  if (!email || !input.password || input.password.length < 6) {
    return { ok: false, error: 'Password must be at least 6 characters.' }
  }
  const users = getUsers()
  if (users.some((u) => u.email === email)) {
    return { ok: false, error: 'An account with this email already exists.' }
  }
  const passwordHash = await hashPassword(input.password)
  const user: UserRecord = {
    id: id(),
    name: input.name.trim(),
    email,
    phone: input.phone.trim(),
    phoneCountry: input.phoneCountry,
    address: input.address.trim(),
    city: input.city.trim(),
    region: input.region.trim(),
    postalCode: input.postalCode.trim(),
    country: input.country,
    passwordHash,
    createdAt: new Date().toISOString(),
  }
  users.push(user)
  saveUsers(users)
  setSession(user)
  return { ok: true, user: toSession(user) }
}

export async function loginUser(
  email: string,
  password: string
): Promise<{ ok: true; user: SessionUser } | { ok: false; error: string }> {
  const users = getUsers()
  const found = users.find((u) => u.email === email.trim().toLowerCase())
  if (!found) return { ok: false, error: 'Invalid email or password.' }
  const hash = await hashPassword(password)
  if (hash !== found.passwordHash) return { ok: false, error: 'Invalid email or password.' }
  setSession(found)
  return { ok: true, user: toSession(found) }
}

export async function updateUser(
  userId: string,
  patch: Partial<
    Pick<
      UserRecord,
      | 'name'
      | 'email'
      | 'phone'
      | 'phoneCountry'
      | 'address'
      | 'city'
      | 'region'
      | 'postalCode'
      | 'country'
    >
  > & { password?: string }
): Promise<{ ok: true; user: SessionUser } | { ok: false; error: string }> {
  const users = getUsers()
  const idx = users.findIndex((u) => u.id === userId)
  if (idx < 0) return { ok: false, error: 'User not found. Please sign in again.' }

  if (patch.email) {
    const email = patch.email.trim().toLowerCase()
    if (users.some((u, i) => i !== idx && u.email === email)) {
      return { ok: false, error: 'That email is already in use.' }
    }
    users[idx].email = email
  }
  if (patch.name != null) users[idx].name = patch.name.trim()
  if (patch.phone != null) users[idx].phone = patch.phone.trim()
  if (patch.phoneCountry != null) users[idx].phoneCountry = patch.phoneCountry
  if (patch.address != null) users[idx].address = patch.address.trim()
  if (patch.city != null) users[idx].city = patch.city.trim()
  if (patch.region != null) users[idx].region = patch.region.trim()
  if (patch.postalCode != null) users[idx].postalCode = patch.postalCode.trim()
  if (patch.country != null) users[idx].country = patch.country
  if (patch.password) {
    if (patch.password.length < 6) {
      return { ok: false, error: 'Password must be at least 6 characters.' }
    }
    users[idx].passwordHash = await hashPassword(patch.password)
  }

  saveUsers(users)
  setSession(users[idx])
  return { ok: true, user: toSession(users[idx]) }
}

export async function requestPasswordReset(
  email: string
): Promise<{ ok: true; token?: string } | { ok: false; error: string }> {
  const users = getUsers()
  const idx = users.findIndex((u) => u.email === email.trim().toLowerCase())
  // Always return success message to avoid email enumeration; include token only in this demo app
  if (idx < 0) return { ok: true }
  const token = Math.random().toString(36).slice(2) + Date.now().toString(36)
  users[idx].resetToken = token
  users[idx].resetExpires = Date.now() + 1000 * 60 * 60 // 1 hour
  saveUsers(users)
  return { ok: true, token }
}

export async function resetPassword(
  token: string,
  newPassword: string
): Promise<{ ok: true } | { ok: false; error: string }> {
  if (newPassword.length < 6) {
    return { ok: false, error: 'Password must be at least 6 characters.' }
  }
  const users = getUsers()
  const idx = users.findIndex(
    (u) => u.resetToken === token && u.resetExpires && u.resetExpires > Date.now()
  )
  if (idx < 0) return { ok: false, error: 'Reset link is invalid or has expired.' }
  users[idx].passwordHash = await hashPassword(newPassword)
  users[idx].resetToken = undefined
  users[idx].resetExpires = undefined
  saveUsers(users)
  return { ok: true }
}
