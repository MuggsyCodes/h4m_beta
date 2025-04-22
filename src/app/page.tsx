import Hero from "@/components/sections/Hero";
import Explanatory from "@/components/sections/Explanatory";
import GuidedOptimization from "@/components/sections/GuidedOptimization";
//import FeaturedOn from "@/components/sections/FeaturedOn";
import { ScrollButtons } from "@/components/sections/ButtonCarousel";
import Call2Action from "@/components/sections/Call2Action";
import { CarouselSpacing } from "@/components/sections/OptimizeCard";
import EducationSection from "@/components/sections/EducationSection";
import Process from "@/components/Process";
import Testimonials from "@/components/sections/Testimonials";
import BookCallSection from "@/components/BookCallSection";
import NewsletterSection from "@/components/NewsletterSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <EducationSection />
      <ScrollButtons />
      <Explanatory />
      <GuidedOptimization />
      {/* <FeaturedOn /> */}
      <Call2Action />
      <CarouselSpacing />
      <Process />
      <Testimonials />
      <BookCallSection />
      <NewsletterSection />
    </main>
  );
}
