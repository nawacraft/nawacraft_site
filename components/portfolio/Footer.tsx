import React from "react";
import { COMPANY_INFO } from "@/lib/portfolio-data";

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-[#111014]/10 bg-[#FAFAF9] text-xs text-[#111014]/60">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="h-6 w-6 rounded-md bg-[#953553] text-white flex items-center justify-center font-bold text-xs">
            N
          </span>
          <span className="font-semibold text-sm text-[#111014]">
            {COMPANY_INFO.name}
          </span>
          <span>•</span>
          <span>{COMPANY_INFO.location}</span>
        </div>

        <div className="flex items-center gap-6">
          {COMPANY_INFO.socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#953553] transition-colors"
            >
              {social.name}
            </a>
          ))}
          <span>•</span>
          <span>&copy; {COMPANY_INFO.copyrightYear} {COMPANY_INFO.name}</span>
        </div>
      </div>
    </footer>
  );
};
