import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', type: 'Web Design', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, simulate success
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="relative bg-black py-20 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-semibold md:text-4xl">Let’s build something remarkable</h2>
        <p className="mt-2 max-w-2xl text-white/70">Tell us about your project. We’ll reply within 24 hours.</p>

        <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          <input
            className="rounded-xl border border-white/10 bg-white/5 p-3 outline-none placeholder-white/50 focus:border-fuchsia-400"
            placeholder="Your name" name="name" value={form.name} onChange={handleChange} required
          />
          <input
            className="rounded-xl border border-white/10 bg-white/5 p-3 outline-none placeholder-white/50 focus:border-fuchsia-400"
            placeholder="Email" type="email" name="email" value={form.email} onChange={handleChange} required
          />
          <select
            className="rounded-xl border border-white/10 bg-white/5 p-3 outline-none placeholder-white/50 focus:border-fuchsia-400 md:col-span-2"
            name="type" value={form.type} onChange={handleChange}
          >
            <option>Web Design</option>
            <option>AI Integration</option>
            <option>Branding</option>
            <option>Automation</option>
            <option>SEO</option>
          </select>
          <textarea
            rows={5}
            className="md:col-span-2 rounded-xl border border-white/10 bg-white/5 p-3 outline-none placeholder-white/50 focus:border-fuchsia-400"
            placeholder="Tell us about your goals, timeline, and budget range"
            name="message" value={form.message} onChange={handleChange} required
          />
          <div className="md:col-span-2 flex items-center justify-between">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-white/90"
            >
              <Send className="h-4 w-4" /> Request a quote
            </button>
            {sent && <span className="text-sm text-emerald-400">Message sent — we’ll be in touch!</span>}
          </div>
        </form>

        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/70">
          <a href="https://wa.me/" target="_blank" rel="noreferrer" className="hover:text-white">WhatsApp</a>
          <a href="https://www.instagram.com/novastudioofficial" target="_blank" rel="noreferrer" className="hover:text-white">Instagram</a>
          <a href="https://www.facebook.com/share/1DTEM3ZzdL/" target="_blank" rel="noreferrer" className="hover:text-white">Facebook</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
