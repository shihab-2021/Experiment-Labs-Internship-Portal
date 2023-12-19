import React from "react";
import HeroSection from "../Components/Home/HeroSection/HeroSection";
import StatisticsAndStartups from "../Components/Home/StatisticsAndStartups/StatisticsAndStartups";
import ReviewSection from "../Components/Home/ReviewSection/ReviewSection";
import TopBanner from "../Components/Home/UpdatedHome/TopBanner";
import Community from "../Components/Home/UpdatedHome/Community";

const Home = () => {
  return (
    <div>
      <TopBanner></TopBanner>
      <Community></Community>
      {/* <HeroSection />
      <StatisticsAndStartups /> */}
      {/* <ReviewSection /> */}
    </div>
  );
};

export default Home;
