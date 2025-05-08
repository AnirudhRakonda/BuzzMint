import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-[80vh] px-6 pt-20 pb-6 flex items-start justify-between"
    >
      {/* Lottie Animation (Left) */}
      <div className="relative z-0 w-[450px] h-[450px] hidden md:block">
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
      </div>
    </section>
  );
};

export default About;
