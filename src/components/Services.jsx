import React from 'react';
import { Brain, PenTool, Cpu, Search } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'AI Integration',
    desc: 'Automate workflows, build smart assistants, and personalize experiences.'
  },
  {
    icon: PenTool,
    title: 'Branding',
    desc: 'Identity systems, visual language, and premium guidelines for trust.'
  },
  {
    icon: Cpu,
    title: 'Web Design & Automation',
    desc: 'Fast, accessible websites with connected automations that convert.'
  },
  {
    icon: Search,
    title: 'SEO',
    desc: 'Technical SEO, content strategy, and analytics for measurable growth.'
  }
];

const Services = () => {
  return (
    <section id="services" className="relative bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-semibold md:text-4xl">Services</h2>
        <p className="mt-2 max-w-2xl text-white/70">
          Outcome-focused capabilities designed to scale your brand.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:bg-white/10"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-fuchsia-500 to-cyan-500 text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
