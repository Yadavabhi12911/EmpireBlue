import React from "react";
import { AiOutlineStar, AiOutlineSafety } from "react-icons/ai";
import { FaTint } from "react-icons/fa";
import ScrollEffect from './ScrollEffect'

const FeatureCards = () => ( 
  <ScrollEffect>
  <section className="w-full bg-[#d5dee6] flex flex-col items-center justify-center py-8 sm:py-14 px-4 md:px-12 font-[font1]">
    {/* Top Card: Main Description */}
   <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center gap-6 sm:gap-8 p-4 sm:p-8 bg-[#e4e9ed] rounded-2xl sm:rounded-3xl shadow-xl border-2 border-[#f5f7fa] mb-8 sm:mb-12">
  {/* Left Side: Drop Illustration */}
  <div className="flex-1 flex justify-center items-center w-full order-2 lg:order-1">
    <img
      src="/detail.webp"
      alt="Water Drop Illustration"
      className="w-full max-w-[250px] sm:max-w-[350px] lg:max-w-[450px] h-auto object-contain"
    />
  </div>

  {/* Right Side: Main Text */}
  <div className="flex-1 w-full font-[font1] p-2 sm:p-8 order-1 lg:order-2">
    <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl mb-6  text-[#03009b] text-center lg:text-left">
      Empire Blue Pvt. Ltd.
    </h2>
    <p className="text-sm sm:text-base text-[#1A1A1A] mb-4 text-center lg:text-left break-words">
      Our revolutionary water technology is a groundbreaking invention that eliminates the expiration date on bottled water. By using a unique combination of innovative ingredients, we prevent reactions in bottled water—especially when exposed to sunlight—that produce microplastics and harmful bacteria. This addresses major health risks associated with bottled water, including diseases like cancer and heart disease. Our innovation not only maintains water purity and freshness for life, but also provides health benefits such as cancer prevention, heart attack protection, and boosted immunity. With a global reach, we aim to transform the water industry and provide safe drinking water to the billions of people who currently lack access.
    </p>
  </div>
</div>


  
    {/* Bottom Row: Three Feature Cards */}
<div className="max-w-7xl w-full flex flex-col lg:flex-row gap-6 sm:gap-8 font-[font1]">
  {/* Card 1 */}
  <div className="flex-1 p-4 sm:p-5 bg-[#e4e9ed] rounded-2xl sm:rounded-3xl shadow-xl border border-[#f5f7fa] flex flex-col items-center lg:items-start font-[font1] break-words">
    <div className="bg-[#e8f3ff] rounded-2xl sm:rounded-3xl p-3 sm:p-4 mb-4 sm:mb-5 flex-shrink-0">
      <img src="/excellence.svg" alt="" className="w-8 h-8 sm:w-10 sm:h-10" />
    </div>
    <h3 className="text-lg sm:text-xl font-bold text-[#03009b] mb-2 text-center lg:text-left break-words">
      Revolutionary Technology
    </h3>
    <p className="text-sm sm:text-base text-[#1A1A1A] text-center lg:text-left break-words">
      Groundbreaking invention that eliminates the expiration date on bottled water
    </p>
  </div>

  {/* Card 2 */}
  <div className="flex-1 p-4 sm:p-5 bg-[#e4e9ed] rounded-2xl sm:rounded-3xl shadow-xl border border-[#f5f7fa] flex flex-col items-center lg:items-start font-[font1] break-words">
    <div className="bg-[#e8f3ff] rounded-2xl sm:rounded-3xl p-3 sm:p-4 mb-4 sm:mb-5 flex-shrink-0">
      <img src="/pure.svg" alt="" className="w-8 h-8 sm:w-10 sm:h-10" />
    </div>
    <h3 className="text-lg sm:text-xl font-bold text-[#03009b] mb-2 text-center lg:text-left break-words">
      Safe &amp; Pure
    </h3>
    <p className="text-sm sm:text-base text-[#1A1A1A] text-center lg:text-left break-words">
      Ensuring lifelong freshness and health through advanced purification
    </p>
  </div>

  {/* Card 3 */}
  <div className="flex-1 p-4 sm:p-5 bg-[#e4e9ed] rounded-2xl sm:rounded-3xl shadow-xl border border-[#f5f7fa] flex flex-col items-center lg:items-start font-[font1] break-words">
    <div className="bg-[#e8f3ff] rounded-2xl sm:rounded-3xl p-3 sm:p-4 mb-4 sm:mb-5 flex-shrink-0">
      <img src="/eco.svg" alt="" className="w-8 h-8 sm:w-10 sm:h-10" />
    </div>
    <h3 className="text-lg sm:text-xl font-bold text-[#03009b] mb-2 text-center lg:text-left break-words">
      Sustainable Solution
    </h3>
    <p className="text-sm sm:text-base text-[#1A1A1A] text-center lg:text-left break-words">
      Eco-friendly approach to water preservation and distribution
    </p>
  </div>
</div>

  </section>
  </ScrollEffect>
);

export default FeatureCards;
