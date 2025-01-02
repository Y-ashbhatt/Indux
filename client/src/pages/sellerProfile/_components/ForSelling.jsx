import React, { useContext, useState } from "react";
import PropertyCard1 from "./PropertyCard1.jsx";
import UnderConstruction from "./UnderConstruction.jsx";
import { PropertiesContext } from "../../../context/PropertiesContext.jsx";

const ForSelling = () => {
  const [activeOption, setActiveOption] = useState("Buy");
  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  const { properties } = useContext(PropertiesContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);
  const totalPosts = properties.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPagePosts = properties.slice(firstPostIndex, lastPostIndex);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <div className="w-full h-screen py-8 px-16 relative">
        <div className="flex">
          <h1 className="text-3xl font-semibold px-5">FOR SELLING</h1>

          <div className="flex items-center justify-center">
            <div className=" bg-purple-500 rounded-full p-1 w-[145px] h-[33px] flex justify-between relative ml-4">
              {/* Background Highlight */}
              <div
                className={`absolute top-1 left-1 w-[68.5px] h-[25px] bg-[#7c11f7]  rounded-full transition-transform duration-300 ease-in-out ${
                  activeOption === "Buy" ? "translate-x-0" : "translate-x-full"
                }`}
              />
              <div className="flex justify-between w-full relative z-10">
                {/* Buy Option */}
                <div
                  className={`cursor-pointer mt-1 flex-1 text-center rounded-full font-Lato font-normal text-[12px] ${
                    activeOption === "Buy" ? "text-white" : "text-black"
                  }`}
                  onClick={() => handleOptionClick("Buy")}
                >
                  Building
                </div>
                {/* Rent Option */}
                <div
                  className={`cursor-pointer mt-1 flex-1 text-center rounded-full font-Lato font-normal text-[12px] ${
                    activeOption === "Rent" ? "text-white" : "text-black"
                  }`}
                  onClick={() => handleOptionClick("Rent")}
                >
                  Land
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="flex flex-wrap items-center justify-center gap-14">
            {currentPagePosts.map((property) => (
              // <div key={property.propertyId} onClick={() => handleCardClick(property.propertyId)}>
              //     <PropertyCard property={property}/>
              // </div>

              <div key={property.propertyId}>
                <PropertyCard1 property={property} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 absolute left-[709px] bottom-[18px]">
          <button
            className="rounded-full font-semibold text-white bg-[#8947ff] px-3 py-1 disabled:opacity-50"
            onClick={handlePrev}
            disabled={currentPage === 1}
          >
            &#60;
          </button>
          <span className="text-sm font-semibold">
            {currentPage}/{totalPages}
          </span>
          <button
            className="rounded-full font-semibold text-white bg-[#8947ff] px-3 py-1 disabled:opacity-50"
            onClick={handleNext}
            disabled={currentPage === totalPages}
          >
            &#62;
          </button>
        </div>
      </div>
      <div>
        <UnderConstruction />
      </div>
    </>
  );
};
export default ForSelling;
