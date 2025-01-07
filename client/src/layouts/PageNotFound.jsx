import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-white text-white">
      <h1 className="text-9xl font-bold text-[#7C11F7]">404</h1>
      <p className="text-2xl mt-4 text-gray-500 ">Oops! Page Not Found</p>
      <p className="text-black mt-2 text-center">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-2 bg-[#7C11F7] text-white font-semibold rounded-full hover:bg-white hover:text-[#7C11F7] transition duration-300"
      >
        Go To Home
      </Link>
    </div>
  );
};

export default PageNotFound;
