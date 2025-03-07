import { Star } from "lucide-react";
import React from "react";
import profile_img_1 from "../assets/profile_img_1.png";
import profile_img_2 from "../assets/profile_img_2.png";
import profile_img_3 from "../assets/profile_img_3.png";

const dummyTestimonial = [
  {
    name: "Donald Jackman",
    role: "SWE 1 @ Amazon",
    image: profile_img_1,
    rating: 5,
    feedback:
      "I had been struggling to find the right job for months, but after using this platform, everything changed. Within weeks, I landed my dream job!",
  },
  {
    name: "Richard Nelson",
    role: "SWE 2 @ Meta",
    image: profile_img_2,
    rating: 4,
    feedback:
      "The application process was incredibly straightforward. The job alerts kept me updated, and the streamlined application process saved me so much time.",
  },
  {
    name: "James Washington",
    role: "SWE 1 @ Google",
    image: profile_img_3,
    rating: 4,
    feedback:
      "Nothing compared to the ease and convenience this platform offers. Within a few weeks, I found the perfect job match!",
  },
];

const Testimonials = () => {
  return (
    <div className="pb-16 px-4 md:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Join <span className="text-blue-700">21Mn+</span> students <br />
        and get started with your <span className="text-blue-700">career</span>
      </h2>
      <p className="text-gray-600 text-center text-sm md:text-lg mt-3">
        Hear from our users as they share their journeys of transformation.
      </p>

      {/* Responsive Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {dummyTestimonial.slice(0, window.innerWidth < 768 ? 1 : 3).map((testimonial, index) => (
          <div key={index} className="border border-gray-300 shadow-md rounded-lg bg-white p-5">
            <div className="flex items-center gap-4">
              <img className="h-12 w-12 rounded-full object-cover" src={testimonial.image} alt={testimonial.name} />
              <div>
                <h1 className="text-lg font-semibold">{testimonial.name}</h1>
                <p className="text-gray-700 text-sm">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-gray-600 mt-3">{testimonial.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
