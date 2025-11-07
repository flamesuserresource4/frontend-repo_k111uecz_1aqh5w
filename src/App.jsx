import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marketplace from './components/Marketplace';
import Pricing from './components/Pricing';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Navbar />
      <Hero />
      <Marketplace />
      <Pricing />
      <footer className="border-t border-white/10 bg-black/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm">© {new Date().getFullYear()} NeoForge 3D. All rights reserved.</p>
            <div className="flex items-center gap-4 text-sm text-white/70">
              <a href="#" className="hover:text-white">Terms</a>
              <span className="opacity-40">•</span>
              <a href="#" className="hover:text-white">Privacy</a>
              <span className="opacity-40">•</span>
              <a href="#" className="hover:text-white">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
