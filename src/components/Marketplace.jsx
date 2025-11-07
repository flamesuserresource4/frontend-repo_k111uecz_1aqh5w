import React, { useMemo, useState } from 'react';
import { Star, Package } from 'lucide-react';

const allItems = [
  {
    id: 1,
    title: 'Cyber Keypad',
    category: 'props',
    categoryLabel: 'Sci‑Fi Props',
    price: 14,
    rating: 4.8,
    polycount: '9.5k',
    formats: ['FBX', 'GLB'],
    img: 'https://images.unsplash.com/photo-1527430253228-e93688616381?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Holo Crate',
    category: 'props',
    categoryLabel: 'Loot / Props',
    price: 9,
    rating: 4.6,
    polycount: '6.2k',
    formats: ['FBX', 'OBJ'],
    img: 'https://images.unsplash.com/photo-1605901309735-59580b43a5d7?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Drone Mk-II',
    category: 'vehicles',
    categoryLabel: 'Vehicles',
    price: 19,
    rating: 4.9,
    polycount: '12.1k',
    formats: ['GLB', 'FBX'],
    img: 'https://images.unsplash.com/photo-1508615039623-a25605d2b022?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Neon Vending',
    category: 'environment',
    categoryLabel: 'Environment',
    price: 12,
    rating: 4.7,
    polycount: '8.7k',
    formats: ['FBX'],
    img: 'https://images.unsplash.com/photo-1518544801976-3e188f788e2e?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Orb Terminal',
    category: 'props',
    categoryLabel: 'Sci‑Fi Props',
    price: 11,
    rating: 4.5,
    polycount: '5.9k',
    formats: ['GLB'],
    img: 'https://images.unsplash.com/photo-1551033541-2075d8363c15?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 6,
    title: 'Street Hologram',
    category: 'environment',
    categoryLabel: 'Environment',
    price: 15,
    rating: 4.8,
    polycount: '10.4k',
    formats: ['FBX', 'GLB'],
    img: 'https://images.unsplash.com/photo-1536766820879-059fec98ec1e?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function Marketplace({ filter }) {
  const [query, setQuery] = useState('');

  const items = useMemo(() => {
    return allItems.filter((i) => {
      const byCategory = !filter || filter === 'all' ? true : i.category === filter;
      const byQuery = query.trim() ? i.title.toLowerCase().includes(query.toLowerCase()) : true;
      return byCategory && byQuery;
    });
  }, [filter, query]);

  return (
    <section id="marketplace" className="relative bg-black text-white py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(99,102,241,0.12),transparent_40%),_radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.12),transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Trending Models</h2>
            <p className="text-white/70">Game-ready, PBR-textured, LOD-optimized assets.</p>
          </div>
          <div className="flex items-center gap-3">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search models..."
              className="w-64 max-w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-sm placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/60"
            />
            <a href="#" className="text-sm text-indigo-400 hover:text-indigo-300">View all →</a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="aspect-video overflow-hidden">
                <img src={item.img} alt={item.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-white/60">{item.categoryLabel}</span>
                  <div className="flex items-center gap-1 text-amber-400">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm">{item.rating}</span>
                  </div>
                </div>
                <h3 className="mt-1 font-semibold text-lg">{item.title}</h3>
                <div className="mt-3 grid grid-cols-2 text-xs text-white/70">
                  <div>Polycount: <span className="text-white">{item.polycount}</span></div>
                  <div className="text-right">Formats: <span className="text-white">{item.formats.join(', ')}</span></div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xl font-semibold">${item.price}</span>
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
