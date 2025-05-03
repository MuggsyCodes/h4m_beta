import React from "react";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className="navbar min-h-[3rem] py-1 absolute top-0 left-0 right-0 z-50">
      <div className="navbar-start flex-1 justify-center lg:justify-start">
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
              <a className="text-white hover:bg-white/10">Services</a>
            </li>
            <li>
              <a className="text-white hover:bg-white/10">Process</a>
              <ul className="p-2 bg-black/40 backdrop-blur-md">
                <li>
                  <a className="text-white hover:bg-white/10">Your Goals</a>
                </li>
                <li>
                  <a className="text-white hover:bg-white/10">Testimonials</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="text-white hover:bg-white/10">Talk to Us</a>
            </li>
          </ul>
        </div>
        <div className="relative h-16 w-40 mx-auto">
          <Image
            src="/HfM-logo.png"
            alt="H4M Logo"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
