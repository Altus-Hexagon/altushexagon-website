"use client";

import { motion, type Variants } from "framer-motion";
import {
  SiFlutter,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiPython,
  SiFastapi,
  SiPostgresql,
  SiFirebase,
  SiN8N,
} from "react-icons/si";
import { Bot, type LucideIcon } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

interface TechItem {
  name: string;
  color: string;
  category: string;
  icon: LucideIcon | typeof SiFlutter;
}

const techStack: TechItem[] = [
  { name: "Flutter", color: "#54C5F8", category: "Mobile", icon: SiFlutter },
  { name: "React", color: "#61DAFB", category: "Frontend", icon: SiReact },
  { name: "Next.js", color: "#FFFFFF", category: "Frontend", icon: SiNextdotjs },
  { name: "TypeScript", color: "#3178C6", category: "Language", icon: SiTypescript },
  { name: "Python", color: "#3776AB", category: "Backend", icon: SiPython },
  { name: "FastAPI", color: "#009688", category: "Backend", icon: SiFastapi },
  { name: "PostgreSQL", color: "#336791", category: "Database", icon: SiPostgresql },
  { name: "Firebase", color: "#FFCA28", category: "Cloud", icon: SiFirebase },
  { name: "OpenAI", color: "#74AA9C", category: "AI", icon: Bot },
  { name: "n8n", color: "#EA4B71", category: "Automation", icon: SiN8N },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

export default function TechBadges() {
  const marqueeItems = [...techStack, ...techStack];

  return (
    <SectionWrapper className="relative overflow-hidden bg-charcoal">
      <div className="pointer-events-none absolute inset-0 hex-grid-bg opacity-[0.1]" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(201,162,39,0.07)_0%,transparent_55%)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-12 max-w-2xl text-center sm:mb-14"
        >
          <p className="eyebrow mb-4">Our Stack</p>
          <h2
            className="text-3xl font-bold text-off-white sm:text-4xl md:text-5xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Technologies <span className="gold-text">We Use</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-silver-muted sm:text-lg">
            Modern, battle-tested tools we use to build fast, scalable, and
            intelligent digital products.
          </p>
          <div className="gold-divider mx-auto mt-8 w-20" />
        </motion.div>

        {/* Infinite marquee */}
        <div className="relative mb-12 overflow-hidden sm:mb-14">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-charcoal to-transparent sm:w-24"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-charcoal to-transparent sm:w-24"
            aria-hidden
          />
          <div className="tech-marquee flex w-max gap-4">
            {marqueeItems.map(({ name, color, icon: Icon }, i) => (
              <div
                key={`${name}-${i}`}
                className="flex shrink-0 items-center gap-2.5 rounded-full border border-white/8 bg-surface/60 px-5 py-2.5 backdrop-blur-sm"
              >
                <Icon className="h-4 w-4" style={{ color }} />
                <span className="font-mono text-sm font-medium tracking-wide text-off-white/90">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5"
        >
          {techStack.map(({ name, color, category, icon: Icon }) => (
            <motion.div key={name} variants={itemVariants} className="group">
              <div className="relative h-full overflow-hidden rounded-xl border border-white/6 bg-surface/70 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/25 hover:shadow-[0_12px_32px_-8px_rgba(201,162,39,0.12)] sm:p-5">
                <div
                  className="pointer-events-none absolute -right-4 -top-4 h-16 w-16 rounded-full opacity-20 blur-2xl transition-opacity duration-300 group-hover:opacity-40"
                  style={{ backgroundColor: color }}
                  aria-hidden
                />
                <div className="relative flex items-center gap-2.5">
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/8"
                    style={{ backgroundColor: `${color}18` }}
                  >
                    <Icon className="h-4.5 w-4.5" style={{ color }} />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-off-white">{name}</p>
                    <p className="truncate text-[11px] uppercase tracking-wider text-silver-muted/70">
                      {category}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 text-center text-xs text-silver-muted/60 sm:text-sm"
        >
          And more — we pick the right stack for every project.
        </motion.p>
      </div>
    </SectionWrapper>
  );
}
