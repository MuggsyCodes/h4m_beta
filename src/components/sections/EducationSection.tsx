"use client";

import { EducationModal } from "@/components/EducationModal";

export default function EducationSection() {
  return (
    <section className="bg-black py-1 md:py-">
      <div className="container mx-auto px-4 text-center">
        <EducationModal trigger="Get Educated" />
      </div>
    </section>
  );
}
