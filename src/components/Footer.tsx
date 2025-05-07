"use client";

import Link from "next/link";
import { Instagram, Twitter, Youtube, Facebook, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 md:py-16 px-4 md:px-8 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-8 md:gap-12">
          {/* Contact Info */}
          <div className="text-left">
            <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6">
              Contact Info
            </h3>
            <a
              href="mailto:Info@HormonesforMe.com"
              className="block text-blue-400 hover:text-blue-300 transition-colors mb-2"
            >
              support@hormonesforme.com
            </a>
            <a
              href="tel:1-877-572-2582"
              className="block text-white hover:text-gray-300 transition-colors mb-2"
            >
              Phone: 1 (813) 563 2565
            </a>

            <div className="mt-6">
              <h4 className="font-semibold mb-2">Office hours</h4>
              <p className="text-gray-400">Mon-Fri: 10:00 am – 8:00 pm EST</p>
              <p className="text-gray-400">Sat: 10:00 am – 5:00 pm EST</p>
            </div>
          </div>

          {/* More Info */}
          <div className="md:text-left">
            <div className="flex flex-row items-center justify-between gap-4 mt-6 md:mt-8">
              <div className="flex-1 text-xs text-gray-400">
                <div className="font-semibold mb-1">Address</div>
                <div>
                  7901 4th St N, Ste 300
                  <br />
                  St. Petersburg, FL 33702, US
                </div>
              </div>
              <div className="flex-1 flex justify-center items-center">
                <Image
                  src="/legit-script.webp"
                  alt="LegitScript Certified"
                  width={48}
                  height={48}
                />
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="text-left">
            <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/guided-optimization"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Guided Optimization
                </Link>
              </li>
              <li>
                <Link
                  href="/diagnostic-labs"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Diagnostic Labs
                </Link>
              </li>
              <li>
                <Link
                  href="/partnership"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Partnership Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow us */}
          <div className="text-left">
            <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6">
              Follow us
            </h3>
            <div className="flex justify-start space-x-4">
              <a
                href="https://instagram.com/hormonesformen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={32} className="md:size-12" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://twitter.com/hormonesformen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter size={32} className="md:size-12" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://youtube.com/hormonesformen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Youtube size={32} className="md:size-12" />
                <span className="sr-only">YouTube</span>
              </a>
              <a
                href="https://facebook.com/hormonesformen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook size={32} className="md:size-12" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://linkedin.com/company/hormonesformen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={32} className="md:size-12" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
