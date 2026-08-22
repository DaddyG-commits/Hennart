import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-md mx-auto w-full px-5 py-12">
        <div className="bg-white border border-stone-200 rounded-2xl p-7 space-y-5">
          <div>
            <h1 className="text-2xl font-bold">Contact Karelia</h1>
            <p className="text-sm text-stone-600 mt-1">Questions, comments, and henna stories are welcome.</p>
          </div>
          <form className="space-y-4">
            <div>
              <label className="block text-xs font-semibold mb-1">Name</label>
              <input className="w-full border border-stone-300 rounded-xl px-4 py-2.5 text-sm" required />
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1">Email</label>
              <input type="email" className="w-full border border-stone-300 rounded-xl px-4 py-2.5 text-sm" required />
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1">Message</label>
              <textarea rows={5} className="w-full border border-stone-300 rounded-xl px-4 py-2.5 text-sm" required />
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
