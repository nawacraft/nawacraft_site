"use client";

import React from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const FinalCtaSection: React.FC = () => {
  return (
    <section className="py-24 md:py-36 text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <ScrollReveal direction="up">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#111014] leading-[1.1] mb-6">
            Ready to see it in action?
          </h2>

          <p className="text-base sm:text-lg text-[#111014]/70 max-w-xl mx-auto mb-10 leading-relaxed">
            Schedule an on-site demo of our Meat Management System or partner with our team on your next custom software.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#953553] text-white text-sm font-semibold hover:bg-[#7d2c45] transition-all shadow-sm hover:scale-[1.03] active:scale-[0.98]"
            >
              Book a Demo
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl border border-[#111014]/20 bg-white hover:bg-[#FAFAF9] text-[#111014] text-sm font-semibold transition-all shadow-xs hover:scale-[1.03] active:scale-[0.98]"
            >
              Start a Project
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
