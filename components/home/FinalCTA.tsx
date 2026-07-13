"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";

export default function FinalCTA() {
  return (
    <SectionWrapper className="relative overflow-hidden">
      {/* Hex pattern overlay */}
      <div className="absolute inset-0 hex-grid-bg opacity-40" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F5F5] mb-6 leading-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Let&apos;s Build Something{" "}
          <span className="gold-text">Together</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-[#A0A8C0] text-lg mb-10"
        >
          Ready to turn your idea into reality? Let&apos;s talk about your project.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-gradient-to-r from-[#D4AF37] to-[#F4C430] text-[#0A0E1A] font-bold px-10 py-4 rounded-full text-base gold-glow hover:shadow-2xl hover:shadow-[#D4AF37]/30 transition-all duration-300"
          >
            Start Your Project Today
          </Link>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
