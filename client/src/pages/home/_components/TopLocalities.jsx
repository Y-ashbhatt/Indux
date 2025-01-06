import React, { useContext, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { PropertiesContext } from "../../../context/PropertiesContext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const TopLocalities = () => {
  const properties = useContext(PropertiesContext);

  const [expandedIndex, setExpandedIndex] = useState(null);
  const [showDescription, setShowDescription] = useState(false);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);

  const sliderRef = useRef(null);

  const handleCardHoverStart = (index) => {
    setShowDescription(false);
    setExpandedIndex(index);
  };

  const handleCardHoverEnd = (index) => {
    if (index === expandedIndex) {
      setShowDescription(false);
      setExpandedIndex(null);
    }
  };

  const cardVariants = (index) => ({
    expanded: {
      width: "320px",
      x: index === properties.properties?.length - 1 ? "-220px" : "0px",
    },
    collapsed: {
      width: "200px",
      x: "0px",
    },
  });

  const pVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, y: 30, transition: { duration: 0.9, ease: "easeOut" } },
  };

  const updateButtonState = () => {
    const slider = sliderRef.current;
    const { scrollLeft, scrollWidth, offsetWidth } = slider;
    setIsPrevDisabled(scrollLeft <= 0);
    setIsNextDisabled(scrollLeft + offsetWidth >= scrollWidth);
  };

  const handlePrevBtn = () => {
    const slider = sliderRef.current;
    const width = slider.offsetWidth;
    slider.scrollLeft = slider.scrollLeft - width / 2;
    setTimeout(updateButtonState, 300);
  };

  const handleNextBtn = () => {
    const slider = sliderRef.current;
    const width = slider.offsetWidth;
    slider.scrollLeft = slider.scrollLeft + width / 2;
    setTimeout(updateButtonState, 300);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    updateButtonState();
    slider.addEventListener("scroll", updateButtonState);
    return () => slider.removeEventListener("scroll", updateButtonState);
  }, []);

  return (
    <>
      <section className="carousel relative overflow-hidden py-14  px-[75px]  bg-white ">
        <div className="max-w-7xl mt-10 ">
          <p className="mt-4 text-xl text-gray-800 font-semibold">
            Check out the top localities
          </p>
          <h1 className="text-3xl font-semibold text-black">TOP LOCALITIES</h1>
        </div>

        {/* Card Container */}
        <motion.div
          ref={sliderRef}
          className="card-container flex overflow-x-hidden snap-x snap-mandatory mt-5 gap-5  py-6"
        >
          {properties.properties.map((item, index) => (
            <motion.div
              key={index}
              className={`card cursor-pointer h-[432px] bg-cover bg-center rounded-[20px] flex-shrink-0 ${index === expandedIndex ? `expanded` : ``
                }`}
              variants={cardVariants(index)}
              initial="collapsed"
              animate={index === expandedIndex ? "expanded" : "collapsed"}
              exit="collapsed"
              transition={{ duration: 0.7 }}
              onHoverStart={() => handleCardHoverStart(index)}
              onHoverEnd={() => handleCardHoverEnd(index)}
              style={{
                backgroundImage: `url(${item.image})`,
              }}
              onAnimationComplete={() => {
                if (index === expandedIndex) {
                  setShowDescription(true);
                } else {
                  setShowDescription(false);
                }
              }}
            >
              <div className="card-content h-full flex flex-col justify-end">
                {index !== expandedIndex && (
                  <motion.div
                    className="card-footer mb-8 z-10 bg-[#7c11f7] min-h-[150px] w-8 flex flex-col items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    <motion.h2
                      className="text-white z-10 !-rotate-90"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                    >
                      {item.state}
                    </motion.h2>
                  </motion.div>
                )}

                {index === expandedIndex && (
                  <>
                    <motion.div
                      className="card-footer rounded-b-[20px] min-h-[100px] flex flex-col items-center justify-center
                      bg-gradient-to-t from-black/80 via-black/80 to-transparent h-[200px]"
                    >

                      {showDescription && (
                        <motion.div
                          className="px-4 py-2 mt-16 z-10"
                          variants={pVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                        >
                          {/* <motion.h2 className="font-semibold z-10 bg-white text-purple-700 text-center p-1 rounded-full w-fit px-5 left-0 right-0 absolute bottom-[120px]">
                            {item.state}
                          </motion.h2> */}
                          <motion.p className="mt-2 text-sm text-white text-center mb-2 relative">
                            {item.description}
                          </motion.p>
                        </motion.div>
                      )}
                    </motion.div>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 my-6">
          <button
            className="rounded-full bg-white bg-opacity-50 active:bg-violet-400 font-semibold w-[42px] h-[42px] cursor-pointer border-2 border-[#7c11f7] text-[#7c11f7] disabled:opacity-50 transition-transform duration-150 active:scale-95"
            onClick={handlePrevBtn}
            disabled={isPrevDisabled}
          >
            <NavigateBeforeIcon />
          </button>
          <button
            className="rounded-full bg-white bg-opacity-50 active:bg-violet-400 font-semibold w-[42px] h-[42px] cursor-pointer border-2 border-[#7c11f7] text-[#7c11f7] disabled:opacity-50 transition-transform duration-150 active:scale-95"
            onClick={handleNextBtn}
            disabled={isNextDisabled}
          >
            <NavigateNextIcon />
          </button>
        </div>
      </section>
    </>
  );
};

export default TopLocalities;
