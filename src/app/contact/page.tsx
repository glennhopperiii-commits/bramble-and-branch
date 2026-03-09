"use client";

import { useState } from "react";

const inquiryOptions = [
  "Individual Therapy",
  "Clinical Consultation",
  "Speaking or Training",
  "Something Else",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    inquiryType: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to send");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <section className="pt-16 lg:pt-24 pb-24 lg:pb-32 px-6">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <div className="w-16 h-16 mx-auto rounded-full bg-sage-100 flex items-center justify-center">
            <svg className="w-8 h-8 text-sage-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-display-md font-display text-charcoal">
            Message received
          </h1>
          <p className="text-stone-500 leading-relaxed max-w-md mx-auto">
            Thank you for reaching out. I will get back to you within one to
            two business days.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-16 lg:pt-24 pb-24 lg:pb-32 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs uppercase tracking-[0.2em] text-sage-600 font-body mb-4">Contact</p>
        <h1 className="text-display-md lg:text-display-lg font-display text-charcoal mb-4">
          Reaching out is the hardest part
        </h1>
        <p className="text-lg text-stone-500 leading-relaxed mb-16 max-w-2xl">
          If something here resonated, I would be glad to hear from you.
          Whether you are looking for therapy, consultation, or a training
          partnership, the first step is the same: a simple conversation.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-xs uppercase tracking-widest text-sage-600">
                  Name <span className="text-sienna-400">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-stone-200 text-charcoal placeholder:text-stone-400 focus:outline-none focus:border-sage-400 focus:ring-1 focus:ring-sage-400 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-xs uppercase tracking-widest text-sage-600">
                  Email <span className="text-sienna-400">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-stone-200 text-charcoal placeholder:text-stone-400 focus:outline-none focus:border-sage-400 focus:ring-1 focus:ring-sage-400 transition-colors"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="inquiryType" className="block text-xs uppercase tracking-widest text-sage-600">
                I am reaching out about
              </label>
              <select
                id="inquiryType"
                value={form.inquiryType}
                onChange={(e) => setForm({ ...form, inquiryType: e.target.value })}
                className="w-full px-4 py-3 bg-white border border-stone-200 text-charcoal focus:outline-none focus:border-sage-400 focus:ring-1 focus:ring-sage-400 transition-colors appearance-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23a1917c' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 16px center",
                }}
              >
                <option value="">Select a topic (optional)</option>
                {inquiryOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-xs uppercase tracking-widest text-sage-600">
                Message <span className="text-sienna-400">*</span>
              </label>
              <textarea
                id="message"
                required
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 bg-white border border-stone-200 text-charcoal placeholder:text-stone-400 focus:outline-none focus:border-sage-400 focus:ring-1 focus:ring-sage-400 transition-colors resize-none"
                placeholder="Whatever feels important to share right now..."
              />
            </div>

            {status === "error" && (
              <p className="text-sm text-sienna-600">
                Something went wrong. Please try again, or email directly if the issue continues.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center gap-2 px-8 py-3 bg-sage-600 text-cream text-sm tracking-wide hover:bg-sage-700 focus:outline-none focus:ring-2 focus:ring-sage-400 focus:ring-offset-2 focus:ring-offset-cream transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Sending..." : "Send message"}
            </button>
          </form>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="p-8 bg-stone-50/60 border border-stone-200/80 space-y-4">
              <p className="font-display text-xl text-charcoal">What to expect</p>
              <div className="space-y-3 text-sm text-stone-600 leading-relaxed">
                <p>
                  When you reach out, I will respond within one to two business
                  days. We will schedule a brief introductory call to talk about
                  what brings you in and whether we might be a good fit.
                </p>
                <p>
                  There is no pressure. That first conversation is simply a
                  chance to see if this feels right.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-xs uppercase tracking-widest text-sage-600">Location</p>
              <p className="text-stone-600 text-sm leading-relaxed">
                Memphis, Tennessee<br />
                Virtual sessions available statewide
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
