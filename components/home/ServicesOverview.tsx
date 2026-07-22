"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import {
  Paintbrush,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

interface ServiceItem {
  icon: string | LucideIcon;
  title: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    icon: "https://cdn.simpleicons.org/flutter/02569B",
    title: "Mobile App Development",
    description: "Cross-platform iOS & Android apps built with Flutter — high-performance, polished, and fully customized.",
  },
  {
    icon: "https://cdn.simpleicons.org/n8n/EA4B71",
    title: "n8n Automation & AI Workflows",
    description: "Intelligent workflow automation powered by n8n, AI integrations, custom APIs, and autonomous agents.",
  },
  {
    icon: "https://cdn.simpleicons.org/figma/F24E1E",
    title: "UI/UX Design",
    description: "User-centered design systems, clean wireframes, and interactive prototypes built to convert.",
  },
  {
    icon: Paintbrush,
    title: "Graphic Design & Branding",
    description: "Distinct visual identities, logos, brand guidelines, and graphics that tell your brand's unique story.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export default function ServicesOverview() {
  return (
    <SectionWrapper className="relative overflow-hidden bg-navy">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 hex-grid-bg opacity-[0.08]" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(212,175,55,0.06)_0%,transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-gold/5 blur-3xl"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center sm:mb-16"
        >
          <p className="eyebrow mb-4">What We Do</p>
          <h2
            className="text-3xl font-bold leading-tight text-off-white sm:text-4xl md:text-5xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Our <span className="gold-text">Services</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-silver-muted sm:text-lg">
            From mobile apps and AI workflows to branding and UI/UX design — we deliver
            end-to-end digital solutions tailored to your goals.
          </p>
          <div className="gold-divider mx-auto mt-8 w-20" />
        </motion.div>

        {/* Service cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map(({ icon, title, description }, index) => {
            const IsCdnIcon = typeof icon === "string";
            const LucideIconComponent = icon as LucideIcon;

            return (
              <motion.div key={title} variants={cardVariants} className="group">
                <div className="relative h-full overflow-hidden rounded-2xl border border-black/5 bg-white p-6 shadow-lg shadow-black/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-gold/10 sm:p-7 flex flex-col justify-between">
                  <div>
                    {/* Top row: index + icon */}
                    <div className="relative mb-6 flex items-start justify-between">
                      <span className="font-mono text-xs font-semibold tracking-widest text-gold">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 border border-slate-100 shadow-sm transition-transform duration-300 group-hover:scale-110">
                        {IsCdnIcon ? (
                          <div className="relative w-6 h-6">
                            <Image
                              src={icon}
                              alt={title}
                              fill
                              sizes="24px"
                              className="object-contain"
                            />
                          </div>
                        ) : (
                          <LucideIconComponent className="h-5 w-5 text-navy" />
                        )}
                      </div>
                    </div>

                    <h3
                      className="relative mb-3 text-lg font-bold leading-snug text-slate-900"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {title}
                    </h3>
                    <p className="relative text-sm leading-relaxed text-slate-600">
                      {description}
                    </p>
                  </div>

                  {/* Animated underline */}
                  <div className="relative mt-6 h-px w-full overflow-hidden bg-slate-100">
                    <div className="h-full w-0 bg-gradient-to-r from-gold to-gold-light transition-all duration-500 group-hover:w-full" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 flex flex-col items-center gap-4 sm:mt-14"
        >
          <Link
            href="/services"
            className="btn-outline gap-2 px-8 py-3.5 text-sm sm:text-base"
          >
            View All Services
            <ArrowRight className="h-4 w-4" />
          </Link>
          <p className="text-xs text-silver-muted/70 sm:text-sm">
            4 core disciplines · Custom solutions for every stage
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
