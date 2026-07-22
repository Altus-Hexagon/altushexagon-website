"use client";

import { Mail, MapPin } from "lucide-react";
import SocialLinks from "@/components/SocialLinks";

export default function ContactInfo() {
  return (
    <div>
      <h3
        className="text-xl font-bold text-off-white mb-8"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Contact Information
      </h3>

      <div className="space-y-5 mb-10">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <Mail className="w-5 h-5 text-gold" />
          </div>
          <div>
            <p className="text-xs text-silver-muted uppercase tracking-wider mb-1">Email</p>
            <a
              href="mailto:info@altushexagon.com"
              className="text-off-white hover:text-gold transition-colors text-sm break-all"
            >
              info@altushexagon.com
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <MapPin className="w-5 h-5 text-gold" />
          </div>
          <div>
            <p className="text-xs text-silver-muted uppercase tracking-wider mb-1">Location</p>
            <p className="text-off-white text-sm">Faisalabad, Punjab, Pakistan</p>
            <p className="text-silver-muted text-xs mt-0.5">
              Available for calls across UK/US business hours
            </p>
          </div>
        </div>
      </div>

      <div>
        <p className="text-sm font-semibold text-off-white mb-4 uppercase tracking-wider">
          Follow Us
        </p>
        <SocialLinks size="lg" />
      </div>

      {/* Decorative */}
      <div className="mt-12 p-6 rounded-2xl bg-white border border-black/5 shadow-md">
        <p className="text-slate-600 text-sm leading-relaxed">
          <span className="text-navy font-semibold">Typical response time:</span> Within 24
          hours on business days. We&apos;re excited to learn about your project!
        </p>
      </div>
    </div>
  );
}
