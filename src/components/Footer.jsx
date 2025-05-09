import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';

const Footer = () => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white py-10 px-10 border-t border-gray-700">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Left: Logo */}
        <div className="text-2xl font-bold font-bricolage">
          <span className="text-[#FAFF00]">Buzz</span>
          <span className="text-[#00FF94]">Mint.</span>
        </div>

        {/* Center: Nav Links */}
        <ul className="flex gap-6 items-center font-inter mt-6 md:mt-0">
          <li className="cursor-pointer" onClick={() => scrollTo('home')}>home</li>
          <li className="cursor-pointer" onClick={() => scrollTo('about')}>about us</li>
          <li className="cursor-pointer" onClick={() => scrollTo('services')}>services</li>
          <li>
           
          </li>
        </ul>

        {/* Right: Contact Info */}
        <div className="text-sm text-bg text-center md:text-right mt-6 md:mt-0">
          <p className="mb-2">Let’s Build Something Brilliant Together</p>
          <div className="flex flex-col gap-1 text-xs">
            <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-1 md:gap-4">
              <span className="flex items-center gap-1">
                <FaEnvelope /> info@buzzmint.in
              </span>
              <span className="flex items-center gap-1">
                <FaPhone /> +91 1234567890
              </span>
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-1 md:gap-4">
              <span className="flex items-center gap-1">
                <FaMapMarkerAlt /> PAN India
              </span>
              <span className="flex items-center gap-1">
                <FaGlobe /> www.buzzmint.in
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
