import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import ScrollEffect from './ScrollEffect'


const About = () => (
  <ScrollEffect>
  <section className="w-full min-h-[520px] bg-[#d5dee6] flex items-center justify-center py-8 sm:py-16 px-4 md:px-12">
    <div className="max-w-6xl w-full flex flex-col lg:flex-row gap-8 sm:gap-12 items-center lg:items-start justify-between">
      {/* Left side: Text */}
      
      <div className="flex-1 order-2 lg:order-1">
        <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 sm:mb-8 text-center lg:text-left">
          <span className="text-[#03009b]">About</span>{" "}
          <span>
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Us</span>
           
          </span>
        </h2>

        <p className="mb-5 sm:mb-7 font-[font1] text-base sm:text-lg md:text-xl text-[#1A1A1A] text-center lg:text-left">
          Empire Blue Pvt. Ltd. Established July 2025 Based on Chhindwara Madhya Pradesh is a pioneering company in the bottled water industry recognized as the world's first manufacturer of non-expiry bacteria free water bottles.
        </p>
        <p className="mb-6 sm:mb-8 font-[font1] text-base sm:text-lg md:text-xl text-[#1A1A1A] text-center lg:text-left">
          Our mission is to revolutionize the way people consume water by ensuring purity, longevity, and health benefits in every drop.
        </p>
        <div className="flex justify-center lg:justify-start">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-8 sm:px-10 py-3 sm:py-4 rounded-full bg-[#03009b] hover:bg-[#1D22BF] text-white font-semibold text-base sm:text-lg md:text-xl shadow transition"
          >
            Learn More <AiOutlineArrowRight size={20} />
          </Link>
        </div>
      </div>

      {/* Right side: Image */}
      <div className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2">
        <img
          src="/about.webp"
          alt="Empire Blue Building"
          className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[460px] md:h-[450px] object-cover rounded-[1.5rem] sm:rounded-[2rem] border-4 sm:border-8 border-white shadow-2xl"
        />
      </div>
    </div>
  </section>
  </ScrollEffect>
);

export default About;
