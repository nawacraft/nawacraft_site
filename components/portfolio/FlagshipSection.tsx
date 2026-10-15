"use client";

import React from "react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { LiveScaleVisualizer } from "./LiveScaleVisualizer";
import { FLAGSHIP_FEATURES } from "@/lib/portfolio-data";

export const FlagshipSection: React.FC = () => {
  return (
    <section id="product" className="py-24 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal direction="up">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#953553] block mb-3">
              Flagship Product
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111014] mb-4">
              Meat Management System
            </h2>
            <p className="text-base sm:text-lg text-[#111014]/70 leading-relaxed">
              Connect shop weighing scales directly to your cloud dashboard. Track live inventory, stop stock leaks, and forecast sales automatically.
            </p>
          </div>
        </ScrollReveal>

        {/* Interactive Live Weighing Console Showcase */}
        <ScrollReveal direction="up" delay={0.15}>
          <div className="rounded-3xl border border-[#111014]/10 bg-white p-6 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.04)] mb-14">
            <LiveScaleVisualizer />

            {/* 6 Key Features Staggered Grid */}
            <StaggerContainer
              staggerDelay={0.07}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 pt-10 border-t border-[#111014]/[0.08]"
            >
              {FLAGSHIP_FEATURES.map((feature, idx) => {
                const IconComponent = feature.icon;
                return (
                  <StaggerItem key={idx}>
                    <div className="flex items-start gap-3.5 p-2 rounded-xl hover:bg-[#FAFAF9] transition-colors">
                      <div className="p-2 rounded-lg bg-[#953553]/10 text-[#953553] flex-shrink-0 mt-0.5">
                        <IconComponent className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-[#111014] leading-snug">
                          {feature.text}
                        </h4>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </ScrollReveal>

        {/* Section Action Banner */}
        <ScrollReveal direction="up" delay={0.25}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-2xl bg-[#953553]/[0.04] border border-[#953553]/20 hover:border-[#953553]/35 transition-colors">
            <div>
              <h3 className="text-xl font-bold text-[#111014] mb-1">
                Stop manual weighing errors today.
              </h3>
              <p className="text-sm text-[#111014]/70">
                We calibrate and deploy the hardware in your meat shop within one hour.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#953553] text-white text-sm font-semibold hover:bg-[#7d2c45] transition-all shadow-sm flex-shrink-0 hover:scale-[1.03] active:scale-[0.98]"
            >
              Book a Demo
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
