import { ScrollArea } from "@/components/ui/scroll-area";

export default function Privacy() {
  return (
    <div className="container py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <ScrollArea className="h-[calc(100vh-300px)] pr-6">
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
            <p className="text-gray-300 leading-relaxed">
              We collect information you provide directly, including name, email, payment information, and event details. We also automatically collect usage data and device information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-300 leading-relaxed">
              We use collected information to provide and improve our services, process transactions, communicate with users, and ensure platform security. We may also use data for analytics and marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Information Sharing</h2>
            <p className="text-gray-300 leading-relaxed">
              We share information with event creators, service providers, and as required by law. We do not sell personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
            <p className="text-gray-300 leading-relaxed">
              We implement appropriate security measures to protect your information. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Your Rights and Choices</h2>
            <p className="text-gray-300 leading-relaxed">
              You can access, update, or delete your personal information through your account settings. You may also opt-out of marketing communications.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Cookies and Tracking</h2>
            <p className="text-gray-300 leading-relaxed">
              We use cookies and similar technologies to enhance user experience and collect usage data. You can control cookie settings through your browser.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Children's Privacy</h2>
            <p className="text-gray-300 leading-relaxed">
              Our services are not intended for children under 13. We do not knowingly collect information from children under 13.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. International Data Transfers</h2>
            <p className="text-gray-300 leading-relaxed">
              Your information may be transferred and processed in countries other than your own. We ensure appropriate safeguards for international transfers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Changes to Privacy Policy</h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              We may update this privacy policy periodically. We will notify users of significant changes through our platform or email.
            </p>
          </section>
        </div>
      </ScrollArea>
    </div>
  );
}