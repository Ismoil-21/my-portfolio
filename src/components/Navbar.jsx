import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-dark-900/80 border-b border-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="font-display font-bold text-xl">
            <span className="text-accent-cyan">IT</span>
            <span className="text-white">.dev</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a
              href="#about"
              className="hover:text-accent-cyan transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#skills"
              className="hover:text-accent-cyan transition-colors duration-300"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="hover:text-accent-cyan transition-colors duration-300"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-accent-cyan transition-colors duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
