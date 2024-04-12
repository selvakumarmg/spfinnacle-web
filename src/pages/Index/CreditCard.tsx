import { Heading, Img } from "components";
import React from "react";

export default function CreditCard() {
  return (
    <div className="relative h-[300px] w-[30%] bg-blue_gray-100_01 md:mb-0">
      <Img
        src="images/img_untitled_design_502x364.png"
        alt="untitleddesign"
        className="m-auto h-[300px] w-full object-cover"
      />
      <div className="absolute left-0 right-0 top-0 m-auto bg-gradient1 flex h-[300px] w-full flex-col items-start justify-end p-8 sm:p-5">
        <Heading as="h4" className="mb-[18px] mt-[300px] !font-montserrat">
          Credit Card
        </Heading>
      </div>
    </div>
  );
}
