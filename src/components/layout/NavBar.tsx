"use client";

import React from "react";
import Image from "next/image";
import { smoothScrollTo } from "@/utils/smoothScrollTo";

const NavBar = () => {
  return (
    <div className="navbar min-h-[3rem] py-1 absolute top-0 left-0 right-0 z-50">
      <div className="navbar-start flex-1 justify-center lg:justify-start flex items-center">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden text-white border-none hover:bg-white/10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box mt-3 w-52 p-2 bg-black/40 backdrop-blur-md shadow-xl"
          >
            <li>
              <a
                href="#education"
                className="text-white hover:bg-white/10"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo("education");
                }}
              >
                Members Only
              </a>
            </li>
            <li>
              <a
                href="#guided-optimization"
                className="text-white hover:bg-white/10"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo("guided-optimization");
                }}
              >
                The Upgrade
              </a>
            </li>
            <li>
              <a
                href="#process"
                className="text-white hover:bg-white/10"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo("process");
                }}
              >
                How it Works
              </a>
            </li>
            <li>
              <a
                href="#book-call"
                className="text-white hover:bg-white/10"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo("book-call");
                }}
              >
                Why Settle?
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="text-white hover:bg-white/10"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo("testimonials");
                }}
              >
                Hype Stories
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="text-white hover:bg-white/10"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo("faq");
                }}
              >
                WTF? (FAQs)
              </a>
            </li>
          </ul>
        </div>
        <div className="relative h-16 w-40 mx-auto lg:h-24 lg:w-60">
          <Image
            src="/HfM-logo.png"
            alt="H4M Logo"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
        {/* Desktop menu */}
        <ul className="hidden lg:flex space-x-8 ml-8 pr-36">
          <li>
            <a
              href="#education"
              className="text-white hover:underline"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo("education");
              }}
            >
              Current Clients
            </a>
          </li>
          <li>
            <a
              href="#guided-optimization"
              className="text-white hover:underline"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo("guided-optimization");
              }}
            >
              The Upgrade
            </a>
          </li>
          <li>
            <a
              href="#process"
              className="text-white hover:underline"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo("process");
              }}
            >
              How it Works
            </a>
          </li>
          <li>
            <a
              href="#book-call"
              className="text-white hover:underline"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo("book-call");
              }}
            >
              Why Settle?
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              className="text-white hover:underline"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo("testimonials");
              }}
            >
              Hype Stories
            </a>
          </li>
          <li>
            <a
              href="#faq"
              className="text-white hover:underline"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo("faq");
              }}
            >
              WTF? (FAQs)
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
