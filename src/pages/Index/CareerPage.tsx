import React from "react";
import CareerPageHeading from "./CareerPageHeading";
import Careers from "./Careers";

export default function CareerPage() {
  return (
    <div
      id="career-page"
      className="w-full h-screen flex flex-col relative gap-y-10 sm:h-max sm:top-20 md:h-max md:top-80 sm:mb-10"
    >
      <CareerPageHeading />
      <Careers />
    </div>
  );
}
