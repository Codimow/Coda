import { HeroSection } from "@/components/sections/hero";
import { FeaturesSection } from "@/components/sections/features";
import { Footer } from "@/components/sections/footer";
import { CustomCursor } from "@/components/ui/mouse-cursor";
import { ParticlesEffect } from "@/components/ui/particles";
import { GridBackground } from "@/components/ui/grid-background";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <CustomCursor />
      <GridBackground />
      <ParticlesEffect />
      <HeroSection />
      <FeaturesSection />
      <Footer />
    </main>
  );
}