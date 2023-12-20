import React from "react";
import HeroSection from "../Components/Home/HeroSection/HeroSection";
import StatisticsAndStartups from "../Components/Home/StatisticsAndStartups/StatisticsAndStartups";
import ReviewSection from "../Components/Home/ReviewSection/ReviewSection";
import TopBanner from "../Components/Home/UpdatedHome/TopBanner";
import Community from "../Components/Home/UpdatedHome/Community";
import InternshipsCategory from "../Components/Home/UpdatedHome/InternshipsCategory";
import RightInternship from "../Components/Home/UpdatedHome/RightInternship";

const Home = () => {
  return (
    <div>
      <TopBanner></TopBanner>
      <Community></Community>
      <InternshipsCategory></InternshipsCategory>
      <RightInternship></RightInternship>
      {/* <HeroSection />
      <StatisticsAndStartups /> */}
      {/* <ReviewSection /> */}
    </div>
  );
};

export default Home;
