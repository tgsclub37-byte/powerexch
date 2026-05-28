export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center px-5 pt-16 overflow-hidden">
      {/* Subtle gradient bg */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(16,185,129,0.08),transparent)]" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <p className="inline-block text-xs font-semibold tracking-widest uppercase text-emerald-500 mb-5 border border-emerald-500/20 rounded-full px-4 py-1.5 bg-emerald-500/5">
          Online Sports Exchange
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.1] tracking-tight text-white font-montserrat mb-5">
          Your Sports.{' '}
          <span className="text-emerald-500">Your Exchange.</span>
        </h1>

        <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-lg mx-auto mb-9">
          Powerexch gives you a fast, secure way to access live sports markets. 
          Get your personal exchange ID and start in minutes — support available around the clock.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://wa.me/971523234813?text=Hi%2C%20I%20would%20like%20a%20Powerexch%20ID"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm px-7 py-3.5 rounded-lg transition-colors"
          >
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a3.8 3.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Get Your ID via WhatsApp
          </a>
          <a
            href="#features"
            className="w-full sm:w-auto inline-flex items-center justify-center text-sm text-zinc-400 hover:text-white font-medium px-7 py-3.5 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-colors"
          >
            See How It Works
          </a>
        </div>

        {/* Small trust line */}
        <div className="mt-12 flex items-center justify-center gap-5 text-zinc-600 text-xs">
          <span className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor" className="text-emerald-600"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
            Secure &amp; Verified
          </span>
          <span className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor" className="text-emerald-600"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/></svg>
            24/7 Support
          </span>
          <span className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor" className="text-emerald-600"><path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"/></svg>
            Instant Setup
          </span>
        </div>
      </div>
    </section>
  );
}
