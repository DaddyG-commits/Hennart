import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import { products } from '@/lib/products'

export default function ShopPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-6xl mx-auto w-full px-5 py-10 space-y-8">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-henna-700">Catalog</p>
            <h1 className="text-3xl sm:text-4xl font-bold mt-1">Shop</h1>
            <p className="text-stone-600 mt-2 max-w-xl">
              Products, services, and wholesale. Order online or by email. Canada Post shipping, or pickup in Victoria, BC.
            </p>
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
      </main>
      <Footer />
    </div>
  )
}
