import React from "react";

const Stats = () => {
  return (
    <div className="flex items-center gap-12 m-32">
      <div>
        <span className="text-blue-700 font-bold text-5xl">300K+</span> <br />{" "}
        <span className="text-2xl">companies hiring</span>
      </div>
      <hr className="transform rotate-90 w-[50px] border-t-2 border-gray-500" />
      <div>
        <span className="text-blue-700 font-bold text-5xl">10K+ </span>
        <br /> <span className="text-2xl">new openings everyday</span>
      </div>
      <hr className="transform rotate-90 w-[50px] border-t-2 border-gray-500" />
      <div>
        <span className="text-blue-700 font-bold text-5xl">21Mn+ </span>
        <br /> <span className="text-2xl">active students</span>
      </div>
      <hr className="transform rotate-90 w-[50px] border-t-2 border-gray-500" />
      <div>
        <span className="text-blue-700 font-bold text-5xl">600K+</span>
        <br /> <span className="text-2xl">learners</span>
      </div>
    </div>
  );
};

export default Stats;
