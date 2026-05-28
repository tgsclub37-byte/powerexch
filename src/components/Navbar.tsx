import { useState, useEffect } from 'react';

const links = [
  { label: 'Features', href: '#features' },
  { label: 'Sports', href: '#sports' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${scrolled ? 'bg-zinc-950/90 backdrop-blur-sm border-b border-zinc-800/60' : ''}`}>
      <div className="mx-auto max-w-6xl px-5 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 select-none">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-600 text-white">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>
          </span>
          <span className="text-lg font-extrabold tracking-tight text-white font-montserrat">Powerexch</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-zinc-400 hover:text-white transition-colors">{l.label}</a>
          ))}
          <a href="https://wa.me/971523234813?text=Hi%2C%20I%20would%20like%20a%20Powerexch%20ID" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-zinc-900 bg-emerald-500 hover:bg-emerald-400 px-5 py-2 rounded-lg transition-colors">Get Started</a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-zinc-400 hover:text-white" aria-label="Menu">
          {open ? (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
          ) : (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-zinc-950 border-t border-zinc-800/60 px-5 pb-5 pt-3 space-y-1">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-2.5 text-zinc-300 hover:text-white text-sm">{l.label}</a>
          ))}
          <a href="https://wa.me/971523234813?text=Hi%2C%20I%20would%20like%20a%20Powerexch%20ID" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="block text-center mt-3 text-sm font-semibold text-zinc-900 bg-emerald-500 hover:bg-emerald-400 px-5 py-2.5 rounded-lg transition-colors">Get Started</a>
        </div>
      )}
    </nav>
  );
}
