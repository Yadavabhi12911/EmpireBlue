import React, { useState, useEffect, useRef } from "react";
import {
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineAppstore,
  AiOutlineRise,
  AiOutlineTrophy,
} from "react-icons/ai";
import ScrollEffect from './ScrollEffect'

const stats = [
  {
    icon: AiOutlineUser,
    value: 50000,
    label: "Happy Customers",
    iconBg: "bg-[#2563eb]",
  },
  {
    icon: AiOutlineShoppingCart,
    value: 100000,
    label: "Orders Delivered",
    iconBg: "bg-[#fdba01]",
  },
  {
    icon: AiOutlineAppstore,
    value: 15,
    label: "Products Launched",
    iconBg: "bg-[#10b981]",
  },
  {
    icon: AiOutlineRise,
    value: 98,
    label: "Satisfaction Rate",
    iconBg: "bg-[#9843f5]",
  },
  {
    icon: AiOutlineTrophy,
    value: 25,
    label: "Industry Awards",
    iconBg: "bg-[#f43f5e]",
  },
];


const useCountUpOnView = (end) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    let timer;
    const duration = 2000; // 2 seconds
    const frameRate = 60; // 60 frames per second
    const totalFrames = Math.round((duration / 1000) * frameRate);
    const increment = end / totalFrames;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let current = 0;
          let frame = 0;

          timer = setInterval(() => {
            frame++;
            current += increment;
            if (frame >= totalFrames) {
              current = end;
              clearInterval(timer);
            }
            setCount(Math.floor(current));
          }, duration / totalFrames);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
      if (timer) clearInterval(timer);
    };
  }, [end]);

  return [count, ref];
};


const SuccessStory = () => (
  <ScrollEffect>
  <section className="w-full bg-[#d5dee6] py-10 sm:py-20 px-4 font-[font1]">
    
    <div className="flex flex-col items-center">
      <ScrollEffect>
      <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl text-center mb-4 sm:mb-5">
        <span className="text-[#03009b]">Our </span>
        <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Success </span>
        <span className="text-[#03009b]">Story</span>
      </h2>
      <p className="text-sm sm:text-base md:text-lg text-[#667085] text-center mb-8 sm:mb-12 max-w-7xl">
        Trusted by thousands of customers across India, delivering pure and healthy water solutions
      </p>
      </ScrollEffect>
      <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-10 w-full max-w-7xl">
      {stats.map(({ icon: Icon, value, label, iconBg }, idx) => {
  const [count, ref] = useCountUpOnView(value);
  return (
     <ScrollEffect>
    <div
      key={label}
      ref={ref}
      className="relative group flex flex-col items-center px-4 sm:px-6 lg:px-8 py-6 sm:py-7 lg:py-9 w-[280px] sm:w-[200px] lg:w-[230px] bg-white rounded-xl sm:rounded-2xl shadow-2xl transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 hover:opacity-100 hover:-translate-y-3 cursor-pointer"
    >
      <span className={`${iconBg} flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl mb-4 sm:mb-6 text-white z-10 relative`}>
        <Icon size={20} className="sm:hidden" />
        <Icon size={28} className="hidden sm:block" />
      </span>
      <div className="font-extrabold text-lg sm:text-xl lg:text-2xl mb-2 text-[#1a1a1ada] z-10 relative">
        {count.toLocaleString()}
        {label === "Satisfaction Rate" ? "%" : "+"}
      </div>
      <div className={`absolute bottom-5 left-4 sm:left-6 lg:left-8 right-4 sm:right-6 lg:right-8 h-1 bg-gradient-to-r ${iconBg} rounded transition-all duration-[500ms] origin-left scale-x-0 group-hover:scale-x-100 z-0`} style={{ transformOrigin: "left" }}></div>
      <div className="text-[#667085] font-semibold text-xs sm:text-sm lg:text-base z-10 relative text-center">{label}</div>
    </div>
    </ScrollEffect>
  );
})}

      </div>
      <div className="mx-auto h-1 rounded mt-8 sm:mt-14 w-32 sm:w-40 bg-gradient-to-r from-[#3a94ec] via-[#9843f5] to-[#2cc781]" />
    </div>
  </section>
  </ScrollEffect>
);

export default SuccessStory;
