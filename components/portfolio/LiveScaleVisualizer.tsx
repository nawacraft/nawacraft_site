"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Scale, Wifi, CheckCircle2 } from "lucide-react";

export const LiveScaleVisualizer: React.FC = () => {
  const cuts = [
    { name: "Fresh Mutton Loin", weight: 2.45, price: 2940 },
    { name: "Buffalo Tenderloin", weight: 1.82, price: 1456 },
    { name: "Chicken Breast Fillet", weight: 3.15, price: 1575 },
    { name: "Prime Ribeye Cut", weight: 0.94, price: 2350 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isWeighing, setIsWeighing] = useState(false);

  // Auto-cycle through simulated weighing readings every 3.5s
  useEffect(() => {
    const timer = setInterval(() => {
      setIsWeighing(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % cuts.length);
        setIsWeighing(false);
      }, 400);
    }, 4000);

    return () => clearInterval(timer);
  }, [cuts.length]);

  const activeCut = cuts[currentIndex];

  return (
    <div className="relative aspect-[16/9] w-full rounded-2xl bg-gradient-to-b from-[#111014]/[0.03] to-[#111014]/[0.06] border border-[#111014]/10 p-6 sm:p-10 flex flex-col justify-between overflow-hidden shadow-inner group">
      {/* Top Telemetry Header */}
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-[#953553]/10 text-[#953553] flex items-center justify-center font-bold">
            <Scale className="h-4 w-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-[#111014] flex items-center gap-1.5">
              <span>Nawacraft SmartScale Node</span>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
            </div>
            <span className="text-[10px] font-mono text-[#111014]/50">
              Hardware Serial: NC-SCALE-8842 &bull; Direct Cloud Stream
            </span>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-[11px] font-mono px-2.5 py-1 rounded-full bg-white border border-[#111014]/10 shadow-2xs">
          <Wifi className="h-3 w-3 text-emerald-600 animate-pulse" />
          <span className="text-emerald-700 font-semibold">12ms Latency</span>
        </div>
      </div>

      {/* Center Live Weight LED Readout */}
      <div className="my-auto text-center py-4">
        <span className="text-[11px] uppercase tracking-wider text-[#953553] font-mono font-bold block mb-1">
          {activeCut.name}
        </span>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCut.name}
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="flex items-baseline justify-center gap-2"
          >
            <span className="text-4xl sm:text-6xl font-extrabold font-mono tracking-tight text-[#111014]">
              {isWeighing ? "CALIBRATING..." : `${activeCut.weight.toFixed(3)}`}
            </span>
            <span className="text-xl sm:text-2xl font-bold font-mono text-[#953553]">
              kg
            </span>
          </motion.div>
        </AnimatePresence>

        <div className="mt-2 text-xs font-mono text-[#111014]/60">
          Est. Price:{" "}
          <strong className="text-[#111014]">
            NPR {activeCut.price.toLocaleString()}
          </strong>{" "}
          &bull; Stock deducted automatically
        </div>
      </div>

      {/* Bottom Live Calibration Footer */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#111014]/10 text-xs">
        <div className="flex items-center gap-2 text-[11px] text-[#111014]/70">
          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 flex-shrink-0" />
          <span>Zero Drift Verified &bull; Direct Server Sync</span>
        </div>

        <div className="flex items-center gap-1.5">
          {cuts.map((cut, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                currentIndex === idx
                  ? "w-6 bg-[#953553]"
                  : "w-2 bg-[#111014]/20 hover:bg-[#111014]/40"
              }`}
              aria-label={`Select sample reading for ${cut.name}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
