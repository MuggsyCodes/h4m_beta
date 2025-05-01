"use client";

import Image from "next/image";

export default function BookCallSection() {
  return (
    <section className="bg-black text-white py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-xl mb-0 md:mb-0">
          <h2 className="text-4xl font-semibold mb-4">
            Want To Talk To A
            <br />
            Team Member About
            <br />
            <span className="text-[#7DCCCC]">Hormones for Me?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            In this 30 minute session, we&apos;ll delve into your health goals,
            objectives, and challenges. Your input will help us assess if our
            services align with your goals.
          </p>
          <a
            href="/book-call"
            className="inline-block border border-white text-white px-8 py-3 rounded hover:bg-white hover:text-black transition-colors duration-300"
          >
            Book a free call
          </a>
        </div>
        <div className="relative w-full md:w-1/2 h-[400px]">
          <Image
            src="/phone-calendar.webp"
            alt="Phone showing calendar"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
