'use client';

import { motion } from "motion/react";
import { Button } from "./ui/button";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-screen  pt-30 flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#f3f5f3] via-[#f8f6f3] to-[#eaf3f1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 w-full grid md:grid-cols-2 gap-6 md:gap-10 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-semibold text-gray-900 leading-tight">
              Confidence you can Wear. <br className="hidden sm:block" />
              Communication you can Feel.
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-[#4169E1] font-medium">
              Styling with Substance, Inside Out
            </p>
          </div>

      

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-[#0f766e] hover:bg-[#115e59] text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-md shadow-md"
            >
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                Talk to us
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-gray-300 text-gray-800 hover:bg-gray-50 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-md"
            >
              <a href="#quiz">
                Take the Confidence Quiz
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center"
        >
          <div className="w-full max-w-[320px] sm:max-w-[380px] h-[500px] sm:h-[600px] relative border-0 overflow-hidden">
            <Image
              src="/For_Home_Page-removebg-preview.png"
              alt="Professional portrait"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
