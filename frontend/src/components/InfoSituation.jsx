
import React from "react";
import ScrollEffect from './ScrollEffect'


const InfoSituation = () => (
  <ScrollEffect>
  <section className="w-full bg-[#d5dee6] flex items-center justify-center py-8 sm:py-16 px-4 md:px-12">
    <div className="max-w-6xl w-full flex flex-col">
      <div className="bg-[#e4e9ed] rounded-[1.5rem] sm:rounded-[2rem] shadow-lg flex flex-col lg:flex-row items-center px-4 sm:px-8 py-6 sm:py-10 gap-6 sm:gap-8 border-2 border-[#f5f7fa]" style={{ borderRadius: "2rem", boxShadow: "0 2px 40px 2px rgba(44,104,235,.12)" }}>
        {/* Left panel */}
        <div className="flex-1 flex flex-col justify-center lg:justify-start order-2 lg:order-1">
          <h2 className="font-bold text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-5 text-[#03009b] text-center lg:text-left">Current Situation</h2>
          <p className="text-base text-[#1A1A1A] mb-4 sm:mb-5 font-[font1] text-center lg:text-left">
            Approximately 2.2 billion people do not have access to safe drinking water and 3.5 billion people do not have access to clean drinking water. This problem is increasing due to the rapidly increasing population. Poor water management has further aggravated the crisis.
          </p>
          <p className=" text-base  text-[#1A1A1A] font-[font1] text-center lg:text-left">
            The top countries facing severe water crisis include Lebanon, Pakistan, Afghanistan, Syria, Yemen, and Ethiopia.
          </p>
        </div>

        {/* Center icon */}
        <div className="flex-shrink-0 my-4 sm:my-8 lg:my-0 flex items-center justify-center order-1 lg:order-2">
          <div className="bg-[#d5dee6] rounded-full flex items-center justify-center shadow-lg" style={{ width: '220px', height: '220px' }}>
        <img src="/water-droplet.webp" alt="" className="w-36 h-36  sm:w-40 sm:h-40 animate-slow-bounce filter  opacity-40" />
          </div>
        </div>

        {/* Right panel */}
        <div className="flex-1 flex flex-col justify-center lg:justify-start order-3 lg:order-3">
          <h2 className="font-[font1] font-bold text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-5 text-[#03009b] text-center lg:text-left">Health Impact of<br className="hidden lg:block"/> contaminated water</h2>
          <p className="font-[font1]  text-base  text-[#1A1A1A] mb-5 sm:mb-6 text-center lg:text-left">
            Every 33 seconds a person dies from heart disease across the worldwide and around 26,300 people die from cancer every day.
          </p>
          <p className="font-[font1]  text-base  text-[#1A1A1A] text-center lg:text-left">
            Contaminated water releases harmful bacteria and micro plastics which is lead to health problems like cancer and also cause high blood pressure and heart problems.
          </p>
        </div>
      </div>
    </div>
  </section>
  </ScrollEffect>
);

export default InfoSituation;
