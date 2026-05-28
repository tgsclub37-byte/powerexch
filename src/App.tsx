import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Sports from './components/Sports';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import TermsOfService from './components/TermsOfService';
import PrivacyPolicy from './components/PrivacyPolicy';

type Page = 'home' | 'terms' | 'privacy';

export default function App() {
  const [page, setPage] = useState<Page>('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  // Allow hash-based navigation from footer links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#terms-of-service') setPage('terms');
      else if (hash === '#privacy-policy') setPage('privacy');
      else setPage('home');
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Navbar onNavigate={setPage} />

      {page === 'home' && (
        <>
          <Hero />
          <Features />
          <Sports />
          <HowItWorks />
          <FAQ />
          <Contact />
        </>
      )}

      {page === 'terms' && <TermsOfService />}
      {page === 'privacy' && <PrivacyPolicy />}

      <Footer onNavigate={setPage} />
      <WhatsAppButton />
    </div>
  );
}
