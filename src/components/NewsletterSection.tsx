"use client";

// import { useState } from "react";

//interface FormData {
//  firstName: string;
//  lastName: string;
//  email: string;
//}

export default function NewsletterSection() {
  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Unlock Exclusive Health Content & Community
          </h2>
          <p className="text-gray-300 mb-6 text-lg">
            Join our YouTube channel for members-only videos, live Q&As, and
            more. Get direct access to our team and a thriving health community!
          </p>
          <ul className="mb-1 md:mb-6 text-gray-400 text-left list-disc list-inside">
            <li>Exclusive members-only videos</li>
            <li>Live Q&amp;A sessions</li>
            <li>Community posts &amp; early access</li>
          </ul>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center mt-1 md:mt-0">
          <a
            href="https://www.youtube.com/@hormonesforme/membership"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/H4M_banner.jpg"
              alt="Hormones for Me YouTube Channel - Members Only"
              className="rounded-lg shadow-lg w-full max-w-xs"
            />
          </a>
          <a
            href="https://www.youtube.com/@hormonesforme/membership"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded font-semibold text-lg transition-colors mt-6"
          >
            <svg
              className="w-6 h-6 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M10 15l5.19-3L10 9v6z" />
              <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14z" />
            </svg>
            Join on YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
