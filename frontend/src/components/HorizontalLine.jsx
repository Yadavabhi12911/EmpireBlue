import React from "react";


const HorizontalLine = () => {
  
  return (
    
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

  );
};

export default HorizontalLine;
