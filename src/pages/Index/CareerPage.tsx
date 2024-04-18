import React from "react";
import CareerPageHeading from "./CareerPageHeading";
import Careers from "./Careers";

export default function CareerPage() {
  return (
    <div
      id="career-page"
      className="w-full h-screen flex flex-col gap-y-10 sm:relative sm:h-min sm:top-20"
    >
      <CareerPageHeading />
      <Careers />
    </div>
  );
}
