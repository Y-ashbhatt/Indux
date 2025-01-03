import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="h-[610px] mt-[50px] mb-[50px] flex items-center justify-center gap-10">
      <motion.div
        initial={{ y: 80, opacity: 0, z: 10 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true, amount: 0.9 }}
        className="flex"
      >
        <div className="flex flex-col">
          <img className="h-[150px] w-[250px] my-3 mx-2" src="/assets/E1.png" />
          <img
            className="h-[350px] w-[250px]  my-3 mx-2"
            src="/assets/E2.png"
          />
        </div>
        <div>
          <img
            className="h-[350px] w-[250px]  my-3 mx-2"
            src="/assets/E3.png"
          />
          <p className="text-[80px] text-[#7C11F7] font-[700] text-center">
            00+
          </p>
          <p className="text-[30px]  text-[#7C11F7] font-[600] text-center mt-0 pt-0">
            Over Experience
          </p>
        </div>
        <div className="w-[443px] ml-10 ">
          <p className="text-[18px]">DREAM HOME PROCESS</p>
          <p className="text-[35px] font-[700]">
            Our Work Process Make Your Dream True
          </p>

          <div className="flex mx-3 my-5 items-start">
            <div className="relative flex flex-col justify-center mr-4 w-[50px]">
              <img className=" p-3" src="/assets/house.png" />
              <img
                className="absolute h-[50px] w-[50px]"
                src="/assets/Rectangle.png"
              />
            </div>
            <div className="w-[264px]">
              <p className="text[18px] font-bold">Perfection In every Inch</p>
              <p className="text-[12px] text-left">
                Every inch of her bedroom wall is covered with photos of pop
                stars. Somewhere, anywhere, nowhere, or everywhere. across. all
                over.
              </p>
            </div>
          </div>
          <div className="flex mx-3 my-5 items-start">
            <div className="relative flex flex-col justify-center mr-4 w-[50px]">
              <img className=" p-3" src="/assets/house.png" />
              <img
                className="absolute h-[50px] w-[50px]"
                src="/assets/Rectangle.png"
              />
            </div>
            <div className="w-[264px]">
              <p className="text[18px] font-bold">Simple Ideas & Design</p>
              <p className="text-[12px] text-left">
                Home decoration, interior décor encompasses items and you
                guessed it, decorations, that make your home look nice.
              </p>
            </div>
          </div>
          <div className="flex mx-3 my-5 items-start">
            <div className="relative flex flex-col justify-center mr-4 w-[50px]">
              <img className=" p-3" src="/assets/house.png" />
              <img
                className="absolute h-[50px] w-[50px]"
                src="/assets/Rectangle.png"
              />
            </div>
            <div className="w-[264px]">
              <p className="text[18px] font-bold">Comfortable Support</p>
              <p className="text-[12px] text-left">
                The indoor climate, indoor environmental quality (IEQ), safety,
                decor, and manageable long-term costs can help create a
                comfortable, relaxing home.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
