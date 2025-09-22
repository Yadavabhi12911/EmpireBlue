import React from "react";
import ScrollEffect from './ScrollEffect'

const milestones = [
  {
    year: 2026,
    title: "Newtro-X",
    title2: "Project Kickoff",
    subtitle:
      "Launch of Newtro-X, our base segment brand. Introducing the world's first non-expiry water bottle.",
    color: "text-[#03009b]",
  },
  {
    year: 2028,
    title: "Our Vehicle Care",
    title2: "Segment Launch",
    subtitle: "Introduction of DM Water (battery), Coolant, and DEF Water.",
    color: "text-[#03009b]",
  },
  {
    year: 2030,
    title: "Java-X",
    title2: "Major Achievement",
    subtitle:
      "Launch of our highest premium segment brand with top enhancements. Super premium glass bottle, elite branding.",
    color: "text-[#03009b]",
  },
];

const years = [2026, 2027, 2028, 2029, 2030];

const Milestone = () => (
  <ScrollEffect>
  <section className="w-full bg-[#d5dee6] py-16 px-4 font-[font1]">
    <div className="max-w-7xl mx-auto">
      {/* Heading */}
      <ScrollEffect>
      <h2 className="flex flex-wrap items-center text-4xl sm:text-5xl font-bold gap-3 mb-10 justify-center sm:justify-start">
        <span className="text-2xl sm:text-3xl">🏆</span>
        <span className="text-[#03009b]">Our</span>
        <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
          Milestone
        </span>
      </h2>
      </ScrollEffect>

      {/* Top Black Plum Summary */}
      <ScrollEffect>
      <div className="w-full flex flex-col sm:flex-row justify-between text-lg mb-6 gap-6">
        <div className="flex-1">
          <span className="text-[#03009b] font-bold">
            Black Plum <span className="text-[#1A1A1A]">Premium Segment</span>
          </span>
          <p className="text-sm mt-1">
            Launch of Colin, Dish Wash, Toilet Cleaner, and Floor Cleaner.
          </p>
        </div>
        <div className="flex-1 mt-4 sm:mt-0">
          <span className="text-[#03009b] font-bold">
            Black Plum <span className="text-[#1A1A1A]">Premium Segment</span>
          </span>
          <p className="text-sm mt-1">
            Launch of our premium brand with enhanced minerals and benefits.
            <br />
            Premium glass bottle packaging, professional branding.
          </p>
        </div>
      </div>
      </ScrollEffect>
<ScrollEffect>
      {/* Timeline */}
      <div className="flex flex-wrap items-center justify-center w-full max-w-7xl mx-auto mt-25 mb-10 gap-2">
        {years.map((year, idx) => (
          <React.Fragment key={year}>
            <div className="flex flex-col items-center mx-1">
              <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold px-4 py-1 rounded-lg tracking-wide bg-transparent text-[#03009b] outline-text">
                {year}
              </span>
            </div>
            {idx !== years.length - 1 && (
              <span className="mx-0 sm:mx-2 text-[#03009b] text-2xl sm:text-3xl md:text-4xl">
                →
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
</ScrollEffect>
      {/* Milestone cards - always centered on mobile */}
      <ScrollEffect>
      <div className="flex flex-col items-center sm:flex-row sm:justify-between gap-6 max-w-7xl mx-auto mt-10">
        {milestones.map((m) => (
          <div
            key={m.year}
            className="w-full max-w-[430px]  p-4 rounded-2xl  text-center sm:text-left flex flex-col items-center sm:items-start"
          >
            <h3 className={`font-bold text-lg mb-2 ${m.color}`}>
              {m.title} <span className="text-[#1A1A1A]">{m.title2}</span>
            </h3>
            <p className="text-sm">{m.subtitle}</p>
          </div>
        ))}
      </div>
      </ScrollEffect>
    </div>
  </section>
  </ScrollEffect>
);

export default Milestone;
