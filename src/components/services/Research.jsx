// src/components/Research.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCircle, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Section = ({ number, title, points }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-6 border-b border-gray-600 pb-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <h4 className="text-2xl md:text-xl font-semibold font-inter text-heading">
          {number}. {title}
        </h4>
        {/* {open ? <FaChevronUp /> : <FaChevronDown />} */}
      </div>
      {/* {open && (
        <ul className="mt-4">
          {points.map((item, idx) => (
            <li key={idx} className="flex items-start mb-3 font-inter text-base">
              <span className="mt-1 mr-3">
                <FaCircle className="text-sm" />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )} */}
    </div>
  );
};

const Research = () => (
  <div className="font-inter">
    <h4 className="text-2xl font-medium mb-2 text-heading font-inter">
      From Idea to Execution – Backed by Research
    </h4>
    <p className="text-base text-text mb-6 max-w-2xl">
      We guide your brand across strategic stages to ensure informed, data-backed decision-making.
    </p>

    <Section
      number="1"
      title="Ideation & Market Research"
      // points={[
      //   'Understand demand, trends, and audience',
      //   'Persona creation, competitor analysis, SWOT',
      //   'Feasibility and industry trend reporting',
      // ]}
    />
    <Section
      number="2"
      title="Brand Identity & Positioning"
      // points={[
      //   'Purpose, values, USP, and naming',
      //   'Moodboards, messaging, and logo concepts',
      // ]}
    />
    <Section
      number="3"
      title="Digital Presence Setup"
      // points={[
      //   'Website planning, domain hosting, and SEO',
      //   'Social media strategy, GMB setup, and content roadmap',
      // ]}
    />
    <Section
      number="4"
      title="Marketing Strategy & Campaigns"
      // points={[
      //   'Paid ads, influencer outreach, social calendars',
      //   'Email marketing, funnel design, and budget planning',
      // ]}
    />
    <Section
      number="5"
      title="Performance & Optimization"
      // points={[
      //   'Monthly reports, KPI tracking, SEO & ad performance',
      //   'A/B testing and long-term growth roadmap',
      // ]}
    />
    <div className="mt-8 text-right">
        <Link
          to="/research"
          className="inline-block bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
        >
          Know More &rarr;
        </Link>
      </div>

  </div>
);

export default Research;
