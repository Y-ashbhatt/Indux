import React, { useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import BuyOverlayCard from "../components/BuyOverlayCard";
import RentOverlayCard from "../components/RentOverlayCard";
import HeaderSearchBar from '../components/HeaderSearchBar';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useLocation } from "react-router-dom";



const Header = () => {
    const location = useLocation()
    const [isbuyHovered, setisbuyHovered] = useState(false)
    const [isrentHovered, setisrentHovered] = useState(false)
    const auth = false

    return (
        <>
            <header className="relative">
                {location.pathname === '/' ? (
                    <div className=" bg-[#B0B0B0]/40 backdrop-blur-sm max-w-[97%] w-full rounded-full border-[0.5px] border-[#B0B0B0]/30 left-[25px]  mx-auto h-[70px] flex justify-between items-center px-12 absolute z-20 top-5">
                        <figure><img src="/Induxlogowhite.png" alt="" className="h-28" /> </figure>
                        <div className="flex items-center w-full gap-5 justify-end">
                            <div className="text-white flex hover:cursor-pointer px-3 py-2 hover:text-[#7c11f7] hover:bg-white rounded-[4px] "
                                onMouseEnter={() => setisbuyHovered(true)}
                                onMouseLeave={() => setisbuyHovered(false)}
                            >Buy {isbuyHovered ? <ExpandLessIcon /> : <ExpandMoreIcon />}  </div>
                            <div className="text-white flex hover:cursor-pointer px-3 py-2 hover:text-[#7c11f7] hover:bg-white rounded-[4px]  "
                                onMouseEnter={() => setisrentHovered(true)}
                                onMouseLeave={() => setisrentHovered(false)}
                            >Rent {isrentHovered ? <ExpandLessIcon /> : <ExpandMoreIcon />}  </div>
                            <div className="text-white flex hover:cursor-pointer px-3 py-2 hover:text-[#7c11f7] hover:bg-white rounded-[4px] ">Articles  </div>
                            <div className="text-white flex hover:cursor-pointer px-3 py-2 hover:text-[#7c11f7] hover:bg-white rounded-[4px] ">Saved </div>
                            <button className="text-[#7c11f7] px-5 py-2 rounded-[4px] w-[200px] border bg-white hover:cursor-pointer ">List Properties</button>
                            {!auth ? (
                                <>
                                    <button className="text-white hover:cursor-pointer px-3 py-2 hover:text-[#7c11f7] hover:bg-white rounded-[4px] ">Login</button>
                                    <button className="bg-black text-white px-3 py-2 rounded-[4px] hover:cursor-pointer ">Signup</button>
                                </>
                            ) : (
                                <div>
                                    {/* Account logo (or icon) */}
                                    <AccountCircleOutlinedIcon style={{ fontSize: '30px', color:'white' }} />
                                </div>
                            )}
                            {/* <div className=" p-0 rounded-full text-[#7c11f7] border-[2px] border-[#7c11f7]">
                                <MoreVertIcon />
                            </div> */}


                        </div>
                    </div>
                ) : (
                    <div
                        className=" bg-white max-w-[97%] w-full rounded-full border-[3px] border-gray-300 left-[25px] mx-auto h-[70px] flex justify-between items-center px-12 absolute z-20 top-5"  >
                        <figure><img src="/Induxlogopurple.png" alt="" className="h-28" /></figure>
                        <div className="flex items-center justify-end w-full gap-[5%] ">
                            <HeaderSearchBar />
                            <button
                                className="text-white px-5 py-2 h-10 w-[200px] rounded-[4px] border bg-[#7c11f7] " >
                                List Properties
                            </button>
                            {/* Conditionally render Login/Signup or Account Logo based on auth */}
                            {!auth ? (
                                <>
                                    <button className=" hover:cursor-pointer text-[#7c11f7] " >Login</button>
                                    <button className="bg-black text-white px-3 py-2 rounded-[4px] hover:cursor-pointer"  > Signup </button>
                                </>
                            ) : (
                                <div className="  ">
                                    {/* Account logo (or icon) */}
                                    <AccountCircleOutlinedIcon style={{ fontSize: '30px' }} />
                                </div>
                            )}
                            <div className=" p-0 rounded-full text-[#7c11f7] border-[2px] border-[#7c11f7]">
                                <MoreVertIcon />
                            </div>
                        </div>
                    </div>
                )}
            </header>
            {isbuyHovered && (<BuyOverlayCard />)}
            {isrentHovered && (<RentOverlayCard />)}
        </>
    )
}


export default Header;
