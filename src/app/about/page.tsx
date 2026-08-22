import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-3xl mx-auto w-full px-5 py-10 space-y-10">
        <div>
          <p className="text-sm font-semibold text-henna-700 uppercase tracking-wide">About us</p>
          <h1 className="text-3xl sm:text-4xl font-bold mt-2 text-stone-900">Our henna art story</h1>
        </div>

        <div className="space-y-5 text-stone-700 leading-relaxed">
          <p>
            Henna Art Canada began in 2007 with henna enthusiast and artist, Nitasha, in Edmonton, AB.
            In 2023 the business was bought by Karelia, an artist and henna enthusiast in Victoria, BC.
          </p>
          <p>
            Hi, I'm Karelia — my passion for henna and body art started with a friend hennaing me many years ago,
            and I was enthralled and addicted to discovering all I could about this wondrous plant and the art it can create.
            I began henna body art at markets and festivals over 11 years ago. Through markets and events I found people wanting
            to purchase my henna so they could create their own art — and recently started to look for a way to fill the need
            for quality henna ingredients and supplies here in Canada.
          </p>
          <p>
            As chance would have it, as I began my search for supplies, at the same time Nitasha was looking to pass her thriving
            business to another henna enthusiast — and having ordered from her, I knew the quality was high, and I would be proud
            to continue her mission. It was always the mission of Nitasha and Henna Art Canada to provide quality and organic
            ingredients and an amazing body art experience.
          </p>
          <p>
            With my knowledge of henna and all I have learned and continue to learn, I intend to share the henna love, and teach
            people about using safe henna for the body, and sharing all the knowledge and stories, and passion I have for this artform.
            Also, we carry other herbs to offer natural hair dye solutions, which brings me great joy — I am at heart a hippie chick —
            and truly believe there is no reason anyone should have to resort to cheap, chemical laden products instead of making
            their own natural henna paste for body art, natural hair dye, or even eyebrows!
          </p>
          <p>
            Please reach out with your questions and comments and stories of henna — my dream is to create a community where we can
            all come together to share in the magic that is natural henna body art!
          </p>
        </div>

        <figure className="rounded-2xl overflow-hidden border border-stone-200 bg-white">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/Image-public.png"
            alt="Intricate traditional henna design illustration"
            className="w-full h-auto object-contain"
          />
        </figure>

        <section id="what-is-henna" className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">What is henna?</h2>
          <p className="text-stone-700">
            Read more about henna on our{' '}
            <Link href="/blog" className="font-semibold text-henna-800 underline underline-offset-2">
              BLOG
            </Link>
          </p>
          <div className="space-y-4 text-stone-700 leading-relaxed">
            <p>
              Henna, mehndi, heena, or hina is the word for a plant that is grown in the arid climates that range from Northern Africa,
              through India, Pakistan, and even into Southeast Asia. The plant releases an orange dye when mixed in warm environments
              and with acidic liquids. This dye stains the hair, skin, nails and fibers shades of orange to deep brown.
            </p>
            <p>
              The plant is harvested once or twice a year before the monsoon seasons. The leaves are dried and crushed into a powder,
              then sifted and packaged. When used as body art, the henna powder gets mixed with water or lemon juice and essential oils,
              then applied on the skin with a fine tip applicator (cone or bottle with tip). When used for hair dye, the henna powder
              gets mixed with an acidic liquid (tea, water, lemon juice) and applied to the hair.
            </p>
          </div>
        </section>

        <figure className="rounded-2xl overflow-hidden border border-stone-200 bg-white">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/public-image.png"
            alt="Finely sifted natural henna powder on a brass pedestal"
            className="w-full h-auto object-contain mx-auto max-h-[28rem]"
          />
          <figcaption className="text-center text-xs text-stone-500 py-3 px-4">
            Natural henna powder — leaves dried, crushed, and sifted for body art and hair.
          </figcaption>
        </figure>

        <section className="space-y-4 text-stone-700 leading-relaxed">
          <p>
            Henna stays on the skin, hair, nails or fabric for several hours to reveal an orange to brown stain.
            The magic of henna occurs within the first 48 hours of application, where the henna stain darkens
            (because of magic or oxidization). On the skin, the henna stain lightens gradually as the skin exfoliates naturally.
            Henna in the hair is permanent.
          </p>
        </section>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Link href="/shop" className="bg-henna-800 text-white px-6 py-3 rounded-xl font-semibold text-center hover:bg-henna-900">
            Shop supplies
          </Link>
          <Link href="/blog" className="border border-stone-400 px-6 py-3 rounded-xl font-semibold text-center hover:bg-white">
            Read the blog
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
