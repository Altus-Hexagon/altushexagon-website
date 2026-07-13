"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden">
      {/* Base background */}
      <div className="absolute inset-0 bg-[#0A0E1A]" />

      {/* Hex grid */}
      <div className="absolute inset-0 hex-grid-bg animate-pulse-glow" />

      {/* Radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.08)_0%,_transparent_70%)]" />

      {/* Decorative hexagons */}
      <div className="absolute top-16 left-12 w-24 h-24 clip-hexagon bg-[#D4AF37]/5 hidden md:block" />
      <div className="absolute bottom-8 right-16 w-16 h-16 clip-hexagon bg-[#D4AF37]/8 hidden md:block" />
      <div className="absolute top-24 right-32 w-10 h-10 clip-hexagon bg-[#F4C430]/10 hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider gold-text"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg text-[#A0A8C0] mt-4 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-24 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#F4C430] mx-auto mt-8"
        />
      </div>
    </section>
  );
}
