import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-3xl mx-auto w-full px-5 py-10 space-y-10">
        <div>
          <p className="text-sm font-semibold text-henna-700 uppercase tracking-wide">Blog</p>
          <h1 className="text-3xl sm:text-4xl font-bold mt-2">Learn about natural henna</h1>
          <p className="text-stone-600 mt-2">Stories, safety tips, and the plant behind the art.</p>
        </div>

        <article className="bg-white border border-stone-200 rounded-2xl overflow-hidden">
          <div className="bg-[#e8f0f8]">
            <Image
              src="/images/henna-design.jpg"
              alt="Henna design illustration"
              width={900}
              height={500}
              className="w-full h-auto object-contain max-h-72"
            />
          </div>
          <div className="p-6 space-y-4">
            <h2 className="text-2xl font-bold">What is henna?</h2>
            <p className="text-stone-700 leading-relaxed">
              Henna, mehndi, heena, or hina is the word for a plant that is grown in the arid climates that range from Northern Africa,
              through India, Pakistan, and even into Southeast Asia. The plant releases an orange dye when mixed in warm environments
              and with acidic liquids. This dye stains the hair, skin, nails and fibers shades of orange to deep brown.
            </p>
            <p className="text-stone-700 leading-relaxed">
              The plant is harvested once or twice a year before the monsoon seasons. The leaves are dried and crushed into a powder,
              then sifted and packaged. For body art, powder is mixed with water or lemon juice and essential oils, then applied with
              a fine tip applicator. For hair, it is mixed with an acidic liquid such as tea, water, or lemon juice.
            </p>
            <div className="rounded-xl overflow-hidden bg-stone-50 border border-stone-100">
              <Image
                src="/images/henna-powder.jpg"
                alt="Natural henna powder"
                width={712}
                height={500}
                className="w-full h-auto object-contain max-h-64 mx-auto"
              />
            </div>
            <p className="text-stone-700 leading-relaxed">
              Henna stays on the skin, hair, nails or fabric for several hours to reveal an orange to brown stain.
              The magic of henna occurs within the first 48 hours of application, where the stain darkens through oxidization.
              On the skin, the stain lightens gradually as the skin exfoliates naturally. Henna in the hair is permanent.
            </p>
            <Link href="/about" className="inline-block text-henna-800 font-semibold hover:underline">
              ← Back to our story
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
