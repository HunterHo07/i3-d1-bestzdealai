'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-dark-bg text-white">
      <Header />
      
      <section className="section-padding pt-24">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            <p className="text-gray-400">
              Last updated: January 1, 2025
            </p>
          </div>

          <div className="card-glass p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-primary-blue mb-4">1. Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Personal Information</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We collect information you provide directly to us, such as when you create an account, post a deal request, or contact us for support.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Usage Information</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We collect information about how you use our service, including your interactions with features, preferences, and settings.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Device Information</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We collect information about the devices you use to access our service, including hardware model, operating system, and browser type.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-blue mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices, updates, and support messages</li>
                <li>Respond to your comments, questions, and customer service requests</li>
                <li>Communicate with you about products, services, and events</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Detect, investigate, and prevent fraudulent transactions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-blue mb-4">3. Information Sharing</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We may share your information in the following situations:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>With your consent or at your direction</li>
                <li>With vendors, consultants, and other service providers</li>
                <li>To comply with laws or respond to lawful requests</li>
                <li>To protect rights, property, and safety</li>
                <li>In connection with a merger, sale, or asset transfer</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-blue mb-4">4. Data Security</h2>
              <p className="text-gray-300 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-blue mb-4">5. Data Retention</h2>
              <p className="text-gray-300 leading-relaxed">
                We retain your personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-blue mb-4">6. Your Rights</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate information</li>
                <li>Deletion of your personal information</li>
                <li>Restriction of processing</li>
                <li>Data portability</li>
                <li>Objection to processing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-blue mb-4">7. Cookies and Tracking</h2>
              <p className="text-gray-300 leading-relaxed">
                We use cookies and similar tracking technologies to collect and use personal information about you. You can control cookies through your browser settings and other tools.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-blue mb-4">8. International Transfers</h2>
              <p className="text-gray-300 leading-relaxed">
                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-blue mb-4">9. Children's Privacy</h2>
              <p className="text-gray-300 leading-relaxed">
                Our service is not intended for children under 13. We do not knowingly collect personal information from children under 13.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-blue mb-4">10. Changes to This Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-blue mb-4">11. Contact Us</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
                <br />
                Email: privacy@bestzdealaai.com
                <br />
                Address: 123 Innovation Drive, San Francisco, CA 94105
                <br />
                Phone: +1 (555) 123-4567
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
