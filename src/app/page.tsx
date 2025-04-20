import Hero from "@/components/sections/Hero";
import Explanatory from "@/components/sections/Explanatory";
import GuidedOptimization from "@/components/sections/GuidedOptimization";
import FeaturedOn from "@/components/sections/FeaturedOn";
import { ScrollButtons } from "@/components/sections/ButtonCarousel";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <ScrollButtons />
      <Explanatory />
      <GuidedOptimization />
      <FeaturedOn />
    </main>
  );
}
