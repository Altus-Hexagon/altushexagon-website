"use client";

import PageTransition from "@/components/PageTransition";
import PageHeader from "@/components/PageHeader";
import SectionWrapper from "@/components/SectionWrapper";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

export default function ContactPage() {
  return (
    <PageTransition>
      <PageHeader
        title="Let's Build Something Together"
        subtitle="We'd love to hear about your project"
      />
      <SectionWrapper>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form - takes more space */}
            <div className="lg:col-span-3">
              <div className="bg-surface border border-white/5 rounded-2xl p-8 md:p-10">
                <h2
                  className="text-2xl font-bold text-off-white mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Send Us a Message
                </h2>
                <p className="text-silver-muted text-sm mb-8">
                  Fill in the form below and we&apos;ll get back to you within 24 hours.
                </p>
                <ContactForm />
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>
          </div>
        </div>
      </SectionWrapper>
    </PageTransition>
  );
}
