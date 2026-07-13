import SectionWrapper from "@/components/SectionWrapper";

export default function TrustLine() {
  return (
    <SectionWrapper className="bg-[#080c17]">
      <div className="max-w-3xl mx-auto text-center">
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-8" />
        <p
          className="text-xl md:text-2xl text-[#A0A8C0]/80 tracking-wide leading-relaxed"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Trusted by ambitious founders and growing teams
        </p>
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-8" />
      </div>
    </SectionWrapper>
  );
}
