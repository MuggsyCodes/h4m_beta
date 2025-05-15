import Hero from "@/components/sections/Hero";
import Explanatory from "@/components/sections/Explanatory";
// import GuidedOptimization from "@/components/sections/GuidedOptimization";
import H4MProcessSteps from "@/components/ProcessOption";
//import FeaturedOn from "@/components/sections/FeaturedOn";
import { ScrollButtons } from "@/components/sections/ButtonCarousel";
// import Call2Action from "@/components/sections/Call2Action";
import { CarouselSpacing } from "@/components/sections/OptimizeCard";
import EducationSection from "@/components/sections/EducationSection";
//import Process from "@/components/Process";
// import ProcessAlt from "@/components/ProcessAlt";
// import Testimonials from "@/components/sections/Testimonials";
import BookCallSection from "@/components/BookCallSection";
import NewsletterSection from "@/components/NewsletterSection";
import FAQ from "@/components/FAQ";
import ImageTestimonials from "@/components/sections/ImageTestimonials";
export default function Home() {
  return (
    <main className="min-h-screen bg-black w-full overflow-x-hidden">
      <div className="max-w-[100vw] overflow-x-hidden">
        <Hero />
        <EducationSection />
        <ScrollButtons />
        <Explanatory />
        <H4MProcessSteps />
        {/* <GuidedOptimization /> */}
        {/* <FeaturedOn /> */}
        {/* <Call2Action /> */}
        <CarouselSpacing />
        <div className="flex flex-col gap-4">
          {/*
          <div className="text-center text-white text-2xl font-semibold mt-6">
            Process Version A (Currnt H4M)
          </div>
          */}
          {/* <ProcessAlt /> */}
          {/* <div className="text-center text-white text-2xl font-semibold">
            Process Version B (Marek Flavor)
          </div>
          <Process /> */}
        </div>
        <ImageTestimonials />
        {/* <Testimonials /> */}
        <BookCallSection />
        <NewsletterSection />
        <FAQ />
      </div>
    </main>
  );
}
