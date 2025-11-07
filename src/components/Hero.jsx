import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full bg-black text-white overflow-hidden" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/sHDPSbszZja1qap3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Premium 3D Models for Games
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-xl">
            Discover high-quality, optimized assets crafted for real-time engines. Level up your worlds with futuristic, game-ready models.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#marketplace" className="px-5 py-3 rounded-md bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 hover:from-indigo-500 hover:via-purple-500 hover:to-blue-500 transition">
              Browse Marketplace
            </a>
            <a href="#pricing" className="px-5 py-3 rounded-md border border-white/20 hover:bg-white/10 transition">
              Become a Member
            </a>
          </div>
          <div className="mt-6 text-sm text-white/70">
            Black, neon, and futuristic — built for creators.
          </div>
        </div>
      </div>
    </section>
  );
}
