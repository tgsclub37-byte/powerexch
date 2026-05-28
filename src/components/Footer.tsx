type Page = 'home' | 'terms' | 'privacy';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="border-t border-zinc-800/50 px-5 py-10">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <button onClick={() => onNavigate('home')} className="flex items-center gap-2.5 cursor-pointer">
          <span className="flex items-center justify-center w-7 h-7 rounded-md bg-emerald-600 text-white">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>
          </span>
          <span className="text-sm font-bold text-zinc-400 font-montserrat">Powerexch</span>
        </button>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-zinc-600">
          <a href="#features" onClick={() => onNavigate('home')} className="hover:text-zinc-400 transition-colors">Features</a>
          <a href="#sports" onClick={() => onNavigate('home')} className="hover:text-zinc-400 transition-colors">Sports</a>
          <a href="#how-it-works" onClick={() => onNavigate('home')} className="hover:text-zinc-400 transition-colors">How It Works</a>
          <a href="#faq" onClick={() => onNavigate('home')} className="hover:text-zinc-400 transition-colors">FAQ</a>
          <a href="#contact" onClick={() => onNavigate('home')} className="hover:text-zinc-400 transition-colors">Contact</a>
          <span className="text-zinc-700">|</span>
          <button
            onClick={() => { onNavigate('terms'); window.scrollTo({ top: 0 }); }}
            className="hover:text-zinc-400 transition-colors cursor-pointer"
          >
            Terms of Service
          </button>
          <button
            onClick={() => { onNavigate('privacy'); window.scrollTo({ top: 0 }); }}
            className="hover:text-zinc-400 transition-colors cursor-pointer"
          >
            Privacy Policy
          </button>
        </div>

        {/* Copyright */}
        <p className="text-xs text-zinc-700 text-center md:text-right">
          &copy; {new Date().getFullYear()} Powerexch. 18+ only. Play responsibly.
        </p>
      </div>
    </footer>
  );
}
