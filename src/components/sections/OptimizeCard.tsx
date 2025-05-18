import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const cardContent = [
  { title: "Unleash Your Alpha Male", image: "legendary_mane_1.png" },
  { title: "Keep Your Mane Legendary", image: "legendary_mane_1.png" },
  { title: "Burn Fat. Break Limits.", image: "burn_fat.png" },
  { title: "Ignite Mental Clarity", image: "legendary_mane_1.png" },
  { title: "Crash Hard. Wake Up Unstoppable.", image: "legendary_mane_1.png" },
  {
    title: "Turn Up the Heat - Anytime, Anywhere.",
    image: "legendary_mane_1.png",
  },
  { title: "Crush Limits. Build Power.", image: "legendary_mane_1.png" },
  { title: "Build Your Aerobic Engine", image: "legendary_mane_1.png" },
  { title: "Boost Your Legacy", image: "legendary_mane_1.png" },
  { title: "Defy Time", image: "legendary_mane_1.png" },
];

export function CarouselSpacing() {
  return (
    <div className="container mx-auto flex flex-col items-center py-16">
      <h2 className="text-4xl md:text-5xl font-semibold text-white text-center mb-16">
        Personalized treatment based on
        <br />
        your goals.
      </h2>

      <Carousel className="w-full max-w-7xl relative">
        <CarouselContent className="-ml-2 md:-ml-4">
          {cardContent.map((card, index) => (
            <CarouselItem
              key={index}
              className="pl-2 md:pl-4 basis-[85%] md:basis-1/2 lg:basis-1/4"
            >
              <div className="relative aspect-[4/5] group cursor-pointer">
                <div className="absolute inset-0 overflow-hidden rounded-2xl border border-white/20">
                  <Image
                    src={`/${card.image}`}
                    alt={card.title}
                    width={400}
                    height={500}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 text-white">
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
                    {card.title}
                  </h3>
                  <button className="w-full py-2 md:py-3 px-4 md:px-6 border border-white rounded-full text-sm font-medium hover:bg-white hover:text-black transition-colors duration-300">
                    Explore treatment
                  </button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex bg-white/80 hover:bg-white text-black border-none -left-12" />
        <CarouselNext className="hidden md:flex bg-white/80 hover:bg-white text-black border-none -right-12" />
        <CarouselPrevious className="md:hidden flex bg-white/80 hover:bg-white text-black border-none -left-4" />
        <CarouselNext className="md:hidden flex bg-white/80 hover:bg-white text-black border-none -right-4" />
      </Carousel>
    </div>
  );
}
