import React from "react";
import { Card, IconButton } from "@mui/material";
import BedTwoToneIcon from "@mui/icons-material/BedTwoTone";
import BathtubTwoToneIcon from "@mui/icons-material/BathtubTwoTone";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const PropertyCard2 = ({ property }) => {
  return (
    <Card className="w-[300px] h-[330px] relative">
      <div className="h-full border border-black rounded-xl">
        <div className="relative flex justify-center py-3.5">
          <img
            className="w-[265px] h-[200px] rounded-xl object-cover"
            src={property?.image} // Use the current image
            alt=""
          />
        </div>

        <div className="px-5 w-full">
          <div>
            <p className="font-semibold text-md">{property?.name}</p>
            <p className="absolute underline text-purple-500 right-4 top-[230px] text-sm font-medium cursor-pointer">
              view more
            </p>
            <IconButton className="!p-0 !-ml-1 !mt-2">
              <LocationOnOutlinedIcon fontSize="small" />
              <span className="text-[11px]">Mumbai</span>
            </IconButton>
          </div>
          <div className="-ml-2.5 mt-1">
            <IconButton>
              <BedTwoToneIcon fontSize="medium" />
              <span className="text-[13px] mt-1 ml-1 font-semibold">
                {property?.bedrooms}
              </span>
            </IconButton>
            <IconButton className="!ml-3">
              <BathtubTwoToneIcon fontSize="medium" />
              <span className="text-[13px] mt-1 ml-1 font-semibold">
                {property?.bathrooms}
              </span>
            </IconButton>
            <IconButton className="!ml-[65px]">
              <AspectRatioIcon fontSize="medium" />
              <span className="text-[9px] -mb-2 ml-1 font-semibold">
                {property?.squareFeet} sqft
              </span>
            </IconButton>
          </div>
        </div>
      </div>
    </Card>
  );
};
export default PropertyCard2;
