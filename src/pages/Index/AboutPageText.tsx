import React from "react";

export default function AboutPageText() {
  return (
    <div className="relative m-auto flex w-[50%] md:w-[80%] sm:w-[80%] flex-col items-start">
      <h4 className="text-center text-2xl sm:text-lg font-semibold text-pink-A400">
        About Company
      </h4>
      <h4 className="ml-0.5 sm:ml-0 mt-[3px] text-2xl sm:text-base font-semibold text-[#555555] md:ml-0">
        Personalised Financial Services
      </h4>
      <p className="mt-[18px] text-[#555555] text-lg sm:text-sm  font-normal">
        Lorem ipsum dolor sit amet. Et accusamus necessitatibus eos ducimus
        optio aut tempora natus. 33 cupiditate quis et odit dignissimos et
        quaerat amet ut recusandae consequatur est omnis quae eum voluptatum
        nemo.
      </p>
      <div className="mt-[21px] flex sm:w-full w-fit sm:gap-2 flex-col justify-center gap-3.5 md:w-full md:p-5">
        <div className="relative w-fit flex justify-center items-center sm:gap-x-2 gap-x-5 ">
          <img
            src="images/circle-arrow-right-solid.svg"
            width={22}
            alt="right-arrow"
          />
          <p className="text-[#353535] text-lg sm:text-sm font-normal">
            Nsectetur cing elit.
          </p>
        </div>
        <div className="relative w-fit flex justify-center items-center sm:gap-x-2 gap-x-5 ">
          <img
            src="images/circle-arrow-right-solid.svg"
            width={22}
            alt="right-arrow"
          />
          <p className="text-[#353535] text-lg sm:text-sm font-normal">
            Suspe ndisse suscipit sagittis leo.
          </p>
        </div>
        <div className="relative w-fit flex justify-center items-center gap-x-5 sm:gap-x-2">
          <img
            src="images/circle-arrow-right-solid.svg"
            width={22}
            alt="right-arrow"
          />
          <p className="text-[#353535] text-lg sm:text-sm font-normal">
            Entum estibulum digni posuere.
          </p>
        </div>
        <div className="relative w-fit flex justify-center items-center sm:gap-x-2 gap-x-5 ">
          <img
            src="images/circle-arrow-right-solid.svg"
            width={22}
            alt="right-arrow"
          />
          <p className="text-[#353535] text-lg sm:text-sm font-normal">
            Donec tristique ante dictum rhoncus.
          </p>
        </div>
      </div>
    </div>
  );
}
