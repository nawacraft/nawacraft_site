"use client";

import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

export const PlayfulShapes: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth dampening springs for mouse parallax
  const springX = useSpring(mouseX, { damping: 30, stiffness: 120 });
  const springY = useSpring(mouseY, { damping: 30, stiffness: 120 });

  // Multi-depth parallax transforms
  const move1X = useTransform(springX, [-500, 500], [-25, 25]);
  const move1Y = useTransform(springY, [-500, 500], [-25, 25]);

  const move2X = useTransform(springX, [-500, 500], [35, -35]);
  const move2Y = useTransform(springY, [-500, 500], [35, -35]);

  const move3X = useTransform(springX, [-500, 500], [-15, 15]);
  const move3Y = useTransform(springY, [-500, 500], [20, -20]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set(e.clientX - innerWidth / 2);
      mouseY.set(e.clientY - innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0"
    >
      {/* Shape 1: Wine Plum Rotated Wireframe Rhombus (Top Left) */}
      <motion.div
        style={{ x: move1X, y: move1Y }}
        className="absolute top-[18%] left-[8%] sm:left-[12%]"
      >
        <div className="relative animate-float-slow">
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl border-2 border-[#953553]/25 bg-gradient-to-br from-[#953553]/10 to-transparent rotate-12 backdrop-blur-[2px] shadow-sm flex items-center justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-[#953553]/40" />
          </div>
          <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#953553]/60 animate-ping" />
        </div>
      </motion.div>

      {/* Shape 2: Spruce Seafoam Pill Capsule (Top Right) */}
      <motion.div
        style={{ x: move2X, y: move2Y }}
        className="absolute top-[22%] right-[7%] sm:right-[14%]"
      >
        <div className="animate-float-reverse">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#359577]/30 bg-[#359577]/10 -rotate-6 shadow-xs backdrop-blur-[2px]">
            <span className="w-2 h-2 rounded-full bg-[#359577]" />
            <span className="font-mono text-[10px] text-[#359577] font-semibold tracking-wider">
              IoT • SYNCD
            </span>
          </div>
        </div>
      </motion.div>

      {/* Shape 3: Dotted Concentric Radar Circle (Bottom Left) */}
      <motion.div
        style={{ x: move3X, y: move3Y }}
        className="absolute bottom-[20%] left-[5%] sm:left-[15%]"
      >
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 animate-float-spin">
          <svg viewBox="0 0 100 100" className="w-full h-full text-[#953553]/20">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="4 6"
            />
            <circle
              cx="50"
              cy="50"
              r="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
          <div className="absolute top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#953553]/70" />
        </div>
      </motion.div>

      {/* Shape 4: Playful Isometric Floating Cube / Hexagon (Bottom Right) */}
      <motion.div
        style={{ x: move1X, y: move2Y }}
        className="absolute bottom-[24%] right-[8%] sm:right-[16%]"
      >
        <div className="animate-float-slow">
          <div className="w-14 h-14 sm:w-16 sm:h-16 relative">
            <svg
              viewBox="0 0 60 60"
              className="w-full h-full drop-shadow-sm text-[#111014]/15"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <polygon points="30,5 55,18 55,42 30,55 5,42 5,18" />
              <line x1="30" y1="5" x2="30" y2="55" stroke="currentColor" />
              <line x1="30" y1="30" x2="55" y2="18" stroke="currentColor" />
              <line x1="30" y1="30" x2="5" y2="18" stroke="currentColor" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-[#953553]/40" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Shape 5: Floating Minimalist Plus Tokens */}
      <div className="absolute top-[35%] left-[26%] text-[#953553]/30 font-mono text-sm animate-pulse-subtle">
        +
      </div>
      <div className="absolute bottom-[38%] right-[28%] text-[#359577]/30 font-mono text-base animate-pulse-subtle delay-1000">
        +
      </div>
      <div className="absolute top-[15%] left-[45%] text-[#111014]/20 font-mono text-xs animate-pulse-subtle delay-700">
        &times;
      </div>

      {/* Shape 6: Soft Warm Gradient Aura Glows */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[580px] h-[340px] bg-gradient-to-b from-[#953553]/8 via-[#359577]/5 to-transparent rounded-full blur-3xl pointer-events-none" />
    </div>
  );
};
