import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { hashPassword, publicUser } from '@/lib/password'

export async function PATCH(req: Request) {
  try {
    const body = await req.json()
    const id = String(body.id || '')
    if (!id) return NextResponse.json({ ok: false, error: 'Missing user id.' }, { status: 400 })

    const data: Record<string, unknown> = {}
    if (body.name != null) data.name = String(body.name).trim()
    if (body.email != null) data.email = String(body.email).trim().toLowerCase()
    if (body.phone != null) data.phone = String(body.phone).trim()
    if (body.phoneCountry != null) data.phoneCountry = body.phoneCountry
    if (body.address != null) data.address = String(body.address).trim()
    if (body.city != null) data.city = String(body.city).trim()
    if (body.region != null) data.region = String(body.region).trim()
    if (body.postalCode != null) data.postalCode = String(body.postalCode).trim()
    if (body.country != null) data.country = body.country
    if (body.password) {
      if (String(body.password).length < 6) {
        return NextResponse.json({ ok: false, error: 'Password must be at least 6 characters.' }, { status: 400 })
      }
      data.password = hashPassword(String(body.password))
    }

    const user = await prisma.user.update({ where: { id }, data })
    return NextResponse.json({ ok: true, user: publicUser(user) })
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : ''
    if (msg.includes('Unique')) {
      return NextResponse.json({ ok: false, error: 'That email is already in use.' }, { status: 409 })
    }
    console.error(err)
    return NextResponse.json({ ok: false, error: 'Could not update profile.' }, { status: 500 })
  }
}
