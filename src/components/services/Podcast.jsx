// src/components/Podcast.jsx
import React from 'react';
import { FaCircle } from 'react-icons/fa';

const Podcast = () => (
  <div className="font-inter">
    <h4 className="text-2xl font-semibold mb-2 text-heading">
      Every Story Has a Learning Worth Listening To
    </h4>
    <p className="text-base text-text mb-6 max-w-2xl">
      Our podcast uncovers authentic stories of leaders, entrepreneurs, and changemakers. BuzzMint produces powerful episodes that inspire and educate listeners while offering branding and content opportunities.
    </p>
    <ul className="mt-2">
      {[
        'Business storytelling podcast production',
        'Guest features & episode hosting',
        'Branded audio storytelling',
      ].map((item, idx) => (
        <li key={idx} className="flex items-start mb-3 text-base">
          <span className="mt-1 mr-3 text-mint">
            <FaCircle />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default Podcast;
