import React, { useState } from 'react';
import { Layers, Cube, Box, Sparkles } from 'lucide-react';

const categories = [
  { key: 'all', name: 'All', icon: Sparkles, gradient: 'from-indigo-600 via-purple-600 to-blue-600' },
  { key: 'props', name: 'Props', icon: Box, gradient: 'from-fuchsia-600 to-purple-600' },
  { key: 'environment', name: 'Environment', icon: Layers, gradient: 'from-cyan-600 to-blue-600' },
  { key: 'vehicles', name: 'Vehicles', icon: Cube, gradient: 'from-amber-500 to-rose-500' },
];

export default function Categories({ selected, onSelect }) {
  const [active, setActive] = useState(selected || 'all');

  const handleSelect = (key) => {
    setActive(key);
    onSelect?.(key);
  };

  return (
    <section id="categories" className="relative bg-black text-white py-14">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_10%,rgba(139,92,246,0.10),transparent_40%),radial-gradient(ellipse_at_70%_0%,rgba(59,130,246,0.10),transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Browse by Category</h2>
            <p className="text-white/70">Find assets tailored to your game.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {categories.map((c) => {
            const Icon = c.icon;
            const isActive = active === c.key;
            return (
              <button
                key={c.key}
                onClick={() => handleSelect(c.key)}
                className={`relative overflow-hidden rounded-xl border p-4 text-left transition focus:outline-none focus:ring-2 focus:ring-indigo-500/60 ${
                  isActive ? 'border-indigo-500/50 bg-white/10' : 'border-white/10 bg-white/5 hover:bg-white/10'
                }`}
              >
                <div className={`absolute -inset-1 opacity-20 blur-xl pointer-events-none bg-gradient-to-r ${c.gradient}`} />
                <div className="relative flex items-center gap-3">
                  <div className={`h-10 w-10 rounded-lg grid place-items-center bg-gradient-to-br ${c.gradient}`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">{c.name}</div>
                    <div className="text-xs text-white/70 capitalize">{c.key}</div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
