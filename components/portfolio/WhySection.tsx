"use client";

import React from "react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

export const WhySection: React.FC = () => {
  return (
    <section id="why" className="py-24 md:py-36 bg-white border-y border-[#111014]/[0.08]">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal direction="up">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#953553] block mb-3">
              Why Nawacraft
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111014] mb-4">
              Built to Deliver Results
            </h2>
            <p className="text-base sm:text-lg text-[#111014]/70 leading-relaxed">
              We combine hardware practicality with modern software to eliminate real business bottlenecks.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StaggerItem>
            <div className="p-8 rounded-2xl border border-[#111014]/[0.08] bg-[#FAFAF9] hover:bg-white hover:border-[#953553]/30 transition-all h-full group">
              <span className="text-3xl font-mono font-bold text-[#953553] block mb-4 group-hover:scale-110 transition-transform origin-left">
                01
              </span>
              <h3 className="text-xl font-bold text-[#111014] mb-2">
                9 specialists, one team
              </h3>
              <p className="text-sm text-[#111014]/70 leading-relaxed">
                Direct access to the founders building your software. No account managers or lost requirements.
              </p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="p-8 rounded-2xl border border-[#111014]/[0.08] bg-[#FAFAF9] hover:bg-white hover:border-[#953553]/30 transition-all h-full group">
              <span className="text-3xl font-mono font-bold text-[#953553] block mb-4 group-hover:scale-110 transition-transform origin-left">
                02
              </span>
              <h3 className="text-xl font-bold text-[#111014] mb-2">
                Build and ship end to end
              </h3>
              <p className="text-sm text-[#111014]/70 leading-relaxed">
                From soldering physical scale controllers to cloud deployment and marketing. We execute every single layer.
              </p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="p-8 rounded-2xl border border-[#111014]/[0.08] bg-[#FAFAF9] hover:bg-white hover:border-[#953553]/30 transition-all h-full group">
              <span className="text-3xl font-mono font-bold text-[#953553] block mb-4 group-hover:scale-110 transition-transform origin-left">
                03
              </span>
              <h3 className="text-xl font-bold text-[#111014] mb-2">
                Products we use ourselves
              </h3>
              <p className="text-sm text-[#111014]/70 leading-relaxed">
                We rigorously field-test our tools in active shops before recommending them to clients.
              </p>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
};
