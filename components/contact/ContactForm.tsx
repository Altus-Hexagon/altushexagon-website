"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

type Status = "idle" | "submitting" | "success" | "error";

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim() || data.name.trim().length < 2)
    errors.name = "Name must be at least 2 characters.";
  if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = "Please enter a valid email address.";
  if (!data.message.trim() || data.message.trim().length < 10)
    errors.message = "Message must be at least 10 characters.";
  return errors;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setStatus("submitting");
    try {
      // Replace 'xplaceholder' with your actual Formspree form ID from formspree.io
      const res = await fetch("https://formspree.io/f/xplaceholder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-surface border border-white/10 rounded-xl px-5 py-3.5 text-off-white placeholder-silver-muted/40 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all duration-200 text-sm";

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Name */}
      <div>
        <label htmlFor="contact-name" className="block text-sm font-semibold text-off-white mb-2">
          Your Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          placeholder="John Smith"
          className={inputClass}
          disabled={status === "submitting"}
        />
        {errors.name && <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="contact-email" className="block text-sm font-semibold text-off-white mb-2">
          Email Address
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="john@company.com"
          className={inputClass}
          disabled={status === "submitting"}
        />
        {errors.email && <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className="block text-sm font-semibold text-off-white mb-2">
          Your Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your project..."
          className={`${inputClass} resize-none`}
          disabled={status === "submitting"}
        />
        {errors.message && <p className="text-red-400 text-xs mt-1.5">{errors.message}</p>}
      </div>

      {/* Submit */}
      <motion.button
        type="submit"
        disabled={status === "submitting"}
        whileHover={{ scale: status === "submitting" ? 1 : 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full btn-primary py-4 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:transform-none"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </motion.button>

      {/* Status messages */}
      <AnimatePresence>
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 text-green-400 text-sm text-center"
          >
            ✓ Thank you! Your message has been sent. We&apos;ll get back to you soon.
          </motion.div>
        )}
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-red-400 text-sm text-center"
          >
            Something went wrong. Please try again or email us at info.altushexagone@gmail.com
          </motion.div>
        )}
      </AnimatePresence>

      {/* Formspree note for developer */}
      {/* Replace 'xplaceholder' in the Formspree URL above with your actual form ID from formspree.io */}
    </form>
  );
}
