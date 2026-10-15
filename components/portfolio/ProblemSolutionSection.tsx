"use client";

import React from "react";
import { Sparkles } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

export const ProblemSolutionSection: React.FC = () => {
  return (
    <section className="py-16 border-y border-[#111014]/[0.08] bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* The Problem */}
          <StaggerItem>
            <div className="p-7 rounded-2xl bg-[#111014]/[0.02] border border-[#111014]/[0.06] hover:border-[#111014]/15 transition-colors">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#953553] font-bold block mb-2">
                The Problem
              </span>
              <p className="text-lg sm:text-xl font-medium text-[#111014]/60 leading-snug">
                Manual weighing. Lost stock. Guesswork on sales.
              </p>
            </div>
          </StaggerItem>

          {/* The Nawacraft Solution */}
          <StaggerItem>
            <div className="p-7 rounded-2xl bg-[#953553]/[0.04] border border-[#953553]/20 hover:border-[#953553]/40 transition-colors shadow-2xs">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#953553] font-bold block mb-2 flex items-center gap-1.5">
                <Sparkles className="h-3 w-3" />
                <span>The Nawacraft Solution</span>
              </span>
              <p className="text-lg sm:text-xl font-bold text-[#111014] leading-snug">
                Connected. Automatic. Clear.
              </p>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
};
