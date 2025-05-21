"use client";

import { useState } from "react";
import { EducationModal } from "@/components/EducationModal";

export default function EducationSection() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section
      id="education"
      className="bg-black pt-6 md:pt-4"
      style={{ scrollMarginTop: "90px" }}
    >
      <div className="container mx-auto px-4 text-center">
        <button
          onClick={() => setIsOpen(true)}
          className="inline-block bg-white text-black px-10 py-6 rounded-full text-2xl md:text-4xl font-bold shadow-lg hover:bg-gray-100 transition-colors"
        >
          Get Educated
        </button>
        <EducationModal isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </section>
  );
}
