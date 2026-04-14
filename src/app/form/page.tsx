"use client";

import Link from "next/link";
import { ArrowLeft, Send, CheckCircle } from "lucide-react";
import { useState } from "react";

const CATEGORIES = [
  "General Inquiry",
  "Technical Support",
  "Billing Issue",
  "Feature Request",
  "Bug Report",
  "Other",
];

export default function SupportPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    category: "",
    subject: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!form.category || !form.subject || !form.description) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const isValid = form.category && form.subject && form.description;

  return (
    <div className="min-h-screen bg-sage">
      {/* Header */}
      <header className="bg-white border-b border-black/5">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="text-lg font-bold text-text-primary">
            Koality<span className="gradient-text">Kids</span>
          </Link>
          <Link
            href="/"
            className="text-sm text-text-secondary hover:text-text-primary transition-colors flex items-center gap-1"
          >
            <ArrowLeft size={14} />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-3">
              Contact Support
            </h1>
            <p className="text-text-secondary max-w-md mx-auto">
              Fill in the form below and our team will get back to you within
              1–2 business days.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm">
            {submitted ? (
              <SuccessState />
            ) : (
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="category"
                    className="block text-sm font-medium text-text-primary mb-1.5"
                  >
                    Category <span className="text-purple">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="category"
                      name="category"
                      value={form.category}
                      onChange={handleChange}
                      className="w-full appearance-none bg-sage/40 border border-black/8 rounded-xl px-4 py-3 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-purple/30 focus:border-purple/50 transition-all pr-10"
                    >
                      <option value="" disabled>
                        Select a category…
                      </option>
                      {CATEGORIES.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="text-text-secondary"
                      >
                        <path
                          d="M4 6l4 4 4-4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-text-primary mb-1.5"
                  >
                    Subject <span className="text-purple">*</span>
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Brief summary of your issue…"
                    className="w-full bg-sage/40 border border-black/8 rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/60 focus:outline-none focus:ring-2 focus:ring-purple/30 focus:border-purple/50 transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-text-primary mb-1.5"
                  >
                    Description <span className="text-purple">*</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    rows={7}
                    placeholder="Please describe your issue in as much detail as possible…"
                    className="w-full bg-sage/40 border border-black/8 rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/60 focus:outline-none focus:ring-2 focus:ring-purple/30 focus:border-purple/50 transition-all resize-none"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={!isValid || loading}
                  className="w-full gradient-bg hover:gradient-bg-hover disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium px-6 py-3 rounded-pill transition-all flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </button>

                <p className="text-xs text-center text-text-secondary">
                  Or email us directly at{" "}
                  <a
                    href="mailto:hello@koalitytech.com"
                    className="text-purple hover:underline"
                  >
                    hello@koalitytech.com
                  </a>
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

function SuccessState() {
  return (
    <div className="text-center py-8">
      <div className="w-16 h-16 rounded-full bg-lavender flex items-center justify-center mx-auto mb-5">
        <CheckCircle size={32} className="text-purple" />
      </div>
      <h2 className="text-xl font-bold text-text-primary mb-2">
        Message Sent!
      </h2>
      <p className="text-sm text-text-secondary max-w-xs mx-auto mb-8">
        Thanks for reaching out. We&apos;ll get back to you within 1–2 business
        days.
      </p>
      <Link
        href="/"
        className="inline-block gradient-bg hover:gradient-bg-hover text-white font-medium px-8 py-3 rounded-pill transition-all text-sm"
      >
        Back to Home
      </Link>
    </div>
  );
}
