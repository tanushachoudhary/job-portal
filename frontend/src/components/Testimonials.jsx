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
      "I had been struggling to find the right job for months, but after using this platform, everything changed. The search filters were so specific, making it easy to apply for the jobs that matched my skills and interests. Within weeks, I received multiple interview calls and landed my dream job!",
  },
  {
    name: "Richard Nelson",
    role: "SWE 2 @ Meta",
    image: profile_img_2,
    rating: 4,
    feedback:
      "The application process was incredibly straightforward. I could easily tailor my resume to fit the job descriptions and apply with just a few clicks. The job alerts kept me updated, and the streamlined application process saved me so much time. Highly recommend it!",
  },
  {
    name: "James Washington",
    role: "SWE 1 @ Google",
    image: profile_img_3,
    rating: 4,
    feedback:
      "I used to apply to multiple job portals, but nothing compared to the ease and convenience this platform offers. I was able to filter jobs by location, salary, and company size. Within a few weeks, I found the perfect match!",
  },
];

const Testimonials = () => {
  return (
    <div className="pb-24 px-8 md:px-0">
      <h2 className="text-4xl font-bold text-center">
        Join the pool of <span className="text-blue-700">21Mn+</span> students
        and get started with your <span className="text-blue-700">career</span>
      </h2>
      <p className="md:text-base lg:text-lg text-gray-600 mt-3 text-center">
        Hear from our users as they share their journeys of transformation,
        success, and how our <br />
        platform has made a difference in their lives.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-14 mx-20">
        {dummyTestimonial.map((testimonial, index) => (
          <div
            key={index}
            className={`text-sm text-left border border-gray-500/30 pb-6 rounded-lg bg-white shadow-[0px_4px_15px_0px] shadow-black/5 overflow-hidden transform hover:scale-105 transition-transform duration-300 ${
              index === 2 ? "hidden sm:block" : ""
            }`}
          >
            <div className="flex items-center gap-4 px-5 py-4 bg-blue-100">
              <img
                className="h-12 w-12 rounded-full"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>
                <h1 className="text-lg font-medium text-gray-800">
                  {testimonial.name}
                </h1>
                <p className="text-gray-800/80">{testimonial.role}</p>
              </div>
            </div>
            <div className="p-5 pb-7">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 ${
                      i < Math.floor(testimonial.rating)
                        ? "text-blue-700"
                        : "text-gray-400"
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-500 text-base mt-5">{testimonial.feedback}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
