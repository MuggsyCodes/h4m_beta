"use client";

import { useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

const testimonials = [
  {
    id: 1,
    name: "Jennifer M.",
    role: "Power Momma",
    image:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100",
    quote:
      "Working with Ryan has been incredibly easy and enjoyable. Unlike any medical provider I've experienced in my 58 years, he makes me feel like I'm an integral part of my own medical team. He respects the empirical data that I have collected about my body, on my journey, and accepts it as accurate and not subservient to his assumptions. He trusts me to provide him with truthful and unbiased information and he responds with a wealth of experiential solutions to promote better health.  Thank you, Ryan, for all the years you have spent learning and listening and providing the most professional, scientific advice. My life is better as a result of it.",
    rating: 5,
  },
  {
    id: 2,
    name: "Troy K.",
    role: "Full-Time Dad Mode",
    image:
      "https://images.pexels.com/photos/7298874/pexels-photo-7298874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    quote:
      "I have more motivation, longer workouts, losing weight, lower Glucose, lower BP. Im thinking I may be able to come off some of my meds with a little more time. I wish I would of know about TRT and Hormonesforme long before now. At 56, I feel better than I have in the last 20. Thank you, Ryan and team. For the first time in a long time I no longer am shying away because of body shame.",
    rating: 5,
  },
  {
    id: 3,
    name: "Leo",
    role: "Proud New Dad",
    image:
      "https://images.pexels.com/photos/17555801/pexels-photo-17555801/free-photo-of-portrait-of-smiling-man.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    quote:
      "Hey Ryan, happy to say the wife saw two lines on the pregnancy strip. Thanks for your fertility protocol! I'll be sure to let the forums know when i see questions that hormones for me knows what they are doing!",
    rating: 5,
  },
  {
    id: 4,
    name: "Michael R.",
    role: "9-5 Warrior",
    image:
      "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100",
    quote:
      "Just wanted to thank RYAN for spending the time with my wife today to go over all her labs. I was pretty blown away about the knowledge and also the service. I'm excited to talk to Ryan on my blood work as well. I'm also going to switch my son over to you guys as well so you definitely got three new clients from Matrix.",
    rating: 5,
  },
  {
    id: 5,
    name: "Jaye Y.",
    role: "Citizen Scientist",
    image:
      "https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    quote:
      "You've taken care of my health conditions this year to the fullest extent you could.  I have been so miserable these past 15+ years and I always knew something was wrong. Every time I uncovered a reason for my condition and a solution, I was ignored by everyone... except for you. Now that my thyroid and hormones are taken care of, I have lost every pound of fat that I thought was permanent and impossible to lose. I look in the mirror and I see the small waist I grew up with that I thought was gone forever. That's all thanks to you and your clinic.",
    rating: 5,
  },
  {
    id: 6,
    name: "Martin T.",
    role: "Super Dad",
    image:
      "https://images.pexels.com/photos/15076258/pexels-photo-15076258/free-photo-of-portrait-of-smiling-man.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    quote:
      "Good morning Ryan - Hey bro! Just wanted to let you know that your staff (Melissa) has been super helpful  and attentive!  You made a good choice with her!  Like I said just thought you should know. Thanks again for all your (and staff’s)  help making me the best me I can be!!! #optimal - Martin Tate",
    rating: 5,
  },
  {
    id: 7,
    name: "Steve A.",
    role: "Full Time Family Man",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100",
    quote:
      "Your customer service makes it very easy to recommend you! Thank you both so much! I want you to know that you recommend me to try hcg to bump up my estrogen a little for my joint pain. I’ve only had 2 doses of hcg 250iu. I’ve already had about a 50% decrease in joint pain! I’m so happy. I’ll bump up the dose a little next time but I’m obviously heading in the right direction. I appreciate your expertise so much!",
    rating: 5,
  },
  {
    id: 8,
    name: "Alexander D.",
    role: "Power Player",
    image:
      "https://images.pexels.com/photos/7055896/pexels-photo-7055896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    quote:
      "Thank you so much!! Every time I have to schedule a call or anything I can't ever get over how quick and easy it is with you guys!! I scheduled it for same day! Which is amazing! This truly is the best clinic out there!",
    rating: 5,
  },
  {
    id: 9,
    name: "Dixianea",
    role: "Super Mom",
    image:
      "https://images.pexels.com/photos/5491144/pexels-photo-5491144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    quote:
      "This is the best TRT clinic in the USA. Ryan has so much great information and very knowledgeable. I am 50 years old. Feel like I am 25 again. Thanks",
    rating: 5,
  },
];

export default function ImageTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Add particle initialization callback
  const particleInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="relative py-20 overflow-hidden">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-red-900/90"
        style={{ zIndex: -2 }}
      />
      {/* Particle effect */}
      <Particles
        id="testimonials-tsparticles"
        init={particleInit}
        options={{
          fpsLimit: 120,
          particles: {
            color: { value: "#ffffff" },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              direction: "none",
              outModes: { default: "bounce" },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: { enable: true, area: 800 },
              value: 80,
            },
            opacity: { value: 0.2 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
        className="absolute inset-0"
        style={{ zIndex: -1 }}
      />
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-manrope text-white text-3xl md:text-4xl font-bold mb-4">
            Client Testimonials
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-lg text-gray-400">
            Don&apos;t just take our word for it. Here&apos;s what our clients
            have to say about their experience working with us.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute -top-8 -left-8 text-white opacity-20">
            <Quote size={72} />
          </div>

          <div className="bg-[#0A0A0A] p-8 md:p-10 rounded-lg shadow-md relative z-10">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-white">
                <img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex mb-4">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-amber-500 text-amber-500"
                  />
                ))}
              </div>

              <blockquote className="text-lg md:text-xl italic mb-6 text-white">
                {testimonials[activeIndex].quote}
              </blockquote>

              <div>
                <p className="font-semibold text-lg text-white">
                  {testimonials[activeIndex].name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonials[activeIndex].role}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "w-2 h-2 rounded-full mx-1 transition-all",
                    index === activeIndex ? "bg-amber-500 w-4" : "bg-gray-300"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary hover:bg-gray-50 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
