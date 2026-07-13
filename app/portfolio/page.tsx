"use client";

import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/portfolio/ProjectCard";
import SectionWrapper from "@/components/SectionWrapper";

const projects = [
  {
    name: "BrainUp",
    description:
      "AI-powered learning platform that adapts to individual learning styles and pace for optimal knowledge retention.",
    tags: ["Flutter", "Firebase", "AI", "Mobile"],
    gradient: "linear-gradient(135deg, #1a1f35 0%, #2d3561 50%, #D4AF37 100%)",
  },
  {
    name: "HR RAG Assistant",
    description:
      "Intelligent HR document assistant powered by retrieval-augmented generation for instant policy and procedure answers.",
    tags: ["Python", "FastAPI", "RAG", "OpenAI"],
    gradient: "linear-gradient(135deg, #0A0E1A 0%, #0f2d4a 50%, #1a5276 100%)",
  },
  {
    name: "Emma Chat",
    description:
      "Conversational AI chatbot with natural language understanding, context awareness, and real-time communication.",
    tags: ["OpenAI", "Next.js", "WebSocket", "AI"],
    gradient: "linear-gradient(135deg, #1a1f35 0%, #2d1f4e 60%, #5b2d8e 100%)",
  },
  {
    name: "GlobalPulse",
    description:
      "Real-time global analytics dashboard for monitoring key business metrics with interactive data visualizations.",
    tags: ["React", "PostgreSQL", "D3.js", "API"],
    gradient: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
  },
];

export default function PortfolioPage() {
  return (
    <PageTransition>
      <PageHeader
        title="Our Work"
        subtitle="Showcasing innovation through real projects"
      />
      <SectionWrapper>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                <ProjectCard {...project} comingSoon />
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16 p-10 rounded-2xl bg-[#111827] border border-white/5">
            <p className="text-[#A0A8C0] text-lg mb-2">
              Have a project in mind?
            </p>
            <h3
              className="text-2xl font-bold text-[#F5F5F5] mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Let&apos;s create something amazing together
            </h3>
            <a
              href="/contact"
              className="inline-flex items-center bg-gradient-to-r from-[#D4AF37] to-[#F4C430] text-[#0A0E1A] font-semibold px-8 py-3 rounded-full hover:shadow-lg hover:shadow-[#D4AF37]/20 transition-all duration-300 hover:scale-105"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </SectionWrapper>
    </PageTransition>
  );
}
