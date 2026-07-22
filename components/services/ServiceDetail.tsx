"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, ArrowRight, LucideIcon } from "lucide-react";

interface ServiceDetailProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  reversed?: boolean;
  index: number;
  image?: string;
}

export default function ServiceDetail({
  title,
  description,
  icon: Icon,
  features,
  reversed = false,
  index,
  image,
}: ServiceDetailProps) {
  const [imgLoading, setImgLoading] = useState(true);
  const whatsappMessage = `Hi Altus Hexagon! I'm interested in getting a quote for ${title}.`;
  const whatsappLink = `https://wa.me/923139637072?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <motion.div
      initial={{ opacity: 0, x: reversed ? 40 : -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto py-16"
    >
      {/* Graphic side */}
      <div className={`${reversed ? "lg:order-2" : "lg:order-1"}`}>
        {image ? (
          <div className="relative w-full max-w-sm mx-auto aspect-square rounded-2xl overflow-hidden shadow-2xl border border-black/5 group">
            {/* Loading Skeleton */}
            {imgLoading && (
              <div className="absolute inset-0 bg-navy-light animate-pulse flex items-center justify-center z-10">
                <div className="w-8 h-8 rounded-full border-2 border-gold border-t-transparent animate-spin" />
              </div>
            )}
            {/* Real Stock Photo */}
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 384px"
              priority={index === 0} // Priority loading for the first service (above the fold)
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              onLoad={() => setImgLoading(false)}
            />
            {/* Subtle gold-tinted overlay/border accent */}
            <div className="absolute inset-0 bg-gradient-to-tr from-gold/20 via-transparent to-transparent opacity-60 mix-blend-overlay pointer-events-none" />
            <div className="absolute inset-0 border-2 border-gold/10 rounded-2xl pointer-events-none transition-colors group-hover:border-gold/30" />
          </div>
        ) : (
          /* Fallback: Icon Graphic box */
          <div className="relative w-full max-w-sm mx-auto aspect-square rounded-2xl bg-white border border-black/5 shadow-xl flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 hex-grid-bg opacity-15" />
            {/* Glow */}
            <div className="absolute w-40 h-40 rounded-full bg-gold/10 blur-3xl" />
            <Icon className="w-24 h-24 text-gold relative z-10" />
          </div>
        )}
      </div>

      {/* Text side */}
      <div className={`${reversed ? "lg:order-1" : "lg:order-2"}`}>
        <p className="text-gold/50 font-mono text-sm mb-3">
          0{index + 1}
        </p>
        <h3
          className="text-2xl md:text-3xl font-bold text-off-white mb-5 leading-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {title}
        </h3>
        <p className="text-silver-muted text-lg leading-relaxed mb-7">
          {description}
        </p>
        <ul className="space-y-3 mb-8">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-3 text-silver-muted">
              <Check className="w-5 h-5 text-gold flex-shrink-0" />
              <span className="text-sm">{f}</span>
            </li>
          ))}
        </ul>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-semibold transition-colors group"
        >
          Get a Quote
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
}
