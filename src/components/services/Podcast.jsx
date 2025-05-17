// src/components/Podcast.jsx
import React from 'react';
import { Link } from 'react-router-dom';
const Podcast = () => {
  const sections = [
    'Concept and script development',
    'Guest curation and outreach',
    'Professional recording and editing',
    'Publishing and distribution',
    'Promotion and audience growth',
  ];

  return (
    <div className="font-inter">
      <h4 className="text-2xl font-medium mb-2 text-heading font-inter">
        Voice Your Vision – Loud & Clear
      </h4>
      <p className="text-base text-text mb-6 max-w-2xl">
        From ideas to airwaves, we help you launch and scale podcasts that amplify your brand’s voice.
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
          to="/podcast"
          className="inline-block bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
        >
          Know More &rarr;
        </Link>
      </div>

    </div>
  );
};

export default Podcast;
