"use client";

import SectionWrapper from "@/components/SectionWrapper";

export default function CompanyStory() {
  return (
    <SectionWrapper>
      <div className="max-w-4xl mx-auto text-center">
        <p className="eyebrow mb-4">
          Our Story
        </p>
        <h2
          className="text-3xl md:text-4xl font-bold text-off-white mb-8"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          About Altus Hexagon
        </h2>
        <p className="text-silver-muted text-lg leading-relaxed max-w-3xl mx-auto">
          Altus Hexagon is a software house building AI-driven apps, websites, and
          digital experiences. We turn ideas into impactful digital products
          through innovation, creativity, and technology. Our team combines deep
          technical expertise with creative thinking to deliver solutions that
          don&apos;t just work — they inspire.
        </p>
        <div className="w-24 gold-divider mx-auto mt-10" />
      </div>
    </SectionWrapper>
  );
}
