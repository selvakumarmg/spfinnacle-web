import React from "react";
import AboutPageImage from "./AboutPageImage";
import AboutPageText from "./AboutPageText";

export default function AboutPage() {
  return (
    <div className="sm:h-min sm:pt-10 w-full h-screen justify-center items-center flex md:flex-col sm:flex-col sm:gap-y-5 md:h-max relative">
      <AboutPageImage />
      <AboutPageText />
    </div>
  );
}
