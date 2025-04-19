import Hero from "@/components/sections/Hero";
import ButtonCarousel from "@/components/sections/ButtonCarousel";
import Explanatory from "@/components/sections/Explanatory";
import GuidedOptimization from "@/components/sections/GuidedOptimization";
import FeaturedOn from "@/components/sections/FeaturedOn";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <ButtonCarousel />
      <Explanatory />
      <GuidedOptimization />
      <FeaturedOn />
    </main>
  );
}
