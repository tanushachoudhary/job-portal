import React from "react";

const Stats = () => {
  return (
    <div className="flex flex-wrap justify-center text-center items-center gap-12 px-4 py-20">
      <div className="w-1/2 md:w-auto">
        <span className="text-blue-700 font-bold text-4xl md:text-5xl">300K+</span>
        <br />
        <span className="text-lg md:text-2xl">companies hiring</span>
      </div>
      <hr className="hidden md:block transform rotate-90 w-[50px] border-t-2 border-gray-500" />
      <div className="w-1/2 md:w-auto">
        <span className="text-blue-700 font-bold text-4xl md:text-5xl">10K+</span>
        <br />
        <span className="text-lg md:text-2xl">new openings every day</span>
      </div>
      <hr className="hidden md:block transform rotate-90 w-[50px] border-t-2 border-gray-500" />
      <div className="w-1/2 md:w-auto">
        <span className="text-blue-700 font-bold text-4xl md:text-5xl">21Mn+</span>
        <br />
        <span className="text-lg md:text-2xl">active students</span>
      </div>
    </div>
  );
};

export default Stats;
