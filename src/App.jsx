import React from 'react';
import { Aperture, ShoppingCart, ArrowRight } from 'lucide-react';

function App() {
  return (
    <div className="relative w-full overflow-hidden bg-[#010101] flex flex-col items-center">
      {/* Decorative Text */}
      <h1 
        className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[75%] max-w-[1073px] z-0 font-bebas font-bold uppercase text-center leading-none pointer-events-none"
        style={{ 
          fontSize: 'clamp(80px, 18vw, 250px)',
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.83) 0%, rgba(255, 255, 255, 0.12) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: 'transparent'
        }}
      >
        NEW ERA
      </h1>

      {/* Hero Section Container */}
      <section className="relative w-full min-h-[600px] max-h-[965px] h-[100vh] flex flex-col">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-10 pointer-events-none"
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>

        {/* Top Gradient Overlay */}
        <div className="absolute top-0 left-0 w-full h-[260px] bg-gradient-to-b from-black/30 to-transparent z-20 pointer-events-none"></div>

        {/* Bottom Gradient Overlay */}
        <div className="absolute bottom-0 left-0 w-full h-[260px] bg-gradient-to-t from-black/30 to-transparent z-20 pointer-events-none"></div>

        {/* Content Container */}
        <div className="relative z-30 flex flex-col h-full w-full justify-between pointer-events-none">
          
          {/* Top Navbar */}
          <header className="w-full px-5 md:px-[40px] lg:px-[80px] py-6 flex items-center justify-between pointer-events-auto">
            {/* Logo area */}
            <div className="flex items-center gap-2 text-white">
              <Aperture className="w-[28px] h-[28px]" />
              <span className="font-inter font-medium text-[24px] hidden sm:block">
                DrivePulse
              </span>
            </div>

            {/* Middle Nav Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {['Home', 'Shop', 'Blog', 'About Us', 'Contact Us'].map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  className="font-inter text-[#EEEFF2] hover:text-white transition-colors text-[15px] tracking-[-0.32px]"
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Right Side */}
            <div className="flex items-center gap-6">
              <a href="#" className="hidden sm:block font-inter text-[#FBFBFD] hover:opacity-80 transition-opacity">
                Sign In
              </a>
              <button className="flex items-center justify-center gap-2 bg-white text-[#272835] font-inter font-medium h-[48px] px-5 rounded-[8px] shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:bg-[#FBFBFD] transition-colors">
                <ShoppingCart className="w-[18px] h-[18px]" />
                <span>Cart</span>
              </button>
            </div>
          </header>

          {/* Bottom CTA Area */}
          <div className="w-full px-5 md:px-[40px] lg:px-[80px] pb-[60px] lg:pb-[80px] mt-auto pointer-events-auto">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 lg:gap-5">
              
              {/* Left CTA */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:gap-8">
                <p className="font-inter text-white text-[16px] md:text-[20px] leading-[26px] md:leading-[30px] max-w-[414px]">
                  Choose from thousands of certified cars you can trust, transparently priced, because buying a car should feel exciting.
                </p>
                
                <button className="flex-shrink-0 flex items-center justify-center gap-2 bg-white text-[#272835] font-inter font-medium h-[48px] px-6 rounded-[8px] border border-[#EEEFF2] shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:bg-gray-50 transition-colors">
                  <span>Shop Now</span>
                  <ArrowRight className="w-[18px] h-[18px]" />
                </button>
              </div>

              {/* Right Tagline */}
              <div className="w-full lg:w-auto mt-4 lg:mt-0">
                <h2 className="font-bebas text-white text-[48px] sm:text-[56px] lg:text-[64px] leading-none max-w-[466px]">
                  Find the perfect car that fits our journey
                </h2>
              </div>
              
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}

export default App;
