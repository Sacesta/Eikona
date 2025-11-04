'use client';

import React from 'react'
import { AboutEikonaSection } from "@/components/AboutEikonaSection";
import { Navigation } from '@/components/Navigation';

const page = () => {
  return (
    <div>
      <Navigation />
      <AboutEikonaSection />
    </div>
  )
}

export default page

