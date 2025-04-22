"use client";

import Link from "next/link";
import { Instagram, Twitter, Youtube, Facebook, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-4 md:px-8 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <a
              href="mailto:Info@HormonesforMe.com"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Info@HormonesforMe.com
            </a>
            <div className="mt-4">
              <a
                href="tel:1-877-572-2582"
                className="text-white hover:text-gray-300 transition-colors"
              >
                Phone: 1 (877) 572 2582
              </a>
            </div>
            <p className="text-gray-400 mt-4 text-sm">
              The fastest and most effective
              <br />
              way to reach us is via email
            </p>
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Office hours</h4>
              <p className="text-gray-400">Mon-Fri: 9:00 am – 5:00 pm EST</p>
            </div>
          </div>

          {/* More Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">More Info</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/careers"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/legal"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Legal
                </Link>
              </li>
              <li>
                <Link
                  href="/refund-policy"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Cancellation & Refund Policy
                </Link>
              </li>
            </ul>
            <div className="mt-8">
              <Image
                src="/legit-script.webp"
                alt="LegitScript Certified"
                width={80}
                height={80}
              />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
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
          <div>
            <h3 className="text-lg font-semibold mb-6">Follow us</h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/hormonesformen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={48} />
              </a>
              <a
                href="https://twitter.com/hormonesformen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter size={48} />
              </a>
              <a
                href="https://youtube.com/hormonesformen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Youtube size={48} />
              </a>
              <a
                href="https://facebook.com/hormonesformen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook size={48} />
              </a>
              <a
                href="https://linkedin.com/company/hormonesformen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={48} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
