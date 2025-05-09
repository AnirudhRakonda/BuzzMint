import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const About = () => {
  // Scroll to #contact section
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* /* Desktop Version (unchanged) */ }
        <section
          id="about"
          className="relative min-h-[80vh] px-6 pt-20 pb-6 items-start justify-between hidden md:flex  "
        >
          {/* Lottie Animation (Left) */}
          <div className="relative z-0 w-[450px] h-[450px]">
            <DotLottieReact
          src="https://lottie.host/e5213991-7ca2-4cdf-8ec2-70d0b2ee7c2c/HLOnpoUZIa.lottie"
          loop
          autoplay
          style={{ width: '100%', height: '100%' }}
            />
          </div>

          {/* Text Content (Right) */}
          <div className="relative z-10 max-w-3xl text-left ml-auto mr-4">
            <h2 className="text-5xl md:text-6xl font-playfair font-bold mb-6 leading-tight">
          About BuzzMint
            </h2>
            <p className="text-xl md:text-xl leading-relaxed max-w-2xl">
          At <strong>BuzzMint</strong>, we believe every business has a story
          worth telling and every challenge has a solution rooted in strategy.
          With specialized divisions in research, digital marketing, tech, talent,
          and storytelling, we provide powerful, end-to-end solutions that transform
          brands and drive growth.
            </p>
            <button
          onClick={handleContactClick}
          className="mt-8 px-6 py-3 bg-black text-white rounded-lg font-semibold shadow hover:bg-gray-900 transition"
            >
          Contact Us
            </button>
          </div>
        </section>

        {/* Mobile Version */}
        <section
          id="about-mobile"
          className="relative min-h-[80vh] px-6 mb-12 pt-12 pb-24 md:hidden "
        >
          {/* Text Content - Left aligned */}
        <div className="relative z-10 w-full text-left">
          <h2 className="text-4xl font-playfair font-bold mb-4 leading-tight">
            About BuzzMint
          </h2>
          <p className="text-base leading-relaxed">
            At <strong>BuzzMint</strong>, we believe every business has a story
            worth telling and every challenge has a solution rooted in strategy.
            With specialized divisions in research, digital marketing, tech, talent,
            and storytelling, we provide powerful, end-to-end solutions that transform
            brands and drive growth.
          </p>
          <button
            onClick={handleContactClick}
            className="mt-8 px-6 py-3 bg-primary text-white rounded-lg font-semibold shadow hover:bg-primary-dark transition"
          >
            Contact Us
          </button>
        </div>

        {/* Absolute positioned Lottie Animation */}
        <div className="absolute top-[55%] w-full flex justify-center items-center z-0">
          <div className="w-full max-w-[300px] h-[300px] pointer-events-none">
            <DotLottieReact
              src="https://lottie.host/e5213991-7ca2-4cdf-8ec2-70d0b2ee7c2c/HLOnpoUZIa.lottie"
              loop
              autoplay
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;