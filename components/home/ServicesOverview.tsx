"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  Smartphone,
  Globe,
  Brain,
  Palette,
  Paintbrush,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { SiN8N } from "react-icons/si";
import SectionWrapper from "@/components/SectionWrapper";

interface ServiceItem {
  icon: LucideIcon | typeof SiN8N;
  title: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Cross-platform iOS & Android apps with Flutter — polished, fast, and built to scale.",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern full-stack web apps with Next.js, React, and cloud-ready architecture.",
  },
  {
    icon: Brain,
    title: "AI-Powered Applications",
    description: "Intelligent products powered by OpenAI, RAG pipelines, and custom AI agents.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered interfaces, prototypes, and design systems that convert.",
  },
  {
    icon: Paintbrush,
    title: "Branding & Graphic Design",
    description: "Logos, visual identity, and marketing assets that make your brand unforgettable.",
  },
  {
    icon: SiN8N,
    title: "Workflow Automation",
    description: "Custom integrations and automations that eliminate busywork and boost output.",
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
    <SectionWrapper className="relative overflow-hidden bg-charcoal-mid">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 hex-grid-bg opacity-[0.12]" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(201,162,39,0.09)_0%,transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-gold/5 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-gold/4 blur-3xl"
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
            From mobile apps and AI products to branding and automation — we deliver
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
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
        >
          {services.map(({ icon: Icon, title, description }, index) => (
            <motion.div key={title} variants={cardVariants} className="group">
              <div className="relative h-full overflow-hidden rounded-2xl border border-white/[0.06] bg-surface/70 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/25 hover:shadow-[0_20px_50px_-12px_rgba(201,162,39,0.15)] sm:p-7">
                {/* Hover glow */}
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-gold/8 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden
                />

                {/* Top row: index + icon */}
                <div className="relative mb-5 flex items-start justify-between">
                  <span className="font-mono text-xs font-medium tracking-widest text-gold/40">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center clip-hexagon bg-gradient-to-br from-gold/25 to-gold-light/10 shadow-inner transition-transform duration-300 group-hover:scale-110 group-hover:from-gold/35">
                    <Icon className="h-5 w-5 text-gold" />
                  </div>
                </div>

                <h3
                  className="relative mb-2 text-lg font-semibold leading-snug text-off-white"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {title}
                </h3>
                <p className="relative text-sm leading-relaxed text-silver-muted">
                  {description}
                </p>

                {/* Animated underline */}
                <div className="relative mt-5 h-px w-full overflow-hidden bg-white/5">
                  <div className="h-full w-0 bg-gradient-to-r from-gold to-gold-light transition-all duration-500 group-hover:w-full" />
                </div>
              </div>
            </motion.div>
          ))}
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
            6 core disciplines · Custom solutions for every stage
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
