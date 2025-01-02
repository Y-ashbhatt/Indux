import React, { useContext, useState } from "react";
import PropertyCard2 from "./PropertyCard2.jsx";
import { PropertiesContext } from "../../../context/PropertiesContext.jsx";

const UnderConstruction = () => {
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
    <div className="w-full h-screen py-16 px-16 relative">
      <div className="flex px-10">
        <h1 className="text-3xl font-semibold">UNDER CONSTRUCTION</h1>
      </div>

      <div className="py-12">
        <div className="flex flex-wrap items-center justify-center gap-10">
          {currentPagePosts.map((property) => (
            <div key={property.propertyId}>
              <PropertyCard2 property={property} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 absolute left-[709px] bottom-[125px]">
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
  );
};
export default UnderConstruction;
