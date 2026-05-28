import { useState } from 'react';

const items = [
  {
    q: 'What is Powerexch?',
    a: 'Powerexch is an online sports exchange platform that lets you access live and pre-match markets across cricket, football, tennis, and other sports.',
  },
  {
    q: 'How do I create an account?',
    a: 'Tap the WhatsApp button on our website and message us. After a quick deposit, your login ID and password will be sent to you directly.',
  },
  {
    q: 'Is it safe to use?',
    a: 'Yes. All transactions are processed through verified payment channels and your personal data is handled with standard encryption protocols.',
  },
  {
    q: 'How fast are withdrawals?',
    a: 'Withdrawal requests are typically processed within a short time. The exact duration depends on your payment method, but most are completed quickly.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We support UPI, net banking, PhonePe, Google Pay, Paytm, and other popular Indian payment options.',
  },
  {
    q: 'Can I bet during a live match?',
    a: 'Yes. Our platform supports live in-play betting with real-time odds updates across all supported sports.',
  },
  {
    q: 'Is there a minimum deposit?',
    a: 'Minimum deposit amounts may vary. Contact our WhatsApp support for the latest details on deposit options.',
  },
  {
    q: 'How can I reach customer support?',
    a: 'Our support team is available 24/7 on WhatsApp. You can also reach us through the contact section on this page.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="px-5 py-20 md:py-28 border-t border-zinc-800/50">
      <div className="mx-auto max-w-2xl">
        <div className="text-center mb-14">
          <p className="text-emerald-500 text-xs font-semibold uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-montserrat leading-tight mb-3">
            Common questions
          </h2>
        </div>

        <div className="divide-y divide-zinc-800/70">
          {items.map((item, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left group"
              >
                <span className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors pr-4">{item.q}</span>
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className={`shrink-0 text-zinc-500 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && (
                <p className="text-zinc-500 text-sm leading-relaxed pb-5 -mt-1">{item.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
