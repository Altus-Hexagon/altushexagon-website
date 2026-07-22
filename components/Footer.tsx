import Link from "next/link";
import Image from "next/image";
import { Linkedin, Instagram, Facebook, Twitter, Mail, MapPin, ArrowUpRight } from "lucide-react";

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/altus-hexagon/?viewAsMember=true" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/altushexagon/" },
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/profile.php?id=61591837471202" },
  { icon: Twitter, label: "X / Twitter", href: "https://x.com/altushexagon" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Mobile Apps", href: "/services" },
  { label: "Web Development", href: "/services" },
  { label: "AI Solutions", href: "/services" },
  { label: "UI/UX Design", href: "/services" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-charcoal-dark">
      {/* Top accent */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

      <div className="pointer-events-none absolute inset-0 hex-grid-bg opacity-[0.06]" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(201,162,39,0.06)_0%,transparent_50%)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-14 pb-8 sm:pt-16">
        {/* Main grid */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {/* Brand — spans more on large screens */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="Altus Hexagon"
                width={200}
                height={56}
                className="h-12 w-auto object-contain sm:h-14"
              />
            </Link>
            <p
              className="mt-5 max-w-sm text-lg font-semibold leading-snug text-off-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Elevating Ideas.{" "}
              <span className="gold-text">Engineering Solutions.</span>
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-silver-muted">
              A software house building AI-driven apps, websites, and digital
              experiences for ambitious teams worldwide.
            </p>

            {/* Social */}
            <div className="mt-6 flex flex-wrap gap-2.5">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group flex h-10 w-10 items-center justify-center clip-hexagon border border-gold/30 bg-navy-light/80 transition-all duration-300 hover:border-gold hover:bg-navy-light hover:shadow-[0_0_12px_rgba(212,175,55,0.4)]"
                >
                  <Icon className="h-4 w-4 text-gold transition-all duration-300 group-hover:text-white group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3
              className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-gold"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Explore
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-silver-muted transition-colors duration-200 hover:text-gold"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3
              className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-gold"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-silver-muted transition-colors duration-200 hover:text-gold"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3
              className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-gold"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Get in Touch
            </h3>
            <div className="space-y-4">
              <a
                href="mailto:info@altushexagon.com"
                className="group flex items-start gap-3 rounded-xl border border-white/10 bg-navy-light/60 p-4 transition-all duration-300 hover:border-gold/25 hover:bg-navy-light/80"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gold/10">
                  <Mail className="h-4 w-4 text-gold" />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] uppercase tracking-wider text-gold font-semibold">Email</p>
                  <p className="truncate text-sm text-[#F5F5F5] transition-colors group-hover:text-gold">
                    info@altushexagon.com
                  </p>
                </div>
              </a>
              <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-navy-light/60 p-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gold/10">
                  <MapPin className="h-4 w-4 text-gold" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-gold font-semibold">Location</p>
                  <p className="text-sm text-[#F5F5F5] font-medium">Faisalabad, Punjab</p>
                  <p className="text-xs text-[#F5F5F5]/85">Pakistan</p>
                </div>
              </div>
            </div>
            <Link
              href="/contact"
              className="btn-primary mt-5 inline-flex w-full justify-center gap-2 px-6 py-3 text-sm sm:w-auto"
            >
              Start a Project
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/6 pt-6 sm:flex-row">
          <p className="text-center text-sm text-silver-muted/60 sm:text-left">
            © 2026 Altus Hexagon. All rights reserved.
          </p>
          <p className="text-center text-xs text-silver-muted/40">
            Crafted with precision by{" "}
            <span className="text-gold/80">Altus Hexagon</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
