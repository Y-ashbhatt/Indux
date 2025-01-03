import React, { useEffect, useState } from "react";
import { Card, IconButton } from "@mui/material";
import BedTwoToneIcon from "@mui/icons-material/BedTwoTone";
import BathtubTwoToneIcon from "@mui/icons-material/BathtubTwoTone";
import FoodBankIcon from "@mui/icons-material/FoodBank";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import GarageIcon from "@mui/icons-material/Garage";

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
      className="w-[290px] h-[543px]"
      onMouseEnter={() => setIsHovered(true)} // Start slider on hover
      onMouseLeave={() => setIsHovered(false)} // Stop slider when hover ends
    >
      <div className="bg-[#f3e9ff] w-full h-full">
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
            className="w-[255px] h-[230px] rounded-xl object-cover"
            src={property?.images[currentImageIndex]} // Use the current image
            alt=""
          />

          <div
            className="!absolute !top-2 !right-2 !m-2 hover:bg-gray-300 hover:bg-opacity-50 rounded-full"
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

        <div className="p-2 px-5 w-full justify-between relative">
          <div className="space-y-1">
            <p className="font-semibold text-xl">{property?.name}</p>
            <p className="text-gray-500 text-[12px]">{property?.city}</p>
            <p className="font-semibold !mt-4">{property?.type}</p>
          </div>
          <div className="-ml-2.5">
            <IconButton>
              <BedTwoToneIcon />
              <span className="text-[10px] mt-1 font-semibold">
                {property?.bedrooms}
              </span>
            </IconButton>
            <IconButton>
              <BathtubTwoToneIcon />
              <span className="text-[10px] mt-1 font-semibold">
                {property?.bathrooms}
              </span>
            </IconButton>
            <IconButton>
              <FoodBankIcon />
              <span className="text-[10px] mt-1 font-semibold">
                {property?.kitchen}
              </span>
            </IconButton>
          </div>
          <div className="bg-[#7c11f7] rounded-xl px-3 w-fit mt-1">
            <p className="font-semibold text-lg text-white">
              ₹ {property?.minPrice} - {property.maxPrice} L
            </p>
          </div>
          <div>
            <p className="font-semibold mt-2">{property?.status}</p>
          </div>
          <div className="-ml-2.5">
            <IconButton>
              <AspectRatioIcon />
              <span className="text-[10px] -mb-2 font-semibold">
                {property?.squareFeet} sqft
              </span>
              <p className="text-[21px] absolute left-[82px]">|</p>
            </IconButton>
            <IconButton>
              <GarageIcon />
              <span className="text-[10px] -mb-2 font-semibold">400 sqft</span>
            </IconButton>

            <button className="bg-[#7c11f7] rounded-full w-[80px] p-0.5 text-white absolute right-2 bottom-3.5">
              Contact
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};
export default PropertyCard;
