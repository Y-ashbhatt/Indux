import React from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const Header = () => {


    return (
        <>
            <header className="relative">
                <div className=" bg-[#B0B0B0]/40 backdrop-blur-sm max-w-[97%] w-full rounded-full border-[0.5px] border-[#B0B0B0]/20 left-[25px]  mx-auto h-20 flex justify-between items-center pl-12 absolute z-20 top-5">
                    <figure><img src="/Induxlogowhite.png" alt="" className="h-28" /> </figure>
                    <div className="flex items-center w-[65%] gap-[6%] ">
                        <div className="text-white flex">Buy <ExpandMoreIcon /> </div>
                        <div className="text-white flex">Rent <ExpandMoreIcon /> </div>
                        <div className="text-white flex">Articles  </div>
                        <div className="text-white flex">Saved </div>
                        <button className="text-[#7c11f7] px-5 py-2 rounded-[4px] border bg-white">List Properties</button>
                        <button className="text-white">Login</button>
                        <button className="bg-black text-white px-3 py-2 rounded-[4px]">Signup</button>
                    </div>
                </div>
            </header>
        </>
    )
}


export default Header;
