// src/pages/ResearchPage.jsx
import React,{useEffect} from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { FiChevronLeft } from 'react-icons/fi'; 
import { useNavigate } from 'react-router-dom';

const ResearchPage = () => {
  const navigate = useNavigate();
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
      {/* Back to Home Button */}
      <div className="px-6 pt-6">
        <button
          onClick={() => navigate('/')}
          className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full shadow hover:bg-gray-900 transition"
        >
          <FiChevronLeft size={20} />
        </button>
      </div>

      {/* Desktop Version */}
      <section
        id="research"
        className="relative min-h-[70vh] px-6 py-12 items-center justify-start hidden md:flex"
      >
        {/* Lottie Animation (Right Side) */}
        <div className="absolute inset-0 flex justify-end items-center overflow-hidden z-0">
          <div className="w-[700px] h-[700px] pointer-events-none">
            <DotLottieReact
              src="https://lottie.host/b8a02c4b-223c-4a89-ab9d-198f1f781ac3/wcLpx0XDKA.lottie"
              loop
              autoplay
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="relative z-10 max-w-3xl text-left">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold leading-tight mb-4">
            Market Research & Strategy
          </h1>
          <h2 className="text-2xl md:text-3xl font-bricolage font-semibold mb-4 text-heading">
            From Idea to Impact – Data-Driven, Strategy-Led Growth
          </h2>
          <p className="text-lg md:text-xl max-w-2xl leading-relaxed text-text">
            At <strong>BuzzMint</strong>, we turn curiosity into clarity. Our Market Research & Strategy Division helps you decode your market, define your brand, and develop strategies that drive long-term success.
          </p>
          <p className="mt-4 text-lg md:text-xl max-w-2xl leading-relaxed text-text">
            Whether you're launching a startup or pivoting an enterprise, we guide your journey from insight to execution.
          </p>
        </div>
      </section>

      {/* Mobile Version */}
      <section
        id="research-mobile"
        className="relative min-h-[100vh] px-6 pt-12 pb-24 md:hidden flex flex-col justify-between"
      >
        {/* Text Content */}
        <div className="relative z-10 text-left">
          <h1 className="text-4xl font-playfair font-bold leading-tight mb-4">
            Market Research & Strategy
          </h1>
          <h2 className="text-xl font-bricolage font-semibold mb-4 text-heading">
            From Idea to Impact – Data-Driven, Strategy-Led Growth
          </h2>
          <p className="text-base leading-relaxed text-text">
            At <strong>BuzzMint</strong>, we turn curiosity into clarity. Our Market Research & Strategy Division helps you decode your market, define your brand, and develop strategies that drive long-term success.
          </p>
          <p className="mt-4 text-base leading-relaxed text-text">
            Whether you're launching a startup or pivoting an enterprise, we guide your journey from insight to execution.
          </p>
        </div>

        {/* Lottie Animation - Centered */}
        <div className="relative mt-12 z-0 w-full flex justify-center items-center">
          <div className="w-full max-w-[400px] h-[300px] pointer-events-none">
            <DotLottieReact
              src="https://lottie.host/b8a02c4b-223c-4a89-ab9d-198f1f781ac3/wcLpx0XDKA.lottie"
              loop
              autoplay
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
      </section>

      {/* 5-Phase Strategic Approach */}
      <section className="px-6 py-12 space-y-10 text-text">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-semibold mb-6 text-heading font-inter">
            Our 5-Phase Strategic Approach
          </h3>

          {[
            {
              title: '1. Ideation & Market Research',
              points: [
                'Audience demand analysis',
                'Trend forecasting',
                'SWOT & competitor analysis',
                'Industry feasibility reports',
              ],
            },
            {
              title: '2. Brand Identity & Positioning',
              points: [
                'Crafting purpose, values, and vision',
                'USP development & brand naming',
                'Brand voice, messaging framework',
                'Moodboards & logo prototypes',
              ],
            },
            {
              title: '3. Digital Presence Setup',
              points: [
                'Website planning & SEO structuring',
                'Social media setup (LinkedIn, Instagram, YouTube)',
                'Google My Business (GMB) profile setup',
                'Brand content roadmap',
              ],
            },
            {
              title: '4. Marketing Strategy & Campaign Planning',
              points: [
                'Paid ad campaign strategy (Meta, Google)',
                'Influencer collaboration roadmap',
                'Email & funnel design',
                'Budget & timeline setup',
              ],
            },
            {
              title: '5. Performance & Optimization',
              points: [
                'Monthly analytics dashboards',
                'SEO & ad campaign performance',
                'A/B testing & refinements',
                'Long-term growth planning',
              ],
            },
          ].map((section, idx) => (
            <div key={idx} className="mb-10 p-6 bg-white rounded-lg shadow-md border-l-4 border-mint">
              <h4 className="text-2xl font-semibold mb-4 text-heading flex items-center gap-2">
                {section.title}
              </h4>
              <ul className="space-y-2 list-none pl-2">
                {section.points.map((point, i) => (
                  <li key={i} className="relative pl-6 text-base text-text">
                    <span className="absolute left-0 top-1 text-black">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA Button */}
          <div className="mt-12">
            <a
              href="https://calendly.com/operations-buzzmint/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-black text-white font-bold rounded-md shadow hover:bg-gray-900 transition"
            >
              Book a Free Strategy Consultation →
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResearchPage;
