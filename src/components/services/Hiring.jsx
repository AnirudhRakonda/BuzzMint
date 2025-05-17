// src/components/Hiring.jsx
import React from 'react';
import { Link } from 'react-router-dom';
const Hiring = () => {
  const sections = [
    'Requirement Analysis',
    'Talent Sourcing',
    'Screening & Shortlisting',
    'Interview Coordination',
    'Offer Management & Onboarding',
  ];

  return (
    <div className="font-inter text-text">
      <h4 className="text-2xl font-medium mb-2 text-heading">
        Find Talent That Fits – Fast
      </h4>
      <p className="text-base mb-6 max-w-2xl">
        We streamline your hiring journey with a structured, end-to-end recruitment process.
      </p>

      {sections.map((title, idx) => (
        <div key={idx} className="mb-6 border-b border-gray-600 pb-4">
          <h3 className="text-xl font-semibold text-heading">
            {idx + 1}. {title}
          </h3>
        </div>
      ))}
      <div className="mt-8 text-right">
        <Link
          to="/hiring"
          className="inline-block bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
        >
          Know More &rarr;
        </Link>
      </div>

    </div>
  );
};

export default Hiring;
