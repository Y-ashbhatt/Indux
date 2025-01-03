import React, { useEffect, useState } from "react";
import { Card, Checkbox, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const PropertyCard = ({ property }) => {
  const [favourite, setFavourite] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleFavourite = () => {
    setFavourite(!favourite);
  };

  // Image slider logic that only works when hovered
  useEffect(() => {
    let imageChangeInterval;

    if (isHovered) {
      imageChangeInterval = setInterval(() => {
        // Update current image index (cycle through images)
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % property.images.length
        );
      }, 2000); // Change image every 3 seconds
    }

    // Cleanup interval when the hover ends
    return () => clearInterval(imageChangeInterval);
  }, [isHovered, property.images.length]);

  return (
    <Card
      className="w-[317px] h-[430px]"
      onMouseEnter={() => setIsHovered(true)} // Start slider on hover
      onMouseLeave={() => setIsHovered(false)} // Stop slider when hover ends
    >
      <div className="bg-[#f3e9ff] w-full h-full relative">
        <div className="relative flex justify-center py-3">
          {/* Dots Indicator */}
          <div className="absolute bottom-6 flex space-x-2">
            {property.images.map((_, index) => (
              <div
                key={index}
                className={`rounded-full transition-all duration-300 ${
                  currentImageIndex === index
                    ? "bg-white w-3 h-3"
                    : "bg-white w-2 h-2 opacity-50"
                }`}
              />
            ))}
          </div>
          {/* Image Carousel */}
          <img
            className="w-[265px] h-[250px] rounded-xl object-cover"
            src={property?.images[currentImageIndex]} // Use the current image
            alt=""
          />

          <div
            className="!absolute !top-2 !right-5 !m-2 hover:bg-gray-300 hover:bg-opacity-50 rounded-full"
            onClick={handleFavourite}
          >
            <IconButton>
              {favourite ? (
                <FavoriteIcon style={{ color: "red" }} />
              ) : (
                <FavoriteIcon />
              )}
            </IconButton>
          </div>
        </div>

        <div className="p-2 px-5 w-full justify-between mt-2">
          <div className="space-y-1">
            <div className=" ml-2 flex gap-4">
              <p className="font-medium text-3xl text-blue-500">₹ 7000</p>
              <p className="font-medium mt-[7px] text-sm">Rent/Month</p>
            </div>

            <div className="flex ml-2 gap-1">
              <p className="font-medium text-sm">{property?.name}, </p>
              <p className="font-medium text-sm">{property?.city}</p>
            </div>
          </div>

          <div className="absolute right-4 bottom-[30px]">
            <button className="bg-[#7c11f7] rounded-full w-[80px] p-0.5 text-white absolute right-2 bottom-3.5">
              Contact
            </button>
          </div>

          <div className="absolute left-4 bottom-[15px] flex">
            <Checkbox color="success" />
            <p className="text-sm font-semibold mt-[11px] -ml-1">Compare</p>
          </div>
        </div>
      </div>
    </Card>
  );
};
export default PropertyCard;
