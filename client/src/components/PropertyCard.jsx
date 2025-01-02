import React from "react";
import { Card, IconButton } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const PropertyCard = ({ property }) => {
  return (
    <Card className="!bg-[#f3e9ff] h-[220px] w-[560px] text-black !rounded-lg flex">
      <div className="p-3">
        <img className="h-48 w-52 rounded-lg" src={property.image} alt="" />
      </div>

      <div className="p-3 py-6">
        <h1 className="text-2xl font-semibold">{property.name}</h1>
        <div className="flex mt-2 -ml-1">
          <IconButton className="!p-0">
            <LocationOnOutlinedIcon />
          </IconButton>
          <p className="text-sm mt-0.5">
            {property.city}, {property.state}
          </p>
        </div>
        <div className="mt-2 flex gap-1">
          <p className="text-sm mt-0.5">2 & 3 BHK Apartments |</p>
          <p className="text-sm mt-0.5">{property.squareFeet} Sq.Ft</p>
        </div>
        <p className="font-semibold mt-2 text-xl">
          ₹ {property.minPrice} - {property.maxPrice} L
        </p>
        <p className="text-sm mt-4">
          Possession From: {property.possessionFrom}
        </p>
      </div>
    </Card>
  );
};
export default PropertyCard;
