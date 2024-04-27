import { Img, Text } from "components";
import React from "react";

export default function ManagingDirector() {
  return (
    <div className="w-[90%] h-[450px] relative bg-[#FEF5F8] sm:h-min mx-auto sm:w-[80%] md:w-[80%] md:h-[425px]">
      <div className="m-auto flex items-center justify-between gap-5 md:relative md:flex-col sm:flex-col">
        <Img
          src="images/img_rectangle_703_r.png"
          alt="image"
          className="h-[355px] w-[30%] mt-5 ml-5 md:w-[80%] sm:w-[90%] sm:h-[250px] sm:ml-0 md:ml-0 md:h-[400px] "
        />
        <div className="flex w-[70%] flex-col p-5  md:w-full justify-center md:p-10 sm:w-full sm:p-5">
          <Text size="2xl" as="p" className="!text-pink-A400">
            Starck
          </Text>
          <Text size="2xl" as="p" className="mt-0.5">
            Managing Director
          </Text>
          <Text
            as="p"
            className="mt-[9px] !text-gray-700_01 sm:!text-base sm:text-justify md:text-justify"
          >
            &emsp;&emsp;Lorem ipsum dolor sit amet. Et accusamus necessitatibus
            eos ducimus optio aut tempora natus. 33 cupiditate quis et odit
            dignissimos et quaerat amet ut recusandae consequatur est <br />
            Lorem ipsum dolor sit amet. Et accusamus necessitatibus eos ducimus
            optio aut tempora natus. 33 cupiditate quis et odit dignissimos et
            quaerat amet ut recusandae consequatur est omnis quae eum voluptatum
            nemo.Lorem ipsum dolor sit amet. Et accusamus necessitatibus eos
            ducimus optio aut tempora natus. 33 cupiditate quis et odit
            dignissimos et quaerat amet ut recusandae consequatur est omnis quae
            eum voluptatum nemo.Lorem ipsum dolor sit amet. Et accusamus
            necessitatibus eos ducimus optio aut tempora natus. 33 cupiditate
            quis et odit dignissimos et quaerat amet ut recusandae consequatur
            est omnis quae eum voluptatum ,
          </Text>
        </div>
      </div>
    </div>
  );
}
