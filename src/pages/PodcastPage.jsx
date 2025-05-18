import { useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { FiChevronLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const PodcastPage = () => {
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

      {/* Desktop Banner */}
      <section className="relative min-h-[70vh] px-6 py-12 items-center justify-start hidden md:flex">
        <div className="absolute inset-0 flex justify-end items-center overflow-hidden z-0">
          <div className="w-[700px] h-[700px] pointer-events-none">
            <DotLottieReact
              src="https://lottie.host/9796fd44-a705-4fdd-b8cb-d652adb20336/dNpuJvZrxC.lottie"
              loop
              autoplay
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
        <div className="relative z-10 max-w-3xl text-left">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold leading-tight mb-4">
            The Story Within
          </h1>
          <h2 className="text-2xl md:text-3xl font-bricolage font-semibold mb-4 text-heading">
            Every Story Has a Learning Worth Listening To
          </h2>
          <p className="text-lg md:text-xl max-w-2xl leading-relaxed text-text">
            BuzzMint’s podcast division, <strong>The Story Within</strong>, is where storytelling meets business branding. We craft compelling podcast episodes that not only inspire your audience but also establish thought leadership for your brand.
          </p>
        </div>
      </section>

      {/* Mobile Banner */}
      <section className="relative min-h-[100vh] px-6 pt-12 pb-24 md:hidden flex flex-col justify-between">
        <div className="relative z-10 text-left">
          <h1 className="text-4xl font-playfair font-bold leading-tight mb-4">
            The Story Within
          </h1>
          <h2 className="text-xl font-bricolage font-semibold mb-4 text-heading">
            Every Story Has a Learning Worth Listening To
          </h2>
          <p className="text-base leading-relaxed text-text">
            BuzzMint’s podcast division, <strong>The Story Within</strong>, is where storytelling meets business branding. We craft compelling podcast episodes that not only inspire your audience but also establish thought leadership for your brand.
          </p>
        </div>
        <div className="relative mt-12 z-0 w-full flex justify-center items-center">
          <div className="w-full max-w-[400px] h-[300px] pointer-events-none">
            <DotLottieReact
              src="https://lottie.host/9796fd44-a705-4fdd-b8cb-d652adb20336/dNpuJvZrxC.lottie"
              loop
              autoplay
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="px-6 py-12 space-y-10 text-text font-inter">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-semibold mb-6 text-heading">What We Offer</h3>

          {/* Section 1 */}
          <div className="mb-10 p-6 bg-white rounded-lg shadow-md border-l-4 border-mint">
            <h4 className="text-2xl font-semibold mb-4 text-heading">1. Podcast Production Services</h4>
            <div className="space-y-2 text-base">
              <p>• Full-service podcast production (recording, editing, publishing)</p>
              <p>• Guest research & episode scripting</p>
              <p>• Voiceovers & background score editing</p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mb-10 p-6 bg-white rounded-lg shadow-md border-l-4 border-mint">
            <h4 className="text-2xl font-semibold mb-4 text-heading">2. Branding & Promotion</h4>
            <div className="space-y-2 text-base">
              <p>• Branded podcast series for companies</p>
              <p>• Audio storytelling for product/service promotion</p>
              <p>• Distribution across Spotify, YouTube, Apple & more</p>
              <p>• Micro-content clips for social media marketing</p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mb-10 p-6 bg-white rounded-lg shadow-md border-l-4 border-mint">
            <h4 className="text-2xl font-semibold mb-4 text-heading">3. Guest Features & Collaboration</h4>
            <div className="space-y-2 text-base">
              <p>• Feature entrepreneurs, CEOs, and professionals</p>
              <p>• Cross-promotion opportunities</p>
              <p>• PR amplification through digital channels</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-12">
            <a
              href="https://calendly.com/operations-buzzmint/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-black text-white font-bold rounded-md shadow hover:bg-gray-900 transition"
            >
              Be a Guest or Launch Your Show with Us →
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default PodcastPage;
