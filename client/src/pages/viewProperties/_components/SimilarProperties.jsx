import React, { useContext, useState } from "react";
import { PropertiesContext } from "../../../context/PropertiesContext";
import PropertyCard from "./PropertyCard.jsx";

const SimilarProperties = () => {
  const { properties } = useContext(PropertiesContext);

  const dummyData = {
    propertyId: 1,
    name: "123 Maple St",
    city: "Springfield",
    state: "Mumbai",
    zipCode: "62701",
    price: 250000,
    bedrooms: 4,
    bathrooms: 3,
    kitchen: 3,
    squareFeet: 1800,
    type: "Single Family",
    status: "For Sale",
    image:
      "https://images.unsplash.com/photo-1542736048-41503156855b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D",
  };

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

  const getSimilarProperties = () => {
    if (!dummyData) return [];

    return properties.filter(
      (property) =>
        (property.propertyId !== dummyData.propertyId &&
          property.bedrooms === dummyData.bedrooms) ||
        property.bathrooms === dummyData.bathrooms ||
        property.kitchen === dummyData.kitchen
    );
  };

  const similarProperties = getSimilarProperties();

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;
  const totalPosts = similarProperties.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const currentPagePosts = similarProperties.slice(
    firstPostIndex,
    lastPostIndex
  );

  return (
    <div>
      <h1 className="font-semibold text-2xl mb-5 p-2 px-[125px]">
        Similar Properties
      </h1>

      <div className="flex flex-wrap items-center justify-center gap-10">
        {currentPagePosts.map((property) => (
          <PropertyCard key={property.propertyId} property={property} />
        ))}
      </div>

      <div className="flex items-center justify-center gap-4 absolute left-[700px] bottom-[25px]">
        <button
          className="rounded-full font-semibold text-white text-xl bg-[#8947ff] px-4 py-2 disabled:opacity-50"
          onClick={handlePrev}
          disabled={currentPage === 1}
        >
          &#60;
        </button>
        <span>
          {currentPage}/{totalPages}
        </span>
        <button
          className="rounded-full font-semibold text-white text-xl bg-[#8947ff] px-4 py-2 disabled:opacity-50"
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          &#62;
        </button>
      </div>
    </div>
  );
};
export default SimilarProperties;
