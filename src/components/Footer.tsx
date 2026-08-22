import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-henna-900 text-henna-100 mt-16">
      <div className="max-w-6xl mx-auto px-5 py-12 grid gap-8 sm:grid-cols-3">
        <div>
          <p className="font-bold text-lg text-white">Hennart</p>
          <p className="text-sm mt-2 text-henna-100/80">
            Based in Victoria, BC. Quality organic ingredients and safe body art since 2007.
          </p>
          <p className="text-sm mt-3 text-henna-100/80">
            Order online or by email. Shipped with Canada Post, or pick up in the Victoria area.
          </p>
        </div>
        <div className="space-y-2 text-sm">
          <p className="font-semibold text-white">Explore</p>
          <Link href="/#shop" className="block hover:underline">Shop</Link>
          <Link href="/gift-card" className="block hover:underline">Gift Card</Link>
          <Link href="/about" className="block hover:underline">About</Link>
          <Link href="/blog" className="block hover:underline">Blog</Link>
          <Link href="/shipping" className="block hover:underline">Shipping</Link>
          <Link href="/contact" className="block hover:underline">Contact</Link>
        </div>
        <div className="space-y-2 text-sm">
          <p className="font-semibold text-white">Visit & book</p>
          <p>Victoria, BC</p>
          <p>Pickup available locally</p>
          <a href="mailto:kareliasunflower@hotmail.com" className="block hover:underline break-all">
            kareliasunflower@hotmail.com
          </a>
          <p className="text-henna-100/80">Private henna appointments by email.</p>
          <Link href="/login" className="block hover:underline pt-2">Sign in</Link>
        </div>
      </div>
      <div className="border-t border-white/10 text-xs text-henna-100/70 px-5 py-4 text-center">
        © {new Date().getFullYear()} Henna Art Canada — Victoria, BC — Canada Post shipping available.
      </div>
    </footer>
  )
}
