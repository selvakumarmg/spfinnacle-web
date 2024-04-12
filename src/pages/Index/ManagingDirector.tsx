import { Img, Text } from "components";
import React from "react";

export default function ManagingDirector() {
  return (
    <div className="w-[90%] h-[374px] relative bg-[#FEF5F8] mx-auto">
      <div className="m-auto flex items-start justify-between gap-5 md:relative md:flex-col">
        <Img
          src="images/img_rectangle_703_r.png"
          alt="image"
          className="h-[355px] w-[24%] mt-5 ml-5 md:w-full"
        />
        <div className="flex w-[72%] flex-col items-start md:w-full p-10">
          <Text size="2xl" as="p" className="!text-pink-A400">
            Starck
          </Text>
          <Text size="2xl" as="p" className="mt-0.5">
            Managing Director
          </Text>
          <Text as="p" className="mt-[9px] !text-gray-700_01">
            <Text>
              Lorem ipsum dolor sit amet. Et accusamus necessitatibus eos
              ducimus optio aut tempora natus. 33 cupiditate quis et odit
              dignissimos et quaerat amet ut recusandae consequatur est <br />
              Lorem ipsum dolor sit amet. Et accusamus necessitatibus eos
              ducimus optio aut tempora natus. 33 cupiditate quis et odit
              dignissimos et quaerat amet ut recusandae consequatur est omnis
              quae eum voluptatum nemo.Lorem ipsum dolor sit amet. Et accusamus
              necessitatibus eos ducimus optio aut tempora natus. 33 cupiditate
              quis et odit dignissimos et quaerat amet ut recusandae consequatur
              est omnis quae eum voluptatum nemo.Lorem ipsum dolor sit amet. Et
              accusamus necessitatibus eos ducimus optio aut tempora natus. 33
              cupiditate quis et odit dignissimos et quaerat amet ut recusandae
              consequatur est omnis quae eum voluptatum ,
            </Text>
          </Text>
        </div>
      </div>
    </div>
  );
}
