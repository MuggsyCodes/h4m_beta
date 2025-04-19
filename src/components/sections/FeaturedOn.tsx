"use client";

import React from "react";
import Image from "next/image";
import styles from "./FeaturedOn.module.css";

const FeaturedOn = () => {
  const logos = [
    { src: "/impact-theory-logo.webp", alt: "Impact Theory" },
    { src: "/joe-rogan-experience-logo.webp", alt: "The Joe Rogan Experience" },
    { src: "/jordan-peterson-logo.webp", alt: "Jordan Peterson" },
    { src: "/mark-manson-logo.webp", alt: "Mark Manson" },
    { src: "/modern-wisdom-logo.webp", alt: "Modern Wisdom" },
    { src: "/power-project-logo.webp", alt: "Power Project" },
    { src: "/brett-cooper-logo-v2.webp", alt: "Brett Cooper Show" },
    { src: "/drive-logo.webp", alt: "Drive" },
  ];

  return (
    <section className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl text-gray-400 text-center mb-12">
          Featured On
        </h2>

        <div className={styles.container}>
          <div className={styles.marquee}>
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div key={index} className={styles.logoContainer}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={240}
                  height={100}
                  className={styles.logo}
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div key={`duplicate-${index}`} className={styles.logoContainer}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={240}
                  height={100}
                  className={styles.logo}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedOn;
