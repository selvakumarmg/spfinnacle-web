import { Button } from "components";
import React from "react";

export default function ProductDetail() {
  return (
    <div className="w-[50%] h-full flex flex-col gap-y-8 p-20 justify-center md:w-[80%] md:items-center md:p-10 sm:items-center sm:w-[80%] sm:p-5">
      <h1 className="font-semibold text-[40px] sm:text-xl text-[#E80D55]">
        View Our Product
      </h1>
      <p className="font-normal text-xl sm:text-base text-[#353535] md:text-center">
        We make it easy for you to secure the ideal loan from India's premier
        lenders effortlessly.
      </p>
      <Button className="w-48 h-14 sm:w-36 sm:h-10 sm:text-lg rounded-md hover:bg-[hsl(340,89%,58%)] text-[#FFFFFF] font-medium text-2xl">
        Join Us
      </Button>
    </div>
  );
}
