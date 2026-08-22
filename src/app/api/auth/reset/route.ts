import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { hashPassword } from '@/lib/password'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const token = String(body.token || '')
    const password = String(body.password || '')
    if (!token || password.length < 6) {
      return NextResponse.json({ ok: false, error: 'Invalid token or password.' }, { status: 400 })
    }
    const user = await prisma.user.findFirst({
      where: { resetToken: token, resetExpires: { gt: new Date() } },
    })
    if (!user) {
      return NextResponse.json({ ok: false, error: 'Reset link is invalid or has expired.' }, { status: 400 })
    }
    await prisma.user.update({
      where: { id: user.id },
      data: { password: hashPassword(password), resetToken: null, resetExpires: null },
    })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ ok: false, error: 'Could not reset password.' }, { status: 500 })
  }
}
