import React from "react";
import CareerPageHeading from "./CareerPageHeading";
import Careers from "./Careers";

export default function CareerPage() {
  return (
    <div id="career-page" className="w-full h-screen">
      <CareerPageHeading />
      <Careers />
    </div>
  );
}
