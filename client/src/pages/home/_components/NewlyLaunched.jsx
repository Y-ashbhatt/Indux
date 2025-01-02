import React, { useContext, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PropertiesContext } from "../../../context/PropertiesContext.jsx";
import PropertyCard from "../../../components/PropertyCard.jsx";

const NewlyLaunched = () => {
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
    <div className="relative">
      <div className="bg-[#e2caff] w-full h-screen py-8 px-16">
        <p className="font-semibold">New launch on every seasons</p>
        <h1 className="text-3xl font-semibold">NEWLY LAUNCHED</h1>

        <div className="py-4 px-28 pb-6 flex flex-wrap gap-8 items-center justify-between mt-8">
          {currentPagePosts.map((item, index) => (
            <div key={index}>
              <PropertyCard property={item} />
            </div>
          ))}
        </div>

        {/*Pagination*/}

        <div className="flex items-center justify-center gap-4 absolute left-[700px] bottom-[25px]">
          <button
            className="rounded-full font-semibold text-xl text-purple-700 bg-gray-200 px-4 py-2 disabled:opacity-50"
            onClick={handlePrev}
            disabled={currentPage === 1}
          >
            &#60;
          </button>
          <span>
            {currentPage}/{totalPages}
          </span>
          <button
            className="rounded-full font-semibold text-xl text-purple-700 bg-gray-200 px-4 py-2 disabled:opacity-50"
            onClick={handleNext}
            disabled={currentPage === totalPages}
          >
            &#62;
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewlyLaunched;
