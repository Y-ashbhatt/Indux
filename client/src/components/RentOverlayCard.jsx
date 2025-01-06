import React from 'react';

const RentOverlayCard = () => {
  return (
    <div className="fixed top-[100px] left-96  right-0 bottom-0 bg-black/40 backdrop-blur-sm w-fit h-fit z-30 flex justify-center items-center rounded-[10px] transition-all duration-1000  ">
      <div className="flex w-[620px] justify-evenly bg-white mx-auto bg-opacity-20 backdrop-blur-lg rounded-lg p-4">
        <div className="flex-1 w-fit ">
          <div className="bg-white px-6 py-2 text-left mb-4 rounded-[6px] w-fit  ">
            <h5 className="text-[#7c11f7]">Top Cities To Rent A Property</h5>
          </div>
          <ul className="text-white">
            <li className="py-2 text-sm px-6">Buy Properties in Noida</li>
            <li className="py-2 text-sm px-6">Buy Properties in Kolkata</li>
            <li className="py-2 text-sm px-6">Buy Properties in Mumbai</li>
            <li className="py-2 text-sm px-6">Buy Properties in Chennai</li>
            <li className="py-2 text-sm px-6">Buy Properties in Ahmedabad</li>
          </ul>
        </div>
        <div className="flex-1 w-fit ">
        <div className="bg-white px-6 py-2 text-left mb-4 rounded-[6px]  w-fit  ">
            <h5 className="text-[#7c11f7]">Top Categories To Rent A Property</h5>
          </div>
          <ul className="text-white">
            <li className="py-2 text-sm px-6">Flat/Apartment</li>
            <li className="py-2 text-sm px-6">Independent Villa</li>
            <li className="py-2 text-sm px-6">Commercial Building</li>
            <li className="py-2 text-sm px-6">Residential Land</li>
            <li className="py-2 text-sm px-6">Farm Land</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RentOverlayCard;
