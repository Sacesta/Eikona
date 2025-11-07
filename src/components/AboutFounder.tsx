'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { ChevronRight, Calendar } from "lucide-react";
import Image from "next/image";

export function AboutFounder() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleScheduleCall = () => {
    window.open("https://calendly.com/eikona-el/30min", "_blank");
  };

  return (
    <section id="founder-section" className="min-h-screen flex items-center justify-center px-4 py-16 md:py-24 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Gradient Background Card */}
            <div className="absolute inset-0 -inset-x-8 -inset-y-8 bg-gradient-to-br from-purple-100/40 via-pink-50/30 to-blue-50/40 rounded-[3rem] blur-2xl opacity-60"></div>
            
            <div className="relative w-full h-[600px] flex items-center justify-center bg-gradient-to-br from-purple-50/50 via-pink-50/30 to-blue-50/50 rounded-3xl p-8">
              {/* Decorative curved lines */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 400 600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Top right curve */}
                <motion.path
                  d="M 320 80 Q 360 120 380 180"
                  stroke="url(#gradient1)"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 0.5 }}
                />
                <motion.circle
                  cx="380"
                  cy="180"
                  r="6"
                  fill="#C084FC"
                  stroke="white"
                  strokeWidth="2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                />
                
                {/* Bottom left to center curve */}
                <motion.path
                  d="M 80 520 Q 120 480 180 460"
                  stroke="url(#gradient2)"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 0.8 }}
                />
                <motion.circle
                  cx="80"
                  cy="520"
                  r="6"
                  fill="#EC4899"
                  stroke="white"
                  strokeWidth="2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                />
                
                {/* Right side connecting curve */}
                <motion.path
                  d="M 340 320 Q 380 360 390 420"
                  stroke="url(#gradient3)"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1.1 }}
                />
                <motion.circle
                  cx="390"
                  cy="420"
                  r="6"
                  fill="#A78BFA"
                  stroke="white"
                  strokeWidth="2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.3 }}
                />
                
                {/* Left top curve */}
                <motion.path
                  d="M 60 120 Q 30 160 20 220"
                  stroke="url(#gradient4)"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 0.6 }}
                />
                <motion.circle
                  cx="20"
                  cy="220"
                  r="6"
                  fill="#F472B6"
                  stroke="white"
                  strokeWidth="2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                />

                {/* Gradient definitions */}
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#C084FC" />
                    <stop offset="100%" stopColor="#A78BFA" />
                  </linearGradient>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#EC4899" />
                    <stop offset="100%" stopColor="#F472B6" />
                  </linearGradient>
                  <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#A78BFA" />
                    <stop offset="100%" stopColor="#C084FC" />
                  </linearGradient>
                  <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F472B6" />
                    <stop offset="100%" stopColor="#EC4899" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Image 1 - Top Center (TEDx style) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20, rotateZ: -5 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  y: 0,
                  rotateZ: 0
                }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.08, 
                  rotateZ: 2,
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-56 rounded-3xl overflow-hidden shadow-2xl border-4 border-white cursor-pointer group"
              >
                <motion.div
                  animate={{ 
                    y: [0, -8, 0] 
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative w-full h-full"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1700651691401-b6775c93f5a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHNwZWFraW5nJTIwVEVEeHxlbnwxfHx8fDE3NjIyNDk2MjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Saloni Parikh speaking"
                    className="w-full h-full object-cover"
                    fill
                    sizes="(max-width: 768px) 288px, 288px"
                  />
                  {/* Shimmer effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30"
                    initial={{ x: "-100%" }}
                    whileHover={{ 
                      x: "100%",
                      transition: { duration: 0.6 }
                    }}
                  />
                </motion.div>
                <motion.div 
                  initial={{ scale: 0, y: -10 }}
                  animate={{ scale: 1, y: 0 }}
                  transition={{ delay: 0.8, type: "spring" }}
                  className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-medium z-10"
                >
                  TEDx Speaker
                </motion.div>
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-purple-400/20 to-pink-400/20 pointer-events-none" />
              </motion.div>

              {/* Image 2 - Right Side */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 20, rotateZ: 5 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  x: 0,
                  rotateZ: 0
                }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.4,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.08, 
                  rotateZ: -2,
                  x: -5,
                  transition: { duration: 0.3 }
                }}
                className="absolute top-32 right-8 w-56 h-56 rounded-3xl overflow-hidden shadow-2xl border-4 border-white cursor-pointer group"
              >
                <motion.div
                  animate={{ 
                    y: [0, 10, 0],
                    rotateZ: [0, 1, 0]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="relative w-full h-full"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25maWRlbnQlMjBidXNpbmVzcyUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYyMjQ5NjIxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Saloni Parikh portrait"
                    className="w-full h-full object-cover"
                    fill
                    sizes="(max-width: 768px) 224px, 224px"
                  />
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30"
                    initial={{ x: "-100%" }}
                    whileHover={{ 
                      x: "100%",
                      transition: { duration: 0.6, delay: 0.1 }
                    }}
                  />
                </motion.div>
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-pink-400/20 to-purple-400/20 pointer-events-none" />
              </motion.div>

              {/* Image 3 - Bottom Left */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20, rotateZ: -3 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  y: 0,
                  rotateZ: 0
                }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.6,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.08, 
                  rotateZ: 3,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="absolute bottom-8 left-8 w-64 h-64 rounded-3xl overflow-hidden shadow-2xl border-4 border-white cursor-pointer group"
              >
                <motion.div
                  animate={{ 
                    y: [0, -6, 0],
                    rotateZ: [0, -1, 0]
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                  className="relative w-full h-full"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1646369505567-3a9cbb052342?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGxlYWRlciUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3NjIxNzAyMjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Saloni Parikh leadership"
                    className="w-full h-full object-cover"
                    fill
                    sizes="(max-width: 768px) 256px, 256px"
                  />
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30"
                    initial={{ x: "-100%" }}
                    whileHover={{ 
                      x: "100%",
                      transition: { duration: 0.6, delay: 0.2 }
                    }}
                  />
                </motion.div>
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-purple-400/20 to-pink-400/20 pointer-events-none" />
              </motion.div>

              {/* Decorative gradient blobs with animation */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0.15, 0.25, 0.15],
                  scale: [1, 1.2, 1],
                  x: [0, 20, 0],
                  y: [0, -10, 0]
                }}
                transition={{ 
                  duration: 8, 
                  delay: 0.3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-20 left-0 w-32 h-32 bg-purple-400 rounded-full blur-3xl"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0.15, 0.25, 0.15],
                  scale: [1, 1.1, 1],
                  x: [0, -15, 0],
                  y: [0, 15, 0]
                }}
                transition={{ 
                  duration: 7, 
                  delay: 0.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute bottom-20 right-0 w-40 h-40 bg-pink-400 rounded-full blur-3xl"
              />
              
              {/* Additional floating particles */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0, 0.4, 0],
                  scale: [0, 1, 0],
                  y: [0, -100]
                }}
                transition={{ 
                  duration: 3, 
                  delay: 2,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
                className="absolute top-1/2 left-1/4 w-2 h-2 bg-purple-400 rounded-full"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0, 0.4, 0],
                  scale: [0, 1, 0],
                  y: [0, -120]
                }}
                transition={{ 
                  duration: 3.5, 
                  delay: 3,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
                className="absolute top-2/3 right-1/3 w-2 h-2 bg-pink-400 rounded-full"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0, 0.4, 0],
                  scale: [0, 1, 0],
                  y: [0, -90]
                }}
                transition={{ 
                  duration: 2.8, 
                  delay: 4,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
                className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-purple-300 rounded-full"
              />
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-purple-600 tracking-wider mb-2 font-medium">ABOUT THE FOUNDER</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-6"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-4 text-gray-700"
            >
              <p className="leading-relaxed text-lg">
                Saloni Parikh is an emerging voice in soft skills, image consulting, leadership, and
                experiential learning at the intersection of education, public policy, and personal
                development. As the Founder of Eikona Experiential Living, a pioneering platform
                dedicated to shaping confident, compassionate, and future-ready individuals through
                the power of skills, confidence, and leadership — and Eikona Foundation, the impact
                arm of Eikona, she is committed to making opportunities accessible to all.
              </p>

              {/* Know More Button */}
              <Button
                onClick={() => setIsExpanded(!isExpanded)}
                variant="ghost"
                className="group text-purple-600 hover:text-purple-700 hover:bg-purple-50 px-0"
              >
                <span className="mr-1">Know more</span>
                <motion.div
                  animate={{ x: isExpanded ? 0 : [0, 5, 0] }}
                  transition={{
                    repeat: isExpanded ? 0 : Infinity,
                    duration: 1.5,
                  }}
                >
                  <ChevronRight
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isExpanded ? "rotate-90" : ""
                    }`}
                  />
                </motion.div>
              </Button>

              {/* Expandable Content */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      initial={{ y: -20 }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="space-y-4 pt-4"
                    >
                      <p className="leading-relaxed">
                        An engineer and public policy professional turned social innovator, Saloni's
                        journey has been guided by curiosity, compassion, and a deep sense of service.
                        She began her career in the public sector, working at the crossroads of
                        education, skill development, and governance — leading large-scale programs with
                        the Ministry of Youth Affairs and Sports, Ministry of Skill Development and
                        Entrepreneurship at the Government of India, the Government of Gujarat, the
                        Asian Development Bank, and organizations such as EmpowerEd, Central Square
                        Foundation, and Ernst & Young.
                      </p>

                      <p className="leading-relaxed">
                        From strengthening teacher ecosystems under the NIPUN Bharat Mission to
                        envisioning Gujarat's 5-year Skill Development Plan, her work has impacted
                        thousands of learners, educators, and youth across India, helping shape the
                        nation's education and skilling landscape in alignment with the National
                        Education Policy 2020.
                      </p>

                      <p className="leading-relaxed">
                        A Mahatma Gandhi National Fellow from the Indian Institute of Management
                        Bangalore, where she authored one of India's top-ranked District Skill
                        Development Plans recognized by the Government of India, Saloni embodies the
                        bridge between policy and people. She combines research, empathy, and real-world
                        insights to design experiences that empower individuals to communicate with
                        confidence, lead with authenticity, and thrive with purpose.
                      </p>

                      <p className="leading-relaxed">
                        Saloni's leadership and service have been recognized both nationally and
                        globally. She is an NSS National Awardee (2017–18), honored by the President of
                        India for her contribution to community development, and a recipient of the
                        #SheRise Award by the Confederation of Indian Industry for women in social
                        entrepreneurship. She has also been honored with the Champions of Change Award
                        by the Chief Minister of Gujarat, and has represented India at global platforms
                        including the World Economic Forum's Global Shapers Summit, the Shape South Asia
                        Summit in Nepal, and the International Experience Program in Germany.
                      </p>

                      <p className="leading-relaxed">
                        Her work in skill development and policy has been recognized by the Ministry of
                        Skill Development and Entrepreneurship, and she continues to mentor youth and
                        women through various leadership and capacity-building initiatives.
                      </p>

                      <p className="leading-relaxed">
                        At the heart of Saloni's work lie her core values — authenticity, empathy,
                        growth, and contribution. She believes that leadership begins within: when
                        individuals learn to listen deeply, express clearly, and act with integrity.
                        Through Eikona, she envisions creating spaces where people don't just learn what
                        to do, but cherish who they can become.
                      </p>

                      <p className="leading-relaxed">
                        A believer in lifelong learning, Saloni finds inspiration in stories from the
                        ground, art, travel, writing, and conversations that broaden perspectives. Her
                        life's mission reflects her favorite truth — that transformation doesn't begin
                        with systems or structures, but with self-awareness.
                      </p>

                      <blockquote className="border-l-4 border-purple-600 pl-4 py-2 italic text-gray-600 my-6">
                        "Every individual holds infinite potential. My work — through policy, skilling,
                        or personality development — is to help that potential find its reflection in
                        the real world. And that's where Eikona is born."
                        <footer className="mt-2 not-italic">— Saloni Parikh</footer>
                      </blockquote>

                      <p className="leading-relaxed">
                        An Image Consultant and Soft Skills Trainer, she brings together policy,
                        pedagogy, and personal growth, bridging the gap between system transformation
                        and self-development — helping people grow from the inside out.
                      </p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="pt-6"
              >
                <Button
                  onClick={handleScheduleCall}
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <Calendar className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  Schedule a Discovery Call with Saloni
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}