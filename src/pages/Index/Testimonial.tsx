import React from "react";
import PeopleTestimonial from "./PeopleTestimonial";
import TestimonialHeading from "./TestimonialHeading";

export default function Testimonial() {
  return (
    <div
      className="w-full h-screen bg-white-A700_30 md:h-max md:mt-10 sm:h-[480px] sm:mt-14"
      id="blogs-page"
    >
      <div className="relative top-28 md:top-16 sm:top-8">
        <TestimonialHeading />
      </div>
      <div className="relative top-2/3 sm:top-12">
        <PeopleTestimonial />
      </div>
    </div>
  );
}
