"use client";

import { motion } from "framer-motion";

interface ProjectCardProps {
  name: string;
  description: string;
  tags: string[];
  gradient: string;
  comingSoon?: boolean;
}

export default function ProjectCard({
  name,
  description,
  tags,
  gradient,
  comingSoon = false,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group relative rounded-2xl overflow-hidden bg-[#111827] border border-white/5 hover:border-[#D4AF37]/30 transition-all duration-300"
    >
      {/* Gradient header */}
      <div className="relative h-48 overflow-hidden">
        <div
          className="absolute inset-0 group-hover:scale-105 transition-transform duration-500"
          style={{ background: gradient }}
        />
        <div className="absolute inset-0 hex-grid-bg opacity-30" />

        {/* Coming Soon badge */}
        {comingSoon && (
          <div className="absolute top-3 right-3 bg-[#D4AF37]/20 backdrop-blur-sm text-[#D4AF37] text-xs font-semibold px-3 py-1 rounded-full border border-[#D4AF37]/30">
            Coming Soon
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[#0A0E1A]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button className="border border-[#D4AF37] text-[#D4AF37] px-5 py-2 rounded-full text-sm hover:bg-[#D4AF37] hover:text-[#0A0E1A] transition-all duration-200 font-semibold">
            View Details
          </button>
        </div>
      </div>

      {/* Card body */}
      <div className="p-6">
        <h3
          className="font-bold text-lg text-[#F5F5F5] mb-2"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {name}
        </h3>
        <p className="text-sm text-[#A0A8C0] mb-5 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-[#1a1f35] text-[#A0A8C0] px-3 py-1 rounded-full border border-white/5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
