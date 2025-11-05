import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ProgramsSection } from "@/components/ProgramsSection";
import FounderSection from '@/components/FounderSection';
import { LeadershipSection } from '@/components/LeadershipSection';
import { PraiseSection } from '@/components/PraiseSection';

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Navigation />
      <HeroSection />  
       <ProgramsSection />
       <FounderSection/>
       <LeadershipSection/>
        <PraiseSection/>
    </div>
  );
}