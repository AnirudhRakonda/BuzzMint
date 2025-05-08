import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-[70vh] px-6 py-12 flex items-center justify-start "
    >
      {/* Lottie Animation (Behind) */}
      <div className="absolute inset-0 flex justify-end items-center overflow-hidden z-0">
        <div className="w-[700px] h-[700px] pointer-events-none">
          <DotLottieReact
            src="https://lottie.host/fea00333-ab32-421f-b215-2a887c19505b/3ANpUciOZC.lottie"
            loop
            autoplay
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>

      {/* Text Content (Above) */}
      <div className="relative z-10 max-w-3xl text-left">
        <h1 className="text-6xl md:text-7xl font-playfair font-bold leading-tight mb-4">
          Welcome to{' '}
          <span className="bg-heading text-bright font-inter px-3 rounded-md">
            Buzz<span className="text-mint">Mint</span>
          </span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-bricolage font-semibold mb-4">
          Where Ideas Thrive & Brands Evolve
        </h2>
        <p className="text-lg md:text-xl max-w-xl leading-relaxed">
          BuzzMint is your one-stop solution for every business need. We bring
          data, creativity, and strategy under one roof to help your business
          grow faster and smarter.
        </p>
      </div>
    </section>
  );
};

export default Home;
