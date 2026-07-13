"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Instagram, Facebook, Twitter } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

export default function FounderSection() {
  return (
    <SectionWrapper id="founder" className="bg-charcoal-mid">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Photo */}
        <div className="flex justify-center">
          <div className="relative">
            {/* Outer gold border hexagon */}
            <div className="w-64 h-64 md:w-80 md:h-80 clip-hexagon bg-gradient-to-br from-gold to-gold-light flex items-center justify-center">
              {/* Inner hexagon with photo */}
              <div
                className="clip-hexagon overflow-hidden relative"
                style={{ width: "calc(100% - 6px)", height: "calc(100% - 6px)" }}
              >
                <Image
                  src="/profile.png"
                  alt="Ayesha Aslam — Founder of Altus Hexagon"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 256px, 320px"
                  priority
                />
              </div>
            </div>
            {/* Decorative mini hexagons */}
            <div className="absolute -top-4 -right-4 w-8 h-8 clip-hexagon bg-gold/20" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 clip-hexagon bg-gold/15" />
          </div>
        </div>

        {/* Bio */}
        <div>
          <p className="text-gold uppercase tracking-widest text-sm font-semibold mb-3">
            Meet the Founder
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-off-white mb-2"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Ayesha Aslam
          </h2>
          <p className="text-gold text-lg mb-8">
            Founder &amp; Software Engineer at Altus Hexagon
          </p>
          <div className="space-y-4 text-silver-muted text-base leading-relaxed">
            <p>
              Ayesha Aslam is a Software Engineer and Flutter developer
              specializing in AI-powered mobile and web applications. She founded
              Altus Hexagon to build innovative digital solutions for startups and
              businesses worldwide.
            </p>
            <p>
              Altus Hexagon is led by Ayesha Aslam, working with a network of
              collaborators across development, design, and AI.
            </p>
          </div>
          {/* Social links */}
          <div className="flex gap-4 mt-8">
            {[
              { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/altus-hexagon/?viewAsMember=true" },
              { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/altushexagon/" },
              { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/profile.php?id=61591837471202" },
              { icon: Twitter, label: "X / Twitter", href: "https://x.com/altushexagon" },
            ].map(({ icon: Icon, label, href }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.1 }}
                className="w-11 h-11 rounded-xl bg-surface-elevated border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold transition-all duration-300 group"
              >
                <Icon className="w-5 h-5 text-silver-muted group-hover:text-charcoal transition-colors" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
