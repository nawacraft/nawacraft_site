"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { SERVICES } from "@/lib/portfolio-data";

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-24 md:py-36 bg-white border-t border-[#111014]/[0.08]">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal direction="up">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#953553] block mb-3">
              Capabilities
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111014] mb-4">
              Software Services We Provide
            </h2>
            <p className="text-base sm:text-lg text-[#111014]/70 leading-relaxed">
              We design, build, and deploy reliable digital systems tailored to your specific business model.
            </p>
          </div>
        </ScrollReveal>

        {/* Staggered Services Grid with Playful Micro-Lifts */}
        <StaggerContainer
          staggerDelay={0.08}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((service, idx) => {
            const ServiceIcon = service.icon;
            return (
              <StaggerItem key={idx}>
                <div className="p-8 rounded-2xl border border-[#111014]/[0.08] bg-[#FAFAF9] hover:bg-white hover:border-[#953553]/40 hover:shadow-md transition-all duration-200 group flex flex-col justify-between h-full">
                  <div>
                    <div className="h-11 w-11 rounded-xl bg-white border border-[#111014]/10 flex items-center justify-center text-[#111014] group-hover:text-[#953553] group-hover:scale-110 group-hover:border-[#953553]/30 transition-all mb-6 shadow-2xs">
                      <ServiceIcon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-[#111014] mb-2 group-hover:text-[#953553] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#111014]/70 leading-relaxed mb-6">
                      {service.desc}
                    </p>
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center text-xs font-semibold text-[#953553] hover:underline gap-1 mt-auto"
                  >
                    <span>Start a Project</span>
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};
