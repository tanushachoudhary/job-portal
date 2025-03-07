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
      className="flex flex-col items-center text-center py-16 md:py-24 bg-cover bg-center min-h-screen px-4"
      style={{ backgroundImage: `url(${img1})` }}
    >
      <div className="flex flex-col gap-5 bg-white bg-opacity-30 p-6 md:p-10 rounded-2xl w-full max-w-2xl">
        <span className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-black font-medium text-sm md:text-base">
          No. 1 Job Search Website
        </span>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Find Your <br />
          <span className="text-blue-700">Dream Job</span> Today
        </h1>
        <p className="text-base md:text-lg">
          Explore Top Opportunities, Apply with Ease, and Get Hired Faster!
        </p>
        <div className="flex w-full max-w-lg shadow-lg border border-gray-200 px-2 py-1 rounded-full items-center gap-2 mx-auto">
          <input
            type="text"
            placeholder="Find your dream jobs"
            onChange={(e) => setQuery(e.target.value)}
            className="outline-none border-none w-full rounded-lg px-2 text-sm md:text-lg"
          />
          <Button
            onClick={searchJobHandler}
            className="rounded-r-full bg-blue-700 p-2 md:p-3"
          >
            <Search className="h-5 w-5 md:h-6 md:w-6" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
