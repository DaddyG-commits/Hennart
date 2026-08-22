import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-3xl mx-auto w-full px-5 py-10 space-y-8">
        <div>
          <p className="text-sm font-semibold text-henna-700 uppercase tracking-wide">About us</p>
          <h1 className="text-3xl sm:text-4xl font-bold mt-2">Our henna art story</h1>
        </div>

        <div className="prose prose-stone space-y-4 text-stone-700 leading-relaxed">
          <p>
            Henna Art Canada began in 2007 with henna enthusiast and artist Nitasha in Edmonton, AB.
            In 2023 the business was bought by Karelia, an artist and henna enthusiast in Victoria, BC.
          </p>
          <p>
            Hi, I'm Karelia — my passion for henna and body art started with a friend hennaing me many years ago.
            I was enthralled and addicted to discovering all I could about this wondrous plant and the art it can create.
            I began henna body art at markets and festivals over 11 years ago.
          </p>
          <p>
            Through markets and events I found people wanting to purchase my henna so they could create their own art —
            and I started looking for a way to fill the need for quality henna ingredients and supplies here in Canada.
            As chance would have it, as I began my search for supplies, Nitasha was looking to pass her thriving business
            to another henna enthusiast. Having ordered from her, I knew the quality was high, and I would be proud to continue her mission.
          </p>
          <p>
            It was always the mission of Nitasha and Henna Art Canada to provide quality and organic ingredients and an amazing body art experience.
          </p>
          <p>
            With my knowledge of henna and all I have learned and continue to learn, I intend to share the henna love,
            teach people about using safe henna for the body, and share knowledge, stories, and passion for this artform.
            We also carry other herbs for natural hair dye solutions — I truly believe there is no reason anyone should have to resort
            to cheap, chemical-laden products instead of making their own natural henna paste for body art, hair, or even eyebrows.
          </p>
          <p>
            Please reach out with your questions, comments, and stories of henna. My dream is to create a community where we can all
            come together to share in the magic that is natural henna body art.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Link href="/#shop" className="bg-henna-800 text-white px-6 py-3 rounded-xl font-semibold text-center hover:bg-henna-900">
            Shop supplies
          </Link>
          <Link href="/contact" className="border border-stone-400 px-6 py-3 rounded-xl font-semibold text-center hover:bg-white">
            Contact Karelia
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
