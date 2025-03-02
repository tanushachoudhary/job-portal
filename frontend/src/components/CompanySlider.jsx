import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.webp";
import img3 from "../assets/3.webp";
import img4 from "../assets/4.webp";
import img5 from "../assets/5.webp";
import img6 from "../assets/6.webp";
import img7 from "../assets/7.webp";
import img8 from "../assets/8.webp";
import img9 from "../assets/9.webp";
import img10 from "../assets/10.webp";
import img11 from "../assets/11.webp";
import img12 from "../assets/12.webp";
import img13 from "../assets/13.webp";
import img14 from "../assets/14.webp";
import img15 from "../assets/15.webp";
import img16 from "../assets/16.webp";
import img17 from "../assets/17.webp";
import img18 from "../assets/18.webp";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
];

const CompanySlider = () => {
  return (
    <div className="overflow-hidden w-full bg-gradient-to-r from-[#DDEFBB]  to-[#FFEEEE] p-5 my-24">
      <h1 className="text-4xl font-bold text-center">
        <span className="text-blue-700">Top </span> Companies trust us
      </h1>
      <div className="bg-white h-24 w-full">
        <div className="relative mt-8 w-full">
          <motion.div
            className="flex w-max gap-14"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          >
            {images
              .concat(images)
              .concat(images)
              .map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Company Logo ${index}`}
                  className="w-32 h-14 mt-4 object-contain"
                />
              ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CompanySlider;
