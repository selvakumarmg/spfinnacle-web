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
      <div className="flex w-[75%] flex-col items-center justify-center md:w-[70%] ">
        <h2 className="mb-1 text-2xl sm:text-xl font-semibold text-[#E80D55]">
          Welcome to SP FINNACLE
        </h2>
        <h2 className="mb-6 text-2xl sm:text-lg text-center font-semibold text-[#5B5B5B]">
          Your Trusted Partner for financial Solutions
        </h2>
        <Text
          as="p"
          className="mb-16 sm:mb-8 text-center sm:text-justify text-lg sm:text-sm font-normal text-[#353535]"
        >
          A dynamic financial services company dedicated to empowering
          individuals and businesses with innovative solutions tailored to their
          unique needs. Whether you have excellent credit, a less-than-perfect
          credit history, or are unsure about your eligibility, we have options
          available to suit your unique circumstances. Thank you for choosing SP
          Finnacle as your trusted lending partner. We look forward to helping
          you secure the funds you need to realize your dreams.
        </Text>
      </div>
      <div className="mx-auto flex gap-x-20 w-[80%] md:w-[80%] sm:w-full sm:items-center justify-between md:flex-col md:items-center sm:gap-y-5 md:gap-[5vh] sm:flex-col">
        <CheckCreditScore />
        <CheckEmiCalculator />
      </div>
    </div>
  );
}
