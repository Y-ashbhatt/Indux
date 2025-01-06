import React, { useEffect, useState } from "react";
import TrendingPage from "./_components/TrendingPage";
import NewlyLaunched from "./_components/NewlyLaunched";
import TopLocalities from "./_components/TopLocalities";
import BuyNow from "./_components/BuyNow";
import Experience from "./_components/Experience";
import Articles from "./_components/Articles";
import Elevate from "./_components/Elevate";
import Testimonial from "./_components/Testimonial";
import IntroBanner from "./_components/IntroBanner";

const Home = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 2630) {
        setAnimate(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <IntroBanner/>
      <TrendingPage />
      <NewlyLaunched />
      <TopLocalities />
      <BuyNow />
      <Experience />
      <Articles />
      <Elevate />
      <Testimonial animate={animate} />
      {/* <div className="h-40 bg-purple-400"></div> */}
    </div>
  );
};

export default Home;
