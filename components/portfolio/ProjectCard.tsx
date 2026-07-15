"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, PlayCircle } from "lucide-react";

interface ProjectCardProps {
  name: string;
  role: string;
  description: string;
  tags: string[];
  gradient: string;
  image: string;
  liveUrl?: string;
  demoUrl?: string;
}

export default function ProjectCard({
  name,
  role,
  description,
  tags,
  gradient,
  image,
  liveUrl,
  demoUrl,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group relative rounded-2xl overflow-hidden bg-surface border border-white/5 hover:border-gold/30 transition-all duration-300 flex flex-col h-full"
    >
      {/* Banner */}
      <div
        className="relative h-40 sm:h-44 overflow-hidden shrink-0"
        style={{ background: gradient }}
      >
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Shimmer sweep on hover */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />

        <div className="absolute top-3 left-4 right-4">
          <span className="inline-block bg-charcoal/60 backdrop-blur-sm text-gold-light text-xs font-semibold px-3 py-1 rounded-full border border-gold/20">
            {role}
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="p-6 flex flex-col grow">
        <h3
          className="font-bold text-lg text-off-white mb-2"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {name}
        </h3>
        <p className="text-sm text-silver-muted mb-5 leading-relaxed grow">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-surface-elevated text-silver-muted px-3 py-1 rounded-full border border-white/5"
            >
              {tag}
            </span>
          ))}
        </div>

        {(liveUrl || demoUrl) && (
          <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t border-white/5">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-charcoal bg-gradient-to-r from-gold to-gold-light px-4 py-2 rounded-full hover:shadow-lg hover:shadow-gold/20 transition-all duration-300 hover:scale-105"
              >
                <ExternalLink size={15} />
                Live Project
              </a>
            )}
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold border border-gold/40 px-4 py-2 rounded-full hover:bg-gold hover:text-charcoal transition-all duration-200"
              >
                <PlayCircle size={15} />
                Watch Demo
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
