import React from "react";
import HeroSection from "../Components/Home/HeroSection/HeroSection";
import StatisticsAndStartups from "../Components/Home/StatisticsAndStartups/StatisticsAndStartups";
import ReviewSection from "../Components/Home/ReviewSection/ReviewSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <StatisticsAndStartups />
      {/* <ReviewSection /> */}
    </div>
  );
};

export default Home;
