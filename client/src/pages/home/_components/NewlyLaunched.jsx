import React, { useContext, useState } from "react";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

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
      <div className="bg-[#e2caff] w-full h-full py-9 px-16">
        <p className="font-semibold">New launch on every seasons</p>
        <h1 className="text-3xl font-semibold">NEWLY LAUNCHED</h1>

        <div className="ml-10 py-4 px-10  flex flex-wrap justify-evenly items-center h-fit gap-4  mt-8">
          {currentPagePosts.map((item, index) => (
            <div key={index}>
              <PropertyCard property={item} />
            </div>
          ))}
        </div>

        {/*Pagination*/}

        <div className="flex items-center justify-center my-7 gap-4 ">
          <button
            className="rounded-full font-semibold text-xl text-purple-700 bg-gray-200  w-[42px] h-[42px]  disabled:opacity-50"
            onClick={handlePrev}
            disabled={currentPage === 1}
          >
            <NavigateBeforeIcon/>
          </button>
          <span>
            {currentPage}/{totalPages}
          </span>
          <button
            className="rounded-full font-semibold text-xl text-purple-700 bg-gray-200  w-[42px] h-[42px]  disabled:opacity-50"
            onClick={handleNext}
            disabled={currentPage === totalPages}
          >
            <NavigateNextIcon/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewlyLaunched;
