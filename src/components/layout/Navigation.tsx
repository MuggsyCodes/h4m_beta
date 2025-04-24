"use client";

import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="relative h-12 w-32 md:h-16 md:w-40">
            <Image
              src="/HfM-logo.png"
              alt="HfM Logo"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="text-white hover:text-blue-300 transition-colors"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-white hover:text-blue-300 transition-colors"
            >
              About
            </a>
            <a
              href="#testimonials"
              className="text-white hover:text-blue-300 transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="text-white hover:text-blue-300 transition-colors"
            >
              Contact
            </a>
            <a
              href="https://www.optimantra.com/optimus/patient/patientaccess/prospects?pid=Zm8yWlliS1dGaDVXRXN0bTIyOS9Pdz09"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent text-white border-2 border-white px-8 py-2 rounded-full transition-all duration-300 ease-in-out hover:bg-white hover:text-red-600"
            >
              Start Treatment
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative z-50 text-white hover:text-blue-300 p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-8 w-8" />
              ) : (
                <Bars3Icon className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/95 backdrop-blur-sm z-40"
                onClick={() => setIsMenuOpen(false)}
              />

              {/* Menu */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.3 }}
                className="fixed inset-0 z-40 flex flex-col justify-center bg-transparent"
              >
                <div className="flex flex-col items-center space-y-8 px-4">
                  <a
                    href="#services"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-2xl text-white hover:text-blue-300 transition-colors"
                  >
                    Services
                  </a>
                  <a
                    href="#about"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-2xl text-white hover:text-blue-300 transition-colors"
                  >
                    About
                  </a>
                  <a
                    href="#testimonials"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-2xl text-white hover:text-blue-300 transition-colors"
                  >
                    Testimonials
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-2xl text-white hover:text-blue-300 transition-colors"
                  >
                    Contact
                  </a>
                  <a
                    href="https://www.optimantra.com/optimus/patient/patientaccess/prospects?pid=Zm8yWlliS1dGaDVXRXN0bTIyOS9Pdz09"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full max-w-[280px] bg-transparent text-white text-xl border-2 border-white px-8 py-3 rounded-full transition-all duration-300 ease-in-out text-center hover:bg-white hover:text-red-600"
                  >
                    Start Treatment
                  </a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
