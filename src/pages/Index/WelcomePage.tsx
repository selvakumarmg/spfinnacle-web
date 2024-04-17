import { Text } from "components";
import React from "react";
import CheckCreditScore from "./CheckCreditScore";
import CheckEmiCalculator from "./CheckEMICalculator";

export default function WelcomePage() {
  return (
    <div
      className="flex lg:h-screen md:h-screen h-screen sm:h-min w-full flex-col items-center justify-center sm:mt-10"
      id="welcome-page"
    >
      <div className="flex w-[85%] flex-col items-center justify-center md:w-[80%] ">
        <h2 className="mb-1 text-2xl sm:text-xl font-semibold text-[#E80D55]">
          Welcome to SP Finacle
        </h2>
        <h2 className="mb-6 text-2xl sm:text-lg text-center font-semibold text-[#5B5B5B]">
          Your Trusted Partner for financial Solutions
        </h2>
        <Text
          as="p"
          className="mb-16 sm:mb-8 text-center sm:text-justify text-lg sm:text-sm font-normal text-[#353535]"
        >
          Lorem ipsum dolor sit amet. Et accusamus necessitatibus eos ducimus
          optio aut tempora natus. 33 cupiditate quis et odit dignissimos et
          quaerat amet ut recusandae consequatur est omnis quae eum voluptatum
          nemo.
        </Text>
      </div>
      <div className="mx-auto flex gap-x-20 w-[80%] md:w-[80%] sm:w-full sm:items-center justify-between md:flex-col md:items-center sm:gap-y-5 md:gap-[5vh] sm:flex-col">
        <CheckCreditScore />
        <CheckEmiCalculator />
      </div>
    </div>
  );
}
