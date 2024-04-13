import React from "react";
import CreditCard from "./CreditCard";
import HommeLoan from "./HomeLoan";
import PersonalLoan from "./PersonalLoan";

export default function ServicesOffered() {
  return (
    <div className="relative w-[80%] mx-auto h-[50%] top-44">
      <div className="absolute  left-0 right-0 flex justify-between max-w-[1151px] gap-[49px] mx-auto md:relative md:flex-col md:p-5">
        <HommeLoan />
        <CreditCard />
        <PersonalLoan />
      </div>
    </div>
  );
}
