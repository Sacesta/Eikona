'use client';

import { motion } from "motion/react";

export function InspirationSection() {
  return (
    <section className="relative w-full py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image Placeholder */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative max-w-lg mx-auto">
              <div className="w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="w-20 h-20 bg-[#4169E1] rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-xl">💫</span>
                  </div>
                  <p>Inspiration Image</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Text Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                The world needs more conscious and compassionate leaders.
              </h2>
              
              <h2 className="text-3xl md:text-4xl font-bold leading-tight" style={{ color: '#4169E1' }}>
                That leader is YOU.
              </h2>
            </div>

            <div className="space-y-4 text-lg text-gray-600">
              <p>
                In a world that often prioritizes external achievements, we believe true leadership starts from within. 
                It's about cultivating self-awareness, emotional intelligence, and authentic presence.
              </p>
              <p>
                Our experiential approach helps you uncover your unique leadership style and express it confidently 
                in every aspect of your life and career.
              </p>
            </div>

            <motion.div
              className="flex gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex-1 p-4 bg-sage-50 rounded-xl border border-sage-200">
                <h4 className="font-semibold text-gray-900 mb-2">Self-Discovery</h4>
                <p className="text-sm text-gray-600">Uncover your authentic self and values</p>
              </div>
              <div className="flex-1 p-4 bg-teal-50 rounded-xl border border-teal-200">
                <h4 className="font-semibold text-gray-900 mb-2">Skill Development</h4>
                <p className="text-sm text-gray-600">Master communication and presence</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}