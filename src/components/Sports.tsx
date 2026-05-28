const sports = [
  { name: 'Cricket', sub: 'IPL · T20 · ODI · Test', icon: '🏏' },
  { name: 'Football', sub: 'Premier League · La Liga · UCL', icon: '⚽' },
  { name: 'Tennis', sub: 'Grand Slams · ATP · WTA', icon: '🎾' },
  { name: 'Basketball', sub: 'NBA · EuroLeague', icon: '🏀' },
  { name: 'Kabaddi', sub: 'Pro Kabaddi League', icon: '🤼' },
  { name: 'Horse Racing', sub: 'Indian & International', icon: '🏇' },
  { name: 'Table Tennis', sub: 'ITTF Events', icon: '🏓' },
  { name: 'Volleyball', sub: 'VNL · Olympics', icon: '🏐' },
];

export default function Sports() {
  return (
    <section id="sports" className="px-5 py-20 md:py-28 border-t border-zinc-800/50">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-xl mb-14">
          <p className="text-emerald-500 text-xs font-semibold uppercase tracking-widest mb-3">Available Markets</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-montserrat leading-tight mb-3">
            All major sports, one platform
          </h2>
          <p className="text-zinc-500 text-sm leading-relaxed">
            Access pre-match and live markets across cricket, football, tennis, and more — with real-time odds you can act on instantly.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {sports.map((s, i) => (
            <div key={i} className="rounded-xl border border-zinc-800/80 bg-zinc-900/50 p-5 flex items-start gap-4 hover:border-zinc-700 transition-colors">
              <span className="text-2xl mt-0.5 shrink-0">{s.icon}</span>
              <div className="min-w-0">
                <p className="text-white font-semibold text-sm truncate">{s.name}</p>
                <p className="text-zinc-500 text-xs mt-0.5 leading-relaxed">{s.sub}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-zinc-600 text-xs mt-6 text-center">
          Additional sports and markets are added regularly. Contact support for the latest list.
        </p>
      </div>
    </section>
  );
}
