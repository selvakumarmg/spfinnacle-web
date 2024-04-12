import { Heading, Img } from "components";
import React from "react";

export default function HommeLoan() {
  return (
    <div className="mb-0.5 h-[200px] w-full bg-blue_gray-100_01 md:mb-0">
      <Img
        src="images/img_untitled_design_500x352.png"
        alt="untitleddesign"
        className=" m-auto h-[500px] w-full object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full flex-col items-start justify-end bg-gradient1 p-[31px] sm:p-5">
        <Heading as="h4" className="mb-[18px] mt-[390px] !font-montserrat">
          Home Loan
        </Heading>
      </div>
    </div>
  );
}

// absolute bottom-0 left-0 right-0 top-0
