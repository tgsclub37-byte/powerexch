const data = [
  {
    title: 'Instant ID via WhatsApp',
    desc: 'No registration forms. Message us on WhatsApp, and your exchange ID is ready in minutes.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />,
  },
  {
    title: 'Secure Transactions',
    desc: 'All deposits and withdrawals are processed through verified payment channels with full encryption.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />,
  },
  {
    title: 'Quick Withdrawals',
    desc: 'Request a withdrawal and receive your funds quickly — no unnecessary delays or hidden hold periods.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />,
  },
  {
    title: 'Live In-Play Markets',
    desc: 'Place bets during matches with odds that update in real time — ball-by-ball, minute-by-minute.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
  },
  {
    title: 'Multiple Sports',
    desc: 'Cricket, football, tennis, basketball, kabaddi, and more — all available from a single platform.',
    icon: <><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" /><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></>,
  },
  {
    title: 'Dedicated Support',
    desc: 'Our support team is available around the clock. Reach out anytime and get a response within minutes.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />,
  },
];

export default function Features() {
  return (
    <section id="features" className="px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-xl mb-14">
          <p className="text-emerald-500 text-xs font-semibold uppercase tracking-widest mb-3">Platform Features</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-montserrat leading-tight mb-3">
            Built around what actually matters
          </h2>
          <p className="text-zinc-500 text-sm leading-relaxed">
            No gimmicks — just a reliable exchange with the features you need to get started and stay in control.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((f, i) => (
            <div key={i} className="rounded-xl border border-zinc-800/80 bg-zinc-900/50 p-6 hover:border-zinc-700 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">{f.icon}</svg>
              </div>
              <h3 className="text-white font-semibold text-[15px] mb-1.5">{f.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
