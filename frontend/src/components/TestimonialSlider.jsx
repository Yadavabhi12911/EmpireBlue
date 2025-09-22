// TestimonialSlider.jsx
import React, { useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ScrollEffect from './ScrollEffect'
import Stats from "./Stats";

const testimonials = [
  {
    name: "Amit Singh",
    role: "Fitness Trainer",
    location: "Pune",
    text: "Since switching to Newtro-X, my energy levels have improved significantly. The mineral content is perfect for post-workout hydration. My gym members love it!",
  },
  {
    name: "Neha Sharma",
    role: "Yoga Instructor",
    location: "Delhi",
    text: "Hydration has never been this good! Newtro-X keeps me refreshed and helps my students maintain energy throughout sessions.",
  },
  {
    name: "Rahul Verma",
    role: "Athlete",
    location: "Mumbai",
    text: "Perfect balance of taste and energy! It’s now my go-to drink before and after workouts.",
  },
  {
    name: "Priya Patel",
    role: "Nutritionist",
    location: "Ahmedabad",
    text: "I always recommend Newtro-X to my clients for proper hydration. It supports recovery really well.",
  },
  {
    name: "Karan Mehta",
    role: "Football Coach",
    location: "Bangalore",
    text: "My team loves it! The hydration support keeps players active for longer. Highly recommended.",
  },
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <ScrollEffect>
    <section className="bg-[#f3f9ff] py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-7 mt-10 text-[#03009b]">
          What Our{" "}
          <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
            Customers
          </span>{" "}
          Say
        </h2>
        <p className="text-gray-600 mb-10 font-[font1] text-lg ml-[11%] w-[80%]">
          Don't just take our word for it. Here's what our valued customers have
          to say about their experience with Newtro-X.
        </p>

        <div className="relative bg-gray-200 rounded-2xl shadow-md p-6 sm:p-10">
          {/* Stars */}
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400 text-xl" />
            ))}
          </div>

          {/* Testimonial Text */}
          <p className="italic text-gray-700 mb-6 max-w-2xl mx-auto">
            "{testimonials[current].text}"
          </p>

          {/* Avatar Circle */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#03009b] text-white font-bold mb-3">
              {testimonials[current].name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <h4 className="font-semibold text-lg">
              {testimonials[current].name}
            </h4>
            <p className="text-gray-600">{testimonials[current].role}</p>
            <p className="text-gray-500 text-sm">
              {testimonials[current].location}
            </p>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-gray-100"
          >
            <FaChevronLeft className="text-[#03009b]" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-gray-100"
          >
            <FaChevronRight className="text-[#03009b]" />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full ${
                  current === index ? "bg-[#03009b]" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <div>
        <Stats/>
      </div>
    </section>
    </ScrollEffect>
  );
};

export default TestimonialSlider;