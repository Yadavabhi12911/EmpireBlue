import React from "react";
import ScrollEffect from './ScrollEffect'

const competitiveAdvantages = [
  {
    title: "World's first non-expiry water",
    img: "/earth.webp", 
    desc: "Our revolutionary water that never expires, ensuring unmatched quality and freshness for decades, making it a unique choice in the modern world today.",
  },
  {
    title: "Health benefits",
    img: "/heart.webp",
    desc: "Unique water formulation helps prevent major health risks such as cancer and heart attacks while boosting the immune system for long-term vitality and daily wellness.",
  },
  {
    title: "Premium mineral enrichment",
    img: "/star1.webp",
    desc: "Infused with essential minerals Newtro-X provides superior nourishment compared to regular bottled water, promoting overall health and energy all day long every day.",
  },
  {
    title: "Bacteria free",
    img: "/right1.webp",
    desc: "Ensure that never release microplastic or harmful bacteria, keeping the water clean and perfectly safe for everyone, anywhere, with consistent purity at every single sip.",
  },
  {
    title: "Technology",
    img: "/setting1.webp",
    desc: "Utilization of cutting edge - ultra purification and preservation methods to maintain water qualities, offering unmatched performance and innovation in safe hydration.",
  },
  {
    title: "Preservation",
    img: "/beaker1.webp",
    desc: "With no expiry date consumers can store the product indefinitely without the risk of contamination or quality degradation reducing frequent repurcasing cost.",
  },
];

const CompetitiveAdvantage = () => (
  < ScrollEffect>
  <section className="w-full bg-[#d5dee6] flex flex-col items-center justify-center py-10 sm:py-20 px-4 font-[font1]">
    {/* Heading */}
    < ScrollEffect>
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-bold mb-6 sm:mb-10">
      <span className="text-[#03009b]">Competitive </span>
      <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Advantage </span>
      <span className="text-[#03009b]">Beyond The Ordinary</span>
    </h2>
</ScrollEffect>

< ScrollEffect>
    {/* Top row: first three items */}
    <div className="flex flex-col lg:flex-row items-start justify-center gap-8 sm:gap-16 w-full max-w-6xl mx-auto mb-6 sm:mb-10 font-[font1]">
      {competitiveAdvantages.slice(0,3).map((card, idx) => (
        <div key={card.title} className="flex flex-col items-center text-center w-full lg:w-1/3 px-2">
          <img src={card.img} alt={card.title} className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3" />
          <div className="text-lg sm:text-xl font-bold text-[#03009b] mb-2">{card.title}</div>
          <p className="text-[#1A1A1A] text-xs sm:text-sm">{card.desc}</p>
        </div>
      ))}
    </div>
    </ScrollEffect>


    {/* Timeline */}
    <div className="flex items-center justify-between w-full max-w-4xl mx-auto mb-8 sm:mb-12 px-4">
      {[...Array(6)].map((_, idx) => (
        <div key={idx} className="flex items-center flex-1">
          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-[#03009b] bg-white flex items-center justify-center text-[#03009b] text-xs sm:text-sm font-bold">
            {idx + 1}
          </div>
          {idx !== 5 && (
            <div className="h-[1px] sm:h-[2px] bg-[#03009b] flex-1 mx-1" />
          )}
        </div>
      ))}
    </div>
   

< ScrollEffect>
    {/* Bottom row: last three items */}
    <div className="flex flex-col lg:flex-row items-start justify-center gap-8 sm:gap-16 w-full max-w-6xl mx-auto font-[font1]">
      {competitiveAdvantages.slice(3).map((card, idx) => (
        <div key={card.title} className="flex flex-col items-center text-center w-full lg:w-1/3 px-2">
          <img src={card.img} alt={card.title} className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3" />
          <div className="text-lg sm:text-xl font-bold text-[#03009b] mb-2">{card.title}</div>
          <p className="text-[#1A1A1A] text-xs sm:text-sm">{card.desc}</p>
        </div>
      ))}
    </div>
    </ScrollEffect>
  </section>
   </ScrollEffect>
);

export default CompetitiveAdvantage;
