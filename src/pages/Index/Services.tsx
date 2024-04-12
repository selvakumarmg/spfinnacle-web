import React from "react";
import ServicesKnowMoreButton from "./ServicesKnowMoreButton";
import ServicesOffered from "./ServicesOffered";
import WhatWeOffering from "./WhatWeOffereing";

export default function Services() {
  return (
    <div className="relative w-full h-screen" id="services-page">
      <WhatWeOffering />
      <ServicesOffered />
      <ServicesKnowMoreButton />
    </div>
  );
}
