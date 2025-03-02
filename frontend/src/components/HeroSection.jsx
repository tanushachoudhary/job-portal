import React, { useState } from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/img1.jpg";

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <div
      className="flex flex-col items-center text-center py-20 bg-cover bg-center -mt-16 min-h-dvh"
      style={{ backgroundImage: `url(${img1})` }}
    >
      <div className="flex flex-col gap-5 my-10 bg-white bg-opacity-30 p-10 rounded-2xl w-1/2 ">
        <span className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#000000] font-medium">
          No. 1 Job Search Website
        </span>
        <h1 className="text-5xl font-bold">
          Find Your <br />
          <span className="text-blue-700">Dream Job </span>Today
        </h1>
        <p className="text-lg">
          Explore Top Opportunities, Apply with Ease, and Get Hired Faster!
        </p>
        <div className="flex w-[40%] shadow-lg border border-gray-200 pl-2 rounded-full items-center gap-4 mx-auto">
          <input
            type="text"
            placeholder="Find your dream jobs"
            onChange={(e) => setQuery(e.target.value)}
            className="outline-none border-none w-full rounded-lg  px-1 text-lg"
          />
          <Button
            onClick={searchJobHandler}
            className="rounded-r-full bg-blue-700"
          >
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
 