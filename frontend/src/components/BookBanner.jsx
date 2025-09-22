import React from "react";
import ScrollEffect from './ScrollEffect'

const Dots = ({ className }) => (
  <svg width="43" height="26" viewBox="0 0 65 48" fill="none" className={className}>
    <circle cx="6" cy="6" r="6" fill="#ED2224" />
    <circle cx="6" cy="24" r="6" fill="#31B567" />
    <circle cx="24" cy="6" r="6" fill="#F3C41A" />
    <circle cx="24" cy="24" r="6" fill="#2D71E9" />
    <circle cx="42" cy="12" r="6" fill="#2D71E9" />
    <circle cx="60" cy="24" r="6" fill="#31B567" />
   
  </svg>
);

const BookBanner = () => (
    <ScrollEffect>
  <div className="relative flex items-center justify-center min-h-[80vh] bg-[#dae0e4] px-2">
    <div className="relative flex flex-col items-center mx-auto p-8 bg-[#f3f9ff] rounded-3xl shadow-xl w-full max-w-5xl">
      {/* Decorative Dots */}
      <Dots className="absolute left-8 top-8" />
      <Dots className="absolute right-8 top-8 scale-x-[-1]" />
      <Dots className="absolute left-8 bottom-8 scale-y-[-1]" />
      <Dots className="absolute right-8 bottom-8 scale-x-[-1] scale-y-[-1]" />

      {/* Main Content */}
      <h1 className="font-[font1] text-[2.5rem] font-bold text-center ">
        <span className="text-[#03009b]">Take the </span>
        <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Next </span>
        <span className="bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">Step</span>
      </h1>
      <h2 className="text-[1.5rem] md:text-3xl font-bold text-center text-[#1A1A1A] mb-5">
        Towards Better Health
      </h2>
      <p className=" text-center text-sm  max-w-3xl mb-10 mx-auto font-[font1]">
        Empire Blue Operates in the growing health and wellness market health conscious individuals seeking natural solutions for disease prevention and immune support with increasing awareness of health risks like cancer and heart disease demand for mineral based supplements in mineral water. Ready to experience our exceptional innovative water? Book your first can today and discover how we can help you live your healthiest life.
      </p>
      <button className="bg-[#03009b] hover:bg-[#4284FF] text-white text-lg font-semibold px-8 py-4 rounded-full shadow-lg transition-all focus:outline-none">
        Book Now
      </button>
    </div>
  </div>
  </ScrollEffect>
);

export default BookBanner;
