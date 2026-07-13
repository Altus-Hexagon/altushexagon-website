"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { Smartphone, Globe, Brain, Palette, Paintbrush, Workflow, ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

const services = [
  { icon: Smartphone, title: "Mobile App Development" },
  { icon: Globe, title: "Web Development" },
  { icon: Brain, title: "AI-Powered Applications" },
  { icon: Palette, title: "UI/UX Design" },
  { icon: Paintbrush, title: "Branding & Graphic Design" },
  { icon: Workflow, title: "Workflow Automation" },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function ServicesOverview() {
  return (
    <SectionWrapper className="bg-[#080c17]">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-[#D4AF37] uppercase tracking-widest text-sm font-semibold mb-3">
            What We Do
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-[#F5F5F5]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Our Services
          </h2>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map(({ icon: Icon, title }) => (
            <motion.div key={title} variants={cardVariants}>
              <div className="gradient-border-wrapper h-full">
                <div className="gradient-border-inner p-8 text-center group cursor-default hover:scale-[1.02] transition-transform duration-300 gold-glow-hover rounded-[calc(1rem-1px)]">
                  <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center group-hover:bg-[#D4AF37]/20 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-[#D4AF37] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3
                    className="font-semibold text-[#F5F5F5] text-base"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#F4C430] font-semibold transition-colors group text-base"
          >
            View All Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
