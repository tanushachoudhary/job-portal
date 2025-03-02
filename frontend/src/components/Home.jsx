import React, { useEffect } from "react";
import Navbar from "./shared/Navbar";
import HeroSection from "./HeroSection";
import CategoryCarousel from "./CategoryCarousel";
import LatestJobs from "./LatestJobs";
import Footer from "./shared/Footer";
import useGetAllJobs from "@/hooks/useGetAllJobs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CompanySlider from "./CompanySlider";
import Stats from "./Stats";
import Testimonials from "./Testimonials";

const Home = () => {
  useGetAllJobs();
  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user?.role === "recruiter") {
      navigate("/admin/companies");
    }
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#DDEFBB]  to-[#FFEEEE]">
      <Navbar />
      <HeroSection />
      <CategoryCarousel />
      <LatestJobs />
      <CompanySlider />
      <Stats />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
