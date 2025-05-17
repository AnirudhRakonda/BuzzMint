// src/components/WebDevelopment.jsx
import React from 'react';
import { Link } from 'react-router-dom';
const WebDevelopment = () => {
  const sections = [
    'Search Engine Optimization (SEO)',
    'Search & Display Advertising (SEM)',
    'Social Media Marketing & Optimization (SMM/SMO)',
    'LinkedIn & YouTube Channel Growth',
    'Google My Business (GMB) Optimization',
    'Custom Website Design & Development',
    'Lead Generation & E-commerce Websites',
    'Responsive & Mobile Optimization',
  ];

  return (
    <div className="font-inter">
      <h4 className="text-2xl font-medium mb-2 text-heading font-inter">
        Visibility + Conversion = Growth
      </h4>
      <p className="text-base text-text mb-6 max-w-2xl">
        From discovery to conversion, we build your digital ecosystem with precision and creativity.
      </p>

      {sections.map((title, idx) => (
        <div key={idx} className="mb-6 border-b border-gray-600 pb-4">
          <h5 className="text-xl font-semibold text-heading">
            {idx + 1}. {title}
          </h5>
        </div>
      ))}
      <div className="mt-8 text-right">
        <Link
          to="/web-development"
          className="inline-block bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
        >
          Know More &rarr;
        </Link>
      </div>

    </div>
  );
};

export default WebDevelopment;
