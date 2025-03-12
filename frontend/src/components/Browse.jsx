import React, { useEffect } from "react";
import Navbar from "./shared/Navbar";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import useGetAllJobs from "@/hooks/useGetAllJobs";
import Footer from "./shared/Footer";

const Browse = () => {
  useGetAllJobs();
  const { allJobs } = useSelector((store) => store.job);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(setSearchedQuery(""));
    };
  }, [dispatch]);

  return (
    <div className="bg-gradient-to-r from-[#DDEFBB] to-[#FFEEEE] min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto my-10 pb-24 px-8 sm:px-12">
        <h1 className="font-bold text-xl sm:text-2xl my-10">
          Search Results ({allJobs.length})
        </h1>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {allJobs.map((job) => {
            return <Job key={job._id} job={job} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Browse;
