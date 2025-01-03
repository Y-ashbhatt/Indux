import React from "react";
import TrendingPage from "./_components/TrendingPage";
import NewlyLaunched from "./_components/NewlyLaunched";
import TopLocalities from "./_components/TopLocalities";
import IntroBanner from "./_components/IntroBanner";

const Home = () => {
  return (
    <div>
      <IntroBanner/>
      <TrendingPage />
      <NewlyLaunched />
      {/* There are two Top Localities carasousles ask which one to use  */}
      <TopLocalities />
    </div>
  );
};

export default Home;
