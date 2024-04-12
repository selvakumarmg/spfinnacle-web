import { Heading, Img } from "components";
import React from "react";

export default function TrustedBanks() {
  return (
    <div className="flex items-center justify-between  md:flex-col">
      <div className="flex w-[90%] flex-col items-start gap-[29px] ml-20 md:w-full md:p-5">
        <Heading as="h1" className="!font-montserrat !text-black-900">
          <span className="text-black-900">
            The best offers from India’s most
          </span>
          <span className="text-pink-A400">&nbsp;trusted banks</span>
        </Heading>
        <div className="flex gap-[30px] self-stretch md:flex-col">
          <div className="flex w-full rounded border border-solid border-gray-400 bg-white-A700 p-[13px]">
            <Img
              src="images/img_image_1.png"
              alt="imageone_one"
              className="mb-3 mt-[11px] h-[94px] w-full object-cover md:h-auto"
            />
          </div>
          <div className="flex w-full flex-col items-center rounded border border-solid border-gray-400 bg-white-A700 p-[25px] sm:p-5">
            <Img
              src="images/img_image_2.png"
              alt="imagetwo_one"
              className="h-[45px] object-cover"
            />
            <Img
              src="images/img_image_5.png"
              alt="imagefive_one"
              className="mb-[9px] h-[39px] w-[82%] object-cover"
            />
          </div>
          <div className="flex w-full flex-col items-center gap-[5px] rounded border border-solid border-gray-400 bg-white-A700 p-[25px] sm:p-5">
            <Img
              src="images/img_image_3.png"
              alt="imagethree_one"
              className="h-[47px] w-[48%] object-cover"
            />
            <Img
              src="images/img_image_6.png"
              alt="imagesix_one"
              className="mb-[7px] h-[34px] w-[61%] object-cover"
            />
          </div>
          <div className="flex w-full flex-col items-center gap-2.5 rounded border border-solid border-gray-400 bg-white-A700 p-[22px] sm:p-5">
            <Img
              src="images/img_image_4.png"
              alt="imagefour_one"
              className="h-[50px] w-[34%] object-cover"
            />
            <Img
              src="images/img_image_7.png"
              alt="imageseven_one"
              className="mb-2.5 h-[29px] w-[88%] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
