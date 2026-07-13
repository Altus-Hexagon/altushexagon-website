"use client";

import SectionWrapper from "@/components/SectionWrapper";

export default function CompanyStory() {
  return (
    <SectionWrapper>
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-[#D4AF37] uppercase tracking-widest text-sm font-semibold mb-4">
          Our Story
        </p>
        <h2
          className="text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-8"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          About Altus Hexagon
        </h2>
        <p className="text-[#A0A8C0] text-lg leading-relaxed max-w-3xl mx-auto">
          Altus Hexagon is a software house building AI-driven apps, websites, and
          digital experiences. We turn ideas into impactful digital products
          through innovation, creativity, and technology. Our team combines deep
          technical expertise with creative thinking to deliver solutions that
          don&apos;t just work — they inspire.
        </p>
        <div className="w-24 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#F4C430] mx-auto mt-10" />
      </div>
    </SectionWrapper>
  );
}
