import { Heading } from "components";
import React from "react";

export default function WhatWeOffering() {
  return (
    <div className="relative w-full h-[20%] bg-slate-700 flex items-center">
      <div className="w-[80%] h-[100%] flex justify-center flex-col">
        <Heading as="h4" className="flex-1 !text-pink-A400">
          What We’re Offering
        </Heading>
        <Heading as="h4" className="flex-1">
          Select from a diverse array of financial options available
        </Heading>
      </div>
      {/*<div className="absolute bottom-0 left-[6%] top-0 my-auto h-[152px] w-[48%]">className="absolute  left-[4.35px] m-auto text-center !text-pink-A400"
         <div className="absolute left-[0.00px] top-[0.00px] m-auto h-[144px] w-[64%] md:h-auto">className="absolute top-[30%] left-[4.35px]  m-auto w-max !text-gray-700_01"
          {/* <Text
            size="5xl"
            as="p"
            className="bg-gradient bg-clip-text uppercase !text-transparent"
          >
            Services
          </Text> 
        </div> 
      </div>*/}
    </div>
  );
}
