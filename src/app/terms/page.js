'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-dark-bg text-white">
      <Header />
      
      <section className="section-padding pt-24">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Terms of <span className="text-gradient">Service</span>
            </h1>
            <p className="text-gray-400">
              Last updated: January 1, 2025
            </p>
          </div>

          <div className="card-glass p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-primary-blue mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                By accessing and using BestzDealAi ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-blue mb-4">2. Description of Service</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                BestzDealAi is an AI-powered reverse marketplace platform that allows:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Buyers to post requests for products or services</li>
                <li>Sellers to respond with competitive offers</li>
                <li>AI-powered matching between buyers and sellers</li>
                <li>Secure communication and transaction facilitation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-blue mb-4">3. User Accounts</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                To access certain features of the Service, you must register for an account. You agree to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and update your account information</li>
                <li>Keep your password secure and confidential</li>
                <li>Accept responsibility for all activities under your account</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-blue mb-4">4. Acceptable Use</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You agree not to use the Service to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Post false, misleading, or fraudulent content</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Attempt to gain unauthorized access to the platform</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-blue mb-4">5. Privacy Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-blue mb-4">6. Limitation of Liability</h2>
              <p className="text-gray-300 leading-relaxed">
                BestzDealAi shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-blue mb-4">7. Changes to Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-blue mb-4">8. Contact Information</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
                <br />
                Email: legal@bestzdealaai.com
                <br />
                Address: 123 Innovation Drive, San Francisco, CA 94105
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
