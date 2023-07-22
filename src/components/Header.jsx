import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white text-3xl font-bold">
            <ScrollLink
              to="hero"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Portfolio
            </ScrollLink>
          </div>
          <div className="hidden md:flex space-x-4">
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className="text-white hover:text-blue-200 cursor-pointer"
            >
              About
            </ScrollLink>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              className="text-white hover:text-blue-200 cursor-pointer"
            >
              Projects
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="text-white hover:text-blue-200 cursor-pointer"
            >
              Contact
            </ScrollLink>
          </div>
          <div className="md:hidden">
            <button
              className="text-white focus:outline-none"
              onClick={toggleMenu}
            >
              {/* Your SVG code for the mobile menu icon */}
              {/* For example, you can use an SVG icon or an SVG image */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2">
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className="block text-white hover:text-blue-200 mb-2"
              onClick={toggleMenu}
            >
              About
            </ScrollLink>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              className="block text-white hover:text-blue-200 mb-2"
              onClick={toggleMenu}
            >
              Projects
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="block text-white hover:text-blue-200"
              onClick={toggleMenu}
            >
              Contact
            </ScrollLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
