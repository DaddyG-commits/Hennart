import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { hashPassword, publicUser } from '@/lib/password'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const email = String(body.email || '').trim().toLowerCase()
    const password = String(body.password || '')
    if (!email || password.length < 6 || !body.name) {
      return NextResponse.json({ ok: false, error: 'Name, email, and a 6+ character password are required.' }, { status: 400 })
    }
    const exists = await prisma.user.findUnique({ where: { email } })
    if (exists) {
      return NextResponse.json({ ok: false, error: 'An account with this email already exists.' }, { status: 409 })
    }
    const user = await prisma.user.create({
      data: {
        name: String(body.name).trim(),
        email,
        password: hashPassword(password),
        phone: String(body.phone || '').trim() || null,
        phoneCountry: body.phoneCountry || 'CA',
        address: String(body.address || '').trim() || null,
        city: String(body.city || '').trim() || null,
        region: String(body.region || '').trim() || null,
        postalCode: String(body.postalCode || '').trim() || null,
        country: body.country || 'CA',
      },
    })
    return NextResponse.json({ ok: true, user: publicUser(user) })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ ok: false, error: 'Could not create account. Check Neon DATABASE_URL.' }, { status: 500 })
  }
}
