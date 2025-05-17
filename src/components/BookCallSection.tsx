"use client";

import Image from "next/image";

export default function BookCallSection() {
  return (
    <section
      id="book-call"
      className="bg-black text-white py-8 px-4"
      style={{ scrollMarginTop: "90px" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-xl mb-0 md:mb-0">
          <h2 className="text-4xl font-semibold mb-4">Talk To A Team Member</h2>
          <p className="text-gray-400 text-lg mb-8">
            In this 30 minute session, we&apos;ll delve into your goals,
            objectives, and challenges.
          </p>
          <a
            href="https://calendly.com/hormonesforme/call-w-customer-care-representative"
            target="_blank"
            rel="noopener noreferrer"
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
