import React from "react";

const Subscribe = () => {
  return (
    <div className="w-full my-6">
      <div className="flex justify-between flex-col md:flex-row">
        <h1 className="text-[32px] text-darkLightText w-full md:w-1/2 ">
          Sign up and get exclusive special deals
        </h1>
        <div className="w-full md:w-1/2  md:py-2 py-6">
          <div className="relative md:left-20 left-0 w-4/5">
            <input
              type="text"
              className="block p-2.5 w-full z-20 text-sm  bg-white rounded-e-lg  focus:ring-blue-200 focus:border-blue-200"
              required
            />
            <button
              type="submit"
              className="absolute top-0 end-0 h-full p-2.5 text-sm  text-white bg-primary rounded-e-lg border hover:bg-blue-600 duration-200  focus:ring-blue-300  "
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
