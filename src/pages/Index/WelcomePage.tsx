import { Text } from "components";
import React from "react";
import CheckCreditScore from "./CheckCreditScore";
import CheckEmiCalculator from "./CheckEMICalculator";

export default function WelcomePage() {
  return (
    //  <div className="relative mt-[-95px] flex flex-col items-center gap-[22px] self-stretch">
    //    <Heading
    //      as="h4"
    //      className="w-[86%] text-center !text-pink-A400 md:w-full"
    //    >
    //      <span className="text-pink-A400">
    //        <>
    //          Welcome to SP Finnacle <br />
    //        </>
    //      </span>
    //      <span className="text-gray_700">
    //        Your Trusted Partner for Financial Solutions
    //      </span>
    //    </Heading>
    //    <Text as="p" className="text-center !text-blue_gray-900">
    //      Lorem ipsum dolor sit amet. Et accusamus necessitatibus eos ducimus
    //      optio aut tempora natus. 33 cupiditate quis et odit dignissimos et
    //      quaerat amet ut recusandae consequatur est omnis quae eum voluptatum
    //      nemo.
    //    </Text>
    //  </div>
    <div
      className="flex h-screen w-full flex-col items-center justify-center"
      id="welcome-page"
    >
      <div className="flex w-[86%] flex-col items-center justify-center md:w-full">
        <h2 className="mb-1 text-[24px] font-semibold text-[#E80D55]">
          Welcome to SP Finacle
        </h2>
        <h2 className="mb-6 text-[24px] font-semibold text-[#5B5B5B]">
          Your Trusted Partner for financial Solutions
        </h2>
        <Text
          as="p"
          className="mb-16 text-center text-[18px] font-normal text-[#353535]"
        >
          Lorem ipsum dolor sit amet. Et accusamus necessitatibus eos ducimus
          optio aut tempora natus. 33 cupiditate quis et odit dignissimos et
          quaerat amet ut recusandae consequatur est omnis quae eum voluptatum
          nemo.
        </Text>
      </div>
      <div className="mx-auto flex w-[80%] justify-between md:flex-col md:gap-[5vh]">
        <CheckCreditScore />
        <CheckEmiCalculator />
      </div>
    </div>
  );
}
