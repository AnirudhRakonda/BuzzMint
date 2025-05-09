// src/components/Research.jsx
import React, { useState } from 'react';
import { FaCircle, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Phase = ({ title, points }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-6 border-b border-gray-600 pb-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <h4 className="text-xl md:text-2xl font-semibold font-inter text-heading">
          {title}
        </h4>
        {open ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      {open && (
        <ul className="mt-4">
          {points.map((item, idx) => (
            <li key={idx} className="flex items-start mb-3 font-inter text-base">
              <span className="mt-1 mr-3 text-mint">
                <FaCircle />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Research = () => (
  <div className="font-inter">
    <h4 className="text-2xl font-semibold mb-2 font-inter">
      From Idea to Execution – Backed by Research
    </h4>
    <p className="text-base text-text mb-6 max-w-2xl">
      We guide your brand across five strategic phases to ensure informed, data-backed decision-making.
    </p>

    <Phase
      title="Phase 1: Ideation & Market Research"
      points={[
        'Understand demand, trends, and audience',
        'Persona creation, competitor analysis, SWOT',
        'Feasibility and industry trend reporting',
      ]}
    />
    <Phase
      title="Phase 2: Brand Identity & Positioning"
      points={[
        'Purpose, values, USP, and naming',
        'Moodboards, messaging, and logo concepts',
      ]}
    />
    <Phase
      title="Phase 3: Digital Presence Setup"
      points={[
        'Website planning, domain hosting, and SEO',
        'Social media strategy, GMB setup, and content roadmap',
      ]}
    />
    <Phase
      title="Phase 4: Marketing Strategy & Campaigns"
      points={[
        'Paid ads, influencer outreach, social calendars',
        'Email marketing, funnel design, and budget planning',
      ]}
    />
    <Phase
      title="Phase 5: Performance & Optimization"
      points={[
        'Monthly reports, KPI tracking, SEO & ad performance',
        'A/B testing and long-term growth roadmap',
      ]}
    />
  </div>
);

export default Research;
