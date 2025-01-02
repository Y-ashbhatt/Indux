import React, { useContext, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { PropertiesContext } from "../../../context/PropertiesContext";

const TopLocalities = () => {
  const properties = useContext(PropertiesContext);

  const [expandedIndex, setExpandedIndex] = useState(null);
  const [showDescription, setShowDescription] = useState(false);

  // const handleCardClick = (index) => {
  //     setExpandedIndex(index === expandedIndex? -1 : index)
  // }

  const [isPrevDisabled, setIsPrevDisabled] = useState(true); // Initially, the 'Prev' button is disabled
  const [isNextDisabled, setIsNextDisabled] = useState(false); // 'Next' button is enabled

  const [containerHover, setContainerHover] = useState(false);

  const sliderRef = useRef(null); // Reference to the slider

  const [itemStateOpacity, setItemStateOpacity] = useState(1); // New state for opacity

  const handleContainerHoverStart = () => {
    setContainerHover(true);
  };

  const handleContainerHoverEnd = () => {
    setContainerHover(false);
  };
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

  // const cardVariants = {
  //
  //     expanded: {
  //         width: "400px",
  //     },
  //     collapsed: {
  //         width: "200px"
  //     }
  // }

  const cardVariants = (index, properties) => {
    return {
      expanded: {
        width: "320px",
        x: index === properties.properties?.length - 1 ? "-220px" : "0px", // Shift the last card to the left
      },
      collapsed: {
        width: "200px",
        x: "0px", // Reset position when collapsed
      },
    };
  };

  const cardFooterVariants = {
    hidden: {
      opacity: 0,
      y: 0,
      transition: { duration: 0.9, ease: "easeIn" },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9 },
    },
    exit: {
      opacity: 0,
      y: 30,
      transition: { duration: 0.9, ease: "easeOut" }, // Adjust duration if needed
    },
  };
  //
  // const h2Variants = {
  //     hidden: {
  //         opacity: 0,
  //         y: 20, // Small vertical shift to make the animation more dynamic
  //         transition: { duration: 0.9 }
  //     },
  //     visible: {
  //         opacity: 1,
  //         y: 0,
  //         transition: { duration: 0.9, ease: "easeOut" }
  //     },
  //     exit: {
  //         opacity: 0,
  //         y: 30,
  //         transition: { duration: 0.9, ease: "easeOut"  } // Adjust duration if needed
  //     }
  // };

  const pVariants = {
    hidden: {
      opacity: 0,
      y: 50, // Start 50px below
    },
    visible: {
      opacity: 1,
      y: 0, // Animates to its original position
      transition: { duration: 0.6, ease: "easeOut" }, // Animation speed and easing
    },
    exit: {
      opacity: 0,
      y: 30,
      transition: { duration: 0.9, ease: "easeOut" }, // Adjust duration if needed
    },
  };

  const updateButtonState = () => {
    const slider = sliderRef.current;
    const { scrollLeft, scrollWidth, offsetWidth } = slider;

    setIsPrevDisabled(scrollLeft <= 0); // Disable "Prev" if we're at the start
    setIsNextDisabled(scrollLeft + offsetWidth >= scrollWidth); // Disable "Next" if we're at the end
  };

  const handlePrevBtn = () => {
    // const slider = document.querySelector('.card-container')

    const slider = sliderRef.current;

    const width = slider.offsetWidth;

    slider.scrollLeft = slider.scrollLeft - width / 2;

    // Update button state after the scroll
    setTimeout(updateButtonState, 300);
  };

  const handleNextBtn = () => {
    // const slider = document.querySelector('.card-container')

    const slider = sliderRef.current;

    const width = slider.offsetWidth;

    slider.scrollLeft = slider.scrollLeft + width / 2;

    // Update button state after the scroll
    setTimeout(updateButtonState, 300);
  };

  useEffect(() => {
    const slider = sliderRef.current;

    // Check button state on mount
    updateButtonState();

    // Add scroll event listener to keep buttons updated
    slider.addEventListener("scroll", updateButtonState);

    return () => {
      // Cleanup the event listener
      slider.removeEventListener("scroll", updateButtonState);
    };
  }, []);

  return (
    <>
      <section className="carousel relative overflow-hidden !py-12 bg-white h-screen">
        <div className="max-w-7xl mx-12 sm:px-6 lg:px-8">
          <p className="mt-4 text-xl text-gray-800 font-semibold">
            Check out the top localities
          </p>
          <h1 className="text-3xl font-semibold text-black">TOP LOCALITIES</h1>
        </div>

        {/*Card-Container*/}

        <motion.div
          ref={sliderRef}
          className="card-container flex overflow-x-hidden snap-x snap-mandatory mt-5  gap-5 px-28 py-6"
          onHoverStart={() => handleContainerHoverStart()}
          onHoverEnd={() => handleContainerHoverEnd()}
          style={{
            paddingLeft: "100px",
            paddingRight: "100px",
          }} // Extra padding to prevent overlap on both sides
        >
          {/*Button Functionality*/}

          {containerHover && (
            <motion.div
              className="flex items-center justify-center gap-4 absolute bottom-[310px] z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.9 }}
            >
              <button
                className="rounded-full absolute bg-white bg-opacity-50 active:bg-violet-400 -left-[60px] font-semibold w-[52px] h-[52px] cursor-pointer hover:border-2 border-purple-500 text-5xl text-purple-700 disabled:opacity-50 transition-transform duration-150 active:scale-95"
                onClick={handlePrevBtn}
                disabled={isPrevDisabled}
              >
                &#60;
              </button>

              <button
                className="rounded-full absolute bg-white bg-opacity-50 active:bg-violet-400 left-[1360px] text-5xl  font-semibold w-[52px] h-[52px] cursor-pointer hover:border-2 border-purple-500 text-purple-700 disabled:opacity-50 transition-transform duration-150 active:scale-95"
                onClick={handleNextBtn}
                disabled={isNextDisabled}
              >
                &#62;
              </button>
            </motion.div>
          )}

          {properties.properties.map((item, index) => (
            <motion.div
              key={index}
              className={`card cursor-pointer h-[432px] bg-cover bg-center rounded-[20px] ${
                index === expandedIndex ? `expanded` : ``
              } flex-shrink-0`}
              variants={cardVariants(index, properties)}
              initial="collapsed"
              animate={index === expandedIndex ? "expanded" : "collapsed"}
              exit="collapsed"
              transition={{ duration: 0.7 }}
              onHoverStart={() => handleCardHoverStart(index)}
              onHoverEnd={() => handleCardHoverEnd(index)}
              style={{
                backgroundImage: `url(${item.image})`,
              }}
              // Trigger when the card expansion completes
              onAnimationComplete={() => {
                if (index === expandedIndex) {
                  setShowDescription(true); // Show the description when the card finishes expanding
                  setItemStateOpacity(0); // Set opacity to 1 when expanded
                } else {
                  setShowDescription(false);
                  setItemStateOpacity(1); // Set opacity to 0 when collapsed
                }
              }}
            >
              <div className="card-content h-full flex flex-col justify-end">
                {index !== expandedIndex && (
                  <motion.div
                    className="card-footer mb-8 z-10 bg-[#7c11f7] min-h-[150px] w-8 flex flex-col items-center justify-center"
                    // variants={cardFooterVariants}
                    // initial="hidden"
                    // animate="visible"
                    // exit="exit"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    // animate={{ opacity: itemStateOpacity }} // Use itemStateOpacity to control visibility
                    transition={{ duration: 1.5 }}
                  >
                    <motion.h2
                      className="text-white z-10 !-rotate-90"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1.5 }}
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
                      variants={cardFooterVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      // initial={{ opacity: 0 }}
                      // animate={{ opacity: 1 }}
                      // transition={{ duration: 0.5 }}
                    >
                      <motion.h2 className="font-semibold z-10 bg-white text-purple-700 text-center p-1 rounded-full px-5 absolute bottom-[120px]">
                        {item.state}
                      </motion.h2>

                      {/* Show description only when the card is fully expanded */}
                      {showDescription && (
                        <motion.div
                          className="px-4 py-2 mt-16 z-10"
                          variants={pVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                        >
                          <motion.p className="mt-2 text-sm text-white text-center mb-2 relative">
                            {item.description}
                          </motion.p>
                        </motion.div>
                      )}

                      {/* Gradient covering both heading and description (only when expanded) */}
                      {/*{*/}
                      {/*    index === expandedIndex && (*/}
                      {/*        <div*/}
                      {/*            className='absolute rounded-b-[20px] bottom-0 left-0 right-0 top-0 bg-gradient-to-t from-black/70 via-black/70 to-transparent'></div>*/}
                      {/*    )*/}
                      {/*}*/}
                    </motion.div>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
};

export default TopLocalities;
