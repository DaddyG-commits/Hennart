export type Product = {
  id: string
  name: string
  description: string
  price: number
  priceMax?: number
  category: string
  image?: string
}

export const products: Product[] = [
  {
    id: 'organic-henna-2022',
    name: 'SALE 2022 natural organic henna powder',
    description: '100g organic Lawsonia inermis. Super sifted body art quality powder for hair dye and body art.',
    price: 7.5,
    category: 'Powder',
    image: '/products/organic-henna-2022.jpg',
  },
  {
    id: 'jamila-cones',
    name: 'Jamila Henna Cones',
    description: 'Ready-to-use Jamila henna cones. Price varies by quantity.',
    price: 8,
    priceMax: 35,
    category: 'Cones',
    image: '/products/gentle-cones.jpg',
  },
  {
    id: 'gentle-cones',
    name: 'Gentle Henna Cones',
    description: 'Gentle formula henna cones. Price varies by quantity.',
    price: 8,
    priceMax: 35,
    category: 'Cones',
    image: '/products/gentle-cones.jpg',
  },
  {
    id: 'hypafix-tape',
    name: 'Hypafix Tape',
    description: 'Transfer tape for henna and jagua stencil work.',
    price: 1.25,
    category: 'Supplies',
    image: '/products/hypafix-tape.jpg',
  },
  {
    id: 'mehndi-look-book',
    name: 'Complete Mehndi Look Book',
    description: 'Design booklet with sample mehndi looks for hands.',
    price: 1,
    category: 'Books',
    image: '/products/mehndi-look-book.jpg',
  },
  {
    id: 'jamila-powder',
    name: 'Jamila Henna Powder 2024',
    description: 'Superior quality Jamila henna from Lahore, Pakistan.',
    price: 3.5,
    priceMax: 10,
    category: 'Powder',
    image: '/products/jamila-powder.jpg',
  },
  {
    id: 'hennagua-diy-kit',
    name: 'Hennagua DIY Kit',
    description: 'Organic henna, jagua juice, essential oil, designs, and mixing guide.',
    price: 45,
    category: 'Kits',
    image: '/products/hennagua-diy-kit.jpg',
  },
  {
    id: 'bridal-ebook',
    name: 'Bridal Henna Inspirations Volume 1 & 2 e-book',
    description: 'Digital bridal henna inspiration volumes 1 and 2.',
    price: 1,
    category: 'Books',
    image: '/products/bridal-ebook.jpg',
  },
  {
    id: 'bulk-henna-kit',
    name: 'Bulk Henna Kit',
    description: 'Bulk pre-filled henna cones for events and artists.',
    price: 29,
    category: 'Kits',
    image: '/products/bulk-henna-kit.jpg',
  },
  {
    id: 'cajeput-oil',
    name: 'Cajeput Essential Oil',
    description: 'Melaleuca cajuputi essential oil for henna paste.',
    price: 5,
    priceMax: 22,
    category: 'Oils',
    image: '/products/cajeput-oil.jpg',
  },
  {
    id: 'indo-arabic-ebook',
    name: 'Indo-Arabic Bails and Bracelets e-book',
    description: 'Digital design book of Indo-Arabic bails and bracelets.',
    price: 1,
    category: 'Books',
    image: '/products/indo-arabic-ebook.jpg',
  },
  {
    id: 'starter-kit',
    name: 'Starter Henna Kit',
    description: '50g henna, oil blend, and 10 pre-rolled cello cones.',
    price: 14.99,
    category: 'Kits',
    image: '/products/starter-kit.jpg',
  },
  {
    id: 'organic-indigo',
    name: 'Organic Indigo Powder',
    description: '100g Indigofera tinctoria for brown-to-black hair colour.',
    price: 9.99,
    category: 'Hair',
    image: '/products/organic-indigo.jpg',
  },
  {
    id: 'beginner-kit',
    name: 'Beginner Do-it-Yourself Kit',
    description: 'Beginner kit with henna powder, squeeze bottle, tip, and oil.',
    price: 14.99,
    category: 'Kits',
    image: '/products/beginner-kit.jpg',
  },
  {
    id: 'hennagua-cones',
    name: 'Hennagua Cones',
    description: 'Fresh handmade henna cones with tips and design card. Price by quantity.',
    price: 9,
    priceMax: 50,
    category: 'Cones',
    image: '/products/hennagua-cones.jpg',
  },
  {
    id: 'organic-henna-powder',
    name: 'Organic Henna Powder',
    description: '100g triple sifted body art quality Lawsonia inermis.',
    price: 4,
    priceMax: 9.99,
    category: 'Powder',
    image: '/products/organic-henna-powder.jpg',
  },
  {
    id: 'signature-cones',
    name: 'Signature Henna Cones',
    description: 'Signature and lavender henna cones. Price varies by quantity.',
    price: 8,
    priceMax: 35,
    category: 'Cones',
    image: '/products/signature-cones.jpg',
  },
  {
    id: 'jagua-gel',
    name: 'Jagua gel',
    description: 'Ready jagua gel cone and bottle for deep blue-black body art.',
    price: 9,
    category: 'Jagua',
    image: '/products/jagua-gel.jpg',
  },
  {
    id: 'jagua-juice',
    name: 'Jagua Juice',
    description: 'Genipa americana jagua juice. Price varies by size.',
    price: 5,
    priceMax: 145,
    category: 'Jagua',
    image: '/products/jagua-juice.jpg',
  },
]

export function formatCAD(amount: number) {
  return new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
  }).format(amount)
}

export function formatPrice(product: Product) {
  if (product.priceMax != null) {
    return `${formatCAD(product.price)} – ${formatCAD(product.priceMax)}`
  }
  return formatCAD(product.price)
}
