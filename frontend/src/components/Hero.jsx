import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import ScrollEffect from './ScrollEffect'



const Hero = () => {
  return (
    <ScrollEffect>
    <section className="w-full min-h-[520px] bg-[#d5dee6] flex items-center justify-center py-8 sm:py-16 relative overflow-hidden">
      {/* Main Card/Container */}
      <div
        className="relative z-10 rounded-[2rem] sm:rounded-[3rem] flex flex-col lg:flex-row items-center mx-2 sm:mx-4 md:mx-12 px-4 sm:px-8 py-8 sm:py-12 gap-8 sm:gap-16 max-w-6xl w-full"
        style={{
          boxShadow: "0 2px 40px 2px rgba(44,104,235,.35)",
          backgroundColor: "#e4e9ed",
        }}
      >
        {/* Left: Image */}
        <div className="flex-1 flex items-center justify-center order-2 lg:order-1">
          <img
            src="/can1.webp"
            alt="Water cans"
            className="w-[280px] h-[300px] sm:w-[350px] sm:h-[380px] md:w-[450px] md:h-[480px] object-contain"
            style={{
              transform: "rotate(-2deg)",
              filter: "drop-shadow(0 2px 15px rgba(44,104,235,0.16))",
            }}
          />
        </div>

         

        {/* Right: Text Content */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-2">
          <img src="/image.webp" alt="Newtro-X logo" className="h-16 sm:h-20 mb-2" />
          <div className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 leading-tight text-gray-800">
            World's <span className="text-[#03009b]">First Non-Expiry </span>Water
          </div>
          <p className="mt-4 font-[font1] text-sm sm:text-base md:text-lg text-[#1A1A1A] max-w-lg">
            Empire Blue Pvt. Ltd. We prioritize health, innovation, and
            sustainability we are committed to seating new industry standards
            and providing a safe, reliable and beneficial hydration solution for
            people worldwide.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 px-6 sm:px-8 py-2 sm:py-3 rounded-4xl bg-[#03009b] hover:bg-[#1D22BF] text-white font-semibold text-base sm:text-lg shadow transition"
          >
            Contact Us <AiOutlineArrowRight size={20} />
          </Link>
         
        </div>
       
      </div>


   
   
      


    </section>
    </ScrollEffect>
  );
};

export default Hero;


