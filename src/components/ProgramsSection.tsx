'use client';

import { useState } from 'react';
import { Play } from 'lucide-react';
import Image from 'next/image';

export function ProgramsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  const programs = [
    {
      name: 'Image & Presence',
      description: 'Craft a lasting impression through personal style, body language, and self-presentation.',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Interview Accelerator',
      description: 'Walk in prepared, walk out with confidence — master the art of impactful interviews.',
      image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Corporate Workshops',
      description: 'From communication to collaboration, conflict resolution to leadership — we build cohesive, high-performing teams.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-light text-center text-gray-800 mb-20 tracking-wide leading-tight">
          We help individuals and organisations <span className="font-semibold">L.E.A.D.</span> with PURPOSE and PRESENCE
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-24">
          <div className="space-y-6">
            <div className="relative aspect-video bg-gray-900 rounded-lg shadow-2xl overflow-hidden group">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="L.E.A.D Philosophy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300 pointer-events-none flex items-center justify-center">
                <Play className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>
          
          <div className="flex flex-col justify-center space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-light text-gray-800 mb-4">
                Explore Our L.E.A.D Philosophy
              </h2>
              <p className="text-xl italic text-gray-600">
                Lead with Purpose and Presence
              </p>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-8">
                {['L', 'E', 'A', 'D'].map((letter, index) => (
                  <div key={letter} className="flex flex-col items-center space-y-4">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-300">
                      <span className="text-5xl font-light text-gray-800">{letter}</span>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-medium text-gray-800">
                        {['Listen', 'Express', 'Adapt', 'Deliver'][index]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Program Snapshot Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-light text-gray-800 mb-12 text-center">Program Snapshot</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-xl cursor-pointer transform hover:scale-105 transition-all duration-500"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={program?.image}
                    alt={program.name}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70"></div>
                  <div className="absolute inset-0 flex items-end p-4 sm:p-6">
                    <h3 className="text-xl sm:text-2xl font-light text-white z-10">{program.name}</h3>
                  </div>
                </div>
                <div
                  className={`absolute inset-0 bg-gray-900/95 flex items-center justify-center p-6 transition-all duration-500 ${
                    hoveredCard === index ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <p className="text-white text-center text-lg font-light leading-relaxed">
                    {program.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Signature Outcome Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-light text-gray-800 mb-12 text-center">Signature Outcome</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Executive Presence',
                description: 'Presence that makes you memorable, credible, and influential.',
                image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800'
              },
              {
                name: 'Interview Mastery',
                description: 'When you walk in prepared, you walk out with an offer.',
                image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800'
              },
              {
                name: 'Confident Communication',
                description: 'You speak, and people lean in.',
                image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
              }
            ].map((outcome, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-xl cursor-pointer transform hover:scale-105 transition-all duration-500"
                onMouseEnter={() => setHoveredCard(index + 3)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={outcome.image}
                    alt={outcome.name}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70"></div>
                  <div className="absolute inset-0 flex items-end p-4 sm:p-6">
                    <h3 className="text-xl sm:text-2xl font-light text-white z-10">{outcome.name}</h3>
                  </div>
                </div>
                <div
                  className={`absolute inset-0 bg-gray-900/95 flex items-center justify-center p-6 transition-all duration-500 ${
                    hoveredCard === index + 3 ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <p className="text-white text-center text-lg font-light leading-relaxed">
                    {outcome.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}