import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-henna-900 text-henna-100 mt-16">
      <div className="max-w-6xl mx-auto px-5 py-12 grid gap-8 sm:grid-cols-2">
        <div>
          <p className="font-bold text-lg text-white">Hennart</p>
          <p className="text-sm mt-2 text-henna-100/80">
            Henna Art Canada. Quality organic ingredients and safe body art since 2007.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="space-y-2">
            <p className="font-semibold text-white">Explore</p>
            <Link href="/#story" className="block hover:underline">Our story</Link>
            <Link href="/#shop" className="block hover:underline">Shop</Link>
            <Link href="/#learn" className="block hover:underline">Learn</Link>
          </div>
          <div className="space-y-2">
            <p className="font-semibold text-white">Studio</p>
            <p>Victoria, BC</p>
            <p>Est. Edmonton, AB</p>
            <Link href="/contact" className="block hover:underline">Contact</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 text-xs text-henna-100/70 px-5 py-4 text-center">
        © {new Date().getFullYear()} Henna Art Canada — Built for safer, natural henna.
      </div>
    </footer>
  )
}
