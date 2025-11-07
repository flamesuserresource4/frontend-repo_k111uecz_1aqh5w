import React from 'react';
import { Star, Package } from 'lucide-react';

const items = [
  {
    id: 1,
    title: 'Cyber Keypad',
    category: 'Sci‑Fi Props',
    price: 14,
    rating: 4.8,
    img: 'https://images.unsplash.com/photo-1527430253228-e93688616381?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Holo Crate',
    category: 'Loot / Props',
    price: 9,
    rating: 4.6,
    img: 'https://images.unsplash.com/photo-1605901309735-59580b43a5d7?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Drone Mk-II',
    category: 'Vehicles',
    price: 19,
    rating: 4.9,
    img: 'https://images.unsplash.com/photo-1508615039623-a25605d2b022?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Neon Vending',
    category: 'Environment',
    price: 12,
    rating: 4.7,
    img: 'https://images.unsplash.com/photo-1518544801976-3e188f788e2e?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function Marketplace() {
  return (
    <section id="marketplace" className="relative bg-black text-white py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(99,102,241,0.12),transparent_40%),_radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.12),transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Trending Models</h2>
            <p className="text-white/70">Game-ready, PBR-textured, LOD-optimized assets.</p>
          </div>
          <a href="#" className="text-sm text-indigo-400 hover:text-indigo-300">View all →</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <div className="aspect-video overflow-hidden">
                <img src={item.img} alt={item.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-white/60">{item.category}</span>
                  <div className="flex items-center gap-1 text-amber-400">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm">{item.rating}</span>
                  </div>
                </div>
                <h3 className="mt-1 font-semibold">{item.title}</h3>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-lg font-semibold">${item.price}</span>
                  <button className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md bg-white/10 hover:bg-white/20 transition">
                    <Package className="h-4 w-4" />
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
