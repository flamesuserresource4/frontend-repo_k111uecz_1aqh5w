import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Free Explorer',
    price: '$0',
    desc: 'Browse and purchase individual assets',
    features: ['Basic downloads', 'Community support', 'Commercial license per item'],
    cta: 'Get started',
    highlighted: false,
  },
  {
    name: 'Pro Member',
    price: '$19/mo',
    desc: 'Unlimited downloads from member library',
    features: ['Unlimited member assets', 'Early access drops', 'License for 1 project / month', 'Priority support'],
    cta: 'Start membership',
    highlighted: true,
  },
  {
    name: 'Studio+',
    price: '$49/mo',
    desc: 'For teams shipping games at scale',
    features: ['All Pro features', 'Team seats (up to 5)', 'Extended licenses', 'Private requests'],
    cta: 'Contact sales',
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-black text-white py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.08),transparent_50%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Memberships for creators</h2>
          <p className="text-white/70 mt-2">Get unlimited access to a curated library with a gaming-first aesthetic.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div key={tier.name} className={`rounded-2xl border ${tier.highlighted ? 'border-indigo-500/40 bg-gradient-to-b from-indigo-500/10 to-purple-500/10' : 'border-white/10 bg-white/5'} p-6 flex flex-col`}>
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{tier.name}</h3>
                <p className="mt-1 text-white/70">{tier.desc}</p>
                <div className="mt-4 text-3xl font-extrabold">{tier.price}</div>
                <ul className="mt-6 space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-white/90">
                      <Check className="h-5 w-5 text-indigo-400 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button className={`mt-8 w-full rounded-md py-3 text-sm font-medium transition ${tier.highlighted ? 'bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 hover:from-indigo-500 hover:via-purple-500 hover:to-blue-500' : 'bg-white/10 hover:bg-white/20'}`}>
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
