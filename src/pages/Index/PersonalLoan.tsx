import { Img } from "components";
import React from "react";

export default function PersonalLoan() {
  return (
    <div className="relative h-[300px] md:h-[200px] w-[30%] sm:w-[100px] bg-blue_gray-100_01 md:mb-0 sm:h-[150px] col-start-2">
      <Img
        src="images/img_untitled_design_500x350.png"
        alt="untitleddesign"
        className=" m-auto h-[300px] sm:h-[150px] md:h-[200px] w-full object-cover"
      />
      <div className="absolute left-0 right-0 top-0 m-auto flex h-[300px] md:h-[200px] sm:h-[150px] w-full flex-col items-start justify-end p-[31px] bg-gradient1 sm:p-5 hover:cursor-pointer">
        <h4 className="mb-[18px] mt-[300px] md:mb-0 text-[#FFFFFF] font-semibold text-2xl md:text-lg sm:text-base sm:mb-1 font-montserrat">
          Personal Loan
        </h4>
      </div>
    </div>
  );
}
