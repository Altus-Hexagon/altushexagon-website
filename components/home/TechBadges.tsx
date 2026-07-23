"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";

interface TechItem {
  name: string;
  logo: string;
  category: string;
}

const techStack: TechItem[] = [
  { name: "Flutter", logo: "https://cdn.simpleicons.org/flutter/02569B", category: "Mobile" },
  { name: "Dart", logo: "https://cdn.simpleicons.org/dart/0175C2", category: "Language" },
  { name: "Android", logo: "https://cdn.simpleicons.org/android/3DDC84", category: "Mobile" },
  { name: "Swift", logo: "https://cdn.simpleicons.org/swift/F05138", category: "Mobile" },
  { name: "n8n", logo: "https://cdn.simpleicons.org/n8n/EA4B71", category: "Automation" },
  { name: "Figma", logo: "https://cdn.simpleicons.org/figma/F24E1E", category: "Design" },
  { name: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs/000000", category: "Frontend" },
  { name: "TypeScript", logo: "https://cdn.simpleicons.org/typescript/3178C6", category: "Language" },
  { name: "Python", logo: "https://cdn.simpleicons.org/python/3776AB", category: "Backend" },
  { name: "FastAPI", logo: "https://cdn.simpleicons.org/fastapi/009688", category: "Backend" },
  { name: "PostgreSQL", logo: "https://cdn.simpleicons.org/postgresql/4169E1", category: "Database" },
  { name: "Firebase", logo: "https://cdn.simpleicons.org/firebase/FFCA28", category: "Cloud" },
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
    <SectionWrapper className="relative overflow-hidden bg-navy">
      <div className="pointer-events-none absolute inset-0 hex-grid-bg opacity-[0.06]" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(212,175,55,0.05)_0%,transparent_55%)]"
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
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-navy to-transparent sm:w-24"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-navy to-transparent sm:w-24"
            aria-hidden
          />
          <div className="tech-marquee flex w-max gap-4">
            {marqueeItems.map(({ name, logo }, i) => (
              <div
                key={`${name}-${i}`}
                className="flex shrink-0 items-center gap-2.5 rounded-full border border-black/5 bg-white px-5 py-2.5 shadow-sm"
              >
                <div className="relative w-4.5 h-4.5">
                  <Image
                    src={logo}
                    alt={name}
                    fill
                    sizes="18px"
                    unoptimized
                    className="object-contain"
                  />
                </div>
                <span className="font-mono text-sm font-medium tracking-wide text-slate-800">
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
          {techStack.map(({ name, logo, category }) => (
            <motion.div key={name} variants={itemVariants} className="group">
              <div className="relative h-full overflow-hidden rounded-xl border border-black/5 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-gold/5 sm:p-5">
                <div className="relative flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-50 border border-slate-100 p-2">
                    <div className="relative w-full h-full">
                      <Image
                        src={logo}
                        alt={name}
                        fill
                        sizes="24px"
                        unoptimized
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-slate-900">{name}</p>
                    <p className="truncate text-[10px] font-semibold uppercase tracking-wider text-slate-500">
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
