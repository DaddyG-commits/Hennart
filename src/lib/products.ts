export type Product = {
  id: string
  name: string
  description: string
  price: number
  category: string
  image?: string
}

/** Placeholder products — replace with real photos & prices when provided */
export const products: Product[] = [
  {
    id: 'henna-powder-100g',
    name: 'Organic Body Art Henna Powder',
    description: '100g finely sifted organic Lawsonia inermis for rich, dark body art stains.',
    price: 18.0,
    category: 'Body art',
  },
  {
    id: 'henna-kit-starter',
    name: 'Starter Body Art Kit',
    description: 'Powder, bottles, and applicators — everything to begin safe natural henna.',
    price: 42.0,
    category: 'Kits',
  },
  {
    id: 'hair-henna-200g',
    name: 'Natural Hair Dye Henna',
    description: '200g pure henna for conditioning colour without harsh chemicals.',
    price: 24.0,
    category: 'Hair',
  },
  {
    id: 'indigo-powder',
    name: 'Indigo Powder',
    description: 'Pair with henna for deeper browns and black tones on hair.',
    price: 16.0,
    category: 'Hair',
  },
  {
    id: 'essential-oil-blend',
    name: 'Henna Essential Oil Blend',
    description: 'Skin-safe oils to deepen stain and improve paste flow.',
    price: 14.0,
    category: 'Supplies',
  },
  {
    id: 'applicator-bottles',
    name: 'Applicator Bottle Set',
    description: 'Three precision bottles for fine lines and detailed designs.',
    price: 12.0,
    category: 'Supplies',
  },
]

export function formatCAD(amount: number) {
  return new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
  }).format(amount)
}
