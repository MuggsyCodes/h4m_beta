"use client";

import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="relative h-16 w-40">
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
            <button className="bg-transparent text-white border-2 border-white px-8 py-2 rounded-full hover:bg-white hover:text-red-500 transition-all duration-300">
              Start treatment online
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-blue-300"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#services"
                className="block px-3 py-2 text-white hover:text-blue-300 transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-white hover:text-blue-300 transition-colors"
              >
                About
              </a>
              <a
                href="#testimonials"
                className="block px-3 py-2 text-white hover:text-blue-300 transition-colors"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-white hover:text-blue-300 transition-colors"
              >
                Contact
              </a>
              <button className="w-full mt-4 bg-transparent text-white border-2 border-white px-8 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
