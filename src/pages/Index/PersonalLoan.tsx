import { Img } from "components";
import React from "react";

export default function PersonalLoan() {
  return (
    <div className="relative h-[300px] w-[30%] bg-blue_gray-100_01 md:mb-0">
      <Img
        src="images/img_untitled_design_500x350.png"
        alt="untitleddesign"
        className="m-auto h-[300px] w-full object-cover"
      />
      <div className="absolute left-0 right-0 top-0 m-auto flex bg-gradient1 h-[300px] w-full flex-col items-start justify-end p-8 sm:p-5 hover:cursor-pointer">
        <h4 className="mb-[18px] mt-[300px] text-[#FFFFFF] font-semibold text-2xl font-montserrat">
          Personal Loan
        </h4>
      </div>
    </div>
  );
}
