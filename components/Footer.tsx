import Link from "next/link";
import Image from "next/image";
import { Linkedin, Instagram, Facebook, Twitter, Github } from "lucide-react";

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

export default function Footer() {
  return (
    <footer className="bg-[#060912] border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="Altus Hexagon"
                width={180}
                height={50}
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="text-[#A0A8C0] text-sm leading-relaxed max-w-xs">
              Elevating Ideas. Engineering Solutions.
            </p>
            <p className="text-[#A0A8C0]/60 text-xs mt-3 leading-relaxed max-w-xs">
              A software house building AI-driven apps, websites, and digital
              experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="text-[#F5F5F5] font-semibold mb-6 tracking-wider uppercase text-sm"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#A0A8C0] hover:text-[#D4AF37] transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3
              className="text-[#F5F5F5] font-semibold mb-6 tracking-wider uppercase text-sm"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Connect
            </h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 clip-hexagon bg-[#1a1f35] hover:bg-gradient-to-br hover:from-[#D4AF37] hover:to-[#F4C430] flex items-center justify-center transition-all duration-300 group"
                >
                  <Icon className="w-4 h-4 text-[#A0A8C0] group-hover:text-[#0A0E1A] transition-colors duration-300" />
                </a>
              ))}
            </div>
            <div className="mt-6">
              <a
                href="mailto:info.altushexagone@gmail.com"
                className="text-[#A0A8C0] hover:text-[#D4AF37] transition-colors text-sm"
              >
                info.altushexagone@gmail.com
              </a>
              <p className="text-[#A0A8C0]/60 text-xs mt-1">
                Faisalabad, Punjab, Pakistan
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#A0A8C0]/60 text-sm">
            © 2026 Altus Hexagon. All rights reserved.
          </p>
          <p className="text-[#A0A8C0]/40 text-xs">
            Built with ❤️ by Altus Hexagon
          </p>
        </div>
      </div>
    </footer>
  );
}
