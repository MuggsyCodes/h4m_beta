"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  date: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Cheyanne",
    date: "Dec 16, 2023",
    text: "Not to sound dramatic, but Hormones for Me has literally changed the course of my life. After having my first child, I struggled with postpartum depression and anxiety...",
    rating: 5,
  },
  {
    id: 2,
    name: "L.R.",
    date: "Jul 26, 2022",
    text: "I waited too long to seek hormonal health (optimization). The symptoms crept in slowly over time, and I kept putting off getting help...",
    rating: 5,
  },
  {
    id: 3,
    name: "Jack",
    date: "Jun 29, 2023",
    text: "Life Changer. H4M's team and solutions are nothing short of life changing. In 2.5 months, I've experienced incredible improvements in energy, focus, and overall well-being.",
    rating: 5,
  },
  {
    id: 4,
    name: "Alexander Sutton",
    date: "Mar 11, 2024",
    text: "I've had an excellent experience!!! So much more Energy! I've been using their services for the past 6 months and have seen incredible results.",
    rating: 5,
  },
  {
    id: 5,
    name: "Michael K.",
    date: "Feb 15, 2024",
    text: "The team at Hormones for Me has been incredible. Their knowledge and attention to detail is unmatched. My energy levels and quality of life have improved dramatically.",
    rating: 5,
  },
  {
    id: 6,
    name: "Sarah P.",
    date: "Jan 30, 2024",
    text: "Finding Hormones for Me was a game-changer. Their comprehensive approach to hormone optimization has helped me regain my vitality and feel like myself again.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth >= 768 ? 3 : 1);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= testimonials.length
        ? 0
        : prevIndex + itemsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? testimonials.length - itemsPerPage
        : prevIndex - itemsPerPage
    );
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <section className="bg-black text-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="w-full md:max-w-[50%] mb-12 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">
            Our community has a lot to say
          </h2>
          <p className="text-gray-400 text-lg">
            We can tell you why Hormones for Me is the future of health
            optimization all day long, but we&rsquo;d rather you hear it from
            our clients. You can read all of our 5 star reviews... but
            it&rsquo;s gonna take a while.
          </p>
        </div>

        <div className="relative px-8 md:px-0">
          <div className="flex gap-6">
            {visibleTestimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-[#0A0A0A] rounded-2xl p-6 md:p-8 flex-1"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-400">{testimonial.date}</p>
                  </div>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-emerald-400 text-2xl">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {testimonial.text}
                </p>
              </motion.div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute -left-2 md:-left-12 top-1/2 -translate-y-1/2 p-2 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full"
            aria-label="Previous testimonials"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute -right-2 md:-right-12 top-1/2 -translate-y-1/2 p-2 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full"
            aria-label="Next testimonials"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
