const steps = [
  {
    num: '1',
    title: 'Send us a message',
    desc: 'Tap the WhatsApp button on this page and send a message saying you would like a Powerexch ID.',
  },
  {
    num: '2',
    title: 'Make your first deposit',
    desc: 'Choose from UPI, bank transfer, or other supported payment methods. The process is quick and straightforward.',
  },
  {
    num: '3',
    title: 'Receive your credentials',
    desc: 'Once your deposit is confirmed, your unique login ID and password are sent directly to your WhatsApp.',
  },
  {
    num: '4',
    title: 'Start using the platform',
    desc: 'Log in, browse live and upcoming markets, and place your first bet. Support is available if you need help.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="px-5 py-20 md:py-28 border-t border-zinc-800/50">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-14">
          <p className="text-emerald-500 text-xs font-semibold uppercase tracking-widest mb-3">Getting Started</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-montserrat leading-tight mb-3">
            Four steps to get going
          </h2>
          <p className="text-zinc-500 text-sm leading-relaxed max-w-md mx-auto">
            The entire process takes a few minutes. No app downloads, no complex sign-up forms.
          </p>
        </div>

        <div className="space-y-4">
          {steps.map((s, i) => (
            <div key={i} className="flex gap-5 rounded-xl border border-zinc-800/80 bg-zinc-900/50 p-5 md:p-6 hover:border-zinc-700 transition-colors">
              <div className="shrink-0 w-9 h-9 rounded-lg bg-emerald-600 text-white text-sm font-bold flex items-center justify-center">
                {s.num}
              </div>
              <div>
                <h3 className="text-white font-semibold text-[15px] mb-1">{s.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
