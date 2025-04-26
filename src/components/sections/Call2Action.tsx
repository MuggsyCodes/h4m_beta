"use client";

import React from "react";
import Image from "next/image";
import styles from "./Call2Action.module.css";

const Call2Action = () => {
  const features = [
    {
      text: "Personalized Assessment",
      description:
        "Meet your expert Hormones for Me Health Coach to discuss your symptoms and goals. Order and complete your customized diagnostic lab testing with our world-class laboratory partner.",
    },
    {
      text: "In-Depth Lab Analysis",
      description:
        "Receive a custom report with actionable recommendations based on your individual lab results.",
    },
    {
      text: "Expert Medical Oversight",
      description:
        "A consultation with a licensed medical provider to discuss your health blueprint and prescription treatments.",
    },
    {
      text: "Delivered To Your Door",
      description:
        "Exclusive access to Hormones for Me's FDA-approved pharmacies and supplement dispensaries.",
    },
    {
      text: "Proactive Care",
      description:
        "Regular Hormones for Me Coach check-ins, treatment refills, follow-up lab work, and continuous support for health optimization.",
    },
  ];

  const bottomItems = [
    {
      text: "Partnered with licensed Medical Providers",
      icon: (
        <svg className={styles.icon} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
        </svg>
      ),
    },
    {
      text: "Insurance not required",
      icon: (
        <svg className={styles.icon} viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
        </svg>
      ),
    },
    {
      text: "Treatments delivered",
      icon: (
        <svg className={styles.icon} viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-white rounded-3xl mx-2 md:mx-8 lg:mx-auto max-w-7xl p-4 md:p-8 my-8 md:my-16">
      <div className="grid md:grid-cols-2 gap-4 md:gap-8 items-center mb-4 md:mb-8">
        <div className="relative w-full h-[220px] md:h-[600px]">
          <Image
            src="/call-2-action.webp"
            alt="Doctor consultation on phone"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>

        <div className="space-y-3 md:space-y-6">
          <h2 className="text-2xl md:text-4xl font-bold text-black">
            Invest in your health with Guided Optimization®
          </h2>

          <p className="text-sm md:text-lg text-black mb-3 md:mb-6">
            The first step towards optimizing your health online is to book your
            intake assessment, which includes:
          </p>

          <div className="space-y-2 md:space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-2 md:gap-3">
                <div className="flex-shrink-0 h-4 w-4 md:h-6 md:w-6 text-green-500">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <div>
                  <span className="font-semibold text-black text-xs md:text-base">
                    {feature.text}:
                  </span>{" "}
                  <span className="text-black text-xs md:text-base">
                    {feature.description}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 md:mt-8 flex items-center justify-center w-full">
            <a
              href="https://www.optimantra.com/optimus/patient/patientaccess/prospects?pid=Zm8yWlliS1dGaDVXRXN0bTIyOS9Pdz09"
              className="bg-[#C84B31] text-white px-6 py-3 md:px-12 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-[#A33D28] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start treatment online
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottomCarousel}>
        <div className={styles.marquee}>
          {bottomItems.map((item, index) => (
            <div key={index} className={styles.item}>
              {item.icon}
              <span className="text-xs md:text-base">{item.text}</span>
            </div>
          ))}
          {bottomItems.map((item, index) => (
            <div key={`duplicate-${index}`} className={styles.item}>
              {item.icon}
              <span className="text-xs md:text-base">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Call2Action;
