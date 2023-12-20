import React from "react";
import HeroSection from "../Components/Home/HeroSection/HeroSection";
import StatisticsAndStartups from "../Components/Home/StatisticsAndStartups/StatisticsAndStartups";
import ReviewSection from "../Components/Home/ReviewSection/ReviewSection";
import TopBanner from "../Components/Home/UpdatedHome/TopBanner";
import Community from "../Components/Home/UpdatedHome/Community";
import InternshipsCategory from "../Components/Home/UpdatedHome/InternshipsCategory";
import RightInternship from "../Components/Home/UpdatedHome/RightInternship";
import Navbar from "../Components/Shared/Navbar/Navbar";
import FooterHome from "../Components/Shared/Footer/FooterHome";
import PostYourInternships from "../Components/Home/UpdatedHome/PostYourInternships";
import Guidance from "../Components/Home/UpdatedHome/Guidance";

const Home = () => {
  return (
    <div>
      <Navbar/>
      <TopBanner></TopBanner>
      <Community></Community>
      <InternshipsCategory></InternshipsCategory>
      <RightInternship></RightInternship>
      <Guidance/>
      <PostYourInternships/>
      <FooterHome/>
      {/* <HeroSection />
      <StatisticsAndStartups /> */}
      {/* <ReviewSection /> */}
    </div>
  );
};

export default Home;
