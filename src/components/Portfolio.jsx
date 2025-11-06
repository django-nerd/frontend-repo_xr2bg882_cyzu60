import React from 'react';

const items = [
  { id: 1, title: 'HoloCommerce', tag: 'E‑commerce', img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop' },
  { id: 2, title: 'Nebula Labs', tag: 'SaaS', img: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1200&auto=format&fit=crop' },
  { id: 3, title: 'Quantum Media', tag: 'Branding', img: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1200&auto=format&fit=crop' },
  { id: 4, title: 'Aurora AI', tag: 'AI', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop' }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="relative bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">Selected Work</h2>
            <p className="mt-2 max-w-2xl text-white/70">A small taste of recent builds and brand systems.</p>
          </div>
          <a
            href="#contact"
            className="hidden rounded-full border border-white/20 px-5 py-2 text-sm text-white/80 backdrop-blur hover:bg-white/10 md:inline-block"
          >
            Start a project →
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((p) => (
            <article key={p.id} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="flex items-center justify-between p-4">
                <div>
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="text-xs text-white/60">{p.tag}</p>
                </div>
                <span className="text-xs text-white/60">Case study</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
