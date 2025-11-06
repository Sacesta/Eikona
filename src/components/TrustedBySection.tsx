// components/TrustedBySection.tsx
'use client';

import { useState } from 'react';
import { Card } from './ui/card';
import Image from 'next/image';

export function TrustedBySection() {
  const [showForm, setShowForm] = useState(false);

  // Images object - images are in the public folder
  const images = {
    drSkillImage: '/dr-skill.png',
    collegeImage1: '/clogo.png',
    collegeImage2: '/kl2-330.png',
    gujaratVidyapith: '/gujarat-vidyapith-logo.png',
    karnavatiUniversity: '/logo.webp',
    gujpreneurLogo: '/gujarat-vidyapith-logo.png',
    talkToUsForm: '/gujarat-vidyapith-logo.png'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h1 className="text-gray-800 text-3xl font-bold">Trusted By</h1>
        </div>

        {/* Colleges Row */}
        <section>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {/* First logo - DR SKILL */}
            <Card className="aspect-square bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <div className="w-full h-full flex items-center justify-center p-6 relative">
                <Image 
                  src={images.drSkillImage} 
                  alt="DR SKILL Logo" 
                  className="object-contain"
                  width={192}
            height={192}
                  sizes="(max-width: 768px) 100px, (max-width: 1200px) 150px, 200px"
                />
              </div>
            </Card>
            
            {/* Remaining placeholder logos */}
            {[2, 3, 4, 5, 6].map((index) => (
              <Card key={index} className="aspect-square bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
                <div className="w-full h-full flex items-center justify-center p-6">
                  <div className="w-full h-full border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                    <span className="text-gray-400">Logo {index}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Corporates Row */}
        <section>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <Card className="aspect-square bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <div className="w-full h-full flex items-center justify-center p-6 relative">
                <Image 
                  src={images.collegeImage1} 
                  alt="Engineering College" 
                  className="object-contain"
                   width={192}
            height={192}
                  sizes="(max-width: 768px) 100px, (max-width: 1200px) 150px, 200px"
                />
              </div>
            </Card>
            <Card className="aspect-square bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <div className="w-full h-full flex items-center justify-center p-6 relative">
                <Image 
                  src={images.collegeImage2} 
                  alt="Kaushalya Skill University" 
                  className="object-contain"
                   width={192}
            height={192}
                  sizes="(max-width: 768px) 100px, (max-width: 1200px) 150px, 200px"
                />
              </div>
            </Card>
            <Card className="aspect-square bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <div className="w-full h-full flex items-center justify-center p-6 relative">
                <Image 
                  src={images.gujaratVidyapith} 
                  alt="Gujarat Vidyapith" 
                  className="object-contain"
                   width={192}
            height={192}
                  sizes="(max-width: 768px) 100px, (max-width: 1200px) 150px, 200px"
                />
              </div>
            </Card>
            <Card className="aspect-square bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <div className="w-full h-full flex items-center justify-center p-6 relative">
                <Image 
                  src={images.karnavatiUniversity} 
                  alt="Karnavati University" 
                  className="object-contain"
                   width={192}
            height={192}
                  sizes="(max-width: 768px) 100px, (max-width: 1200px) 150px, 200px"
                />
              </div>
            </Card>
            {/* Placeholder for remaining spots */}
            {[5, 6].map((index) => (
              <Card key={index} className="aspect-square bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
                <div className="w-full h-full flex items-center justify-center p-6">
                  <div className="w-full h-full border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                    <span className="text-gray-400">Logo {index}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Featured In Section */}
        <section>
          <div className="text-center mb-12">
            <h1 className="text-gray-800 text-3xl font-bold">Featured In</h1>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {/* First logo - Gujpreneur */}
            <Card className="aspect-square bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <div className="w-full h-full flex items-center justify-center p-6 relative">
                <Image 
                  src={images.gujpreneurLogo} 
                  alt="Gujpreneur" 
                  className="object-contain"
                    width={192}
            height={192}
                  sizes="(max-width: 768px) 100px, (max-width: 1200px) 150px, 200px"
                />
              </div>
            </Card>
            
            {/* Remaining placeholder logos */}
            {[2, 3, 4, 5, 6].map((index) => (
              <Card key={index} className="aspect-square bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
                <div className="w-full h-full flex items-center justify-center p-6">
                  <div className="w-full h-full border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                    <span className="text-gray-400">Logo {index}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>


      </div>
    </div>
  );
}
