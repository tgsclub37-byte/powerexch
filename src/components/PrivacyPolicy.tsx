export default function PrivacyPolicy() {
  const sections = [
    {
      number: '01',
      title: 'Introduction',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
      ),
      content: `At Powerexch, we are committed to protecting your privacy and ensuring you have a positive experience on our platform. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services. By using our platform, you consent to the data practices described in this policy.`,
    },
    {
      number: '02',
      title: 'Information We Collect',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
      ),
      content: `We collect information in the following ways:`,
      list: [
        { label: 'Personal Information', desc: 'Name, email address, phone number, date of birth, address, and payment details provided during registration.' },
        { label: 'Account Information', desc: 'Username, password, account preferences, and betting/transaction history.' },
        { label: 'Technical Information', desc: 'IP address, browser type, device information, and operating system.' },
        { label: 'Usage Data', desc: 'Pages visited, time spent, links clicked, and other browsing behavior on our platform.' },
        { label: 'Cookies & Trackers', desc: 'We use cookies and similar tracking technologies to enhance your experience.' },
      ],
    },
    {
      number: '03',
      title: 'How We Use Your Information',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/></svg>
      ),
      content: `We use the collected information for the following purposes:`,
      bulletList: [
        'To create and manage your account',
        'To process transactions and payments securely',
        'To verify your identity and prevent fraud',
        'To communicate with you about your account and services',
        'To comply with legal and regulatory requirements',
        'To improve our platform and personalize your experience',
        'To send promotional updates (with your explicit consent)',
        'To analyze usage patterns and detect suspicious activity',
      ],
    },
    {
      number: '04',
      title: 'Information Sharing',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.59 13.51 6.83 3.98M15.41 6.51l-6.82 3.98"/></svg>
      ),
      content: `We do not sell, trade, or rent your personal information to third parties. However, we may share your information in the following circumstances:`,
      bulletList: [
        'With service providers who assist in operating our website and business',
        'With payment processors to handle your transactions',
        'When required by law or to protect our legal rights',
        'With regulatory authorities and gaming commissions as required',
        'In case of a business merger, acquisition, or asset sale',
      ],
    },
    {
      number: '05',
      title: 'Data Security',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
      ),
      content: `We implement comprehensive security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These include SSL encryption, secure servers, firewalls, and regular security audits. However, no method of transmission over the Internet is completely secure, and we cannot guarantee absolute security.`,
    },
    {
      number: '06',
      title: 'Your Rights',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
      ),
      content: `You have the following rights regarding your personal information:`,
      bulletList: [
        'The right to access and review your personal data',
        'The right to correct inaccurate or incomplete information',
        'The right to request deletion of your personal data',
        'The right to opt-out of promotional communications at any time',
        'The right to data portability in a structured format',
        'The right to withdraw consent where processing is based on consent',
      ],
    },
    {
      number: '07',
      title: 'Cookies and Tracking',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M8 12h.01M12 8h.01M16 12h.01M12 16h.01"/></svg>
      ),
      content: `We use cookies to enhance your experience on our platform. These cookies help us remember your preferences, understand user behavior, and improve our services. You can control cookie settings through your browser preferences, but disabling cookies may affect the functionality of our platform. We use both session cookies (which expire when you close your browser) and persistent cookies.`,
    },
    {
      number: '08',
      title: "Children's Privacy",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
      ),
      content: `Powerexch is not intended for children under 18 years of age. We do not knowingly collect personal information from minors. If we become aware that a minor has provided us with personal information, we will promptly delete such information and terminate the account. If you believe a minor has registered on our platform, please contact us immediately.`,
    },
    {
      number: '09',
      title: 'Changes to Privacy Policy',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
      ),
      content: `We may update this Privacy Policy from time to time to reflect changes in our practices or for operational, legal, or regulatory reasons. We will notify you of any significant changes by posting the updated Privacy Policy on our website with an updated date. We encourage you to review this policy periodically for any changes.`,
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Hero Header */}
      <div className="relative overflow-hidden pt-32 pb-16 px-5">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-widest mb-6">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            Privacy
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
            Privacy <span className="text-blue-400">Policy</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl">
            Your privacy matters to us. This policy explains how we collect, use, and protect your personal information at Powerexch.
          </p>

          <div className="flex flex-wrap gap-4 mt-8 text-sm text-zinc-500">
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              ~6 min read
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
            className="group relative bg-zinc-900/40 border border-zinc-800/60 rounded-2xl p-8 hover:border-blue-500/20 hover:bg-zinc-900/60 transition-all duration-300"
          >
            <div className="flex items-start gap-6">
              {/* Icon */}
              <div className="hidden sm:flex flex-shrink-0 items-center justify-center w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 mt-0.5">
                {section.icon}
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {section.number}. {section.title}
                </h2>
                <p className="text-zinc-400 leading-relaxed">{section.content}</p>

                {/* Labeled list (for "Information We Collect") */}
                {section.list && (
                  <div className="mt-4 space-y-3">
                    {section.list.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 bg-zinc-800/40 rounded-xl p-3">
                        <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-400 mt-2" />
                        <div>
                          <span className="text-white text-sm font-semibold">{item.label}: </span>
                          <span className="text-zinc-400 text-sm">{item.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Bullet list */}
                {section.bulletList && (
                  <ul className="mt-4 space-y-2">
                    {section.bulletList.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-zinc-400">
                        <svg className="flex-shrink-0 mt-0.5 text-blue-500" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
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
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-900/30 to-zinc-900/60 border border-blue-500/20 rounded-2xl p-8 mt-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="relative">
            <h2 className="text-xl font-bold text-white mb-2">Privacy Concerns?</h2>
            <p className="text-zinc-400 mb-5">
              If you have any questions or concerns about this Privacy Policy or how we handle your data, our team is here to help.
            </p>
            <a
              href="https://wa.me/971523234813"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-blue-500 hover:bg-blue-400 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors"
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
