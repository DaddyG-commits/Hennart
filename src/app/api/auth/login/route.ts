import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { hashPassword, publicUser } from '@/lib/password'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const email = String(body.email || '').trim().toLowerCase()
    const password = String(body.password || '')
    const user = await prisma.user.findUnique({ where: { email } })
    if (!user || user.password !== hashPassword(password)) {
      return NextResponse.json({ ok: false, error: 'Invalid email or password.' }, { status: 401 })
    }
    return NextResponse.json({ ok: true, user: publicUser(user) })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ ok: false, error: 'Login failed. Check Neon connection.' }, { status: 500 })
  }
}
