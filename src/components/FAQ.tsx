"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question:
      "I am NOT a United States Resident, can I still work with Hormones for Me?",
    answer:
      "Yes, we welcome clients from around the world. Our services are available internationally, and we can accommodate different time zones and requirements.",
  },
  {
    question: "What qualifies for Hormone Replacement Therapy?",
    answer:
      "Qualification for HRT is determined through a comprehensive medical evaluation. Factors include age, hormone levels, symptoms, and overall health status.",
  },
  {
    question: "Do you accept health insurance?",
    answer:
      "Hormones for Me does not communicate with health insurance companies for any of our services; even though the overall health of our clients is tremendously enhanced and they experience a better quality of life. Many health insurance providers don’t see it this way and consider our services elective. Many customers have had success using FSA or HSA means of payment. Marek Health can provide copies of invoices and lab requisitions as needed. Because we are direct pay, and do not seek reimbursement from insurance providers, we cannot provide procedure codes (CPT) or diagnostic codes (ICD-10).",
  },
  {
    question: "What is Hormones for Me?",
    answer:
      "Hormones for Me is a specialized healthcare provider focused on hormone optimization, preventive medicine, and personalized health solutions. We offer comprehensive medical services tailored to individual needs.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full mx-auto px-4 py-16 flex flex-col items-center">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-white">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-300">
          More questions and answers can be found on our{" "}
          <a href="/faq" className="text-blue-400 hover:text-blue-300">
            FAQ page
          </a>
        </p>
      </div>

      <div className="space-y-4 max-w-3xl w-full">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b border-gray-700">
            <button
              className="flex items-center w-full py-4 text-left group gap-4"
              onClick={() => toggleFAQ(index)}
            >
              <Plus
                className={`w-5 h-5 min-w-[20px] transition-transform text-red-500 ${
                  openIndex === index ? "rotate-45" : ""
                }`}
              />
              <span className="text-lg text-white group-hover:text-blue-400 transition-colors">
                {faq.question}
              </span>
            </button>
            {openIndex === index && (
              <div className="pb-4 text-gray-300 pl-9">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <a
          href="/faq"
          className="text-blue-500 hover:text-blue-400 inline-block"
        >
          See more FAQs
        </a>
      </div>
    </section>
  );
}
