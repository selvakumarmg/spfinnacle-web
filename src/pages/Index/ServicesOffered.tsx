import React from "react";
import CreditCard from "./CreditCard";
import HommeLoan from "./HomeLoan";
import PersonalLoan from "./PersonalLoan";

export default function ServicesOffered() {
  return (
    <div>
      <div className="absolute top-[12%] left-0 right-0 m-auto flex max-w-[1151px] gap-[49px] md:relative md:flex-col md:p-5">
        <HommeLoan />
        <CreditCard />
        <PersonalLoan />
      </div>
    </div>
  );
}
