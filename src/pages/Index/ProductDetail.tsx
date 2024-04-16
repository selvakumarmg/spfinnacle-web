import { Button, Text } from "components";
import React from "react";

export default function ProductDetail() {
  return (
    <div className="w-[50%] h-full flex flex-col gap-y-8 p-20 justify-center">
      <Text as="h1" className="!font-semibold !text-[40px] text-[#E80D55]">
        View Our Product
      </Text>
      <Text as="p" className="!font-normal !text-xl text-[#353535]">
        We make it easy for you to secure the ideal loan from India's premier
        lenders effortlessly.
      </Text>
      <Button className="w-48 h-14 rounded-md hover:bg-[hsl(340,89%,58%)] text-[#FFFFFF] font-medium text-2xl">
        Join Us
      </Button>
    </div>
  );
}
