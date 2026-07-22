import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Altus Hexagon — Elevating Ideas. Engineering Solutions.",
  description:
    "Altus Hexagon is a software house specializing in AI-powered applications, mobile development, web development, UI/UX design, and branding. We turn ideas into impactful digital products.",
  keywords: [
    "software development",
    "AI applications",
    "mobile app development",
    "Flutter",
    "web development",
    "UI/UX design",
    "branding",
    "Altus Hexagon",
  ],
  openGraph: {
    title: "Altus Hexagon — Elevating Ideas. Engineering Solutions.",
    description:
      "Software house specializing in AI-powered applications, mobile & web development, UI/UX design, and branding.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
