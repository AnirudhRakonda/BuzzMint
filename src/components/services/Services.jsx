// src/components/Services.jsx
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

import Research from './Research';
import WebDevelopment from './WebDevelopment';
import Podcast from './Podcast';
import Hiring from './Hiring';

const ServiceItem = ({ title, subtitle, Component, number }) => {
  const [isOpen, setIsOpen] = useState(false);

return (
    <div className="bg-service font-inter rounded-lg px-6 py-6 mb-6 w-full transition-all duration-300 ease-in-out">
        <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
        >
            <div>
                <h3 className="text-2xl md:text-3xl font-medium text-heading">
                    {number}. {title}
                </h3>
                <h4 className={`text-xl mt-2 mb-2 text-text ${isOpen ? 'hidden' : ''}`}>
                    {subtitle}
                </h4>
            </div>
            <div className="text-text text-2xl">
                {isOpen ? <FaChevronUp /> : <FaChevronDown />}
            </div>
        </div>
        {isOpen && (
            <div className="mt-6 text-base text-text transition-all duration-300">
                <Component />
            </div>
        )}
    </div>
);
};

const Services = () => {
  return (
    <section
      id="services"
      className="w-full  px-6 md:px-12 bg-bg text-text font-inter"
    >
      <h2 className="text-5xl md:text-6xl font-bold mb-12 text-left font-playfair text-heading">
        Services and Divisions
      </h2>
      <div className="flex flex-col gap-8">
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
