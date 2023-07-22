import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 text-center">
      <p className="text-gray-300">
        &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
