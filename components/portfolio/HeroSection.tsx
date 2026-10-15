"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { PlayfulShapes } from "@/components/ui/PlayfulShapes";
import { HeroHeadline } from "@/components/ui/HeroHeadline";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden">
      {/* Playful Floating Minimalist Background Shapes */}
      <PlayfulShapes />

      <div className="relative max-w-4xl mx-auto px-6 text-center z-10">
        {/* Eyebrow Pill */}
        <ScrollReveal direction="down" delay={0.05}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#111014]/[0.08] text-xs font-medium text-[#111014]/80 mb-8 backdrop-blur-md shadow-2xs hover:scale-105 transition-transform cursor-default">
            <span className="h-2 w-2 rounded-full bg-[#953553] animate-ping" />
            <span>Nawacraft • Mahalaxmisthan, Lalitpur, Nepal</span>
          </div>
        </ScrollReveal>

        {/* Staggered Animated Headline */}
        <HeroHeadline />

        {/* Supporting Line (<2 sentences) */}
        <ScrollReveal direction="up" delay={0.25}>
          <p className="text-lg sm:text-xl text-[#111014]/70 max-w-2xl mx-auto leading-relaxed mb-10">
            A founding team of nine specialists building custom software systems and connected retail products.
          </p>
        </ScrollReveal>

        {/* Action Buttons */}
        <ScrollReveal direction="up" delay={0.35}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#product"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-[#953553] text-white text-sm font-semibold hover:bg-[#7d2c45] transition-all shadow-sm gap-2 hover:scale-[1.03] active:scale-[0.98]"
            >
              <span>See the Demo</span>
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl border border-[#111014]/20 bg-white hover:bg-[#FAFAF9] text-[#111014] text-sm font-semibold transition-all shadow-xs hover:scale-[1.03] active:scale-[0.98]"
            >
              Work With Us
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
