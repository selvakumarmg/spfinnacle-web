import { Heading, Img } from "components";
import React from "react";

export default function () {
  return (
    <div className="relative h-[200px] w-full md:h-auto">
      <Img
        src="images/img_untitled_design_500x350.png"
        alt="untitleddesign"
        className="m-auto h-[500px] w-full object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full flex-col items-start justify-end bg-gradient1 p-8 sm:p-5">
        <Heading as="h4" className="mb-[18px] mt-[389px] !font-montserrat">
          Personal Loan
        </Heading>
      </div>
    </div>
  );
}
