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
    <nav className="fixed w-full z-50 bg-black border border-white-800">
      <div className="container mx-auto flex items-center justify-between h-14 px-3 overflow-x-hidden">
        {/* Logo */}
        <div className="relative h-6 w-[72px] md:h-12 md:w-32">
          <Image
            src="/HfM-logo.png"
            alt="HfM Logo"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
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
            className="bg-transparent text-white border border-white px-6 py-2 rounded-full transition-all duration-300 ease-in-out hover:bg-white hover:text-black"
          >
            Start Treatment
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white p-1"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <XMarkIcon className="h-5 w-5" />
          ) : (
            <Bars3Icon className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-0 top-14 bg-black md:hidden border-t border-gray-800"
          >
            <div className="px-3 py-4 space-y-3">
              <a
                href="#services"
                onClick={() => setIsMenuOpen(false)}
                className="block text-white hover:text-blue-300 transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                onClick={() => setIsMenuOpen(false)}
                className="block text-white hover:text-blue-300 transition-colors"
              >
                About
              </a>
              <a
                href="#testimonials"
                onClick={() => setIsMenuOpen(false)}
                className="block text-white hover:text-blue-300 transition-colors"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="block text-white hover:text-blue-300 transition-colors"
              >
                Contact
              </a>
              <a
                href="https://www.optimantra.com/optimus/patient/patientaccess/prospects?pid=Zm8yWlliS1dGaDVXRXN0bTIyOS9Pdz09"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="block text-white hover:text-blue-300 transition-colors"
              >
                Start Treatment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
