// src/components/WebDevelopment.jsx
import React from 'react';
import { FaCircle } from 'react-icons/fa';

const WebDevelopment = () => (
  <div className="font-inter">
    <h4 className="text-2xl font-semibold mb-2 text-heading">
      Visibility + Conversion = Growth
    </h4>
    <p className="text-base text-text mb-6 max-w-2xl">
      From discovery to conversion, we build your digital ecosystem with precision and creativity.
    </p>
    <ul className="mt-2">
      {[
        'Search Engine Optimization (SEO)',
        'Search & Display Advertising (SEM)',
        'Social Media Marketing & Optimization (SMM/SMO)',
        'LinkedIn & YouTube Channel Growth',
        'Google My Business (GMB) Optimization',
        'Custom Website Design & Development',
        'Lead Generation & E-commerce Websites',
        'Responsive & Mobile Optimization',
      ].map((item, idx) => (
        <li key={idx} className="flex items-start mb-3 text-base">
          <span className="mt-1 mr-3 ">
            <FaCircle />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default WebDevelopment;
