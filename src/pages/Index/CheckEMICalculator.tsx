import CheckEmiCalculatorIcon from "assets/images/CheckEmiCalculatoreIcon";
import React from "react";

const CheckEmiCalculator = () => {
  return (
    <div className="flex h-[180px] w-[550px] items-center bg-[#FFFFFF] drop-shadow-xl">
      <div className="absolute ml-8 flex h-27 w-27 items-center justify-center rounded-full bg-[#FEF3F6]">
        <CheckEmiCalculatorIcon />
      </div>
      <div className="absolute left-40 flex-1">
        <h2 className="mb-3 text-2xl font-semibold text-[#E80D55] flex-1">
          <a href="#">Check EMI Calculator</a>
        </h2>
        <p className="text-lg font-normal text-[#555555] flex-1">
          Horem ipsum dolor consectetuer Lorem simply dummy orem commo
        </p>
      </div>
    </div>
  );
};
export default CheckEmiCalculator;
