// Header.jsx
import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-5" style={{ zIndex: 1 }}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
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
            className="text-white hover:text-pink-300 cursor-pointer"
          >
            About
          </ScrollLink>
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            className="text-white hover:text-pink-300 cursor-pointer"
          >
            Projects
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className="text-white hover:text-pink-300 cursor-pointer"
          >
            Contact
          </ScrollLink>
        </div>
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
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
            className="block text-white hover:text-pink-300 mb-2"
            onClick={toggleMenu}
          >
            About
          </ScrollLink>
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            className="block text-white hover:text-pink-300 mb-2"
            onClick={toggleMenu}
          >
            Projects
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className="block text-white hover:text-pink-300"
            onClick={toggleMenu}
          >
            Contact
          </ScrollLink>
        </div>
      )}
    </nav>
  );
};

export default Header;
