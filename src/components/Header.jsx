import React from 'react';

function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white text-center py-4">
      <h1 className="text-3xl font-bold">Portfolio Web App</h1>
      <nav className="mt-4">
        <a href="#about" className="text-white hover:text-gray-200 mx-4">
          About
        </a>
        <a href="#projects" className="text-white hover:text-gray-200 mx-4">
          Projects
        </a>
        <a href="#contact" className="text-white hover:text-gray-200 mx-4">
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Header;
