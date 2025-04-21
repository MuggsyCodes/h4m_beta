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
  { title: "Optimize your testosterone", image: "goal-image-1.webp" },
  { title: "Hair loss prevention", image: "goal-image-2.webp" },
  { title: "Improve weight loss", image: "goal-image-3.webp" },
  { title: "Remove brain fog", image: "goal-image-4.webp" },
  { title: "Better sleep", image: "goal-image-5.webp" },
  { title: "Improve Libido", image: "goal-image-6.webp" },
  { title: "Improve strength", image: "goal-image-7.webp" },
  { title: "Better heart health", image: "goal-image-8.webp" },
  { title: "Fertility", image: "goal-image-9.webp" },
  { title: "Look younger", image: "goal-image-10.webp" },
];

export function CarouselSpacing() {
  return (
    <div className="container mx-auto flex flex-col items-center py-16">
      <h2 className="text-4xl md:text-5xl font-semibold text-white text-center mb-16">
        Personalized treatment based on
        <br />
        your goals.
      </h2>

      <Carousel className="w-full max-w-7xl">
        <CarouselContent className="-ml-4">
          {cardContent.map((card, index) => (
            <CarouselItem
              key={index}
              className="pl-4 md:basis-1/2 lg:basis-1/4"
            >
              <div className="relative aspect-[4/5] group cursor-pointer">
                <div className="absolute inset-0 overflow-hidden rounded-2xl border border-white/20">
                  <Image
                    src={`https://images.marekhealth.com/website_assets/homepage/${card.image}`}
                    alt={card.title}
                    width={400}
                    height={500}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <h3 className="text-2xl font-semibold mb-4">{card.title}</h3>
                  <button className="w-full py-3 px-6 border border-white rounded-full text-sm font-medium hover:bg-white hover:text-black transition-colors duration-300">
                    Explore treatment
                  </button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-white/80 hover:bg-white text-black border-none" />
        <CarouselNext className="bg-white/80 hover:bg-white text-black border-none" />
      </Carousel>
    </div>
  );
}
