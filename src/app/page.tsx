import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { InspirationSection } from "@/components/InspirationSection";
import { AboutEikonaSection } from "@/components/AboutEikonaSection";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Navigation />
      <HeroSection />
      <InspirationSection />
      <AboutEikonaSection />
    </div>
  );
}