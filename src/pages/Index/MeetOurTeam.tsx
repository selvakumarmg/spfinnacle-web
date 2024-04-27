import { Heading, Text } from "components";
import React from "react";
import ManagingDirector from "./ManagingDirector";

export default function MeetOurTeam() {
  return (
    <div className="w-full h-screen relative sm:h-min ">
      <div className="flex flex-col">
        <div className="p-10 ml-14 flex w-[64%] flex-col items-start gap-[17px] md:w-[80%] md:p-5 md:mt-12 sm:w-full sm:ml-0 sm:mt-20">
          <Heading as="h4" className="!text-pink-A400">
            Meet Our Team
          </Heading>
          <Text
            as="p"
            className="!text-gray-700_01 sm:text-justify sm:!text-base"
          >
            Our team of experienced professionals is dedicated to helping you
            find the right loan solution that meets your financial goals and
            fits your budget.
          </Text>
        </div>
        <ManagingDirector />
      </div>
    </div>
  );
}
