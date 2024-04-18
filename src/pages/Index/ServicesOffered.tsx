import React from "react";
import CreditCard from "./CreditCard";
import HommeLoan from "./HomeLoan";
import PersonalLoan from "./PersonalLoan";

export default function ServicesOffered() {
  return (
    <div className="relative w-[80%] mx-auto h-[50%] top-20 md:top-16 md:w-[90%] sm:w-[80%] sm:top-5">
      <div className="absolute left-0 right-0 flex justify-between max-w-[1151px] gap-[49px] mx-auto md:relative md:flex md:p-5 sm:grid sm:grid-cols-2 sm:gap-4">
        <HommeLoan />
        <CreditCard />
        <PersonalLoan />
      </div>
    </div>
  );
}
