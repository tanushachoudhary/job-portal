import React, { useEffect, useState } from "react";
import Navbar from "./shared/Navbar";
import FilterCard from "./FilterCard";
import Job from "./Job";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Footer from "./shared/Footer";

const Jobs = () => {
  const { allJobs, searchedQuery } = useSelector((store) => store.job);
  const [filterJobs, setFilterJobs] = useState(allJobs);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    if (searchedQuery) {
      const filteredJobs = allJobs.filter((job) => {
        return (
          job.title.toLowerCase().includes(searchedQuery.toLowerCase()) ||
          job.description.toLowerCase().includes(searchedQuery.toLowerCase()) ||
          job.location.toLowerCase().includes(searchedQuery.toLowerCase())
        );
      });
      setFilterJobs(filteredJobs);
    } else {
      setFilterJobs(allJobs);
    }
  }, [allJobs, searchedQuery]);

  return (
    <div className="bg-gradient-to-r from-[#DDEFBB] to-[#FFEEEE] min-h-screen">
      <Navbar />
      <div className="max-w-8xl mx-auto mt-8 pb-24 px-5 sm:px-12">
        {/* Hamburger Icon for Small Screens */}
        <div className="md:hidden flex justify-between items-center mb-3 px-5">
          <button
            className="p-2 bg-blue-600 text-white rounded-md"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            {isFilterOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Top Sliding Filter Sidebar */}
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={isFilterOpen ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`absolute top-0 left-0 w-3/5 ml-10 mt-36 bg-white shadow-md p-5 z-50 
                     ${isFilterOpen ? "block" : "hidden"} md:hidden`}
        >
          <FilterCard />
        </motion.div>

        <div className="flex flex-col md:flex-row gap-5">
          {/* Sidebar for Larger Screens */}
          <div className="hidden md:block md:w-1/6">
            <FilterCard />
          </div>

          {/* Job Listings */}
          <div className="flex-1 h-[88vh] overflow-y-auto px-5 pb-5">
            {filterJobs.length <= 0 ? (
              <span className="block text-center text-lg font-semibold">
                Job not found
              </span>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filterJobs.map((job) => (
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.4 }}
                    key={job?._id}
                  >
                    <Job job={job} />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Jobs;
