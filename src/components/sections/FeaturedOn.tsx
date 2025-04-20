"use client";

import React from "react";
import Image from "next/image";
import styles from "./FeaturedOn.module.css";

const FeaturedOn = () => {
  const logos = [
    { src: "/featured-on/think-big-bw-transparent.png", alt: "Think Big" },
    { src: "/featured-on/todd-lee-bw-transparent.png", alt: "Todd Lee" },
    { src: "/featured-on/RP-bw-transparent.png", alt: "RP" },
    { src: "/featured-on/cortex-labs-bw-transparent.png", alt: "Cortex Labs" },
    {
      src: "/featured-on/overcome-podcast-bw-transparent.png",
      alt: "Overcome Podcast",
    },
    {
      src: "/featured-on/anabolic-bodybuilding-bw-transparent.png",
      alt: "Anabolic Bodybuilding",
    },
    { src: "/featured-on/danny-jones-bw-transparent.png", alt: "Danny Jones" },
    {
      src: "/featured-on/carnivore-cast-logo-4-bw-transparent.png",
      alt: "Carnivore Cast",
    },
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
                  width={280}
                  height={180}
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
                  width={280}
                  height={180}
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
