import React from 'react';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Free plan',
    price: '$0',
    features: ['Basics to get started'],
    highlight: false
  },
  {
    name: 'Premium plan',
    price: '$14.99/mo',
    features: [
      'Includes personal weekly plans, Pantry Fix, Ask Hippo AI, grocery list sync and symptom friendly meal swaps'
    ],
    highlight: true
  },
  {
    name: 'Family plan',
    price: '$24.99/mo',
    features: ['All premium features for households'],
    highlight: false
  }
];

export default function Pricing() {
  return (
    <section className="bg-gradient-to-b from-white to-violet-50/50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            Flexible plans for every lifestyle
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`rounded-2xl border p-6 shadow-sm ${
                p.highlight
                  ? 'border-violet-200 bg-white ring-2 ring-violet-200'
                  : 'border-violet-100 bg-white'
              }`}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold text-gray-900">{p.name}</h3>
                <div className="text-violet-700">{p.price}</div>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {p.features.map((f) => (
                  <li key={f} className="leading-relaxed">{f}</li>
                ))}
              </ul>
              <div className="mt-6">
                <a
                  href="#waitlist"
                  className={`block w-full rounded-full px-5 py-2.5 text-center text-sm font-medium transition ${
                    p.highlight
                      ? 'bg-violet-600 text-white hover:bg-violet-700 shadow-violet-300/40 shadow-lg'
                      : 'border border-violet-200 text-violet-700 hover:border-violet-300 hover:bg-violet-50'
                  }`}
                >
                  Join Waitlist
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-gray-600">App launching December 2025</p>
      </div>
    </section>
  );
}
