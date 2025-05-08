import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

import Research from './Research';
import WebDevelopment from './WebDevelopment';
import Podcast from './Podcast';
import Hiring from './Hiring';

const ServiceItem = ({ title, subtitle, Component, number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg p-6 mb-6 shadow-md">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>
          <h3 className="text-xl font-semibold">
            {number}. {title}
          </h3>
          <p className="text-sm text-gray-600">{subtitle}</p>
        </div>
        <div className="text-gray-600">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>
      </div>
      {isOpen && <div className="mt-4"><Component /></div>}
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="bg-gray-100 py-16 px-6">
      <h2 className="text-4xl font-playfair font-bold mb-10">Services and Divisions</h2>
      <div className="max-w-5xl mx-auto">
        <ServiceItem
          number="1"
          title="Market Research & Strategy Division"
          subtitle="From Idea to Execution – Backed by Research"
          Component={Research}
        />
        <ServiceItem
          number="2"
          title="Digital Marketing & Web Development"
          subtitle="Visibility + Conversion = Growth"
          Component={WebDevelopment}
        />
        <ServiceItem
          number="3"
          title="Podcast Division – The Story Within"
          subtitle="Every Story Has a Learning Worth Listening To"
          Component={Podcast}
        />
        <ServiceItem
          number="4"
          title="Hiring Solutions Division"
          subtitle="Find Talent That Fits – Fast"
          Component={Hiring}
        />
      </div>
    </section>
  );
};

export default Services;
