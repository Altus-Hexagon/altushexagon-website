"use client";

import { Star } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

// Toggle this to true when real testimonials are ready
const SHOW_TESTIMONIALS = false;

/* PLACEHOLDER testimonials — replace with real client testimonials before enabling */
const testimonials = [
  {
    initials: "JD",
    name: "Jane Doe",
    role: "CEO, TechStartup",
    stars: 5,
    quote: "Placeholder testimonial — replace with real client feedback.", // PLACEHOLDER
  },
  {
    initials: "MS",
    name: "Mark Smith",
    role: "Founder, AppCo",
    stars: 5,
    quote: "Placeholder testimonial — replace with real client feedback.", // PLACEHOLDER
  },
  {
    initials: "AL",
    name: "Alex Lee",
    role: "CTO, DataFlow",
    stars: 5,
    quote: "Placeholder testimonial — replace with real client feedback.", // PLACEHOLDER
  },
];

export default function Testimonials() {
  if (!SHOW_TESTIMONIALS) return null;

  return (
    <SectionWrapper>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-gold uppercase tracking-widest text-sm font-semibold mb-3">
            Client Reviews
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-off-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            What Clients Say
          </h2>
        </div>

        <div
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-none"
          style={{ scrollbarWidth: "none" }}
        >
          {testimonials.map(({ initials, name, role, stars, quote }) => (
            <div
              key={name}
              className="min-w-[300px] max-w-[350px] flex-shrink-0 bg-surface border border-white/5 rounded-xl p-6"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: stars }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>
              <p className="text-silver-muted italic text-sm leading-relaxed mb-6">
                &quot;{quote}&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold font-semibold text-sm">
                  {initials}
                </div>
                <div>
                  <p className="font-semibold text-off-white text-sm">{name}</p>
                  <p className="text-silver-muted text-xs">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
