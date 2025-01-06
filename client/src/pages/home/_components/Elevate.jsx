import React from "react";

function Elevate() {
  return (
    //Start of Component
    <div className=" font-lato h-[582px] max-w-[1450px] flex flex-col mx-auto gap-20">
      {/* start of header section in component */}
      <div className="flex flex-col items-center pt-32 gap-2">
        <p className=" text-base font-[400]">ELEVATE YOUR JOURNEY</p>
        <p className="text-3xl font-[700]">Everything Should Be This Easy</p>
      </div>
      {/* end of header section in component */}

      {/* Start of body section */}
      <div className="flex justify-around gap-4 px-10">
        {/* Coloumn 1 */}
        <div className="flex flex-col gap-3">
          <div className="relative flex justify-center items-center">
            <img src={"/assets/Epurple.png"} />
            <img className="absolute" src={"/assets/V4.png"} />
          </div>
          <p className="text-[16px] text-center text-[#7C11F7]  font-[600] leading-[24px]">
            Professional Company
          </p>
          <p className="text-[12px] text-center font-[400] w-[231px]">
            A company is only as strong as its people. Solitude builds strength.
            It's where we become our best company
          </p>
        </div>

        {/* Coloumn 2 */}
        <div className="flex flex-col gap-3 px-2">
          <div className="relative flex justify-center items-center">
            <img src={"/assets/Epurple.png"} />
            <img className="absolute" src={"/assets/V1.png"} />
          </div>
          <p className="text-[16px] text-center text-[#7C11F7]  font-[600] leading-[24px">
            24 Hours Support
          </p>
          <p className="text-[12px] text-center font-[400] w-[231px]">
            Real estate customer service involves assisting clients during
            property transactions to meet their needs and ensure a positive
            experience
          </p>
        </div>

        {/* Coloumn 3 */}
        <div className="flex flex-col gap-3 px-2">
          <div className="relative flex justify-center items-center">
            <img src={"/assets/Epurple.png"} />
            <img className="absolute" src={"/assets/V2.png"} />
          </div>
          <p className="text-[16px] text-center text-[#7C11F7] font-[600] leading-[24px">
            Service in various Country
          </p>
          <p className="text-[12px] text-center font-[400] w-[231px]">
            Top real estate agencies provide services like sales, purchases,
            rentals, property management, and market analysis.
          </p>
        </div>

        {/* Coloumn 4 */}
        <div className="flex flex-col gap-2 px-2">
          <div className="relative flex justify-center items-center">
            <img src={"/assets/Epurple.png"} />
            <img className="absolute" src={"/assets/V3.png"} />
          </div>
          <p className="text-[16px] text-center text-[#7C11F7]  font-[600] leading-[24px]">
            Efficent Process
          </p>
          <p className="text-[12px] text-center font-[400] w-[231px]">
            Real estate processes include lead generation, client onboarding,
            property transactions, and post-sales services, all crucial to
            business success.
          </p>
        </div>
      </div>
      {/* End of body section */}
    </div>
    //End of Component
  );
}

export default Elevate;
