"use client";

import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ContactForm } from "./ContactForm";
import { COMPANY_INFO } from "@/lib/portfolio-data";

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-white border-t border-[#111014]/[0.08]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="left">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#953553] block mb-3">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111014] mb-4">
                Let’s talk software and shops.
              </h2>
              <p className="text-sm sm:text-base text-[#111014]/70 leading-relaxed mb-8">
                Send us a message to schedule a live product demo or discuss your custom system build. We respond within 24 hours.
              </p>

              <div className="space-y-5 text-sm text-[#111014]/80">
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-[#111014]/[0.04] text-[#953553]">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-xs text-[#111014]/50 block">Direct Email</span>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="font-medium hover:text-[#953553] transition-colors"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-[#111014]/[0.04] text-[#953553]">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-xs text-[#111014]/50 block">Phone Support</span>
                    <a
                      href="tel:+97715500000"
                      className="font-medium hover:text-[#953553] transition-colors"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-[#111014]/[0.04] text-[#953553]">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-xs text-[#111014]/50 block">Headquarters</span>
                    <span className="font-medium">
                      {COMPANY_INFO.location}
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Interactive Form Island */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="right" delay={0.1}>
              <ContactForm />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
