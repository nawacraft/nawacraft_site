"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[#FAFAF9]/90 backdrop-blur-md border-b border-[#111014]/10 shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <span className="h-8 w-8 rounded-lg bg-[#953553] text-white flex items-center justify-center font-bold text-sm tracking-tight shadow-sm transition-transform group-hover:scale-105">
            N
          </span>
          <span className="font-semibold text-lg tracking-tight text-[#111014]">
            Nawacraft
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#111014]/70">
          <a href="#product" className="hover:text-[#953553] transition-colors">
            Product
          </a>
          <a href="#services" className="hover:text-[#953553] transition-colors">
            Services
          </a>
          <a href="#team" className="hover:text-[#953553] transition-colors">
            Team
          </a>
          <a href="#why" className="hover:text-[#953553] transition-colors">
            Why Us
          </a>
          <a href="#contact" className="hover:text-[#953553] transition-colors">
            Contact
          </a>
        </nav>

        {/* Nav CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg bg-[#953553] text-white hover:bg-[#7d2c45] active:bg-[#682339] transition-all shadow-sm"
          >
            Book a Demo
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#111014] hover:text-[#953553] transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Full-Screen Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-[#FAFAF9] z-40 p-8 flex flex-col justify-between border-t border-[#111014]/10 animate-in fade-in duration-200">
          <nav className="flex flex-col gap-6 text-2xl font-semibold tracking-tight text-[#111014]">
            <a
              href="#product"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#953553] transition-colors"
            >
              Product
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#953553] transition-colors"
            >
              Services
            </a>
            <a
              href="#team"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#953553] transition-colors"
            >
              Team
            </a>
            <a
              href="#why"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#953553] transition-colors"
            >
              Why Us
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#953553] transition-colors"
            >
              Contact
            </a>
          </nav>

          <div className="pt-8 border-t border-[#111014]/10 flex flex-col gap-3">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 text-center text-sm font-semibold rounded-xl bg-[#953553] text-white shadow-sm"
            >
              Book a Demo
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 text-center text-sm font-semibold rounded-xl border border-[#111014]/20 text-[#111014]"
            >
              Start a Project
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
