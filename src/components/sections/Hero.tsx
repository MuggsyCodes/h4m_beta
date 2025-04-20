"use client";

import { motion } from "framer-motion";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import { HeroVideoDialogDemoTopInBottomOut as VideoIntro } from "@/components/sections/VideoIntro";

export default function Hero() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section className="relative h-[90vh] flex items-center">
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
      <div className="container mx-auto px-4 pt-32">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl text-white mb-4 tracking-tight">
              TAKE CHARGE OF
              <br />
              YOUR HEALTH AND
              <br />
              GUIDED OPTIMIZATION
            </h1>
            <p className="text-xl text-white mb-4 max-w-[450]">
              Personalized hormone optimization and treatments from the comfort
              of your home.
            </p>

            <ul className="space-y-2 mb-4">
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

            <a
              href="https://www.optimantra.com/optimus/patient/patientaccess/prospects?pid=Zm8yWlliS1dGaDVXRXN0bTIyOS9Pdz09"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-transparent text-white border-2 border-white px-8 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              Start Treatment
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-full flex items-center justify-center"
          >
            <VideoIntro />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
