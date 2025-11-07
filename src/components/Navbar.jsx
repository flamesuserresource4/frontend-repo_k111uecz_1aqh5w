import React from 'react';
import { Rocket, ShoppingCart, User } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-500 p-[2px]">
              <div className="h-full w-full rounded-md bg-black grid place-items-center">
                <Rocket className="h-5 w-5 text-indigo-400" />
              </div>
            </div>
            <span className="text-white text-lg font-semibold tracking-wide">NeoForge 3D</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#marketplace" className="text-white/80 hover:text-white transition">Marketplace</a>
            <a href="#categories" className="text-white/80 hover:text-white transition">Categories</a>
            <a href="#pricing" className="text-white/80 hover:text-white transition">Pricing</a>
            <a href="#members" className="text-white/80 hover:text-white transition">Members</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm bg-white/5 hover:bg-white/10 text-white border border-white/10 transition">
              <ShoppingCart className="h-4 w-4" />
              <span className="hidden sm:inline">Cart</span>
            </button>
            <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 hover:from-indigo-500 hover:via-purple-500 hover:to-blue-500 text-white transition">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Sign in</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
