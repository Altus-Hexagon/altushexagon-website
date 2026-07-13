"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight, LucideIcon } from "lucide-react";

interface ServiceDetailProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  reversed?: boolean;
  index: number;
}

export default function ServiceDetail({
  title,
  description,
  icon: Icon,
  features,
  reversed = false,
  index,
}: ServiceDetailProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: reversed ? 40 : -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto py-16 ${
        reversed ? "lg:flex lg:flex-row-reverse lg:grid-none" : ""
      }`}
    >
      {/* Graphic side */}
      <div className={`${reversed ? "lg:order-2" : "lg:order-1"}`}>
        <div className="relative w-full max-w-sm mx-auto aspect-square rounded-2xl bg-[#111827] border border-white/5 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 hex-grid-bg opacity-60" />
          {/* Glow */}
          <div className="absolute w-40 h-40 rounded-full bg-[#D4AF37]/10 blur-3xl" />
          <Icon className="w-24 h-24 text-[#D4AF37] relative z-10" />
        </div>
      </div>

      {/* Text side */}
      <div className={`${reversed ? "lg:order-1" : "lg:order-2"}`}>
        <p className="text-[#D4AF37]/50 font-mono text-sm mb-3">
          0{index + 1}
        </p>
        <h3
          className="text-2xl md:text-3xl font-bold text-[#F5F5F5] mb-5 leading-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {title}
        </h3>
        <p className="text-[#A0A8C0] text-lg leading-relaxed mb-7">
          {description}
        </p>
        <ul className="space-y-3 mb-8">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-3 text-[#A0A8C0]">
              <Check className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
              <span className="text-sm">{f}</span>
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#F4C430] font-semibold transition-colors group"
        >
          Get a Quote
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
