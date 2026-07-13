"use client";

import { motion } from "framer-motion";
import { Linkedin, Instagram, Facebook, Twitter, Github } from "lucide-react";

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/altus-hexagon/?viewAsMember=true" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/altushexagon/" },
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/profile.php?id=61591837471202" },
  { icon: Twitter, label: "X / Twitter", href: "https://x.com/altushexagon" },
];

interface SocialLinksProps {
  className?: string;
  size?: "sm" | "lg";
}

export default function SocialLinks({ className = "", size = "sm" }: SocialLinksProps) {
  const containerSize = size === "lg" ? "w-12 h-12" : "w-9 h-9";
  const iconSize = size === "lg" ? "w-5 h-5" : "w-4 h-4";

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {socials.map(({ icon: Icon, label, href }) => (
        <motion.a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400 }}
          className={`${containerSize} clip-hexagon bg-surface-elevated hover:bg-gradient-to-br hover:from-gold hover:to-gold-light flex items-center justify-center transition-all duration-300 group`}
        >
          <Icon className={`${iconSize} text-silver-muted group-hover:text-charcoal transition-colors duration-300`} />
        </motion.a>
      ))}
    </div>
  );
}
