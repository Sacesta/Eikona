'use client';

import { motion } from "motion/react";
import { Button } from "./ui/button";
import { SpiralBackground } from "./SpiralBackground";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Gradient Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-[#e8ede8] via-[#f0ebe5] to-[#e0f0ef]"
        style={{
          background: "linear-gradient(135deg, #e8ede8 0%, #f0ebe5 40%, #e0f0ef 100%)",
        }}
      />

      {/* Spiral Background Animation */}
      <SpiralBackground />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                <span className="block">Confidence you can</span>
                <span className="block">Wear. Communication</span>
                <span className="block">you can Feel.</span>
              </h1>
              
              {/* Subline */}
              <p className="mt-4 text-xl md:text-2xl" style={{ color: '#4169E1' }}>
                Styling with Substance, Inside Out
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 max-w-lg">
              Helping professionals and teams look the part, speak with clarity, and lead with presence through transformative experiential learning.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg font-semibold"
              >
                <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                  Talk to us
                </a>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg font-semibold"
              >
                <a href="#quiz">
                  Take the Confidence Quiz
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Right Side - Main Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative max-w-md mx-auto">
              <div className="w-full h-96 bg-gradient-to-br from-[#4169E1]/20 to-teal-500/20 rounded-3xl overflow-hidden flex items-center justify-center">
                <Image
                  src="/HomePage.JPEG"
                  alt="Professional Portrait"
                  width={400}
                  height={384}
                  className="object-cover w-full h-full rounded-3xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}