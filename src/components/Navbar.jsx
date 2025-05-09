import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false); // Close menu on scroll
    }
  };

  return (
    <nav className="relative">
      {/* Desktop Navbar */}
      <div className="bg-heading font-bricolage text-service py-4 px-6 rounded-xl justify-between items-center mx-auto hidden md:flex">
        <div className="text-lg font-bold">
          <span className="text-bright">Buzz</span>
          <span className="text-mint">Mint</span>
          <span className="text-bright">.</span>
        </div>
        <ul className="flex gap-6 items-center font-inter">
          <li className="cursor-pointer" onClick={() => scrollTo('home')}>home</li>
          <li className="cursor-pointer" onClick={() => scrollTo('about')}>about us</li>
          <li className="cursor-pointer" onClick={() => scrollTo('services')}>services</li>
          <li>
            <button className="bg-service text-heading font-bold px-4 py-1 rounded-md"
              onClick={() => scrollTo('contact')}>
              Contact
            </button>
          </li>
        </ul>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden flex justify-between items-center px-6 py-4 bg-heading rounded-xl text-service font-bricolage">
        <div className="text-lg font-bold">
          <span className="text-bright">Buzz</span>
          <span className="text-mint">Mint</span>
          <span className="text-bright">.</span>
        </div>
        <button
          className="text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-heading mt-2 rounded-xl p-6 mx-6 text-service font-inter flex flex-col gap-4 text-base shadow-xl">
          <span className="cursor-pointer" onClick={() => scrollTo('home')}>home</span>
          <span className="cursor-pointer" onClick={() => scrollTo('about')}>about us</span>
          <span className="cursor-pointer" onClick={() => scrollTo('services')}>services</span>
          <button
            className="bg-service text-heading font-bold px-4 py-2 rounded-md w-full"
            onClick={() => scrollTo('contact')}
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
