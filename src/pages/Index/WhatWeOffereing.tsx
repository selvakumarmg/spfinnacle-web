import { Heading } from "components";
import React from "react";

export default function WhatWeOffering() {
  return (
    <div className="absolute w-full left-20  flex items-center top-10 m-0">
      <div className=" flex justify-center flex-col">
        <Heading as="h4" className="flex-1 !text-pink-A400 absolute top-0">
          What We’re Offering
        </Heading>
        <Heading as="h4" className="flex-1 absolute text-[#555555] top-12">
          Select from a diverse array of financial options available
        </Heading>
      </div>
    </div>
  );
}
