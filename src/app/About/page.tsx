'use client';

import React from 'react'
import { AboutEikonaSection } from "@/components/AboutEikonaSection";
import { Navigation } from '@/components/Navigation';
import { AboutSection } from '@/components/AboutSection';
import {AboutFounder} from "@/components/AboutFounder";
import SocialBar from '@/components/SocialBar';

const page = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
         <main className="pt-20">
        <AboutSection />
        <AboutEikonaSection />
        <AboutFounder/>
      </main>
      <SocialBar />
    </div>
  )
}

export default page;

