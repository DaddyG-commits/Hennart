import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto px-5 py-10 space-y-16">
        <section className="space-y-5">
          <p className="text-sm font-semibold tracking-wide text-henna-700 uppercase">Canada · Est. 2007</p>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-stone-900">
            Share the henna love.
          </h1>
          <p className="text-lg text-stone-700 leading-relaxed">
            Quality organic henna, body art supplies, and natural hair dye — so no one has to settle for cheap, chemical-laden products.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/#shop" className="bg-henna-800 text-white px-6 py-3 rounded-xl font-semibold text-center hover:bg-henna-900">
              Shop supplies
            </Link>
            <Link href="/contact" className="border border-stone-400 px-6 py-3 rounded-xl font-semibold text-center hover:bg-white">
              Ask Karelia
            </Link>
          </div>
        </section>

        <section id="story" className="space-y-4">
          <h2 className="text-3xl font-bold">Our henna art story</h2>
          <p className="text-stone-700 leading-relaxed">
            Henna Art Canada began in 2007 with henna enthusiast and artist Nitasha in Edmonton, AB. In 2023 the business was bought by Karelia, an artist and henna enthusiast in Victoria, BC.
          </p>
          <p className="text-stone-700 leading-relaxed">
            Hi, I'm Karelia. My passion for henna and body art started when a friend hennaed me many years ago. I was enthralled — and hooked on this wondrous plant and the art it can create. I began henna body art at markets and festivals over 11 years ago. People wanted to buy my henna so they could create their own art, and I started looking for a way to fill the need for quality henna ingredients and supplies here in Canada.
          </p>
          <p className="text-stone-700 leading-relaxed">
            As chance would have it, Nitasha was looking to pass her thriving business to another henna enthusiast. Having ordered from her, I knew the quality was high, and I would be proud to continue her mission: quality organic ingredients and an amazing body art experience.
          </p>
        </section>

        <section id="learn" className="bg-white border border-stone-200 rounded-3xl p-7 space-y-3">
          <h2 className="text-2xl font-bold">Safe henna. Shared knowledge.</h2>
          <p className="text-stone-700 leading-relaxed">
            With everything I have learned — and keep learning — I want to teach people how to use safe henna for the body, and share the stories and passion behind this artform. We also carry other herbs for natural hair dye. There is no reason anyone should have to resort to cheap chemical products instead of making their own natural henna paste for body art, hair, or even eyebrows.
          </p>
        </section>

        <section id="shop" className="space-y-4">
          <h2 className="text-3xl font-bold">Coming to the shop</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {["Body art henna", "Natural hair dye", "Herbs & supplies"].map((item) => (
              <div key={item} className="bg-white border border-stone-200 rounded-2xl p-5">
                <h3 className="font-semibold">{item}</h3>
                <p className="text-sm text-stone-600 mt-2">Catalog and checkout will connect to Neon next.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold">A community around natural henna</h2>
          <p className="text-stone-700 leading-relaxed">
            Please reach out with questions, comments, and henna stories. The dream is a community where we can share in the magic of natural henna body art.
          </p>
          <Link href="/contact" className="inline-block bg-henna-800 text-white px-6 py-3 rounded-xl font-semibold hover:bg-henna-900">
            Start a conversation
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  )
}
