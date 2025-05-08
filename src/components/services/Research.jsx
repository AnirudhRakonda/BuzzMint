import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Phase = ({ title, points }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-4 border-b pb-2">
      <div className="flex justify-between items-center cursor-pointer" onClick={() => setOpen(!open)}>
        <h4 className="font-semibold">{title}</h4>
        {open ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      {open && (
        <ul className="list-disc pl-6 mt-2 text-sm">
          {points.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Research = () => {
  return (
    <div>
      <h4 className="text-xl font-semibold mb-1">From Idea to Execution – Backed by Research</h4>
      <p className="text-sm text-gray-700 mb-4 max-w-2xl">
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
};

export default Research;
