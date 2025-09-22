import React from "react";
import Hero from "./Hero";
import About from "./About";
import InfoSituation from "./InfoSituation";
import FeatureCards from "./FeatureCards";
import HealthBenefits from "./HealthBenefits";
import CompetitiveAdvantage from "./CompetitiveAdvantage";
import SuccessStats from "./SuccessStats";
import WaterTechnology from "./InnovationTech";
import Milestone from "./Milestone";
import TestimonialSlider from "./TestimonialSlider";
import BookBanner from "./BookBanner";





const Home = () => {
  return (
    
    <>
   
      <Hero />
      <About />
      <InfoSituation />
      <FeatureCards />
      <HealthBenefits />
      <CompetitiveAdvantage/>
      <WaterTechnology/>
      <Milestone/>
      <SuccessStats/>
      <TestimonialSlider/>
      <BookBanner/>
   
     
    </>
  );
};

export default Home;
