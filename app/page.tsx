"use client";

import PageTransition from "@/components/PageTransition";
import HeroSection from "@/components/home/HeroSection";
import QuickAbout from "@/components/home/QuickAbout";
import ServicesOverview from "@/components/home/ServicesOverview";
import TechBadges from "@/components/home/TechBadges";
import TrustLine from "@/components/home/TrustLine";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <PageTransition>
      <HeroSection />
      <QuickAbout />
      <ServicesOverview />
      <TechBadges />
      <TrustLine />
      <FinalCTA />
    </PageTransition>
  );
}
