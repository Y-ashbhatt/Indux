import React, { useState } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

const directions = [
  { label: "North", degree: 0 },
  { label: "N.E", degree: 45 },
  { label: "East", degree: 90 },
  { label: "S.E", degree: 135 },
  { label: "South", degree: 180 },
  { label: "S.W", degree: 225 },
  { label: "West", degree: 270 },
  { label: "N.W", degree: 315 },
];

const DirectionClock = () => {
  const [rotation, setRotation] = useState(0);
  const [activeDirection, setActiveDirection] = useState(null);

  const handleClick = (degree, index) => {
    // setActiveDirection(null)
    setRotation(degree);
    setActiveDirection(index);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-violet-200">
      {/* Compass Container */}
      <div className="relative w-80 h-80 bg-white rounded-full flex items-center justify-center shadow-lg">
        {/* Center Logo */}
        <div className="text-[#7c11f7] rounded-full">
          <HomeOutlinedIcon style={{ fontSize: 28 }} />{" "}
          {/* Adjust icon size if needed */}
        </div>

        {/* Needle (Triangle-shaped pointer) */}
        <div
          className="absolute top-[60px] rounded-b border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[100px] border-b-[#7c11f7] origin-bottom transition-transform duration-500 ease-in-out"
          style={{
            transform: `rotate(${rotation}deg)`,
            clipPath: "inset(0 0 20% 0)", // Adjust values to hide the bottom part
          }}
        />

        {/* Compass Directions */}
        {directions.map((direction, index) => (
          <button
            key={index}
            onClick={() => handleClick(direction.degree, index)}
            className="absolute font-semibold"
            style={{
              transform: `rotate(${
                direction.degree + 270
              }deg) translate(120px) rotate(-${direction.degree + 270}deg)`, // Adjust translate distance for larger buttons
              color: activeDirection === index ? "#7c11f7" : "black",
            }}
          >
            {direction.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DirectionClock;
