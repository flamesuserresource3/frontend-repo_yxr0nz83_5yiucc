import React from 'react';
import { Calendar, Camera, MapPin, Cookie, Scan, Bot, CheckCircle2, PiggyBank, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Calendar,
    title: 'Personal weekly meal plans',
    desc: 'Simple plans shaped around symptoms, energy and routine.'
  },
  {
    icon: Camera,
    title: 'Pantry Fix suggestions from a quick photo',
    desc: 'Snap your pantry and get helpful ideas to use what you have.'
  },
  {
    icon: MapPin,
    title: 'On the go eating out guidance',
    desc: 'Gentle tips for cafes and takeaways when you are out and about.'
  },
  {
    icon: Cookie,
    title: 'Smart snack ideas for craving moments',
    desc: 'Supportive swaps and satisfying bites when cravings hit.'
  },
  {
    icon: Scan,
    title: 'Fast meal logging by photo or barcode',
    desc: 'Quick captures and scans — done in seconds.'
  },
  {
    icon: Bot,
    title: 'Ask Hippo AI for help with swaps and choices',
    desc: 'Friendly guidance for everyday food decisions.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            Everything you need. Nothing you do not.
          </h2>
          <p className="mt-2 text-gray-700">Designed for real women with real symptoms.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-2xl border border-violet-100 bg-gradient-to-b from-white to-violet-50/40 p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-violet-100 text-violet-700">
                  {React.createElement(f.icon, { size: 22 })}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900">{f.title}</h3>
                  <p className="mt-1 text-sm text-gray-700">{f.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="#features"
            className="rounded-full border border-violet-200 bg-white px-5 py-2.5 text-sm font-medium text-violet-700 transition hover:border-violet-300 hover:bg-violet-50"
          >
            Explore Full Features
          </a>
        </div>

        {/* Trust and benefits */}
        <div className="mt-16">
          <h3 className="text-center text-xl font-semibold text-gray-900">Why women trust Mealistik</h3>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <TrustCard icon={CheckCircle2} title="Feel more in control each week" />
            <TrustCard icon={PiggyBank} title="Save time and money on food" />
            <TrustCard icon={Heart} title="Eat for your body and your symptoms" />
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustCard({ icon: Icon, title }) {
  return (
    <div className="rounded-2xl border border-violet-100 bg-white p-6 text-center shadow-sm">
      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-violet-50 text-violet-700">
        <Icon size={24} />
      </div>
      <p className="text-sm text-gray-800">{title}</p>
    </div>
  );
}
