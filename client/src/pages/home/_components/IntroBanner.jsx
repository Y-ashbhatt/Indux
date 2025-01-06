import React from "react";
import SearchBox from "./SearchBox";
import SwipeButton from "./SwipeButton";


const IntroBanner = () => {

return(
    <>
    <section  className="bg-[url('/homebg.png')] bg-cover bg-center h-screen w-full">
    <div className="absolute z-10 inset-0 bg-black/20 max-w-[1450px] block mx-auto"></div>
    <h1 className="relative z-20 max-w-[790px] text-white top-[140px] block mx-auto text-center h-52 text-[80px] leading-[100px] ">Let Our Family Bring Your Home</h1>
    <SwipeButton/>
    <SearchBox/>
    </section>
    </>
)
}

export default IntroBanner;