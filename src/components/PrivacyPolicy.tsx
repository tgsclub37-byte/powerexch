export default function PrivacyPolicy() {
  return (
    <section id="privacy-policy" className="px-5 py-20 bg-zinc-950">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-12">Privacy Policy</h1>
        
        <div className="space-y-8 text-zinc-300">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
            <p>
              At Powerexch, we are committed to protecting your privacy and ensuring you have a positive experience on our platform. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
              and use our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Information We Collect</h2>
            <p className="mb-3">We collect information in the following ways:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Personal Information:</strong> Name, email address, phone number, date of birth, address, and payment information 
                provided during registration and account creation.
              </li>
              <li>
                <strong>Account Information:</strong> Username, password, account preferences, and betting history.
              </li>
              <li>
                <strong>Technical Information:</strong> IP address, browser type, device information, and operating system.
              </li>
              <li>
                <strong>Usage Data:</strong> Pages visited, time spent on pages, links clicked, and other browsing behavior.
              </li>
              <li>
                <strong>Cookies:</strong> We use cookies to enhance your experience and track usage patterns.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
            <p>We use the collected information for the following purposes:</p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li>To create and manage your account</li>
              <li>To process transactions and payments</li>
              <li>To verify your identity and prevent fraud</li>
              <li>To communicate with you about your account and services</li>
              <li>To comply with legal and regulatory requirements</li>
              <li>To improve our platform and services</li>
              <li>To send promotional emails and updates (with your consent)</li>
              <li>To analyze usage patterns and trends</li>
              <li>To detect and prevent fraudulent activities</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Information Sharing</h2>
            <p className="mb-3">
              We do not sell, trade, or rent your personal information to third parties. However, we may share your information in the 
              following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>With service providers who assist in operating our website and conducting business</li>
              <li>With payment processors to process your transactions</li>
              <li>When required by law or to protect our legal rights</li>
              <li>With regulatory authorities and gaming commissions as required</li>
              <li>In case of business merger, acquisition, or asset sale</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Data Security</h2>
            <p>
              We implement comprehensive security measures to protect your personal information from unauthorized access, alteration, 
              disclosure, or destruction. These include encryption, secure servers, and regular security audits. However, no method of 
              transmission over the Internet is completely secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Your Rights</h2>
            <p className="mb-3">You have the following rights regarding your personal information:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>The right to access your personal data</li>
              <li>The right to correct inaccurate information</li>
              <li>The right to request deletion of your data</li>
              <li>The right to opt-out of promotional communications</li>
              <li>The right to data portability</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Cookies and Tracking</h2>
            <p>
              We use cookies to enhance your experience on our platform. These cookies help us remember your preferences, understand 
              user behavior, and improve our services. You can control cookie settings through your browser preferences, but disabling 
              cookies may affect the functionality of our platform.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Third-Party Links</h2>
            <p>
              Our platform may contain links to third-party websites. We are not responsible for the privacy practices or content of 
              these external sites. We encourage you to review their privacy policies before providing any personal information.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">9. Retention of Information</h2>
            <p>
              We retain your personal information for as long as necessary to provide our services, comply with legal obligations, 
              and resolve disputes. You may request the deletion of your data at any time, subject to certain legal and operational constraints.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">10. Children's Privacy</h2>
            <p>
              Powerexch is not intended for children under 18 years of age. We do not knowingly collect personal information from minors. 
              If we become aware that a minor has provided us with personal information, we will promptly delete such information and 
              terminate the child's account.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">11. Changes to Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, 
              or regulatory reasons. We will notify you of any significant changes by posting the updated Privacy Policy on our website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">12. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us via WhatsApp at 
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
