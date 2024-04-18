import React from "react";

export default function TrustedBanks() {
  return (
    <div className="flex items-center justify-between md:flex-col sm:flex-col">
      <div className="flex w-[90%] flex-col items-start gap-[29px] ml-20 md:w-[95%] md:p-5 sm:w-[90%] sm:gap-5 sm:ml-10">
        <h1 className="font-montserrat font-semibold text-2xl sm:text-lg text-[#000000]">
          <span className="text-black-900">
            The best offers from India’s most
          </span>
          <span className="text-[#E80D55]">&nbsp;trusted banks</span>
        </h1>
        <div className="grid grid-flow-col w-full h-[30%] md:w-[90%] place-content-stretch md:place-content-evenly sm:grid-cols-2 sm:grid-flow-row sm:place-items-center sm:gap-5 sm:w-[90%]">
          <div className="flex w-[120px] h-[120px] flex-col items-center justify-center rounded border border-solid border-gray-400 bg-white-A700 p-[25px]">
            <img
              src="images/hdfcLogo.svg"
              alt="hdfc-logo"
              className="mb-3 object-cover md:h-auto"
            />
          </div>
          <div className="flex w-[120px] h-[120px] flex-col items-center justify-center rounded border border-solid border-gray-400 bg-white-A700 p-[25px] sm:p-5">
            <img
              src="images/kreditBee.svg"
              alt="kreditbee-logo"
              className="mb-3 mt-[11px]  object-cover md:h-auto"
            />
          </div>
          <div className="flex w-[120px] h-[120px] flex-col items-center justify-center rounded border border-solid border-gray-400 bg-white-A700 p-[25px] sm:p-5">
            <img
              src="images/kotakLogo.svg"
              alt="kotak-logo"
              className="mb-3 mt-[11px]  object-contain md:h-auto"
            />
          </div>
          <div className="flex w-[120px] h-[120px] flex-col items-center  justify-center rounded border border-solid border-gray-400 bg-white-A700 p-[25px] sm:p-5">
            <img
              src="images/paySense.svg"
              alt="paysense-logo"
              className="mb-3 mt-[11px] object-contain md:h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
