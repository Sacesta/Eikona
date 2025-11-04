'use client';

import { motion } from "motion/react";

export function SpiralBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main spiral motif */}
      <motion.div
        className="absolute top-1/2 right-1/4 w-96 h-96 opacity-10"
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: {
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          },
          scale: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <radialGradient id="spiralGradient">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.8" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
            </radialGradient>
          </defs>
          <path
            d="M100,100 Q120,80 140,90 T160,120 Q150,140 130,145 T90,140 Q70,130 65,110 T70,80 Q85,60 110,60 T145,80 Q155,105 145,130"
            fill="none"
            stroke="url(#spiralGradient)"
            strokeWidth="2"
            className="text-teal-500"
          />
        </svg>
      </motion.div>

      {/* Secondary smaller spiral */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-48 h-48 opacity-5"
        animate={{
          rotate: -360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          rotate: {
            duration: 45,
            repeat: Infinity,
            ease: "linear",
          },
          scale: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <radialGradient id="spiralGradientSecondary">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.8" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
            </radialGradient>
          </defs>
          <path
            d="M100,100 Q110,90 120,95 T130,110 Q125,120 115,122 T95,120 Q85,115 83,105 T87,90 Q95,80 110,80"
            fill="none"
            stroke="url(#spiralGradientSecondary)"
            strokeWidth="2"
            className="text-sage-400"
          />
        </svg>
      </motion.div>

      {/* Additional decorative elements */}
      <motion.div
        className="absolute bottom-1/4 right-1/3 w-64 h-64 opacity-5"
        animate={{
          rotate: 180,
          scale: [1, 1.05, 1],
        }}
        transition={{
          rotate: {
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          },
          scale: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <circle
            cx="100"
            cy="100"
            r="80"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="4 4"
            className="text-[#4169E1]"
          />
        </svg>
      </motion.div>
    </div>
  );
}