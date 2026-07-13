"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";
import HexagonBackground from "@/components/HexagonBackground";

const tagline = "Elevating Ideas. Engineering Solutions.".split(" ");

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.5 + i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#0A0E1A]" />
      <HexagonBackground />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.07)_0%,_transparent_70%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Company Name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-widest gold-text leading-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Altus Hexagon
        </motion.h1>

        {/* Tagline */}
        <div className="flex flex-wrap justify-center gap-x-2 mt-6 text-xl md:text-2xl text-[#A0A8C0] tracking-wide">
          {tagline.map((word, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={wordVariants}
              initial="hidden"
              animate="visible"
            >
              {word}
            </motion.span>
          ))}
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#D4AF37] to-[#F4C430] text-[#0A0E1A] font-semibold px-8 py-4 rounded-full gold-glow hover:shadow-2xl hover:shadow-[#D4AF37]/30 transition-all duration-300 text-base"
            >
              Start Your Project
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center border-2 border-[#D4AF37] text-[#D4AF37] font-semibold px-8 py-4 rounded-full hover:bg-[#D4AF37]/10 transition-all duration-300 text-base"
            >
              View Our Work
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-scroll-bounce"
      >
        <ChevronDown className="w-8 h-8 text-[#D4AF37]" />
      </motion.div>
    </section>
  );
}
