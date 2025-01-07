import React, { useState } from "react";
import BuyPropertyCard from "./_components/BuyPropertyCard";

const BuyProperties = () => {
  const [selectedOption, setSelectedOption] = useState("Relevance");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const options = [
    { value: "Relevance", label: "Relevance" },
    { value: "PriceHigh", label: "Price High" },
    { value: "PriceLow", label: "Price Low" },
    { value: "LastUpdated", label: "Last Updated" },
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionSelect = (value) => {
    setSelectedOption(value);
    setIsDropdownOpen(false);
  };

  return (
    <div className="mx-[6.25rem] py-32 font-lato">
      <section className="flex justify-between items-center text-sm">
        <div>Home/Chennai/Buy Properties/Flat/Apartment</div>
        <div>Last Updated: Sep 10, 2024</div>
      </section>
      <section className="flex flex-col gap-2 mt-4 py-3 px-5 bg-[#E3CAFF] border rounded-md">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <div className="text-xl">
              132 <span className="text-sm text-[#454545]">Properties</span>
            </div>
            <h2 className="text-2xl font-medium mt-3">
              Buy Properties in Solinganalur Chennai
            </h2>
          </div>
          <div className="flex flex-col">
            <span className="text-[#454545] text-xl mb-2">Sort by:</span>
            <div className="relative">
              <div
                className="p-3 min-w-[10rem] border rounded-md bg-white text-black flex items-center justify-between cursor-pointer"
                onClick={toggleDropdown}
              >
                {options.find((opt) => opt.value === selectedOption)?.label}
                <span className="ml-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-black"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 12a1 1 0 01-.707-.293l-3-3a1 1 0 011.414-1.414L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3A1 1 0 0110 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>{" "}
                {/* Downward arrow */}
              </div>
              {isDropdownOpen && (
                <div className="absolute mt-2 w-full border bg-white shadow-md rounded-md z-10">
                  {options.map((option) => (
                    <div
                      key={option.value}
                      className={`p-3 cursor-pointer ${
                        selectedOption === option.value
                          ? "bg-[#7C11F7] text-white"
                          : "hover:bg-gray-200"
                      }`}
                      onClick={() => handleOptionSelect(option.value)}
                    >
                      {option.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="flex mt-7 gap-7">
        <div>
          <BuyPropertyCard />
          <BuyPropertyCard />
          <BuyPropertyCard />
          <BuyPropertyCard />
          <BuyPropertyCard />
          <BuyPropertyCard />
        </div>
        <div>Filter</div>
      </section>
    </div>
  );
};

export default BuyProperties;
