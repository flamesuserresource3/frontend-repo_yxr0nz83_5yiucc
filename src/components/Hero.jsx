import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-violet-50 via-white to-white">
      <div className="absolute inset-0 opacity-70">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl md:text-5xl"
            >
              Eat better for your symptoms, without the stress
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 text-base leading-relaxed text-gray-700 sm:text-lg"
            >
              Mealistik helps women plan and enjoy food even with low energy, cravings and hectic routines.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row"
            >
              <a
                href="#waitlist"
                className="w-full rounded-full bg-violet-600 px-6 py-3 text-center text-white shadow-lg shadow-violet-300/40 transition hover:bg-violet-700 sm:w-auto"
              >
                Join Waitlist
              </a>
              <a
                href="#features"
                className="w-full rounded-full border border-violet-200 bg-white px-6 py-3 text-center text-violet-700 transition hover:border-violet-300 hover:bg-violet-50 sm:w-auto"
              >
                Learn More
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mx-auto mt-12 grid max-w-5xl grid-cols-3 gap-3 sm:gap-6"
          >
            {/* App mockups row */}
            <MockScreen title="Meal Plans" accent="from-violet-400 to-fuchsia-400" />
            <MockScreen title="Pantry Fix" accent="from-fuchsia-400 to-pink-400" middle />
            <MockScreen title="Hippo AI" accent="from-indigo-400 to-violet-400" />
          </motion.div>
        </div>
      </div>

      {/* Gentle gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-1/2 h-64 w-64 translate-x-1/2 rounded-full bg-violet-300/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-fuchsia-300/20 blur-3xl" />
      </div>
    </section>
  );
}

function MockScreen({ title, accent, middle = false }) {
  return (
    <div className={`relative mx-auto w-full max-w-[260px]` + (middle ? ' -translate-y-1 sm:-translate-y-2' : '')}>
      <div className="relative aspect-[9/19] w-full rounded-3xl border border-violet-100 bg-white p-3 shadow-xl">
        <div className={`absolute inset-x-6 top-6 h-8 rounded-full bg-gradient-to-r ${accent} opacity-80`} />
        <div className="mt-12 space-y-3">
          <div className="h-28 rounded-2xl bg-gradient-to-br from-violet-50 to-fuchsia-50" />
          <div className="h-16 rounded-xl bg-violet-50" />
          <div className="h-16 rounded-xl bg-violet-50" />
        </div>
        <div className="absolute inset-x-0 bottom-3 flex justify-center">
          <div className="h-1.5 w-16 rounded-full bg-gray-200" />
        </div>
      </div>
      <div className="mt-3 text-center text-sm font-medium text-gray-700">{title}</div>
    </div>
  );
}
