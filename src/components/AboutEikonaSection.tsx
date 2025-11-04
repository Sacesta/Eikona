'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { ChevronDown, Target, Compass, Heart, Users, MessageCircle, Leaf, Sprout, Flower2, Sparkles } from 'lucide-react';

export function AboutEikonaSection() {
  const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({});
  const [selectedVenn, setSelectedVenn] = useState<string | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Animated background particles
  const ParticleBackground = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#4169E1] rounded-full opacity-20"
            initial={{ 
              x: Math.random() * 100 + '%', 
              y: Math.random() * 100 + '%',
              scale: 0
            }}
            animate={{ 
              y: [null, Math.random() * -100 + '%'],
              scale: [0, 1, 0],
              opacity: [0, 0.3, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <section 
      id="about-eikona" 
      ref={sectionRef}
      className="relative py-20 px-6 md:px-12 bg-gradient-to-b from-white via-sage-50 to-teal-50 overflow-hidden"
    >
      <ParticleBackground />
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header with Animation */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <Sparkles className="w-12 h-12 text-[#4169E1] mx-auto" />
          </motion.div>
          <h1 className="text-4xl font-bold text-[#4169E1] mb-2">About Eikona</h1>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-[#4169E1] to-teal-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>
        
        {/* Why name Eikona? */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-10 overflow-hidden">
              {/* Decorative corner elements */}
              <motion.div 
                className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#4169E1]/10 to-transparent rounded-bl-full"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-teal-500/10 to-transparent rounded-tr-full"
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              
              <div className="relative z-10">
                <motion.h2 
                  className="text-2xl font-bold text-[#4169E1] mb-6 flex items-center gap-3"
                  initial={{ x: -20, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.4 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    🎯
                  </motion.div>
                  Why name Eikona?
                </motion.h2>
                
                <div className="space-y-4">
                  <motion.p 
                    className="text-gray-700 text-lg"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.5 }}
                  >
                    Eikona derives its name from the ancient Greek word "eikóna," meaning image, reflection, or likeness. 
                    It symbolizes the mirror of the soul, emphasizing the journey of seeing one's true worth beyond physical 
                    appearances or external judgments.
                  </motion.p>
                  <motion.p 
                    className="text-gray-700 text-lg"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.6 }}
                  >
                    The term "experiential living" is identified as a process used to transport people from where they are 
                    to where they want to be by 'doing'. Hence, learning with theories adds to experiencing living life by 
                    being mindfully present in all actions.
                  </motion.p>
                  <motion.p 
                    className="text-gray-700 text-lg"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.7 }}
                  >
                    With this essence, Eikona aims to empower individuals to realize their potential and excel in their 
                    personal and professional lives.
                  </motion.p>
                </div>
                
                <motion.button
                  onClick={() => toggleSection('whyEikona')}
                  className="flex items-center gap-2 text-[#4169E1] hover:text-[#2c4ba3] transition-colors mt-6 group font-semibold"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Know More</span>
                  <motion.div
                    animate={{ rotate: expandedSections.whyEikona ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </motion.button>

                <motion.div
                  initial={false}
                  animate={{ 
                    height: expandedSections.whyEikona ? "auto" : 0,
                    opacity: expandedSections.whyEikona ? 1 : 0
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="mt-6 pt-6 border-t border-gray-200 space-y-4">
                    {[
                      "Eikona is an innovative ed-tech venture dedicated to transforming India's youth and professionals into confident, skilled, and future-ready individuals. Aligned with national priorities such as the National Education Policy 2020, National Skill Development Policy, and Sustainable Development Goals (SDGs), Eikona addresses critical skill gaps through tailored personality development, soft skills training, and image consulting programs for personal and professional growth through HEAD, HEART AND HANDS APPROACH.",
                      "Our approach combines cutting-edge AI-driven tools with the power of human connection, enabling personalized RUN (re-skilling, up-skilling, new-skilling) journeys that identify and enhance strengths while addressing areas for growth. In its initial phase, Eikona will target tier 1, 2, and 3 cities across India through both offline partnerships with schools, ITIs, colleges, and organizations, and online engagement via digital platforms like Instagram and LinkedIn.",
                      "By 2047, Eikona envisions becoming a pioneer think-tank in the coaching industry, and a leading image consulting, and leadership development organisation, impacting millions of individuals, fostering inclusive skill development, and building a community that champions lifelong experiential learning and living. Through structured programs, strategic partnerships, and an unwavering focus on quality, Eikona aims to empower India's youth, equipping them for meaningful careers and leadership roles in a rapidly changing world, simultaneously focussing on personal growth.",
                      "With a robust roadmap, revenue model, and market alignment, Eikona is set to redefine skill-building, creating a positive ripple effect across individuals, communities, and the nation."
                    ].map((text, index) => (
                      <motion.p 
                        key={index}
                        className="text-gray-700 text-lg"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {text}
                      </motion.p>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Core Philosophy */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl font-bold text-[#4169E1] mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our Core Philosophy
            </motion.h2>
            <motion.p 
              className="text-gray-600 italic text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              What do we stand for?
            </motion.p>
          </div>
          
          <motion.div 
            className="relative bg-gradient-to-br from-teal-50 via-white to-sage-100 rounded-3xl shadow-2xl p-8 md:p-12 overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Animated gradient overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#4169E1]/5 via-teal-500/5 to-transparent"
              animate={{ 
                x: ['-100%', '100%'],
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            <motion.p 
              className="relative z-10 text-gray-800 text-center text-lg md:text-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              At Eikona, we believe true transformation begins within{' '}
              <motion.span 
                className="text-[#4169E1] font-semibold"
                whileHover={{ scale: 1.1 }}
                style={{ display: 'inline-block' }}
              >
                (values, confidence, authenticity)
              </motion.span>{' '}
              and radiates outward{' '}
              <motion.span 
                className="text-[#4169E1] font-semibold"
                whileHover={{ scale: 1.1 }}
                style={{ display: 'inline-block' }}
              >
                (style, presence, impact)
              </motion.span>
              . We nurture authenticity and confidence — styling individuals with substance, from the inside out.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Venn Diagram Section */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.h3 
            className="text-center text-2xl font-bold text-gray-800 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Foundation
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Side - Venn Diagram */}
            <div className="relative flex items-center justify-center">
              {/* SVG Venn Diagram with enhanced animations */}
              <motion.svg 
                viewBox="0 0 400 300" 
                className="w-full h-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Vision Circle */}
              <motion.circle
                cx="150"
                cy="150"
                r="90"
                fill={selectedVenn === 'vision' ? "rgba(65, 105, 225, 0.4)" : "rgba(65, 105, 225, 0.2)"}
                stroke="#4169E1"
                strokeWidth="3"
                className="cursor-pointer transition-all"
                onClick={() => setSelectedVenn(selectedVenn === 'vision' ? null : 'vision')}
                whileHover={{ scale: 1.05, filter: "url(#glow)" }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring" }}
              />
              <motion.g
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <text x="150" y="135" textAnchor="middle" className="fill-[#4169E1] pointer-events-none" style={{ fontSize: '16px', fontWeight: 600 }}>
                  Our Vision
                </text>
                <text x="150" y="155" textAnchor="middle" className="fill-[#4169E1] pointer-events-none" style={{ fontSize: '14px' }}>
                  (North-Star)
                </text>
              </motion.g>

              {/* Mission Circle */}
              <motion.circle
                cx="250"
                cy="150"
                r="90"
                fill={selectedVenn === 'mission' ? "rgba(72, 187, 172, 0.4)" : "rgba(72, 187, 172, 0.2)"}
                stroke="#48BBAC"
                strokeWidth="3"
                className="cursor-pointer transition-all"
                onClick={() => setSelectedVenn(selectedVenn === 'mission' ? null : 'mission')}
                whileHover={{ scale: 1.05, filter: "url(#glow)" }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring" }}
              />
              <motion.g
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <text x="250" y="145" textAnchor="middle" className="fill-teal-700 pointer-events-none" style={{ fontSize: '16px', fontWeight: 600 }}>
                  Our Mission
                </text>
              </motion.g>

              {/* Core Values Circle */}
              <motion.circle
                cx="200"
                cy="230"
                r="90"
                fill={selectedVenn === 'values' ? "rgba(167, 139, 118, 0.4)" : "rgba(167, 139, 118, 0.2)"}
                stroke="#A78B76"
                strokeWidth="3"
                className="cursor-pointer transition-all"
                onClick={() => setSelectedVenn(selectedVenn === 'values' ? null : 'values')}
                whileHover={{ scale: 1.05, filter: "url(#glow)" }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: "spring" }}
              />
              <motion.g
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <text x="200" y="235" textAnchor="middle" className="fill-[#A78B76] pointer-events-none" style={{ fontSize: '16px', fontWeight: 600 }}>
                  Core Values
                </text>
              </motion.g>
            </motion.svg>

            <motion.div 
              className="text-center text-sm text-gray-600 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Click on any circle to learn more
            </motion.div>
          </div>

          {/* Right Side - Descriptions */}
          <div className="relative min-h-[400px] flex flex-col justify-center">
            {/* Vision Expanded */}
            {selectedVenn === 'vision' && (
            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl shadow-2xl p-8 self-start"
              initial={{ opacity: 0, x: 20, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{ marginTop: '0' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Target size={28} color="#4169E1" />
                </motion.div>
                <h3 className="text-[#4169E1] font-bold text-xl">Our Vision (North-Star)</h3>
              </div>
              <motion.p 
                className="text-gray-700 mb-4 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Eikona envisions to empower India's youth, professionals and leaders to realize their true potential 
                by uncovering their passions, building creative confidence, and excelling in life through transformative 
                personality development and image management.
              </motion.p>
              
              <motion.button
                onClick={() => toggleSection('visionExpanded')}
                className="flex items-center gap-2 text-[#4169E1] hover:text-[#2c4ba3] transition-colors font-semibold"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Know More</span>
                <motion.div
                  animate={{ rotate: expandedSections.visionExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </motion.button>

              <motion.div
                initial={false}
                animate={{ 
                  height: expandedSections.visionExpanded ? "auto" : 0,
                  opacity: expandedSections.visionExpanded ? 1 : 0
                }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <motion.div 
                  className="mt-4 pt-4 border-t border-blue-200"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <p className="text-gray-700 text-lg">
                    Eikona aims to bridge skill gaps with personalized upskilling journeys, leveraging AI-driven tools 
                    and meaningful human connections, and envisions itself inspiring and nurturing the future leaders 
                    of India contributing to Viksit Bharat 2047.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
            )}

            {/* Mission Expanded */}
            {selectedVenn === 'mission' && (
            <motion.div 
              className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-3xl shadow-2xl p-8 self-start"
              initial={{ opacity: 0, x: 20, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{ marginTop: '0' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  animate={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Compass size={28} color="#48BBAC" />
                </motion.div>
                <h3 className="text-teal-700 font-bold text-xl">Our Mission</h3>
              </div>
              <motion.p 
                className="text-[#4169E1] mb-2 font-semibold text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                Skills – Confidence – Empathetic Leadership
              </motion.p>
              <motion.p 
                className="text-gray-800 mb-4 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Building Leaders. Shaping Futures. Thriving Together
              </motion.p>
              <motion.p 
                className="text-gray-700 mb-4 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                To nurture confident, skilled, and self-aware individuals through experiential learning, communication, 
                and personality development programs.
              </motion.p>
              
              <motion.button
                onClick={() => toggleSection('missionExpanded')}
                className="flex items-center gap-2 text-teal-700 hover:text-teal-900 transition-colors font-semibold"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Know More</span>
                <motion.div
                  animate={{ rotate: expandedSections.missionExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </motion.button>

              <motion.div
                initial={false}
                animate={{ 
                  height: expandedSections.missionExpanded ? "auto" : 0,
                  opacity: expandedSections.missionExpanded ? 1 : 0
                }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <motion.div 
                  className="mt-4 pt-4 border-t border-teal-200"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <p className="text-gray-700 text-lg">
                    Eikona is committed to shaping a confident and skilled India by empowering youth, professionals, 
                    and educators with transformative soft skills training and image consulting through experiential 
                    learning approach. Through personalized upskilling journeys, AI-driven tools, and meaningful human 
                    connections, we bridge skill gaps, nurture leadership, and inspire individuals to realize their 
                    full potential. With a mission to contribute to Viksit Bharat 2047, Eikona aspires to reach every 
                    corner of the country, equipping all youth with the confidence and skills needed to lead and excel 
                    in a rapidly evolving world using the Head, Hands and Heart model. Eikona aims to foster life skills 
                    education by integrating it as a part of the core curriculum.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
            )}

            {/* Core Values Expanded */}
            {selectedVenn === 'values' && (
            <motion.div 
              className="bg-gradient-to-br from-sand-50 to-sand-100 rounded-3xl shadow-2xl p-8 self-end"
              initial={{ opacity: 0, x: 20, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{ marginBottom: '0' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Heart size={28} color="#A78B76" />
                </motion.div>
                <h3 className="text-[#A78B76] font-bold text-xl">Core Values</h3>
              </div>
              
              <div className="space-y-6">
                {[
                  { icon: Users, color: "#4169E1", title: "Roots (Community)", desc: "We grow together through connection, empathy, and collaboration." },
                  { icon: MessageCircle, color: "#48BBAC", title: "Voices (Diversity & Inclusion)", desc: "Every voice, background, and story adds richness to learning." },
                  { icon: Flower2, color: "#A78B76", title: "Impressions (Memorable Impactful Experiences)", desc: "Learning that transforms, not just informs." }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <motion.div 
                      className="flex-shrink-0"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <item.icon size={24} color={item.color} />
                    </motion.div>
                    <div>
                      <h4 className="text-gray-800 mb-2 font-semibold">{item.title}</h4>
                      <p className="text-gray-700 text-lg">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            )}

            {/* Placeholder when nothing is selected */}
            {!selectedVenn && (
              <motion.div 
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl shadow-lg p-8 flex items-center justify-center min-h-[400px] self-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Sparkles className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  </motion.div>
                  <p className="text-gray-600 text-lg">Select a circle to explore our foundation</p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
        </motion.div>

        {/* Roots → Growth → Impact Visual */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-8">
            <motion.h2 
              className="text-3xl font-bold text-[#4169E1] mb-4"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              From Roots to Shoots: Growing Skills, Confidence, and Impact
            </motion.h2>
          </div>
          
          <div className="relative bg-gradient-to-b from-sand-50 via-sage-50 to-teal-50 rounded-3xl shadow-2xl p-8 md:p-12 overflow-hidden">
            {/* Animated background pattern */}
            <motion.div 
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `radial-gradient(circle at 20px 20px, #4169E1 2px, transparent 0)`,
                backgroundSize: '40px 40px'
              }}
              animate={{ 
                backgroundPosition: ['0px 0px', '40px 40px']
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            {/* Spiral Growth Visual */}
            <div className="grid md:grid-cols-3 gap-8 relative">
              
              {/* Stage 1: Roots */}
              <motion.div 
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring" }}
                whileHover={{ y: -10 }}
              >
                {/* Decorative animated background */}
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-br from-[#A78B76]/20 to-transparent rounded-2xl"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <div className="relative bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
                  <motion.div 
                    className="flex items-center gap-3 mb-4"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <motion.div 
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-sand-100 to-[#A78B76]/30 flex items-center justify-center"
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Leaf size={24} color="#A78B76" />
                    </motion.div>
                    <h3 className="text-[#A78B76] font-bold text-xl">Roots</h3>
                  </motion.div>
                  <p className="text-sm text-gray-600 mb-4">Foundation – Self & Awareness</p>
                  <ul className="space-y-2 text-gray-700">
                    {[
                      { title: "Self-Awareness:", desc: "Know yourself, your values, strengths, and emotions." },
                      { title: "Mindfulness & Reflection:", desc: "Be present, empathetic, and intentional." }
                    ].map((item, idx) => (
                      <motion.li 
                        key={idx}
                        className="flex items-start gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + idx * 0.1 }}
                      >
                        <span className="text-[#A78B76] mt-1">•</span>
                        <span><strong>{item.title}</strong> {item.desc}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Stage 2: Shoots */}
              <motion.div 
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: "spring" }}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-br from-teal-500/20 to-transparent rounded-2xl"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />
                
                <div className="relative bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
                  <motion.div 
                    className="flex items-center gap-3 mb-4"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <motion.div 
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-100 to-teal-500/30 flex items-center justify-center"
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Sprout size={24} color="#48BBAC" />
                    </motion.div>
                    <h3 className="text-teal-700 font-bold text-xl">Shoots</h3>
                  </motion.div>
                  <p className="text-sm text-gray-600 mb-4">Skill Development – Soft Skills & Abilities</p>
                  <ul className="space-y-2 text-gray-700">
                    {[
                      { title: "Communication:", desc: "Express clearly, listen actively, connect meaningfully." },
                      { title: "Collaboration & Teamwork:", desc: "Work with empathy, respect, and adaptability." },
                      { title: "Problem Solving & Creativity:", desc: "Innovate, analyze, and act decisively." }
                    ].map((item, idx) => (
                      <motion.li 
                        key={idx}
                        className="flex items-start gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + idx * 0.1 }}
                      >
                        <span className="text-teal-600 mt-1">•</span>
                        <span><strong>{item.title}</strong> {item.desc}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Stage 3: Blossoms */}
              <motion.div 
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, type: "spring" }}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-br from-[#4169E1]/20 to-transparent rounded-2xl"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
                
                <div className="relative bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
                  <motion.div 
                    className="flex items-center gap-3 mb-4"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                  >
                    <motion.div 
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-[#4169E1]/30 flex items-center justify-center"
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Flower2 size={24} color="#4169E1" />
                    </motion.div>
                    <h3 className="text-[#4169E1] font-bold text-xl">Blossoms</h3>
                  </motion.div>
                  <p className="text-sm text-gray-600 mb-4">Impact – Leadership & Influence</p>
                  <ul className="space-y-2 text-gray-700">
                    {[
                      { title: "Confidence & Presence:", desc: "Lead authentically, inspire others." },
                      { title: "Resilience & Growth Mindset:", desc: "Overcome challenges, evolve continuously." },
                      { title: "Contribution & Legacy:", desc: "Create meaningful impact in community & society." }
                    ].map((item, idx) => (
                      <motion.li 
                        key={idx}
                        className="flex items-start gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 + idx * 0.1 }}
                      >
                        <span className="text-[#4169E1] mt-1">•</span>
                        <span><strong>{item.title}</strong> {item.desc}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Animated Connecting Flow */}
            <motion.div 
              className="hidden md:block absolute top-1/2 left-0 right-0"
              style={{ marginTop: '-2px' }}
            >
              <svg className="w-full h-4" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="growthGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: '#A78B76', stopOpacity: 0.6}} />
                    <stop offset="50%" style={{stopColor: '#48BBAC', stopOpacity: 0.6}} />
                    <stop offset="100%" style={{stopColor: '#4169E1', stopOpacity: 0.6}} />
                  </linearGradient>
                  <linearGradient id="flowGradient">
                    <motion.stop 
                      offset="0%" 
                      style={{stopColor: '#ffffff', stopOpacity: 0.8}}
                      animate={{ offset: ['0%', '100%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.stop 
                      offset="50%" 
                      style={{stopColor: '#4169E1', stopOpacity: 0}}
                      animate={{ offset: ['50%', '150%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                  </linearGradient>
                </defs>
                <motion.path 
                  d="M 0 8 L 1000 8" 
                  stroke="url(#growthGradient)" 
                  strokeWidth="4" 
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
                <motion.circle
                  r="6"
                  fill="#4169E1"
                  initial={{ cx: 0 }}
                  animate={{ cx: [0, 1000] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  cy="8"
                />
              </svg>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}