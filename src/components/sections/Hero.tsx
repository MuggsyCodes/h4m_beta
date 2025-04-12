"use client";

import { motion } from "framer-motion";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

export default function Hero() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background with gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-red-900/90"
        style={{ zIndex: -2 }}
      />

      {/* Particle effect */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fpsLimit: 120,
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              direction: "none",
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.2,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0"
        style={{ zIndex: -1 }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            TAKE CHARGE OF
            <br />
            YOUR HEALTH WITH
            <br />
            GUIDED OPTIMIZATION™
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl">
            Personalized hormone optimization and treatments from the comfort of
            your home.
          </p>

          <ul className="space-y-4 mb-8">
            {[
              "Personalized lab testing",
              "1 on 1 expert health coaching",
              "Supplements & prescriptions",
            ].map((item) => (
              <li key={item} className="flex items-center text-white">
                <svg
                  className="w-5 h-5 mr-3 text-red-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>

          <button className="bg-transparent text-white border-2 border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300">
            Start treatment online
          </button>
        </motion.div>
      </div>
    </section>
  );
}
