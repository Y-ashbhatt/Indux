import React from "react";

const ViewHostel = () => {
  return (
    <>
      <div className="font-lato">
        {/* HOSTEL VIEW MAIN  */}
        <div className="flex items-end justify-evenly m-5">
          <div>
            <p className="text-[30px]">Olive Green Boys PG</p>
            <p className="text-[16px] text-[#454545]">
              No385, 386 Soliganalur,Chennai South | Near by Catholic Church, D
              block
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div>
              <p className="text-[24px] text-[#7C11F7]">
                ₹ 7000/month <span className=" text-black">|</span> ₹ 15,000
                Deposit
              </p>
            </div>
            <button className="py-[10px] px-[30px] rounded-[4px] flex gap-2 items-center text-[#7C11F7] border border-[#7C11F7] ">
              <img className="w-[20px] h-[20px]" src={"/assets/PG/Heart.png"} />
              Save To List
            </button>

            <button className="p-[10px] bg-[#7C11F7] rounded-[4px] text-white">
              Contact Owner
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2">
          <div className="relative">
            <img className="" src={"/assets/PG/image2.png"} />
            <div className="absolute top-6 font-lato rounded-r-[50px] w-[91px] h-[31px] text-center px-[24px] py-[6px] text-white bg-[#7C11F7]">
              Outer
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative">
              <img className="" src={"/assets/PG/image.png"} />
              <div className="absolute top-6 font-lato rounded-r-[50px] w-[134px] h-[31px] text-center px-[24px] py-[6px] text-white bg-[#7C11F7]">
                Virtual Tour
              </div>
            </div>
            <img className="" src={"/assets/PG/image.png"} />
          </div>
        </div>
        {/* END OF HOSTEL VIEW MAIN  */}

        {/* SERVICES */}
        <div className="grid grid-cols-4 justify-items-center gap-4 mt-10 mx-56">
          <div className="border border-black rounded-[10px] w-[200px] h-[100px] flex flex-col justify-evenly px-2">
            <p className="text-[18px]">Sharing Room</p>
            <p className="text-[28px]">Available</p>
          </div>
          <div className="border border-black rounded-[10px] w-[200px] h-[100px] flex flex-col justify-evenly px-2">
            <p className="text-[18px]">Food Service</p>
            <p className="text-[26px]">2 Beds, 3 Beds</p>
          </div>
          <div className="border border-black rounded-[10px] w-[200px] h-[100px] flex flex-col justify-evenly px-2">
            <p className="text-[18px]">Parking</p>
            <p className="text-[28px]">Bike</p>
          </div>
          <div className="border border-black rounded-[10px] w-[200px] h-[100px] flex flex-col justify-evenly px-2">
            <p className="text-[18px]">PG/Hostel For</p>
            <p className="text-[28px]">Boys</p>
          </div>
          <div className="border border-black rounded-[10px] w-[200px] h-[100px] flex flex-col justify-evenly px-2">
            <p className="text-[18px]">Suitable For</p>
            <p className="text-[28px]">Students</p>
          </div>
          <div className="border border-black rounded-[10px] w-[200px] h-[100px] flex flex-col justify-evenly px-2">
            <p className="text-[18px]">Air Conditioned</p>
            <p className="text-[28px]">Yes</p>
          </div>
          <div className="border border-black rounded-[10px] w-[200px] h-[100px] flex flex-col justify-evenly px-2">
            <p className="text-[18px]">Notice Period</p>
            <p className="text-[28px]">1 Month</p>
          </div>
        </div>
        {/* END OF SERVICES */}

        <div className="bg-[#E2CAFF] flex justify-evenly items-center h-[80px] mt-10">
          <p className="text-[28px] text-[#7C11F7] underline">Description</p>
          <p className="text-[28px]">Features</p>
          <p className="text-[28px]">Rules</p>
          <p className="text-[28px]">Reviews</p>
          <p className="text-[28px]">Locality</p>
          <p className="text-[28px]">Transports</p>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center">
          <p className="w-[1240px] text-[28px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </>
  );
};

export default ViewHostel;
