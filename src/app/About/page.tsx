'use client';

import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { HiAcademicCap, HiNewspaper, HiMicrophone } from 'react-icons/hi';
import Button from '@/components/Button';

export default function About() {
  const [activeTab, setActiveTab] = useState<'certifications' | 'press'>('certifications');

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md aspect-square bg-gradient-to-br from-pink-200 to-orange-200 rounded-3xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&h=500&fit=crop"
                  alt="Saloni Parikh"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Introduction */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Hi, I'm Saloni Parikh
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm an experiential living coach, guiding individuals to unlock their 
                full potential and live a life of purpose and fulfillment. My approach 
                combines mindfulness, positive psychology, and practical strategies to 
                help you achieve your goals and create lasting change.
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 w-full lg:w-lg text-white px-8 py-3 rounded-full text-lg font-medium transition-colors shadow-md hover:shadow-lg">
                Book a Call
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Journey Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-0">
            {/* Corporate Career */}
            <div className="flex gap-4 items-start pb-8 relative">
              <div className="flex-shrink-0 flex items-center gap-3 relative z-10">
                <span className="text-gray-900 font-bold text-lg bg-white">H3</span>
              </div>
              <div className="pt-1 pl-2">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Corporate Career
                </h3>
                <p className="text-orange-600 text-base">
                  10+ years in marketing and business development
                </p>
              </div>
              {/* Vertical line connecting to next item */}
              <div className="absolute left-[12px] top-6 bottom-0 w-px bg-gray-300"></div>
            </div>

            {/* Transition to Coaching */}
            <div className="flex gap-4 items-start pb-8 relative">
              <div className="flex-shrink-0 flex items-center gap-3 relative z-10">
                <span className="text-gray-900 font-bold text-lg bg-white">H3</span>
              </div>
              <div className="pt-1 pl-2">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Transition to Coaching
                </h3>
                <p className="text-orange-600 text-base">
                  Driven by a passion for personal growth and helping others
                </p>
              </div>
              {/* Vertical line connecting to next item */}
              <div className="absolute left-[12px] top-6 bottom-0 w-px bg-gray-300"></div>
            </div>

            {/* Certification and Training */}
            <div className="flex gap-4 items-start pb-8 relative">
              <div className="flex-shrink-0 flex items-center gap-3 relative z-10">
                <span className="text-gray-900 font-bold text-lg bg-white">H3</span>
              </div>
              <div className="pt-1 pl-2">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Certification and Training
                </h3>
                <p className="text-orange-600 text-base">
                  Certified Experiential Living Coach, trained in positive psychology
                </p>
              </div>
              {/* Vertical line connecting to next item */}
              <div className="absolute left-[12px] top-6 bottom-0 w-px bg-gray-300"></div>
            </div>

            {/* Current Practice - No line after this */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 flex items-center gap-3 relative z-10">
                <span className="text-gray-900 font-bold text-lg bg-white">H3</span>
              </div>
              <div className="pt-1 pl-2">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Current Practice
                </h3>
                <p className="text-orange-600 text-base">
                  Coaching individuals and groups, leading workshops and retreats
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Credentials</h2>

          {/* Tab Navigation */}
          <div className="flex gap-8 border-b border-gray-200 mb-12">
            <button
              onClick={() => setActiveTab('certifications')}
              className={`pb-4 text-lg font-medium transition-colors relative ${
                activeTab === 'certifications'
                  ? 'text-gray-900'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Certifications
              {activeTab === 'certifications' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500"></div>
              )}
            </button>
            <button
              onClick={() => setActiveTab('press')}
              className={`pb-4 text-lg font-medium transition-colors relative ${
                activeTab === 'press'
                  ? 'text-gray-900'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Press
              {activeTab === 'press' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500"></div>
              )}
            </button>
          </div>

          {/* Tab Content */}
          <div className="space-y-6">
            {activeTab === 'certifications' && (
              <>
                {/* International Coaching Federation */}
                <div className="flex gap-6 items-start p-6 bg-gray-50 rounded-2xl hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm">
                      <HiAcademicCap className="w-8 h-8 text-orange-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      International Coaching Federation
                    </h3>
                    <p className="text-gray-600">
                      Certified Experiential Living Coach
                    </p>
                  </div>
                </div>

                {/* Positive Psychology Institute */}
                <div className="flex gap-6 items-start p-6 bg-gray-50 rounded-2xl hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm">
                      <HiAcademicCap className="w-8 h-8 text-orange-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      Positive Psychology Institute
                    </h3>
                    <p className="text-gray-600">
                      Positive Psychology Practitioner
                    </p>
                  </div>
                </div>

                {/* Mindfulness Center */}
                <div className="flex gap-6 items-start p-6 bg-gray-50 rounded-2xl hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm">
                      <HiAcademicCap className="w-8 h-8 text-orange-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      Mindfulness Center
                    </h3>
                    <p className="text-gray-600">
                      Mindfulness-Based Stress Reduction Facilitator
                    </p>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'press' && (
              <>
                {/* Article */}
                <div className="flex gap-6 items-start p-6 bg-gray-50 rounded-2xl hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm">
                      <HiNewspaper className="w-8 h-8 text-orange-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      Article: 'Finding Your True Calling'
                    </h3>
                    <p className="text-gray-600">
                      Featured in 'Thrive Global'
                    </p>
                  </div>
                </div>

                {/* Episode */}
                <div className="flex gap-6 items-start p-6 bg-gray-50 rounded-2xl hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm">
                      <HiMicrophone className="w-8 h-8 text-orange-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      Episode: 'Living with Intention'
                    </h3>
                    <p className="text-gray-600">
                      Interview on 'The Growth Mindset Podcast'
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Decorative Images Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plant Image */}
            <div className="aspect-square rounded-3xl overflow-hidden shadow-lg bg-gradient-to-br from-yellow-100 to-orange-200">
              <img
                src="https://images.unsplash.com/photo-1509937528035-ad76254b0356?w=500&h=500&fit=crop"
                alt="Decorative plant"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Feather Image */}
            <div className="aspect-square rounded-3xl overflow-hidden shadow-lg bg-gradient-to-br from-teal-400 to-teal-600">
              <img
                src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&h=500&fit=crop"
                alt="Decorative feather"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Minimalist Shelf Image */}
            <div className="aspect-square rounded-3xl overflow-hidden shadow-lg bg-gradient-to-br from-gray-100 to-gray-200">
              <img
                src="https://images.unsplash.com/photo-1615529182904-14819c35db37?w=500&h=500&fit=crop"
                alt="Minimalist decor"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

{/* Final CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Ready to Confidently Own the  next  <br /> room you enter?
          </h2>
          <Button variant="primary" className="text-lg px-8 py-4">
            Book a Call
          </Button>
        </div>
      </section>



      <Footer />
    </div>
  );
}
