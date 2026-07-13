import SectionWrapper from "@/components/SectionWrapper";

export default function TrustLine() {
  return (
    <SectionWrapper className="bg-charcoal-mid">
      <div className="max-w-3xl mx-auto text-center">
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8" />
        <p
          className="text-xl md:text-2xl text-silver-muted/80 tracking-wide leading-relaxed"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Trusted by ambitious founders and growing teams
        </p>
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-8" />
      </div>
    </SectionWrapper>
  );
}
