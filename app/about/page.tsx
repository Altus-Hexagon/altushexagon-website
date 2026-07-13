"use client";

import PageTransition from "@/components/PageTransition";
import PageHeader from "@/components/PageHeader";
import CompanyStory from "@/components/about/CompanyStory";
import FounderSection from "@/components/about/FounderSection";
import ValuesSection from "@/components/about/ValuesSection";
import HowWeWork from "@/components/about/HowWeWork";
import Testimonials from "@/components/about/Testimonials";

export default function AboutPage() {
  return (
    <PageTransition>
      <PageHeader
        title="About Us"
        subtitle="Get to know the team behind Altus Hexagon"
      />
      <CompanyStory />
      <FounderSection />
      <ValuesSection />
      <HowWeWork />
      <Testimonials />
    </PageTransition>
  );
}
