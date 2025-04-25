import React from "react";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm min-h-[3rem] py-1">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Services</a>
            </li>
            <li>
              <a>Process</a>
              <ul className="p-2">
                <li>
                  <a>Your Goals</a>
                </li>
                <li>
                  <a>Testimonials</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Talk to Us</a>
            </li>
          </ul>
        </div>
        <div className="relative h-16 w-40">
          <Image
            src="/HfM-logo.png"
            alt="H4M Logo"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Services</a>
          </li>
          <li>
            <details>
              <summary>Process</summary>
              <ul className="p-2">
                <li>
                  <a>Your Goals</a>
                </li>
                <li>
                  <a>Testimonials</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Talk to Us</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a
          href="https://www.optimantra.com/optimus/patient/patientaccess/prospects?pid=Zm8yWlliS1dGaDVXRXN0bTIyOS9Pdz09"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost text-white border-2 border-white rounded-full px-8 transition-all duration-300 ease-in-out hover:bg-white hover:text-black"
        >
          Start Treatment
        </a>
      </div>
    </div>
  );
};

export default NavBar;
