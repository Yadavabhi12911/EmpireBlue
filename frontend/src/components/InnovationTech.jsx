import React from "react";
import ScrollEffect from './ScrollEffect'

const InnovationTech = () => {
  
  return (
    <ScrollEffect>
    <section className="bg-[#d5dee6] py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="flex-1">
          {/* Badge */}
          <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-gradient-to-r from-[#3a94ec] via-[#9843f5] to-[#2cc781] rounded-full mr-2"></span>
            Water Innovation
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-bold text-blue-900 leading-snug">
            Revolutionizing{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 underline decoration-4 decoration-blue-200">
              Water
            </span>{" "}
            Technology
          </h1>

          {/* Description */}
          <p className="mt-5 text-gray-600 text-base md:text-lg leading-relaxed">
            We're pioneering the future of water technology with our groundbreaking{" "}
            innovation that eliminates expiration dates from bottled water, ensuring pure{" "}
            and safe drinking water for generations to come.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 bg-[#03009b] text-white font-semibold rounded-xl shadow-md hover:bg-blue-800 transition">
              Explore Technology
            </button>
            <button className="px-6 py-3 border border-blue-700 text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
               
        <div className="flex-1 flex justify-center">
          <div className="bg-white rounded-3xl shadow-lg p-6">
            <img
              src="/innovation.webp"
              alt="Water Technology"
              className="w-[180px] md:w-[280px] h-[320px] object-contain animate-slow-one"
            />
          </div>
        </div>
      </div>
    </section>
    </ScrollEffect>
  );
};

export default InnovationTech;


  
            
