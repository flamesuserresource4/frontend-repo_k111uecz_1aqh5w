import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full bg-black text-white overflow-hidden" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/sHDPSbszZja1qap3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs sm:text-sm text-white/80">
            Futuristic • Game‑ready • PBR
          </span>
          <h1 className="mt-4 text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05]">
            Premium 3D Models for Games
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-white/80 max-w-2xl">
            Discover high-quality, optimized assets crafted for real-time engines. Level up your worlds with interactive, neon‑infused designs.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#marketplace" className="px-6 py-3.5 rounded-lg text-base font-medium bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 hover:from-indigo-500 hover:via-purple-500 hover:to-blue-500 transition">
              Browse Marketplace
            </a>
            <a href="#pricing" className="px-6 py-3.5 rounded-lg text-base font-medium border border-white/20 hover:bg-white/10 transition">
              Become a Member
            </a>
          </div>
          <div className="mt-6 text-sm sm:text-base text-white/70">
            Black, neon, and futuristic — built for creators.
          </div>
        </div>
      </div>
    </section>
  );
}
