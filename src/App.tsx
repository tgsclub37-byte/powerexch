import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Sports from './components/Sports';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Navbar />
      <Hero />
      <Features />
      <Sports />
      <HowItWorks />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
