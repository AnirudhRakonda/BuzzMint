// src/pages/WebDevelopmentPage.jsx
import React,{useEffect} from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { FiChevronLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const WebDevelopmentPage = () => {
  const navigate = useNavigate();
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
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

      {/* Desktop Section */}
      <section
        id="web-development"
        className="relative min-h-[70vh] px-6 py-12 items-center justify-start hidden md:flex"
      >
        {/* Lottie Animation Right */}
        <div className="absolute inset-0 flex justify-end items-center overflow-hidden z-0">
          <div className="w-[700px] h-[700px] pointer-events-none">
            <DotLottieReact
              src="https://lottie.host/8a2467da-c8d7-4259-a1e5-52e430c66590/I0i72OCzx9.lottie"
              loop
              autoplay
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>

        {/* Text Left */}
        <div className="relative z-10 max-w-3xl text-left">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold leading-tight mb-4">
            Digital Marketing & Web Development
          </h1>
          <h2 className="text-2xl md:text-3xl font-bricolage font-semibold mb-4 text-heading">
            Build, Rank, Convert
          </h2>
          <p className="text-lg md:text-xl max-w-2xl leading-relaxed text-text">
            At <strong>BuzzMint</strong>, we don't just market – we build ecosystems. Our Digital Division blends creativity, code, and conversion strategy to grow your presence across platforms.
          </p>
          <p className="mt-4 text-lg md:text-xl max-w-2xl leading-relaxed text-text">
            From SEO to stunning websites, we ensure you're seen, heard, and remembered.
          </p>
        </div>
      </section>

      {/* Mobile Section */}
      <section
        id="web-dev-mobile"
        className="relative min-h-[100vh] px-6 pt-12 pb-24 md:hidden flex flex-col justify-between"
      >
        {/* Text */}
        <div className="relative z-10 text-left">
          <h1 className="text-4xl font-playfair font-bold leading-tight mb-4">
            Digital Marketing & Web Development
          </h1>
          <h2 className="text-xl font-bricolage font-semibold mb-4 text-heading">
            Build, Rank, Convert
          </h2>
          <p className="text-base leading-relaxed text-text">
            At <strong>BuzzMint</strong>, we don't just market – we build ecosystems. Our Digital Division blends creativity, code, and conversion strategy to grow your presence across platforms.
          </p>
          <p className="mt-4 text-base leading-relaxed text-text">
            From SEO to stunning websites, we ensure you're seen, heard, and remembered.
          </p>
        </div>

        {/* Lottie Centered */}
        <div className="relative mt-12 z-0 w-full flex justify-center items-center">
          <div className="w-full max-w-[400px] h-[300px] pointer-events-none">
            <DotLottieReact
              src="https://lottie.host/8a2467da-c8d7-4259-a1e5-52e430c66590/I0i72OCzx9.lottie"
              loop
              autoplay
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
      </section>

      {/* Service Sections */}
      <section className="px-6 py-12 space-y-10 text-text">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-semibold mb-6 text-heading font-inter">
            Our Digital Growth Ecosystem
          </h3>

          {[
            {
              title: '1. Digital Marketing Services',
              points: [
                'Search Engine Optimization (SEO)',
                'Social Media Marketing & Optimization (SMM/SMO)',
                'Google Ads (Search, Display, Video)',
                'LinkedIn Lead Funnels & Engagement',
                'YouTube Channel Optimization',
                'Email & WhatsApp Marketing',
              ],
            },
            {
              title: '2. Web Development Solutions',
              points: [
                'Custom website design (UI/UX)',
                'WordPress & no-code development',
                'Lead generation landing pages',
                'E-commerce store development (Shopify/WooCommerce)',
                'Mobile-first responsive design',
                'Speed optimization & technical SEO',
              ],
            },
            {
              title: '3. Performance Add-ons',
              points: [
                'Website maintenance',
                'CRM integration (HubSpot, Zoho, etc.)',
                'Copywriting & SEO-optimized content',
              ],
            },
          ].map((section, idx) => (
            <div key={idx} className="mb-10 p-6 bg-white rounded-lg shadow-md border-l-4 border-mint">
              <h4 className="text-2xl font-semibold mb-4 text-heading font-inter">
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

          {/* CTA */}
          <div className="mt-12 ">
            <a
              href="https://wa.me/919100662597"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-black text-white font-bold rounded-md shadow-lg hover:bg-gray-900 transition transform hover:scale-105"
            >
              Get a Custom Growth Proposal →
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebDevelopmentPage;
