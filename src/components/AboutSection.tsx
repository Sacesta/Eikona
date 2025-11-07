// components/AboutSection.tsx
'use client';

import { Volume2 } from 'lucide-react';
import { Button } from './ui/button';

export function AboutSection() {
  const playPronunciation = () => {
    // Placeholder for Saloni's voice pronunciation
    const utterance = new SpeechSynthesisUtterance("Eikona");
    utterance.lang = 'en-US';
    utterance.rate = 0.8;
    utterance.pitch = 1.1;
    window.speechSynthesis.speak(utterance);
  };

  return (
    <section id="about-section" className="min-h-screen bg-white py-20 px-6 md:px-8">
      <div className="container mx-auto max-w-4xl">
        {/* Large About Us Title */}
        <div className="mb-12 md:mb-16">
          <h1 className="mb-2 leading-none">
            <span className="block text-[60px] md:text-[75px] tracking-tight text-purple-200">ABOUT</span>
            <span className="block text-[60px] md:text-[75px] tracking-tight text-purple-700 -mt-4 md:-mt-6">US</span>
          </h1>
        </div>

        {/* Content Section */}
        <div className="max-w-2xl space-y-8 md:space-y-10">
          {/* Pronunciation Section */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <h2 className="text-[32px] md:text-[40px]" style={{ fontFamily: 'Shenomics, serif' }}>
                Ei.ko.na
              </h2>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={playPronunciation}
                className="h-8 w-8 md:h-10 md:w-10 hover:bg-teal-100 rounded-full transition-colors"
                aria-label="Play pronunciation"
              >
                <Volume2 className="h-4 w-4 md:h-5 md:w-5 text-teal-700" />
              </Button>
            </div>
            <p>
              <span className="text-[32px] md:text-[40px] text-gray-900" style={{ fontFamily: 'Shenomics, serif' }}>
                [eye-ko-na] Noun
              </span>
            </p>
          </div>

          {/* Mission Statement */}
          <div className="space-y-2 md:space-y-3">
            <p className="text-[24px] md:text-[30px] leading-tight" style={{ fontFamily: 'Glacial Indifference, sans-serif' }}>
              Eikona is a heart-centered leadership movement
            </p>
            <p className="text-[24px] md:text-[30px] leading-tight" style={{ fontFamily: 'Glacial Indifference, sans-serif' }}>
              helping individuals live consciously,
            </p>
            <p className="text-[24px] md:text-[30px] leading-tight" style={{ fontFamily: 'Glacial Indifference, sans-serif' }}>
              and lead confidently, inside-out
            </p>
          </div>

          {/* Tagline */}
          <div className="space-y-3 text-gray-600">
            <p className="text-[18px] md:text-[20px]" style={{ fontFamily: 'Glacial Indifference, sans-serif' }}>
              1. the art and science of living with purpose and presence.
            </p>
          </div>

          {/* Storytelling Section */}
          <div className="space-y-6 md:space-y-8 text-gray-700 leading-relaxed pt-8 md:pt-2">
            <p className="text-[18px] md:text-[20px]" style={{ fontFamily: 'Glacial Indifference, sans-serif' }}>
              Every movement begins with a reflection.
            </p>
            <p className="text-[18px] md:text-[20px]" style={{ fontFamily: 'Glacial Indifference, sans-serif' }}>
              Eikona — derived from the Greek word for image or reflection — is more than just a name. It's a mirror to the self, a reminder that true transformation begins from within.
            </p>
            <p className="text-[18px] md:text-[20px]" style={{ fontFamily: 'Glacial Indifference, sans-serif' }}>
              In a world that constantly tells us who to be, Eikona was born as an invitation — to pause, reflect, and rediscover who we truly are.
            </p>
            <p className="text-[18px] md:text-[20px]" style={{ fontFamily: 'Glacial Indifference, sans-serif' }}>
              The idea took shape through countless conversations with young people, educators, and professionals who were striving to express themselves better, lead with confidence, and find purpose in their journeys. What they needed wasn't more information — it was connection, clarity, and confidence.
            </p>
            <p className="text-[18px] md:text-[20px]" style={{ fontFamily: 'Glacial Indifference, sans-serif' }}>
              Eikona exists to nurture that. To help people not just learn skills, but live them — through mindful experiences that transform the way they think, feel, and show up in the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}