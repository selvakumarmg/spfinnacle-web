import React from "react";
import GetLoan from "./GetLoan";
import GetLoanPage from "./GetLoanPage";

export default function LoanForm() {
  return (
    <div className="w-full h-screen">
      <div className="w-[85%] h-[550px] relative mx-auto rounded-md bg-white-A700 drop-shadow-2xl flex gap-9 md:flex-col md:h-[650px] md:gap-5 md:top-80 sm:flex-col sm:gap-2 sm:top-20 sm:h-fit">
        <div className="relative w-[40%] h-[550px] md:h-[250px] md:w-full sm:w-full sm:h-[150px]">
          <GetLoan />
        </div>
        <div className="absolute w-[60%] h-full right-0 p-12 md:relative md:w-full md:p-2 sm:w-full sm:p-3 sm:relative">
          <GetLoanPage />
        </div>
      </div>
    </div>
  );
}
