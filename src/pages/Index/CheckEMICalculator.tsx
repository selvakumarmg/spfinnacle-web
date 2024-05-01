import CheckEmiCalculatorIcon from "assets/images/CheckEmiCalculatoreIcon";
import React from "react";
import { Link } from "react-router-dom";

const CheckEmiCalculator = () => {
  return (
    <>
      <div className="flex h-[180px] w-[550px] sm:w-[280px] sm:h-[150px] items-center bg-[#FFFFFF] drop-shadow-xl">
        <div className="absolute ml-8 flex h-28 w-28 sm:h-16 sm:w-16 items-center justify-center rounded-full sm:ml-4 bg-[#FEF3F6]">
          <CheckEmiCalculatorIcon />
        </div>
        <div className="absolute left-40 sm:left-24 flex-1">
          <h2 className="mb-3 sm:text-sm text-2xl font-semibold text-[#E80D55] flex-1">
            <Link to="/emicalcualtor" target="_blank" rel="noopener noreferrer">
              EMI Calcualtor
            </Link>
          </h2>
          <p className="text-lg sm:text-xs font-normal text-[#555555] flex-1">
            Check your EMI Rate in here
          </p>
        </div>
      </div>
    </>
  );
};
export default CheckEmiCalculator;
