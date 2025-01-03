import React, { useEffect, useState } from "react";
import { ArticleData } from "../../../data/ArticleData";

function Articles() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % ArticleData.length);
        setIsVisible(true); // Start fading in after the image is changed
      }, 200);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative w-full">
      <img className="relative w-full" src="/assets/TBg.png" />

      <div className="absolute w-full top-8 left-8 text-white">
        <div className="flex flex-col gap-2 ml-12">
          <p className="lato text-sm">
            Useful For Defining Or Describing Specific Concepts
          </p>
          <p className="lato text-3xl">ARTICLES</p>
        </div>

        <div className="w-full flex flex-row justify-center items-center gap-20 mx-10 mt-28">
          <div className="flex items-center justify-center">
            {/* Image  */}

            <img
              className={`h-[420px] w-[420px] transition-opacity duration-200 ${
                isVisible ? "animate-fade-in" : " animate-fade-out"
              } ease-in-out `}
              src={ArticleData[currentIndex].image}
            />
            {/* Dotted circle */}
            <img
              id="rotating-image"
              className="absolute  h-[490px] w-[490px] animate-rotate-steps"
              src="/assets/Circle.png"
            />

            {console.log(ArticleData)}
          </div>
          <div className="max-w-xl flex flex-col gap-5">
            <p className={`text-3xl font-semibold`}>
              Building Plan Approval Process Gets Digitised In&nbsp;
              <span
                className={`transition-opacity duration-200 ${
                  isVisible ? "animate-fade-in" : " animate-fade-out"
                } ease-in-out `}
              >
                {ArticleData[currentIndex].place}
              </span>
            </p>
            <p
              className={`text-xs transition-opacity duration-200 ${
                isVisible ? "animate-fade-in" : " animate-fade-out"
              } ease-in-out`}
            >
              {ArticleData[currentIndex].paragraph}
            </p>
            <button className="w-36 bg-[#7C11F7] py-2  rounded-3xl">
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Articles;
