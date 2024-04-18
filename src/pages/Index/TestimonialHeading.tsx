import { Heading, Text } from "components";
import React from "react";

export default function TestimonialHeading() {
  return (
    <div className="w-[80%] h-[25%] text-center mx-auto">
      <Heading as="h2" className="!text-pink-A400 sm:!text-xl">
        Testimonials
      </Heading>
      <Text
        as="p"
        className="mt-2  !text-gray-700_01 md:w-full md:p-5 sm:!text-base sm:text-justify"
      >
        Lorem ipsum dolor sit amet. Et accusamus necessitatibus eos ducimus
        optio aut tempora natus. 33 cupiditate quis et odit dignissimos et
        quaerat amet ut recusandae consequatur est{" "}
      </Text>
    </div>
  );
}
