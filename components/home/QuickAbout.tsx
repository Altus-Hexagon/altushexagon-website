"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

export default function QuickAbout() {
  return (
    <SectionWrapper id="about-teaser" className="bg-navy-dark">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <p className="text-gold uppercase tracking-widest text-sm font-semibold mb-4">
            About Us
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-off-white mb-6 leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Building the Future of{" "}
            <span className="gold-text">Digital</span>
          </h2>
          <p className="text-silver-muted text-lg leading-relaxed mb-8">
            Altus Hexagon is a software house building AI-driven apps, websites,
            and digital experiences. We turn ideas into impactful digital
            products through innovation, creativity, and technology.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-semibold transition-colors group"
          >
            Learn More
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Option A: Rotating Tech Stack Orbit */}
        <div className="relative h-80 sm:h-96 flex items-center justify-center [--orbit-radius:105px] md:[--orbit-radius:140px] overflow-visible">
          {/* Background orbit lines */}
          <div className="absolute w-[210px] h-[210px] md:w-[280px] md:h-[280px] rounded-full border border-gold/10 pointer-events-none" />
          <div className="absolute w-[210px] h-[210px] md:w-[280px] md:h-[280px] rounded-full bg-gradient-to-br from-gold/5 via-transparent to-gold-light/5 blur-sm pointer-events-none" />

          {/* Central Glowing Gold Hexagon */}
          <div className="absolute w-20 h-20 md:w-24 md:h-24 clip-hexagon bg-gradient-to-br from-gold-dark via-gold to-gold-light p-[1.5px] flex items-center justify-center shadow-lg shadow-gold/20 z-10 animate-bounce-subtle">
            <div className="w-full h-full clip-hexagon bg-navy flex items-center justify-center p-2">
              <Image
                src="/logo.png"
                alt="Altus Hexagon Logo"
                width={56}
                height={56}
                className="w-10 h-10 md:w-12 md:h-12 object-contain"
                priority
              />
            </div>
          </div>

          {/* Orbiting Badges */}
          {[
            { name: "Flutter", logo: "https://cdn.simpleicons.org/flutter/02569B", delay: 0 },
            { name: "Android", logo: "https://cdn.simpleicons.org/android/3DDC84", delay: -3.33 },
            { name: "Figma", logo: "https://cdn.simpleicons.org/figma/F24E1E", delay: -6.67 },
            { name: "n8n", logo: "https://cdn.simpleicons.org/n8n/EA4B71", delay: -10 },
            { name: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs/000000", delay: -13.33 },
            { name: "FastAPI", logo: "https://cdn.simpleicons.org/fastapi/009688", delay: -16.67 },
            { name: "PostgreSQL", logo: "https://cdn.simpleicons.org/postgresql/4169E1", delay: -20 },
            { name: "Dart", logo: "https://cdn.simpleicons.org/dart/0175C2", delay: -23.33 },
            { name: "Swift", logo: "https://cdn.simpleicons.org/swift/F05138", delay: -26.67 },
          ].map((tech) => (
            <div
              key={tech.name}
              className="absolute w-11 h-11 md:w-13 md:h-13 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center p-2.5 animate-tech-orbit hover:[animation-play-state:paused] cursor-pointer transition-transform hover:scale-110"
              style={{ animationDelay: `${tech.delay}s` }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  fill
                  sizes="32px"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
