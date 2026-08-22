'use client'

import { ShoppingBag } from 'lucide-react'
import type { Product } from '@/lib/products'
import { formatCAD } from '@/lib/products'
import { useCart } from '@/lib/cart'

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart()

  return (
    <article className="bg-white border border-stone-200 rounded-2xl overflow-hidden flex flex-col">
      <div className="aspect-[4/3] bg-gradient-to-br from-henna-100 to-stone-100 flex items-center justify-center text-henna-800/40 text-sm font-medium">
        {product.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        ) : (
          <span>Photo coming soon</span>
        )}
      </div>
      <div className="p-4 flex flex-col flex-1 gap-2">
        <p className="text-[11px] uppercase tracking-wide text-henna-700 font-semibold">{product.category}</p>
        <h3 className="font-semibold text-stone-900 leading-snug">{product.name}</h3>
        <p className="text-sm text-stone-600 flex-1">{product.description}</p>
        <div className="flex items-center justify-between pt-2 gap-2">
          <span className="font-bold text-henna-800">{formatCAD(product.price)}</span>
          <button
            type="button"
            onClick={() => addItem(product)}
            className="inline-flex items-center gap-1.5 bg-henna-800 text-white text-sm font-semibold px-3 py-2 rounded-lg hover:bg-henna-900 transition"
          >
            <ShoppingBag className="w-4 h-4" /> Add
          </button>
        </div>
      </div>
    </article>
  )
}
