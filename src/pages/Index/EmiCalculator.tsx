import React from "react";
import EmiCalculatorForm from "./EmiCalculatorForm";
import EmiCalculatorHeading from "./EmiCalculatorHeading";

export default function EmiCalculator() {
  return (
    <>
      <div className="w-full h-fit pb-20">
        <EmiCalculatorHeading />
        <EmiCalculatorForm />
      </div>
    </>
  );
}
