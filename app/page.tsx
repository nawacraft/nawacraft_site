import React from "react";
import {
  Navbar,
  HeroSection,
  ProblemSolutionSection,
  FlagshipSection,
  ServicesSection,
  TeamSection,
  WhySection,
  FinalCtaSection,
  ContactSection,
  Footer,
} from "@/components/portfolio";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAF9] text-[#111014] selection:bg-[#953553]/15 selection:text-[#953553] font-sans antialiased overflow-x-hidden">
      {/* 1. Sticky Minimal Navigation */}
      <Navbar />

      <main>
        {/* 2. Hero with Playful Minimal Shapes & Animated Text */}
        <HeroSection />

        {/* 3. Problem-to-Solution Strip */}
        <ProblemSolutionSection />

        {/* 4. Flagship Product: Meat Management System & Live Scale Visualizer */}
        <FlagshipSection />

        {/* 5. 6 Client Services */}
        <ServicesSection />

        {/* 6. Founding Team of 9 Specialists */}
        <TeamSection />

        {/* 7. Why Nawacraft (3 Short Points) */}
        <WhySection />

        {/* 8. Final CTA Action */}
        <FinalCtaSection />

        {/* 9. Contact Section with Direct Details & Interactive Form */}
        <ContactSection />
      </main>

      {/* 10. Minimalist Footer */}
      <Footer />
    </div>
  );
}
