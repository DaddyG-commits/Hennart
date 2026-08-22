import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { randomBytes } from 'crypto'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const email = String(body.email || '').trim().toLowerCase()
    const user = await prisma.user.findUnique({ where: { email } })
    if (!user) return NextResponse.json({ ok: true })

    const token = randomBytes(16).toString('hex')
    await prisma.user.update({
      where: { id: user.id },
      data: { resetToken: token, resetExpires: new Date(Date.now() + 60 * 60 * 1000) },
    })
    return NextResponse.json({ ok: true, token })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ ok: false, error: 'Could not start reset.' }, { status: 500 })
  }
}
