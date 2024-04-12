import React from "react";
import PeopleTestimonial from "./PeopleTestimonial";
import TestimonialHeading from "./TestimonialHeading";

export default function Testimonial() {
  return (
    <div className=" w-full h-screen bg-white-A700_30" id="blogs-page">
      <div className="relative top-28">
        <TestimonialHeading />
      </div>
      <div className="relative top-2/3">
        <PeopleTestimonial />
      </div>
    </div>
  );
}
