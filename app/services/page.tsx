"use client";

import { Smartphone, Globe, Brain, Palette, Paintbrush, Workflow } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import PageHeader from "@/components/PageHeader";
import ServiceDetail from "@/components/services/ServiceDetail";

const services = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "We build beautiful, high-performance cross-platform mobile applications using Flutter, as well as native Android (Kotlin) and iOS (Swift) apps. From concept to App Store, we handle the entire development lifecycle with a focus on smooth user experiences and clean architecture.",
    features: [
      "Cross-platform (iOS & Android)",
      "Flutter & Dart expertise",
      "App Store optimization",
      "Push notifications & analytics",
    ],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbyUiiACMoVaUx9QhH6oyvdFvocbxvLgj_v4znQ3U9JQ&s=10",
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Full-stack web development using modern frameworks and best practices. We create fast, responsive, and scalable web applications that deliver exceptional user experiences across all devices.",
    features: [
      "Next.js & React",
      "Full-stack solutions",
      "REST & GraphQL APIs",
      "Cloud deployment & DevOps",
    ],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa_8qiMCO6SNL4T96SY2ApbcMKSDtKp5s83P9H438iwLRrU3f_0dzT2WY&s=10",
  },
  {
    icon: Brain,
    title: "AI-Powered Applications",
    description:
      "We integrate cutting-edge AI capabilities into your applications using OpenAI, Claude, and Gemini APIs. From intelligent chatbots to automated workflows, we bring AI to your business processes.",
    features: [
      "OpenAI / Claude / Gemini integration",
      "RAG (retrieval-augmented generation)",
      "Custom AI agents & pipelines",
      "Natural language processing",
    ],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "User-centered design that combines aesthetics with functionality. We create intuitive interfaces and seamless user journeys that keep your customers engaged and coming back for more.",
    features: [
      "User research & usability testing",
      "Wireframing & interactive prototypes",
      "Design systems & component libraries",
      "Responsive & accessible design",
    ],
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: Paintbrush,
    title: "Branding & Graphic Design",
    description:
      "Build a strong visual identity that sets you apart from the competition. From logos and brand guidelines to marketing materials, we create cohesive brand experiences that resonate with your audience.",
    features: [
      "Logo & visual identity design",
      "Brand guidelines & style guides",
      "Marketing & print materials",
      "Social media asset creation",
    ],
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Streamline your business processes with intelligent automation. We build custom integrations using n8n, Zapier, and custom APIs to eliminate repetitive tasks, reduce errors, and boost productivity.",
    features: [
      "n8n & Zapier integrations",
      "Custom API connections",
      "Process optimization & mapping",
      "Business intelligence dashboards",
    ],
    image: "https://cdn.prod.website-files.com/68bda8ed1023b7fed633b3c0/6a2657566c9323bf9358f683_build-ai-agents-automate-workflows-n8n.webp",
  },
];

export default function ServicesPage() {
  return (
    <PageTransition>
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive digital solutions for modern businesses"
      />
      <div className="max-w-7xl mx-auto px-6">
        {services.map((service, i) => (
          <div key={service.title}>
            <ServiceDetail
              {...service}
              index={i}
              reversed={i % 2 !== 0}
            />
            {i < services.length - 1 && (
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent mx-auto" />
            )}
          </div>
        ))}
      </div>
      <div className="pb-20" />
    </PageTransition>
  );
}
