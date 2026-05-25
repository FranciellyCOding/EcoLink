import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/landing/hero-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { BenefitsSection } from "@/components/landing/benefits-section";
import { ImpactSection } from "@/components/landing/impact-section";
import { GamificationSection } from "@/components/landing/gamification-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { PartnersSection } from "@/components/landing/partners-section";
import { CTASection } from "@/components/landing/cta-section";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <BenefitsSection />
      <ImpactSection />
      <GamificationSection />
      <TestimonialsSection />
      <PartnersSection />
      <CTASection />
      <Footer />
    </main>
  );
}
