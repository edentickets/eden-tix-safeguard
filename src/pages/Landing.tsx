import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ClientsSection from "@/components/sections/ClientsSection";
import CTASection from "@/components/sections/CTASection";
import { ReferralCard } from "@/components/referrals/ReferralCard";

export default function Landing() {
  return (
    <div className="min-h-screen bg-eden-dark">
      <HeroSection />
      <FeaturesSection />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <ReferralCard />
      </div>
      <ClientsSection />
      <CTASection />
    </div>
  );
}
