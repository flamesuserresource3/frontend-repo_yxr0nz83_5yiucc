import React from 'react';
import { motion } from 'framer-motion';
import { Star, Instagram, Twitter, Facebook, Send } from 'lucide-react';

export default function Community() {
  return (
    <section className="bg-white">
      <WaitlistCTA />
      <Testimonials />
      <Footer />
    </section>
  );
}

function WaitlistCTA() {
  return (
    <div id="waitlist" className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-violet-50 to-fuchsia-50 p-6 sm:p-10">
        <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-3">
          <div className="sm:col-span-2">
            <h3 className="text-xl font-semibold text-gray-900">Be first to try Mealistik</h3>
            <p className="mt-1 text-sm text-gray-700">Join our early access community</p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3"
            >
              <input
                type="text"
                name="name"
                aria-label="Name"
                placeholder="Name"
                className="w-full rounded-xl border border-violet-200 bg-white px-4 py-3 text-sm outline-none focus:border-violet-400"
                required
              />
              <input
                type="email"
                name="email"
                aria-label="Email"
                placeholder="Email"
                className="w-full rounded-xl border border-violet-200 bg-white px-4 py-3 text-sm outline-none focus:border-violet-400"
                required
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-3 text-sm font-medium text-white shadow-lg shadow-violet-300/40 transition hover:bg-violet-700"
              >
                <Send size={16} /> Join Waitlist
              </button>
            </form>
            <p className="mt-3 text-xs text-gray-600">We keep forms short and simple. No spam. Unsubscribe anytime.</p>
          </div>
          <div className="flex items-center justify-center">
            {/* QR placeholder */}
            <div className="flex h-40 w-40 items-center justify-center rounded-2xl border-2 border-dashed border-violet-300 bg-white">
              <div className="grid h-28 w-28 grid-cols-6 gap-1">
                {Array.from({ length: 36 }).map((_, i) => (
                  <div key={i} className={`h-3 w-3 ${i % 3 === 0 ? 'bg-violet-700' : 'bg-violet-200'}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Testimonials() {
  const items = [
    {
      quote: 'I spend way less time planning and more time enjoying meals. So much less decision fatigue.',
      author: 'Maya, Brisbane'
    },
    {
      quote: 'Cravings feel manageable now. The snack ideas and swaps are kind and realistic.',
      author: 'Tash, Hobart'
    },
    {
      quote: 'I finally feel supported rather than judged. It fits around my symptoms and busy weeks.',
      author: 'Ella, Perth'
    }
  ];
  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h3 className="text-xl font-semibold text-gray-900">Real results for real women</h3>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {items.map((t, i) => (
          <motion.div
            key={t.author}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="rounded-2xl border border-violet-100 bg-white p-5 shadow-sm"
          >
            <div className="mb-2 flex items-center gap-1 text-violet-600">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} size={16} fill="#7c3aed" color="#7c3aed" />
              ))}
            </div>
            <p className="text-sm text-gray-800">“{t.quote}”</p>
            <p className="mt-3 text-xs text-gray-600">{t.author}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-violet-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 text-violet-700">
              <span className="text-2xl">🦛</span>
              <span className="text-lg font-semibold">Mealistik</span>
            </div>
            <p className="mt-2 text-sm text-gray-700">Your personal food companion</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li><a className="hover:text-violet-700" href="#">About</a></li>
              <li><a className="hover:text-violet-700" href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Legal</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li><a className="hover:text-violet-700" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-violet-700" href="#">Terms</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Stay in the loop</h4>
            <div className="mt-3 flex items-center gap-3">
              <a aria-label="Instagram" href="#" className="rounded-full bg-violet-50 p-2 text-violet-700 transition hover:bg-violet-100"><Instagram size={18} /></a>
              <a aria-label="Twitter" href="#" className="rounded-full bg-violet-50 p-2 text-violet-700 transition hover:bg-violet-100"><Twitter size={18} /></a>
              <a aria-label="Facebook" href="#" className="rounded-full bg-violet-50 p-2 text-violet-700 transition hover:bg-violet-100"><Facebook size={18} /></a>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="mt-4 flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-xl border border-violet-200 px-4 py-2.5 text-sm outline-none focus:border-violet-400"
              />
              <button className="rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-violet-700">Subscribe</button>
            </form>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-gray-500">© {new Date().getFullYear()} Mealistik. All rights reserved.</p>
      </div>
    </footer>
  );
}
