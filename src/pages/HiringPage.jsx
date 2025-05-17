import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { FiChevronLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const HiringPage = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Back Button */}
      <div className="px-6 pt-6">
        <button
          onClick={() => navigate('/')}
          className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full shadow hover:bg-gray-900 transition"
        >
          <FiChevronLeft size={20} />
        </button>
      </div>

      {/* Desktop Banner */}
      <section className="relative min-h-[70vh] px-6 py-12 items-center justify-start hidden md:flex">
        {/* Lottie Right */}
        <div className="absolute inset-0 flex justify-end items-center overflow-hidden z-0">
          <div className="w-[700px] h-[700px] pointer-events-none">
            <DotLottieReact
              src="https://lottie.host/5b7af901-4ce0-4dcf-bc5e-d35a8da22c07/zGmcpRIyov.lottie"
              loop
              autoplay
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>

        {/* Text Left */}
        <div className="relative z-10 max-w-3xl text-left">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold leading-tight mb-4">
            Recruitment & Talent Solutions
          </h1>
          <h2 className="text-2xl md:text-3xl font-bricolage font-semibold mb-4 text-heading">
            Hire Smarter, Faster
          </h2>
          <p className="text-lg md:text-xl max-w-2xl leading-relaxed text-text">
            Find Talent That Fits – Without the Guesswork
          </p>
        </div>
      </section>

      {/* Mobile Banner */}
      <section className="relative min-h-[100vh] px-6 pt-12 pb-24 md:hidden flex flex-col justify-between">
        {/* Text */}
        <div className="relative z-10 text-left">
          <h1 className="text-4xl font-playfair font-bold leading-tight mb-4">
            Recruitment & Talent Solutions
          </h1>
          <h2 className="text-xl font-bricolage font-semibold mb-4 text-heading">
            Hire Smarter, Faster
          </h2>
          <p className="text-base leading-relaxed text-text">
            Find Talent That Fits – Without the Guesswork
          </p>
        </div>

        {/* Lottie Centered */}
        <div className="relative mt-12 z-0 w-full flex justify-center items-center">
          <div className="w-full max-w-[400px] h-[300px] pointer-events-none">
            <DotLottieReact
              src="https://lottie.host/5b7af901-4ce0-4dcf-bc5e-d35a8da22c07/zGmcpRIyov.lottie"
              loop
              autoplay
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
      </section>

      {/* Core Content */}
      <section className="px-6 py-12 space-y-10 text-text">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-semibold mb-6 text-heading font-inter">
            Our Talent Services
          </h3>

          {/* Section 1 */}
          <div className="mb-10 p-6 bg-white rounded-lg shadow-md border-l-4 border-mint">
            <h4 className="text-2xl font-semibold mb-4 text-heading font-inter">1. Sourcing & Shortlisting</h4>
            <ul className="space-y-2 list-none pl-2">
              {[
                'Active sourcing from job boards, LinkedIn, and talent pools',
                'Industry-specific resume filtering',
                'Pre-screening via phone/video assessments',
              ].map((point, i) => (
                <li key={i} className="relative pl-6 text-base text-text">
                  <span className="absolute left-0 top-1 text-black">•</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Section 2 */}
          <div className="mb-10 p-6 bg-white rounded-lg shadow-md border-l-4 border-mint">
            <h4 className="text-2xl font-semibold mb-4 text-heading font-inter">2. Pre-Interview Screening</h4>
            <ul className="space-y-2 list-none pl-2">
              {[
                'Skill-matching & qualification checks',
                'Culture-fit assessments',
                'Reference validation (on-demand)',
              ].map((point, i) => (
                <li key={i} className="relative pl-6 text-base text-text">
                  <span className="absolute left-0 top-1 text-black">•</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3 */}
          <div className="mb-10 p-6 bg-white rounded-lg shadow-md border-l-4 border-mint">
            <h4 className="text-2xl font-semibold mb-4 text-heading font-inter">3. Employer Branding</h4>
            <ul className="space-y-2 list-none pl-2">
              {[
                'Career page content & design',
                'Social media hiring campaigns',
                'Employee testimonial videos',
                'LinkedIn & GMB employer branding',
              ].map((point, i) => (
                <li key={i} className="relative pl-6 text-base text-text">
                  <span className="absolute left-0 top-1 text-black">•</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4 */}
          <div className="mb-10 p-6 bg-white rounded-lg shadow-md border-l-4 border-mint">
            <h4 className="text-2xl font-semibold mb-4 text-heading font-inter">4. Specialized Hiring</h4>
            <ul className="space-y-2 list-none pl-2">
              {[
                'Tech & IT roles',
                'Marketing & Sales positions',
                'Admin, Operations & HR',
                'Freelancers and remote teams',
              ].map((point, i) => (
                <li key={i} className="relative pl-6 text-base text-text">
                  <span className="absolute left-0 top-1 text-black">•</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <a
              href="https://wa.me/919100662597"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-black text-white font-bold rounded-md shadow-lg hover:bg-gray-900 transition transform hover:scale-105"
            >
              Get Pre-Verified Candidates Now →
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HiringPage;
