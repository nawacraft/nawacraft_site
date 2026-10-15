"use client";

import React, { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export const ContactForm: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    intent: "Book a Demo",
    message: "",
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="p-8 sm:p-10 rounded-3xl border border-[#111014]/[0.08] bg-[#FAFAF9]">
      {formSubmitted ? (
        <div className="py-12 text-center">
          <div className="h-12 w-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold text-[#111014] mb-2">
            Message Received
          </h3>
          <p className="text-sm text-[#111014]/70 max-w-sm mx-auto">
            Thank you. A Nawacraft team specialist will reach out to you within one business day.
          </p>
        </div>
      ) : (
        <form onSubmit={handleFormSubmit} className="space-y-5">
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-[#111014]/70 block mb-2">
              I would like to:
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, intent: "Book a Demo" })}
                className={`py-2.5 px-4 text-xs font-semibold rounded-xl border text-center transition-all cursor-pointer ${
                  formData.intent === "Book a Demo"
                    ? "bg-[#953553] text-white border-[#953553]"
                    : "bg-white text-[#111014] border-[#111014]/15 hover:border-[#953553]/40"
                }`}
              >
                Book a Demo
              </button>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, intent: "Start a Project" })}
                className={`py-2.5 px-4 text-xs font-semibold rounded-xl border text-center transition-all cursor-pointer ${
                  formData.intent === "Start a Project"
                    ? "bg-[#953553] text-white border-[#953553]"
                    : "bg-white text-[#111014] border-[#111014]/15 hover:border-[#953553]/40"
                }`}
              >
                Start a Project
              </button>
            </div>
          </div>

          <div>
            <label htmlFor="contact-name" className="text-xs font-semibold text-[#111014]/80 block mb-1.5">
              Your Full Name
            </label>
            <input
              id="contact-name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Ramesh Karki"
              className="w-full px-4 py-3 rounded-xl border border-[#111014]/15 bg-white text-sm text-[#111014] focus:outline-none focus:ring-2 focus:ring-[#953553] transition-all"
            />
          </div>

          <div>
            <label htmlFor="contact-email" className="text-xs font-semibold text-[#111014]/80 block mb-1.5">
              Email Address
            </label>
            <input
              id="contact-email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="you@company.com"
              className="w-full px-4 py-3 rounded-xl border border-[#111014]/15 bg-white text-sm text-[#111014] focus:outline-none focus:ring-2 focus:ring-[#953553] transition-all"
            />
          </div>

          <div>
            <label htmlFor="contact-message" className="text-xs font-semibold text-[#111014]/80 block mb-1.5">
              Message or Shop Details
            </label>
            <textarea
              id="contact-message"
              rows={3}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us about your meat shop scale setup or custom software requirements..."
              className="w-full px-4 py-3 rounded-xl border border-[#111014]/15 bg-white text-sm text-[#111014] focus:outline-none focus:ring-2 focus:ring-[#953553] transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-[#953553] hover:bg-[#7d2c45] text-white text-sm font-semibold transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Submit Request</span>
            <Send className="h-4 w-4" />
          </button>
        </form>
      )}
    </div>
  );
};
