import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Community from './components/Community';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <a
        href="#waitlist"
        className="fixed bottom-5 right-5 z-50 hidden rounded-full bg-violet-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-violet-300/40 transition hover:bg-violet-700 sm:block"
      >
        Join Waitlist
      </a>
      <Header />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Community />
      </main>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-violet-100/70 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🦛</span>
          <span className="font-semibold">Mealistik</span>
        </div>
        <div className="hidden items-center gap-3 sm:flex">
          <a href="#features" className="text-sm text-gray-700 hover:text-violet-700">Features</a>
          <a href="#waitlist" className="text-sm text-gray-700 hover:text-violet-700">Waitlist</a>
          <a href="#" className="text-sm text-gray-700 hover:text-violet-700">Learn More</a>
          <a
            href="#waitlist"
            className="rounded-full bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-700"
          >
            Join Waitlist
          </a>
        </div>
      </div>
    </header>
  );
}

export default App;
