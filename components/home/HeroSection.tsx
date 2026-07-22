"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";

const tagline = "Elevating Ideas. Engineering Solutions.".split(" ");

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.5 + i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen min-h-[100dvh] items-center justify-center overflow-hidden">
      {/* Hero background image */}
      <Image
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
        alt="Altus Hexagon Modern Tech Workspace"
        fill
        priority
        sizes="100vw"
        quality={75}
        className="object-cover object-[center_35%] sm:object-center"
      />

      {/* Overlays — rich navy blue tints so the text remains highly readable */}
      <div className="absolute inset-0 bg-navy-dark/50" aria-hidden />
      <div
        className="absolute inset-0 bg-gradient-to-b from-navy-dark/85 via-navy/20 to-navy-dark/90"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)]"
        aria-hidden
      />
      <div className="absolute inset-0 hex-grid-bg opacity-[0.08]" aria-hidden />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-5 sm:px-6 text-center [text-shadow:0_2px_24px_rgba(0,0,0,0.75)]">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="eyebrow mb-3 sm:mb-4 text-xs sm:text-sm"
        >
          Welcome to
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="brand-title text-[2.5rem] leading-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
        >
          <span className="gold-text">Altus</span>{" "}
          <span className="silver-text">Hexagon</span>
        </motion.h1>

        <div className="mt-5 sm:mt-6 flex flex-wrap justify-center gap-x-2 gap-y-1 text-base sm:text-xl md:text-2xl text-silver-muted tracking-wide px-2">
          {tagline.map((word, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={wordVariants}
              initial="hidden"
              animate="visible"
            >
              {word}
            </motion.span>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center px-2"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
            <Link
              href="/contact"
              className="btn-primary btn-shimmer w-full sm:w-auto px-8 py-3.5 sm:py-4 text-sm sm:text-base gold-glow"
            >
              Start Your Project
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
            <Link
              href="/portfolio"
              className="btn-outline w-full sm:w-auto px-8 py-3.5 sm:py-4 text-sm sm:text-base"
            >
              View Our Work
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-scroll-bounce z-10"
      >
        <ChevronDown className="w-7 h-7 sm:w-8 sm:h-8 text-gold" />
      </motion.div>
    </section>
  );
}
