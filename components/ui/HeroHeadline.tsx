"use client";

import React from "react";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export const HeroHeadline: React.FC = () => {
  // Words in the headline: "We craft software that runs businesses."
  const words = [
    { text: "We", highlight: false },
    { text: "craft", highlight: false },
    { text: "software", highlight: false },
    { text: "that", highlight: false },
    { text: "runs", highlight: true },
    { text: "businesses.", highlight: false },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 28,
      scale: 0.94,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        damping: 15,
        stiffness: 140,
      },
    },
  };

  return (
    <motion.h1
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#111014] leading-[1.08] mb-8 flex flex-wrap justify-center items-center gap-x-[0.28em] gap-y-2 select-none"
    >
      {words.map((word, index) => {
        if (word.highlight) {
          return (
            <motion.span
              key={index}
              variants={wordVariants}
              whileHover={{
                scale: 1.08,
                rotate: -2,
                transition: { type: "spring", stiffness: 350, damping: 10 },
              }}
              className="relative inline-flex items-center px-3 py-0.5 rounded-2xl bg-gradient-to-r from-[#953553]/15 via-[#953553]/10 to-[#359577]/15 border border-[#953553]/25 text-[#953553] cursor-pointer shadow-xs"
            >
              <span className="relative z-10">{word.text}</span>
              <motion.span
                animate={{
                  rotate: [0, 15, -15, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
                className="ml-1.5 inline-block text-[#953553]"
              >
                <Sparkles className="h-4 w-4 sm:h-6 sm:w-6" />
              </motion.span>
            </motion.span>
          );
        }

        return (
          <motion.span
            key={index}
            variants={wordVariants}
            whileHover={{
              y: -4,
              transition: { type: "spring", stiffness: 300, damping: 12 },
            }}
            className="inline-block transition-colors hover:text-[#953553]"
          >
            {word.text}
          </motion.span>
        );
      })}
    </motion.h1>
  );
};
