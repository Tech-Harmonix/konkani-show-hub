import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { FooterSection } from "@/components/footer-section";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <FooterSection />
    </div>
  );
};

export default Index;
