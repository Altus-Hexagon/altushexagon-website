"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "@formspree/react";

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
  const [state, submitToFormspree] = useForm("mjgnyvbe");

  useEffect(() => {
    if (state.succeeded) {
      setForm({ name: "", email: "", message: "" });
    }
  }, [state.succeeded]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    await submitToFormspree(e);
  };

  const inputClass =
    "w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all duration-200 text-sm";

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Name */}
      <div>
        <label htmlFor="contact-name" className="block text-sm font-semibold text-slate-700 mb-2">
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
          disabled={state.submitting}
        />
        {errors.name && <p className="text-red-500 text-xs mt-1.5">{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="contact-email" className="block text-sm font-semibold text-slate-700 mb-2">
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
          disabled={state.submitting}
        />
        {errors.email && <p className="text-red-500 text-xs mt-1.5">{errors.email}</p>}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className="block text-sm font-semibold text-slate-700 mb-2">
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
          disabled={state.submitting}
        />
        {errors.message && <p className="text-red-500 text-xs mt-1.5">{errors.message}</p>}
      </div>

      {/* Submit */}
      <motion.button
        type="submit"
        disabled={state.submitting}
        whileHover={{ scale: state.submitting ? 1 : 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full btn-primary py-4 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:transform-none"
      >
        {state.submitting ? "Sending..." : "Send Message"}
      </motion.button>

      {/* Status messages */}
      <AnimatePresence>
        {state.succeeded && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 text-green-400 text-sm text-center"
          >
            ✓ Thank you! Your message has been sent. We&apos;ll get back to you soon.
          </motion.div>
        )}
        {state.errors && Object.keys(state.errors).length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-red-400 text-sm text-center"
          >
            Something went wrong. Please try again or email us at info@altushexagon.com
          </motion.div>
        )}
      </AnimatePresence>

      {/* Formspree note for developer */}
      {/* Replace 'xplaceholder' in the Formspree URL above with your actual form ID from formspree.io */}
    </form>
  );
}
