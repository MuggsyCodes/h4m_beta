"use client";

import { motion } from "framer-motion";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
// import { EducationModal } from "@/components/EducationModal";

export default function Hero() {
  const particleInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section className="relative min-h-[60vh] md:min-h-[70vh] flex flex-col pt-[80px] md:pt-20 pb-0 md:pb-0">
      {/* Background with gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-red-900/90"
        style={{ zIndex: -2 }}
      />

      {/* Particle effect */}
      <Particles
        id="tsparticles"
        init={particleInit}
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
      <div className="flex flex-col items-start md:items-center h-full">
        <div className="w-full px-4 text-center md:text-left md:container md:mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[600px] mx-auto md:mx-0 md:ml-32 relative"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl text-white mb-6 md:mb-8 tracking-tight break-words leading-tight text-center md:text-left">
              BREAK THE RULES - <wbr />
              OWN YOUR HEALTH
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-white mb-8 md:mb-10 leading-relaxed">
              Why go anywhere else? <sup>®</sup>
              <br className="hidden md:block" />
            </p>

            <ul className="space-y-4 md:space-y-5 mb-8 md:mb-10">
              {[
                "Get a Health Maverick in Your Corner",
                "Know Your Lab Numbers, Own your Edge",
                "Decode Your DNA, Unleash Your Potential.",
                "Upgrade Your Supplment Stack — No Filler, Just Fire",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center text-white justify-center md:justify-start"
                >
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 mr-3 md:mr-4 text-red-500 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-lg md:text-xl">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://www.optimantra.com/optimus/patient/patientaccess/prospects?pid=Zm8yWlliS1dGaDVXRXN0bTIyOS9Pdz09"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg md:text-xl text-center hover:bg-white hover:text-black transition-colors font-medium mb-10"
            >
              Start today
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
