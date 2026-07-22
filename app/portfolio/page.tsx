"use client";

import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/portfolio/ProjectCard";
import SectionWrapper from "@/components/SectionWrapper";

const projects = [
  {
    name: "AI-Powered HR Hiring Automation Platform",
    role: "Full-Stack AI Engineer",
    description:
      "An end-to-end AI recruitment platform that automates job posting, resume screening, AI-conducted intro interviews, and interview scoring — cutting HR's manual screening workload dramatically.",
    tags: ["NestJS", "Next.js", "FastAPI", "Supabase", "Claude", "Retell AI", "Twilio"],
    gradient: "linear-gradient(135deg, #252525 0%, #161c36 50%, #1a2245 100%)",
    image: "/projects/hr-hiring.svg",
    demoUrl: "https://www.loom.com/share/2f19a1e92bd54b58a723f85bb906c323",
  },
  {
    name: "LexReview — AI-Powered Contract Review Platform",
    role: "Full-Stack AI Engineer",
    description:
      "An AI-driven legal tool that extracts contract clauses, scores risk against firm playbooks, and generates client-ready reports — letting lawyers focus on judgment calls instead of first-pass review.",
    tags: ["NestJS", "Next.js", "Claude", "Supabase", "PDFKit"],
    gradient: "linear-gradient(135deg, #121212 0%, #0f2d4a 50%, #1a5276 100%)",
    image: "/projects/lexreview.svg",
    demoUrl: "http://loom.com/share/3f0bed4440ac4ae1915d1a9fdc3e63da",
  },
  {
    name: "AI-Powered Lead Generation & Cold Outreach Automation",
    role: "Automation Engineer",
    description:
      "A fully automated prospecting pipeline that sources verified leads, generates personalized cold emails with AI, and sends them at scale — with built-in deduplication to prevent repeat outreach.",
    tags: ["n8n", "Apollo.io", "Claude", "Gmail API", "Google Sheets"],
    gradient: "linear-gradient(135deg, #252525 0%, #2d1f4e 60%, #5b2d8e 100%)",
    image: "/projects/lead-gen.svg",
    demoUrl: "https://www.loom.com/share/0116f1440a5841feb7f3d49f1afebf99",
  },
  {
    name: "AI-Powered CRM Email Processing & Monday.com Automation",
    role: "Automation Engineer",
    description:
      "An automated CRM intake system that reads incoming emails, extracts structured customer data using AI, and creates records directly in Monday.com — eliminating manual data entry.",
    tags: ["n8n", "Gmail API", "AI Agent", "Monday.com"],
    gradient: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
    image: "/projects/crm-automation.svg",
    liveUrl: "https://extract-email-data.vercel.app/",
    demoUrl: "https://www.loom.com/share/6af1a2d8877f4ebc9a5d325805fca33a",
  },
  {
    name: "AI-Powered Financial Intelligence & Automated Report Generation",
    role: "Automation Engineer",
    description:
      "A financial reporting platform that pulls raw data from Supabase, runs automated P&L, budget, and YTD calculations, and uses AI to generate executive-ready PDF reports.",
    tags: ["n8n", "Supabase", "Claude", "OpenAI", "PostgreSQL"],
    gradient: "linear-gradient(135deg, #1a1a1a 0%, #241908 50%, #1b160b 100%)",
    image: "/projects/financial-intelligence.svg",
    liveUrl: "https://financial-report-chi.vercel.app/",
    demoUrl: "https://www.loom.com/share/0225d9c591104837b93c8452d43af357",
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
                className="h-full"
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16 p-10 rounded-2xl bg-white border border-black/5 shadow-xl">
            <p className="text-slate-600 text-lg mb-2">
              Have a project in mind?
            </p>
            <h3
              className="text-2xl font-bold text-slate-900 mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Let&apos;s create something amazing together
            </h3>
            <a
              href="/contact"
              className="inline-flex items-center bg-gradient-to-r from-gold to-gold-light text-navy-dark font-semibold px-8 py-3 rounded-full hover:shadow-lg hover:shadow-gold/20 transition-all duration-300 hover:scale-105"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </SectionWrapper>
    </PageTransition>
  );
}
