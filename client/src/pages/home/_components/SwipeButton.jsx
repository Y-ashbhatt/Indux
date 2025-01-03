import React, { useState } from "react";

const SwipeButton = () => {
    const [isRight, setIsRight] = useState(false); // Track the active state

    const toggle = () => setIsRight(!isRight);

    return (
        <div className="relative z-20 top-[180px] max-w-[600px] flex justify-end mx-auto">
        <div 
            className="relative w-40 h-10 bg-white rounded-full shadow-md flex items-center p-1 cursor-pointer z-20" 
            onClick={toggle}
        >
            {/* Sliding Active Part */}
            <div
                className={`absolute top-1 left-1 h-8 w-[45%] rounded-full transition-all duration-300 ${
                    isRight ? "translate-x-full bg-[#7C11F7]" : "bg-[#7C11F7]"
                }`}
            ></div>

            {/* Text Options */}
            <div className="flex justify-around w-full z-10">
                <span className={`text-sm font-semibold  ${!isRight ? "text-white" : "text-gray-500"}`}>Buy</span>
                <span className={`text-sm font-semibold ${isRight ? "text-white" : "text-gray-500"}`}>Rent</span>
            </div>
        </div>
        </div>
    );
};

export default SwipeButton;
