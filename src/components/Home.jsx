import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Home = () => {
  return (
    <>
      {/* Desktop Version (unchanged) */}
      <section
        id="home"
        className="relative min-h-[70vh] px-6 py-12 items-center justify-start hidden md:flex"
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
          <div className="mt-8 flex gap-4">
            <button
              className="px-8 py-3 bg-black text-white font-bold rounded-md shadow hover:bg-gray-900 transition"
              onClick={() =>
                window.open(
                  'https://calendly.com/operations-buzzmint/30min',
                  '_blank'
                )
              }
            >
              Get Started
            </button>
            <button
              className="px-8 py-3 border border-black text-black font-bold rounded-md shadow hover:bg-gray-100 transition"
              onClick={() =>
                window.open('https://wa.me/919100662597', '_blank')
              }
            >
              WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Mobile Version with left-aligned text */}
      <section
        id="home-mobile"
        className="relative min-h-[90vh] px-6 pt-12 pb-24 md:hidden"
      >
        {/* Text Content - Left aligned */}
        <div className="relative z-10 w-full text-left">
          <h1 className="text-5xl font-playfair font-bold leading-tight mb-4">
            Welcome to{' '}
            <span className="bg-heading text-bright font-inter px-2 rounded-md">
              Buzz<span className="text-mint">Mint</span>
            </span>
          </h1>
          <h2 className="text-xl font-bricolage font-semibold mb-4">
            Where Ideas Thrive & Brands Evolve
          </h2>
          <p className="text-base max-w-xl leading-relaxed">
            BuzzMint is your one-stop solution for every business need. We bring
            data, creativity, and strategy under one roof to help your business
            grow faster and smarter.
          </p>
          <div className="mt-8 flex gap-4">
            <button
              className="px-8 py-3 bg-black text-white font-bold rounded-md shadow hover:bg-gray-900 transition"
              onClick={() =>
                window.open(
                  'https://calendly.com/operations-buzzmint/30min',
                  '_blank'
                )
              }
            >
              Get Started
            </button>
            <button
              className="px-8 py-3 border border-black text-black font-bold rounded-md shadow hover:bg-gray-100 transition"
              onClick={() =>
                window.open('https://wa.me/919100662597', '_blank')
              }
            >
              WhatsApp
            </button>
          </div>
        </div>

        {/* Absolute positioned Lottie Animation */}
        <div className="absolute left-[35%]top-[45%] w-full flex justify-center items-center z-0">
          <div className="w-full max-w-[500px] h-[400px] pointer-events-none">
            <DotLottieReact
              src="https://lottie.host/fea00333-ab32-421f-b215-2a887c19505b/3ANpUciOZC.lottie"
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

export default Home;