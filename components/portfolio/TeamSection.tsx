"use client";

import React from "react";
import Image from "next/image";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { TEAM_MEMBERS } from "@/lib/portfolio-data";

const COUNT_WORDS = [
  "Zero", "One", "Two", "Three", "Four", "Five",
  "Six", "Seven", "Eight", "Nine", "Ten",
];

const countWord = (n: number) => COUNT_WORDS[n] ?? String(n);

const getInitials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-24 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal direction="up">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#953553] block mb-3">
              Founding Team
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111014] mb-4">
              {countWord(TEAM_MEMBERS.length)} Specialists, One Team
            </h2>
            <p className="text-base sm:text-lg text-[#111014]/70 leading-relaxed">
              Every member owns one specialty across the complete product lifecycle. No outsourced middlemen.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer
          staggerDelay={0.06}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {TEAM_MEMBERS.map((member, idx) => (
            <StaggerItem key={idx}>
              <div className="p-6 rounded-2xl border border-[#111014]/[0.08] bg-white hover:shadow-md hover:border-[#953553]/30 transition-all flex flex-col h-full group">
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-[#111014]/[0.05] mb-5 border border-[#111014]/[0.06]">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={`Portrait photo of ${member.name}, ${member.role} at Nawacraft`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
                      loading="lazy"
                    />
                  ) : (
                    <div
                      className="absolute inset-0 flex items-center justify-center bg-[#111014] text-white"
                      aria-label={`${member.name}, ${member.role} at Nawacraft`}
                    >
                      <span className="text-3xl sm:text-4xl font-bold tracking-tight">
                        {getInitials(member.name)}
                      </span>
                    </div>
                  )}
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-black/60 text-white text-[10px] font-mono z-10 backdrop-blur-xs">
                    Team #{idx + 1}
                  </div>
                </div>

                <div className="flex-1 flex flex-col">
                  <h3 className="text-base font-bold text-[#111014] tracking-tight group-hover:text-[#953553] transition-colors">
                    {member.name}
                  </h3>
                  <span className="text-xs font-medium text-[#953553] mb-2">
                    {member.role}
                  </span>
                  <p className="text-xs text-[#111014]/60 leading-relaxed mt-auto">
                    {member.expertise}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
