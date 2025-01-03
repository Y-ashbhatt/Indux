const BuyNow = () => {
  return (
    <div className="h-216 bg-purple-200 flex flex-col pb-10">
      <div className="pl-24 pt-10 pb-16">
        <p className="font-lato text-base">A Solid Foundation of Your Future</p>
        <p className="font-lato text-3xl font-bold">BUY NOW</p>
      </div>

      <div className="flex flex-col gap-12">
        <div className="flex flex-row justify-center gap-10">
          <div className="relative group border-4 rounded-2xl border-white">
            <img
              className="relative  rounded-2xl h-70 w-74 -z-9"
              src="/assets/P5.png"
            />

            <div
              className="absolute w-full h-full z-10  bottom-0 rounded-2xl
             group-hover:shadow-[inset_0px_-82px_36px_-36px_rgba(0,0,0,0.7)] transition-all duration-500 ease-in-out"
            ></div>

            <div
              className="absolute z-10 text-white text-2xl top-48 opacity-0
             p-8 translate-y-full group-hover:translate-y-0
             group-hover:opacity-100         
            transition-all duration-500 ease-in-out"
            >
              Residential Apartment
            </div>
          </div>

          <div className="relative group border-4 rounded-2xl border-white">
            <img
              className="relative rounded-2xl h-70 w-74 -z-9"
              src="/assets/P1.png"
            />
            <div
              className="absolute w-full h-full z-10  bottom-0 rounded-2xl
             group-hover:shadow-[inset_0px_-82px_36px_-36px_rgba(0,0,0,0.7)] transition-all duration-500 ease-in-out"
            ></div>
            <div
              className="absolute z-10 text-white text-2xl top-48 opacity-0
             p-8 translate-y-full group-hover:translate-y-0
             group-hover:opacity-100         
            transition-all duration-500 ease-in-out"
            >
              Independent Villa
            </div>
          </div>
          <div className="relative group border-4 rounded-2xl border-white">
            <img
              className="relative rounded-2xl h-70 w-74 -z-9"
              src="/assets/P2.png"
            />
            <div
              className="absolute w-full h-full z-10  bottom-0 rounded-2xl
             group-hover:shadow-[inset_0px_-82px_36px_-36px_rgba(0,0,0,0.7)] transition-all duration-500 ease-in-out"
            ></div>
            <div
              className="absolute z-10 text-white text-2xl top-48 opacity-0
             p-8 translate-y-full group-hover:translate-y-0
             group-hover:opacity-100         
            transition-all duration-500 ease-in-out"
            >
              Commercial Building
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-center gap-10">
          <div className="relative group border-4 rounded-2xl border-white">
            <img
              className="relative rounded-2xl h-70 w-74 -z-9"
              src="/assets/P3.png"
            />
            <div
              className="absolute w-full h-full z-10  bottom-0 rounded-2xl
             group-hover:shadow-[inset_0px_-82px_36px_-36px_rgba(0,0,0,0.7)] transition-all duration-500 ease-in-out"
            ></div>
            <div
              className="absolute z-10 text-white text-2xl top-48 opacity-0
             p-8 translate-y-full group-hover:translate-y-0
             group-hover:opacity-100         
            transition-all duration-500 ease-in-out"
            >
              Farm Land
            </div>
          </div>
          <div className="relative group border-4 rounded-2xl border-white">
            <img
              className="relative rounded-2xl h-70 w-74 -z-9"
              src="/assets/P4.png"
            />
            <div
              className="absolute w-full h-full z-10  bottom-0 rounded-2xl
             group-hover:shadow-[inset_0px_-82px_36px_-36px_rgba(0,0,0,0.7)] transition-all duration-500 ease-in-out"
            ></div>
            <div
              className="absolute z-10 text-white text-2xl top-48 opacity-0
             p-8 translate-y-full group-hover:translate-y-0
             group-hover:opacity-100         
            transition-all duration-500 ease-in-out"
            >
              Commercial Land
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyNow;
