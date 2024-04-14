import GetLoanPage from "pages/Index/GetLoanPage";
import React from "react";
import GetLoan from "./GetLoan";

export default function LoanForm() {
  return (
    <div className="w-[85%] h-[550px] relative mx-auto rounded-md bg-white-A700 drop-shadow-2xl flex gap-9">
      <div className="relative w-[40%] h-[550px] md:h-auto md:w-full">
        <GetLoan />
      </div>
      <div className="absolute w-[60%] h-full right-0 p-12">
        <GetLoanPage />
      </div>
    </div>
  );
}
