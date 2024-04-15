import { Heading } from "components";
import React from "react";

export default function EmiCalculatorHeading() {
  return (
    <>
      <div className="ml-20 mt-14">
        <Heading as="h4" className="w-[72%] !text-pink-A400 md:w-full">
          <span className="text-pink-A400">
            <>
              EMI Calculator
              <br />
            </>
          </span>
          <span className="text-gray_700">
            EMI Calculator for Home Loan, Car Loan & Personal Loan in India
          </span>
        </Heading>
      </div>
    </>
  );
}
