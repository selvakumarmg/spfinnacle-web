import { Text } from "components";
import React from "react";

export default function CareerPageHeading() {
  return (
    <>
      <div className="w-[80%] mx-auto h-40 pt-5 sm:h-[30%]">
        <Text
          as="h1"
          className="text-[#E80D55] !font-semibold !text-2xl sm:!text-xl text-center"
        >
          Openings
        </Text>
        <Text
          as="p"
          className="!font-normal !text-lg sm:!text-base text-[#353535] text-center mt-5 sm:text-justify"
        >
          Lorem ipsum dolor sit amet. Et accusamus necessitatibus eos ducimus
          optio aut tempora natus. 33 cupiditate quis et odit dignissimos et
          quaerat amet ut recusandae consequatur est omnis quae eum voluptatum
          nemo.
        </Text>
      </div>
    </>
  );
}
