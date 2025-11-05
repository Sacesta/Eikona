// components/PraiseSection.tsx
'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  designation: string;
  avatar: string;
}

export function PraiseSection() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "Bhavna was exceptional in delivering a mindful leadership workshop at HSBC. She brought to light the profound knowledge of being grounded and well even in adverse situations. Her delivery was unique and the audience could really feel the difference post the session. Some who were oblivious to this leadership trait left the room enlightened. Thanks Bhavna.",
      name: "Sreeja Mukerka",
      designation: "Head - Global Banking CBG Central, HSBC",
      avatar: "SM"
    },
    {
      id: 2,
      quote: "Thank you for the Building Step By Girl session for Google. They are one of the strongest sessions we've had this year and everyone found immense value in learning from you. Looking forward to hosting more sessions together!",
      name: "Sarah Johnson",
      designation: "Learning & Development Lead, Google",
      avatar: "SJ"
    },
    {
      id: 3,
      quote: "The leadership workshop transformed our team's approach to mindful decision-making. The practical tools and insights shared have had a lasting impact on how we navigate challenges and lead with purpose.",
      name: "Michael Chen",
      designation: "VP of People Operations, Microsoft",
      avatar: "MC"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="relative w-full bg-[#008080] py-20 md:py-32 px-6 md:px-12 overflow-hidden">
      {/* Top Wave Border */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg className="relative block w-full h-[60px] md:h-[80px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="#F8F4ED"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="#F8F4ED"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#F8F4ED"></path>
        </svg>
      </div>

      {/* Bottom Wave Border */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg className="relative block w-full h-[60px] md:h-[80px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="#F8F4ED"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="#F8F4ED"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#F8F4ED"></path>
        </svg>
      </div>

      {/* Decorative background circles */}
      <div className="absolute top-10 right-20 w-32 h-32 rounded-full bg-white/5 blur-xl"></div>
      <div className="absolute bottom-20 left-16 w-48 h-48 rounded-full bg-white/5 blur-2xl"></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full bg-white/5 blur-lg"></div>
      
      {/* Animated floating circles */}
      <motion.div
        className="absolute top-1/4 right-1/3 w-16 h-16 rounded-full bg-white/10"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-20 h-20 rounded-full bg-white/10"
        animate={{
          y: [0, 20, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white text-center mb-12 md:mb-16 tracking-wider"
        >
          PRAISE
        </motion.h2>

        {/* Testimonial Content */}
        <div className="relative min-h-[400px] md:min-h-[350px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center px-4 md:px-8"
            >
              {/* Quote */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-white/90 text-[16px] md:text-[18px] leading-relaxed mb-8 md:mb-12 italic max-w-3xl mx-auto"
              >
                "{testimonials[currentIndex].quote}"
              </motion.p>

              {/* Author Info */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex items-center justify-center gap-4"
              >
                {/* Avatar */}
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center shrink-0">
                  <span className="text-[#1e3a8a] tracking-tight">
                    {testimonials[currentIndex].avatar}
                  </span>
                </div>

                {/* Name and Designation */}
                <div className="text-left">
                  <p className="text-white">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-white/70 text-[14px] md:text-[15px]">
                    {testimonials[currentIndex].designation}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-6 mt-8 md:mt-12">
          <button
            onClick={handlePrevious}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center text-white"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots indicator */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-white w-8"
                    : "bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center text-white"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}