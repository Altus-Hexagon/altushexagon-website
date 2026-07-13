"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

function FloatingHexagon({
  className,
  delay = 0,
  size = "w-32 h-32",
  bg = "bg-[#D4AF37]/10",
}: {
  className?: string;
  delay?: number;
  size?: string;
  bg?: string;
}) {
  return (
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 4 + delay, repeat: Infinity, ease: "easeInOut", delay }}
      className={`${size} clip-hexagon ${bg} ${className}`}
    />
  );
}

export default function QuickAbout() {
  return (
    <SectionWrapper id="about-teaser">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <p className="text-[#D4AF37] uppercase tracking-widest text-sm font-semibold mb-4">
            About Us
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-6 leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Building the Future of{" "}
            <span className="gold-text">Digital</span>
          </h2>
          <p className="text-[#A0A8C0] text-lg leading-relaxed mb-8">
            Altus Hexagon is a software house building AI-driven apps, websites,
            and digital experiences. We turn ideas into impactful digital
            products through innovation, creativity, and technology.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#F4C430] font-semibold transition-colors group"
          >
            Learn More
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Decorative Hexagon Graphic */}
        <div className="relative h-72 flex items-center justify-center">
          <FloatingHexagon
            size="w-56 h-56"
            bg="bg-[#D4AF37]/8"
            className="absolute"
            delay={0}
          />
          <FloatingHexagon
            size="w-36 h-36"
            bg="bg-[#1a1f35] border-2 border-[#D4AF37]/20"
            className="absolute -translate-x-20 translate-y-10"
            delay={1}
          />
          <FloatingHexagon
            size="w-24 h-24"
            bg="bg-gradient-to-br from-[#D4AF37]/20 to-[#F4C430]/10"
            className="absolute translate-x-24 -translate-y-12"
            delay={0.5}
          />
          <FloatingHexagon
            size="w-16 h-16"
            bg="bg-[#D4AF37]/15"
            className="absolute translate-x-8 translate-y-20"
            delay={1.5}
          />
          {/* Center dot */}
          <div className="absolute w-4 h-4 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F4C430] shadow-lg shadow-[#D4AF37]/40" />
        </div>
      </div>
    </SectionWrapper>
  );
}
