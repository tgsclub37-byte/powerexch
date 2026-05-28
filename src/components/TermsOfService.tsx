export default function TermsOfService() {
  return (
    <section id="terms-of-service" className="px-5 py-20 bg-zinc-950">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-12">Terms of Service</h1>
        
        <div className="space-y-8 text-zinc-300">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using Powerexch, you accept and agree to be bound by the terms and provision of this agreement. 
              These Terms of Service apply to all users of the website and any services offered on the website. 
              If you do not agree to abide by the above, please do not use this service.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Age Requirement</h2>
            <p>
              Powerexch is strictly for users aged 18 years or older. By using our platform, you confirm that you are at least 
              18 years of age and meet all other eligibility requirements. Minors are strictly prohibited from using our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Responsible Gambling</h2>
            <p>
              We are committed to promoting responsible gambling. Users are encouraged to gamble responsibly and within their means. 
              Powerexch is not responsible for any financial losses incurred while using the platform. Please play responsibly and 
              set limits on your spending.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Account Registration</h2>
            <p>
              To use our services, you must create an account and provide accurate, complete, and current information. 
              You are responsible for maintaining the confidentiality of your account credentials and are fully responsible 
              for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of 
              your account or any other breach of security.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">5. User Conduct</h2>
            <p>
              You agree not to use the platform for any unlawful purpose or in violation of any laws or regulations. 
              You shall not:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>Engage in fraudulent or deceptive practices</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Use the platform to harass, abuse, or harm others</li>
              <li>Engage in match-fixing or any form of cheating</li>
              <li>Use automated tools or bots to access the platform</li>
              <li>Share your account with others</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Betting Rules</h2>
            <p>
              All bets placed on Powerexch are subject to our betting rules and regulations. We reserve the right to void any 
              bets that violate our policies, including but not limited to irregular betting patterns, suspicious activities, 
              or bets placed on events that have already concluded or been canceled.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Limitation of Liability</h2>
            <p>
              Powerexch and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive 
              damages resulting from your use of or inability to use the platform or the services provided, even if we have been 
              advised of the possibility of such damages.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Modifications to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting 
              to the website. Your continued use of the platform following the posting of revised Terms means that you accept and 
              agree to the changes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">9. Termination</h2>
            <p>
              We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, 
              including if you breach these Terms of Service. Upon termination, your right to use the platform will cease immediately.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">10. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us via WhatsApp at 
              <a href="https://wa.me/971523234813" className="text-emerald-500 hover:text-emerald-400 ml-1">+971 52 323 4813</a>
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-zinc-800 text-sm text-zinc-500">
            <p>Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
