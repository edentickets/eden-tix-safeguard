import { ScrollArea } from "@/components/ui/scroll-area";

export default function Terms() {
  return (
    <div className="container py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      <ScrollArea className="h-[calc(100vh-300px)] pr-6">
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              By accessing and using Eden's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Service Description</h2>
            <p className="text-gray-300 leading-relaxed">
              Eden provides an event ticketing platform that allows users to create, sell, purchase, and manage digital tickets for events. Our services include event creation, ticket sales, guest list management, and related features.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
            <p className="text-gray-300 leading-relaxed">
              Users must create an account to access certain features. You are responsible for maintaining the confidentiality of your account information and for all activities under your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Event Creation and Ticket Sales</h2>
            <p className="text-gray-300 leading-relaxed">
              Event creators are responsible for providing accurate event information and managing ticket availability. Eden reserves the right to remove events that violate our policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Payments and Refunds</h2>
            <p className="text-gray-300 leading-relaxed">
              All payments are processed securely through our payment providers. Refund policies are set by event creators and must be clearly communicated to ticket purchasers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Prohibited Activities</h2>
            <p className="text-gray-300 leading-relaxed">
              Users may not engage in fraudulent activities, resell tickets without authorization, or use our services for any illegal purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Intellectual Property</h2>
            <p className="text-gray-300 leading-relaxed">
              All content and functionality on Eden is protected by intellectual property rights. Users may not copy or reproduce any part of our service without permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-300 leading-relaxed">
              Eden is not liable for any indirect, incidental, or consequential damages arising from the use of our services or attendance at events listed on our platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Changes to Terms</h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              We reserve the right to modify these terms at any time. Users will be notified of significant changes, and continued use of our services constitutes acceptance of modified terms.
            </p>
          </section>
        </div>
      </ScrollArea>
    </div>
  );
}