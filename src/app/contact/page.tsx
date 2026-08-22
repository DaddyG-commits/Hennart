import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-2xl mx-auto w-full px-5 py-12 space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Contact Karelia</h1>
          <p className="text-stone-600 mt-2">Based in Victoria, BC.</p>
        </div>

        <div className="bg-white border border-stone-200 rounded-2xl p-6 space-y-3 text-stone-700">
          <p>Order online or via email. Orders ship with Canada Post, or pick up in the Victoria area.</p>
          <p>
            <strong>For private henna appointments</strong>, email{' '}
            <a href="mailto:kareliasunflower@hotmail.com" className="text-henna-800 font-semibold underline break-all">
              kareliasunflower@hotmail.com
            </a>
          </p>
          <p className="text-sm text-stone-600">Questions, comments, and henna stories are welcome at the same address.</p>
        </div>

        <div className="bg-white border border-stone-200 rounded-2xl p-7 space-y-5">
          <h2 className="text-xl font-bold">Send a message</h2>
          <form className="space-y-4" action="mailto:kareliasunflower@hotmail.com" method="post" encType="text/plain">
            <div>
              <label className="block text-xs font-semibold mb-1">Name</label>
              <input name="name" className="w-full border border-stone-300 rounded-xl px-4 py-2.5 text-sm" required />
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1">Email</label>
              <input type="email" name="email" className="w-full border border-stone-300 rounded-xl px-4 py-2.5 text-sm" required />
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1">Message</label>
              <textarea name="message" rows={5} className="w-full border border-stone-300 rounded-xl px-4 py-2.5 text-sm" required />
            </div>
            <button type="submit" className="w-full bg-henna-800 text-white py-3 rounded-xl font-semibold hover:bg-henna-900">
              Send
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}
