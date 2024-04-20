import React from "react";
import ServicesKnowMoreButton from "./ServicesKnowMoreButton";
import ServicesOffered from "./ServicesOffered";
import WhatWeOffering from "./WhatWeOffereing";

export default function Services() {
  return (
    <div
      className="relative w-full h-screen md:h-[500px] sm:h-[480px] md:top-10 sm:top-5 xl:pt-5 pt-5"
      id="services-page"
    >
      <WhatWeOffering />
      <ServicesOffered />
      <ServicesKnowMoreButton />
    </div>
  );
}
