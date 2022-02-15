/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-transparent z-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-0">
        <div className="w-full md:w-1/2 flex justify-between items-center py-3 text-white relative">
          <img
            src="/images/logo-01.svg"
            alt="logo"
            className="h-8 md:h-12 lg:h-16 object-cover"
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-gray-50"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
