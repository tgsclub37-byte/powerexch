export default function TermsOfService() {
  const sections = [
    {
      number: '01',
      title: 'Acceptance of Terms',
      content: `By accessing and using Powerexch, you accept and agree to be bound by the terms and provisions of this agreement. These Terms of Service apply to all users of the website and any services offered on the website. If you do not agree to abide by the above, please do not use this service.`,
    },
    {
      number: '02',
      title: 'Age Requirement',
      content: `Powerexch is strictly for users aged 18 years or older. By using our platform, you confirm that you are at least 18 years of age and meet all other eligibility requirements. Minors are strictly prohibited from using our services. We reserve the right to request age verification at any time.`,
    },
    {
      number: '03',
      title: 'Responsible Gambling',
      content: `We are committed to promoting responsible gambling. Users are encouraged to gamble responsibly and within their means. Powerexch is not responsible for any financial losses incurred while using the platform. Please play responsibly and set limits on your spending. If you feel you have a gambling problem, please seek professional help immediately.`,
    },
    {
      number: '04',
      title: 'Account Registration',
      content: `To use our services, you must create an account and provide accurate, complete, and current information. You are responsible for maintaining the confidentiality of your account credentials and are fully responsible for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.`,
    },
    {
      number: '05',
      title: 'User Conduct',
      content: `You agree not to use the platform for any unlawful purpose or in violation of any laws or regulations.`,
      list: [
        'Engage in fraudulent or deceptive practices',
        'Attempt to gain unauthorized access to our systems',
        'Use the platform to harass, abuse, or harm others',
        'Engage in match-fixing or any form of cheating',
        'Use automated tools or bots to access the platform',
        'Share your account credentials with others',
        'Create multiple accounts to circumvent restrictions',
      ],
    },
    {
      number: '06',
      title: 'Betting Rules',
      content: `All bets placed on Powerexch are subject to our betting rules and regulations. We reserve the right to void any bets that violate our policies, including but not limited to irregular betting patterns, suspicious activities, or bets placed on events that have already concluded or been canceled.`,
    },
    {
      number: '07',
      title: 'Deposits & Withdrawals',
      content: `All financial transactions on Powerexch must be conducted through approved payment methods. Deposits are credited to your account after verification. Withdrawal requests are processed within the specified timeframe. We reserve the right to perform identity verification before processing any withdrawal. Any funds suspected of being obtained through fraudulent means may be withheld.`,
    },
    {
      number: '08',
      title: 'Limitation of Liability',
      content: `Powerexch and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the platform or the services provided, even if we have been advised of the possibility of such damages. Our total liability shall not exceed the amount deposited in your account.`,
    },
    {
      number: '09',
      title: 'Modifications to Terms',
      content: `We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to the website. Your continued use of the platform following the posting of revised Terms means that you accept and agree to the changes. We encourage you to review this page periodically.`,
    },
    {
      number: '10',
      title: 'Termination',
      content: `We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including if you breach these Terms of Service. Upon termination, your right to use the platform will cease immediately. Any funds remaining in your account at termination will be handled in accordance with our policies.`,
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Hero Header */}
      <div className="relative overflow-hidden pt-32 pb-16 px-5">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-6">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            Legal
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
            Terms of <span className="text-emerald-400">Service</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl">
            Please read these terms carefully before using Powerexch. By accessing our platform, you agree to be bound by these terms.
          </p>

          <div className="flex flex-wrap gap-4 mt-8 text-sm text-zinc-500">
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              ~5 min read
            </span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-zinc-700/50 to-transparent mx-5" />

      {/* Content */}
      <div className="mx-auto max-w-4xl px-5 py-16 space-y-6">
        {sections.map((section) => (
          <div
            key={section.number}
            className="group relative bg-zinc-900/40 border border-zinc-800/60 rounded-2xl p-8 hover:border-emerald-500/20 hover:bg-zinc-900/60 transition-all duration-300"
          >
            {/* Number badge */}
            <div className="flex items-start gap-6">
              <span className="hidden sm:flex flex-shrink-0 items-center justify-center w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold font-mono mt-0.5">
                {section.number}
              </span>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                  {section.number}. {section.title}
                </h2>
                <p className="text-zinc-400 leading-relaxed">{section.content}</p>
                {section.list && (
                  <ul className="mt-4 space-y-2">
                    {section.list.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-zinc-400">
                        <svg className="flex-shrink-0 mt-0.5 text-emerald-500" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* Contact Card */}
        <div className="relative overflow-hidden bg-gradient-to-br from-emerald-900/30 to-zinc-900/60 border border-emerald-500/20 rounded-2xl p-8 mt-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="relative">
            <h2 className="text-xl font-bold text-white mb-2">Questions about these Terms?</h2>
            <p className="text-zinc-400 mb-5">
              If you have any questions about these Terms of Service, our support team is ready to help you.
            </p>
            <a
              href="https://wa.me/971523234813"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-zinc-900 font-semibold text-sm px-6 py-3 rounded-xl transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Contact via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
