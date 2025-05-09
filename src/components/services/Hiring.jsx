// src/components/Hiring.jsx
import React from 'react';
import { FaCircle } from 'react-icons/fa';

const Hiring = () => (
  <div className="font-inter">
    <h4 className="text-2xl font-semibold mb-2 text-heading">
      Find Talent That Fits – Fast
    </h4>
    <p className="text-base text-text mb-6 max-w-2xl">
      We simplify hiring by sourcing and screening top-tier candidates tailored to your business goals.
    </p>
    <ul className="mt-2">
      {[
        'Talent sourcing across roles and industries',
        'Initial resume screening',
        'Pre-interview filtering',
        'Employer branding support',
      ].map((item, idx) => (
        <li key={idx} className="flex items-start mb-3 text-base">
          <span className="mt-1 mr-3">
            <FaCircle />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default Hiring;
