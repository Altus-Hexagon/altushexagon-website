"use client";

import { Mail, MapPin } from "lucide-react";
import SocialLinks from "@/components/SocialLinks";

export default function ContactInfo() {
  return (
    <div>
      <h3
        className="text-xl font-bold text-[#F5F5F5] mb-8"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Contact Information
      </h3>

      <div className="space-y-5 mb-10">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <Mail className="w-5 h-5 text-[#D4AF37]" />
          </div>
          <div>
            <p className="text-xs text-[#A0A8C0] uppercase tracking-wider mb-1">Email</p>
            <a
              href="mailto:info.altushexagone@gmail.com"
              className="text-[#F5F5F5] hover:text-[#D4AF37] transition-colors text-sm break-all"
            >
              info.altushexagone@gmail.com
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <MapPin className="w-5 h-5 text-[#D4AF37]" />
          </div>
          <div>
            <p className="text-xs text-[#A0A8C0] uppercase tracking-wider mb-1">Location</p>
            <p className="text-[#F5F5F5] text-sm">Faisalabad, Punjab, Pakistan</p>
            <p className="text-[#A0A8C0] text-xs mt-0.5">
              Available for calls across UK/US business hours
            </p>
          </div>
        </div>
      </div>

      <div>
        <p className="text-sm font-semibold text-[#F5F5F5] mb-4 uppercase tracking-wider">
          Follow Us
        </p>
        <SocialLinks size="lg" />
      </div>

      {/* Decorative */}
      <div className="mt-12 p-6 rounded-2xl bg-[#111827] border border-white/5">
        <p className="text-[#A0A8C0] text-sm leading-relaxed">
          <span className="text-[#D4AF37] font-semibold">Typical response time:</span> Within 24
          hours on business days. We&apos;re excited to learn about your project!
        </p>
      </div>
    </div>
  );
}
