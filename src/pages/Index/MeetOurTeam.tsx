import { Heading, Text } from "components";
import React from "react";
import ManagingDirector from "./ManagingDirector";

export default function MeetOurTeam() {
  return (
    <div className="w-full h-screen relative">
      <div className="mt-[149px] p-10 ml-14 flex w-[64%] flex-col items-start gap-[17px] md:w-full md:p-5">
        <Heading as="h4" className="!text-pink-A400">
          Meet Our Team
        </Heading>
        <Text as="p" className="!text-gray-700_01">
          Lorem ipsum dolor sit amet. Et accusamus necessitatibus eos ducimus
          optio aut tempora natus. 33 cupiditate quis et odit dignissimos et
          quaerat amet ut recusandae consequatur est{" "}
        </Text>
      </div>
      <ManagingDirector />
    </div>
  );
}
