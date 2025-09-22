import React from "react";
import ScrollEffect from './ScrollEffect'

const HealthBenefits = () => (
  <ScrollEffect>
  <section className="w-full bg-[#d5dee6] flex items-center justify-center min-h-[700px] py-10 sm:py-20 px-4 font-[font1] relative">
    {/* Curved top decorative SVG line */}
<div className="absolute top-0 left-0 w-full pointer-events-none z-0">
  <svg
    width="100%"
    height="200"
    viewBox="0 -65 1920 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
    <path
      d="M0 60 Q960 -100 1920 60"
      stroke="#e4e9ed"
      strokeWidth="6"
      fill="none"
    />
  </svg>
</div>

    <div className="max-w-7xl w-full bg-[#e4e9ed] rounded-3xl sm:rounded-4xl mx-auto shadow px-4 sm:px-10 py-8 sm:py-16 flex flex-col items-center relative z-10">
        
      {/* Section Heading */}
      <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-4">
        <span className="text-[#03009b]">Health </span>
        <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Benefits</span>
      </h2>
      <p className="text-base sm:text-lg md:text-xl font-[font1] font-semibold text-[#1A1A1A] mb-6 sm:mb-10 text-center max-w-5xl">
        Discover the key nutrients and their powerful effects on your health
      </p>

      {/* Mobile Layout */}
      <div className="block lg:hidden w-full">
        {/* Center Circle */}
        <div className="relative flex items-center justify-center w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] mx-auto mb-8">
          {/* Large outer ring */}
          <div className="absolute rounded-full bg-[#f3f6fa] shadow-xl w-[280px] h-[280px] sm:w-[350px] sm:h-[350px]" />
          {/* Middle ring */}
          <div className="absolute rounded-full bg-[#e4e9ed] shadow w-[220px] h-[220px] sm:w-[280px] sm:h-[280px]" />
          {/* Center white circle with lungs image */}
          <div className="absolute rounded-full bg-white flex items-center justify-center shadow w-[180px] h-[180px] sm:w-[220px] sm:h-[220px]">
            <img
              src="/lungs.webp"
              alt="Lungs"
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
            />
          </div>
          {/* Icons around circle */}
          <img
            src="/capsule.webp"
            alt="Vitamin A"
            className="absolute left-[-25px] sm:left-[-35px] top-[-5px] w-12 h-12 sm:w-16 sm:h-16"
          />
          <img
            src="/leaf.webp"
            alt="Chlorophyll"
            className="absolute right-[-20px] sm:right-[-25px] top-[-5px] w-12 h-12 sm:w-16 sm:h-16"
          />
          <img
            src="/vitamin.webp"
            alt="Carotenoids"
            className="absolute left-[-35px] sm:left-[-45px] bottom-[20px] sm:bottom-[25px] w-12 h-12 sm:w-16 sm:h-16"
          />
          <img
            src="/heart.webp"
            alt="Lycopene"
            className="absolute right-[-30px] sm:right-[-40px] bottom-[20px] sm:bottom-[25px] w-12 h-12 sm:w-16 sm:h-16"
          />
        </div>

        {/* Mobile Cards */}
        <div className="space-y-6">
          {/* Anthoxanthin */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-1">
              <span className="text-[#03009b] font-bold text-lg sm:text-xl">
                Anthoxanthin
              </span>
            </div>
            <div className="text-[#2f49db] font-bold mb-2">
              Healthy Bone
            </div>
            <p className="text-[#1A1A1A] text-sm max-w-sm mx-auto">
              Antioxidant properties beneficial for cancer treatment and heart
              health. Improves blood flow and reduces oxidative stress.
            </p>
          </div>

          {/* Carotenoids */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-1">
              <span className="text-[#03009b] font-bold text-lg sm:text-xl">
                Carotenoids
              </span>
            </div>
            <div className="text-[#2f49db] font-bold mb-2">
              Immunity Booster
            </div>
            <p className="text-[#1A1A1A] text-sm max-w-sm mx-auto">
              Essential for vitamin A production supporting immune health.
              Reduces inflammation and promotes eye health while aiding hair
              growth.
            </p>
          </div>

          {/* Chlorophyll */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-1">
              <span className="text-[#03009b] font-bold text-lg sm:text-xl">
                Chlorophyll
              </span>
            </div>
            <div className="text-[#2f49db] font-bold mb-2">
              Healthy Lungs
            </div>
            <p className="text-[#1A1A1A] text-sm max-w-sm mx-auto">
              Strengthens the immune system and helps block cancer-causing
              chemicals. Aids in weight loss and lowers cholesterol levels.
            </p>
          </div>

          {/* Lycopene */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-1">
              <span className="text-[#03009b] font-bold text-lg sm:text-xl">Lycopene</span>
            </div>
            <div className="text-[#2f49db] font-bold mb-2">
              Healthy Heart
            </div>
            <p className="text-[#1A1A1A] text-sm max-w-sm mx-auto">
              Powerful antioxidant that reduces oxidative damage and
              inflammation. Protects against various cancers and supports heart
              health.
            </p>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:grid grid-cols-3 gap-40 w-full items-center mt-10">
        {/* Left Column */}
        <div className="flex flex-col justify-between h-full space-y-12">
          {/* Anthoxanthin */}
          <div>
            <div className="flex items-center gap-4 mb-1">
              <span className="text-[#03009b] font-bold text-2xl">
                Anthoxanthin
              </span>
            </div>
            <div className="text-[#2f49db] font-bold mb-2">
              Healthy Bone
            </div>
            <p className="text-[#1A1A1A] text-sm max-w-xs">
              Antioxidant properties beneficial for cancer treatment and heart
              health. Improves blood flow and reduces oxidative stress.
            </p>
          </div>

          {/* Carotenoids */}
          <div>
            <div className="flex items-center gap-4 mb-1">
              <span className="text-[#03009b] font-bold text-2xl">
                Carotenoids
              </span>
            </div>
            <div className="text-[#2f49db] font-bold mb-2">
              Immunity Booster
            </div>
            <p className="text-[#1A1A1A] text-sm max-w-xs">
              Essential for vitamin A production supporting immune health.
              Reduces inflammation and promotes eye health while aiding hair
              growth.
            </p>
          </div>
        </div>

        {/* Center Circle with Lungs and Icons */}
        <div className="relative flex items-center justify-center w-[460px] h-[460px] mx-[-80px]">
          {/* Large outer ring */}
          <div className="absolute rounded-full bg-[#f3f6fa] shadow-xl w-[460px] h-[460px]" />
          {/* Middle ring */}
          <div className="absolute rounded-full bg-[#e4e9ed] shadow w-[375px] h-[375px]" />
          {/* Center white circle with lungs image */}
          <div className="absolute rounded-full bg-white flex items-center justify-center shadow w-[300px] h-[300px]">
            <img
              src="/lungs.webp"
              alt="Lungs"
              className="w-55 h-55 object-contain"
            />
          </div>
          {/* Top left icon */}
          <img
            src="/capsule.webp"
            alt="Vitamin A"
            className="absolute left-[-45px] top-[-1px] w-20 h-20"
          />
          {/* Top right icon */}
          <img
            src="/leaf.webp"
            alt="Chlorophyll"
            className="absolute right-[-30px] top-[-1px] w-20 h-20"
          />
          {/* Bottom left icon */}
          <img
            src="/vitamin.webp"
            alt="Carotenoids"
            className="absolute left-[-62px] bottom-[30px] w-20 h-20"
          />
          {/* Bottom right icon */}
          <img
            src="/heart.webp"
            alt="Lycopene"
            className="absolute right-[-52px] bottom-[30px] w-20 h-20"
          />
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-40 justify-between h-full space-y-12">
          {/* Chlorophyll */}
          <div>
            <div className="flex items-center gap-4 mb-1">
              <span className="text-[#03009b] font-bold font-[font1] text-2xl">
                Chlorophyll
              </span>
            </div>
            <div className="text-[#2f49db] font-bold mb-2">
              Healthy Lungs
            </div>
            <p className="text-[#1A1A1A] text-sm max-w-xs">
              Strengthens the immune system and helps block cancer-causing
              chemicals. Aids in weight loss and lowers cholesterol levels.
            </p>
          </div>

          {/* Lycopene */}
          <div>
            <div className="flex items-center gap-4 mb-1">
              <span className="text-[#03009b] font-bold text-2xl">Lycopene</span>
            </div>
            <div className="text-[#2f49db] font-bold mb-2">
              Healthy Heart
            </div>
            <p className="text-[#1A1A1A] text-sm max-w-xs">
              Powerful antioxidant that reduces oxidative damage and
              inflammation. Protects against various cancers and supports heart
              health.
            </p>
          </div>
        </div>
      </div>

      <img
        src="/brain.webp"
        alt="Anthoxanthin"
        className="w-16 h-16 sm:w-20 sm:h-20 mt-6 sm:mt-10"
      />
      {/* Bottom Center Anthocyanin */}
      <div className="mt-6 sm:mt-10 flex flex-col items-center">
        <div className="flex items-center gap-4 mb-1">
          <span className="text-[#03009b] font-bold text-lg sm:text-xl lg:text-2xl">Anthocyanin</span>
        </div>
        <div className="text-[#2f49db] font-bold mb-2">Healthy Brains</div>
        <p className="text-[#1A1A1A] text-sm max-w-md text-center">
          Lowers blood pressure and reduces the risk of heart disease. Protects
          brain function and may slow cancer growth.
        </p>
      </div>
    </div>
  </section>
  </ScrollEffect>
);

export default HealthBenefits;
