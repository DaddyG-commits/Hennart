import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import ScrollFluid from '@/components/ScrollFluid'
import { products } from '@/lib/products'

export default function Home() {
  const featured = products.slice(0, 3)

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollFluid />
      <div className="bg-[#8fbf3f] text-white text-center text-sm sm:text-base font-semibold px-4 py-3 leading-snug relative z-50">
        New Owner, New Location! We are now in Victoria, BC!
      </div>
      <Navbar />

      {/* City background hero — visible Victoria backdrop + fluid parallax */}
      <section className="relative overflow-hidden min-h-[70vh] sm:min-h-[78vh] flex items-center">
        <div className="absolute inset-0 z-0" data-parallax="0.35">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/public-image.png"
            alt="Victoria, BC cityscape"
            className="absolute inset-0 w-full h-full object-cover object-center scale-110"
          />
          {/* Lighter overlay so the city stays visible */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(250,246,241,0.25) 0%, rgba(250,246,241,0.45) 40%, rgba(250,246,241,0.88) 85%, #faf6f1 100%), linear-gradient(90deg, rgba(250,246,241,0.55) 0%, rgba(250,246,241,0.2) 45%, rgba(250,246,241,0.4) 100%)',
            }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto w-full px-5 py-16 sm:py-24" data-fluid>
          <div className="text-center max-w-2xl mx-auto space-y-5">
            <p className="text-sm tracking-wide text-stone-600 font-medium">Our mission</p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-normal leading-snug text-stone-900 drop-shadow-sm">
              Provide organic, locally sourced ingredients and supplies for fresh henna body art, natural hair dye, and jagua art.
            </h1>
            <p className="text-xl text-stone-800">Products | Services | Wholesale</p>
            <Link
              href="/shop"
              className="inline-block border-2 border-stone-800 rounded-xl px-8 py-3 font-semibold hover:bg-stone-900 hover:text-white transition bg-white/90 backdrop-blur-sm shadow-sm"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      <main className="flex-1 max-w-6xl mx-auto w-full px-5 py-10 space-y-16">
        <section className="max-w-2xl mx-auto space-y-3 text-center sm:text-left" data-fluid>
          <h2 className="text-2xl font-bold">Based in Victoria, BC</h2>
          <p className="text-stone-700 leading-relaxed">
            Order online or via email, shipped with Canada Post, or pick up in the Victoria area!
          </p>
          <p className="text-stone-700 leading-relaxed">
            For private henna appointments email{' '}
            <a href="mailto:kareliasunflower@hotmail.com" className="text-henna-800 font-semibold underline">
              kareliasunflower@hotmail.com
            </a>
          </p>
        </section>

        <section id="shop" className="space-y-6" data-fluid>
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <h2 className="text-3xl font-bold">Featured</h2>
              <p className="text-stone-600 mt-1 text-sm">Full catalog on the shop page.</p>
            </div>
            <Link href="/shop" className="text-sm font-semibold text-henna-800 hover:underline">
              View all products →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>

        <section id="story" className="max-w-3xl space-y-4" data-fluid>
          <h2 className="text-3xl font-bold">Our henna art story</h2>
          <p className="text-stone-700 leading-relaxed">
            Henna Art Canada began in 2007 with artist Nitasha in Edmonton, AB. In 2023 the business was continued by Karelia in Victoria, BC — still committed to organic ingredients and safe body art.
          </p>
          <Link href="/about" className="inline-block font-semibold text-henna-800 hover:underline">
            Read the full story →
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  )
}
