import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 px-6 border-t border-gray-700">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Left: Logo */}
        <div className="text-2xl font-bold font-playfair">
          <span className="text-[#FAFF00]">Buzz</span>
          <span className="text-[#00FF94]">Mint.</span>
        </div>

        {/* Right: Contact Info */}
        <div className="text-sm text-gray-200 text-center md:text-right mt-4 md:mt-0">
          <p className="mb-2">Let’s Build Something Brilliant Together</p>
          <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-1 md:gap-4 text-xs">
            <span className="flex items-center gap-1">
              <FaEnvelope /> info@buzzmint.in
            </span>
            <span className="flex items-center gap-1">
              <FaPhone /> +91-XXXX-XXXXXX
            </span>
            <span className="flex items-center gap-1">
              <FaMapMarkerAlt /> PAN India
            </span>
            <span className="flex items-center gap-1">
              <FaGlobe /> www.buzzmint.in
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
