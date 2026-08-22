import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import { products } from '@/lib/products'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto w-full px-5 py-10 space-y-16">
        <section className="space-y-5 max-w-3xl">
          <p className="text-sm font-semibold tracking-wide text-henna-700 uppercase">Canada · Est. 2007</p>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-stone-900">
            Share the henna love.
          </h1>
          <p className="text-lg text-stone-700 leading-relaxed">
            Quality organic henna, body art supplies, and natural hair dye — so no one has to settle for cheap, chemical-laden products.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#shop" className="bg-henna-800 text-white px-6 py-3 rounded-xl font-semibold text-center hover:bg-henna-900">
              Shop supplies
            </a>
            <Link href="/about" className="border border-stone-400 px-6 py-3 rounded-xl font-semibold text-center hover:bg-white">
              Our story
            </Link>
          </div>
        </section>

        <section id="shop" className="space-y-6">
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <h2 className="text-3xl font-bold">Shop</h2>
              <p className="text-stone-600 mt-1 text-sm">Placeholder products — real photos and prices coming next.</p>
            </div>
            <Link href="/cart" className="text-sm font-semibold text-henna-800 hover:underline">
              View cart →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>

        <section id="story" className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-bold">Our henna art story</h2>
          <p className="text-stone-700 leading-relaxed">
            Henna Art Canada began in 2007 with artist Nitasha in Edmonton, AB. In 2023 the business was continued by Karelia in Victoria, BC — still committed to organic ingredients and safe body art.
          </p>
          <Link href="/about" className="inline-block font-semibold text-henna-800 hover:underline">
            Read the full story →
          </Link>
        </section>

        <section id="learn" className="bg-white border border-stone-200 rounded-3xl p-7 space-y-3 max-w-3xl">
          <h2 className="text-2xl font-bold">Safe henna. Shared knowledge.</h2>
          <p className="text-stone-700 leading-relaxed">
            Learn how to use safe henna for body art, natural hair colour, and even eyebrows — without harsh chemicals.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  )
}
