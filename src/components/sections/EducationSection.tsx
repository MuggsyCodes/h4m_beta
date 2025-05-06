"use client";

import { EducationModal } from "@/components/EducationModal";

export default function EducationSection() {
  return (
    <section
      id="education"
      className="bg-black py-1 md:py-"
      style={{ scrollMarginTop: "90px" }}
    >
      <div className="container mx-auto px-4 text-center">
        <EducationModal
          trigger={
            <span className="inline-block bg-white text-black px-10 py-6 rounded-full text-2xl md:text-4xl font-bold shadow-lg hover:bg-gray-100 transition-colors">
              Get Educated
            </span>
          }
        />
      </div>
    </section>
  );
}
