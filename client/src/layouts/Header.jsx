import React, {useState} from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import BuyOverlayCard from "../components/BuyOverlayCard";
import RentOverlayCard from "../components/RentOverlayCard";

const Header = () => {

    const [isbuyHovered, setisbuyHovered] = useState(false)
    const [isrentHovered, setisrentHovered] = useState(false)

    return (
        <>
            <header className="relative">
                <div className=" bg-[#B0B0B0]/40 backdrop-blur-sm max-w-[97%] w-full rounded-full border-[0.5px] border-[#B0B0B0]/20 left-[25px]  mx-auto h-[70px] flex justify-between items-center pl-12 absolute z-20 top-5">
                    <figure><img src="/Induxlogowhite.png" alt="" className="h-28" /> </figure>
                    <div className="flex items-center w-[65%] gap-[5%] ">
                        <div className="text-white flex hover:cursor-pointer px-3 py-2 hover:text-[#7c11f7] hover:bg-white rounded-[4px] "
                            onMouseEnter={() => setisbuyHovered(true)}
                            onMouseLeave={() => setisbuyHovered(false)}
                        >Buy {isbuyHovered ? <ExpandLessIcon/> : <ExpandMoreIcon />}  </div>
                        <div className="text-white flex hover:cursor-pointer px-3 py-2 hover:text-[#7c11f7] hover:bg-white rounded-[4px]  "
                        onMouseEnter={() => setisrentHovered(true)}
                        onMouseLeave={() => setisrentHovered(false)}
                        >Rent {isrentHovered ? <ExpandLessIcon/> : <ExpandMoreIcon />}  </div>
                        <div className="text-white flex hover:cursor-pointer ">Articles  </div>
                        <div className="text-white flex hover:cursor-pointer ">Saved </div>
                        <button className="text-[#7c11f7] px-5 py-2 rounded-[4px] border bg-white hover:cursor-pointer ">List Properties</button>
                        <button className="text-white hover:cursor-pointer ">Login</button>
                        <button className="bg-black text-white px-3 py-2 rounded-[4px] hover:cursor-pointer ">Signup</button>
                    </div>
                </div>
            </header>
            { isbuyHovered && (<BuyOverlayCard/>)}
            { isrentHovered && (<RentOverlayCard/>)}
        </>
    )
}


export default Header;
