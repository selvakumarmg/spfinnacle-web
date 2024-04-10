import React from "react";
import AboutPageImage from "./AboutPageImage";
import AboutPageText from "./AboutPageText";

export default function AboutPage() {
  return (
    <div className="w-full h-screen relative">
      <AboutPageImage />
      <AboutPageText />
    </div>
  );
}
