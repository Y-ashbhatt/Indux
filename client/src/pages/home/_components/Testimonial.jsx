import React from "react";
import { motion } from "framer-motion";

function Testimonial({ animate }) {
  return (
    <div className=" bg-[url('/assets/TBg.png')] bg-cover bg-center h-full w-full flex-flex-col py-16 justify-center items-center">
      {/* <img className=" w-full" src={"/assets/TBg.png"} /> */}
         <p className="w-full text-center font-lato text-4xl text-white font-semibold mb-8">Testimonials</p>
      <div className="  flex flex-col w-full h-full gap-10 justify-center">
        <motion.div
          className="flex justify-center items-center gap-5"
          initial={{ x: -500, opacity: 0 }}
          animate={animate ? { x: 0, opacity: 1 } : {}}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.8,
          }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="flex flex-col gap-2">
            <img
              className="rounded-full w-[140px] h-[140px] border-white border-[4px]"
              src={"/assets/Im1.png"}
            />
            <p className="text-white">Miranda-Mumbai</p>
          </div>
          <div className="relative w-[853px]">
            <img
              className="absolute top-4 w-6 h-6  rotate-180 left-4"
              src={"/assets/quote.png"}
            />
            <img
              className="absolute top-0 w-6 h-6  translate-y-20 right-4"
              src={"/assets/quote.png"}
            />
            <p className="text-white text-wrap text-center m-10 text-[18px] font-[400]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation
            </p>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-row-reverse justify-center items-center gap-5"
          initial={{ x: 500, opacity: 0 }}
          animate={animate ? { x: 0, opacity: 1 } : {}}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.8,
          }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="flex flex-col gap-2">
            <img
              className="rounded-full w-[140px] h-[140px] border-white border-[4px]"
              src={"/assets/Im1.png"}
            />
            <p className="text-white">Miranda-Mumbai</p>
          </div>
          <div className="relative w-[853px]">
            <img
              className="absolute top-4 w-6 h-6 rotate-180 left-4"
              src={"/assets/quote.png"}
            />
            <img
              className="absolute top-0 w-6 h-6  translate-y-20 right-4"
              src={"/assets/quote.png"}
            />
            <p className="text-white text-wrap text-center m-10 text-[18px] font-[400]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center items-center gap-5"
          initial={{ x: -500, opacity: 0 }}
          animate={animate ? { x: 0, opacity: 1 } : {}}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 10,
            delay: 0.8,
          }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="flex flex-col gap-2">
            <img
              className="rounded-full w-[140px] h-[140px] border-white border-[4px]"
              src={"/assets/Im1.png"}
            />
            <p className="text-white">Miranda-Mumbai</p>
          </div>
          <div className="relative mx-6 w-[853px]">
            <img
              className="absolute top-4 w-6 h-6 rotate-180 left-4"
              src={"/assets/quote.png"}
            />
            <img
              className="absolute top-0 w-6 h-6  translate-y-20 right-4"
              src={"/assets/quote.png"}
            />
            <p className="text-white text-wrap text-center m-10 text-[18px] font-[400]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Testimonial;
