import { Button, Heading, Img, Text } from "components";
import React from "react";

export default function AboutPageText() {
  return (
    <div className="absolute right-[6%] top-[16%] m-auto flex w-[42%] flex-col items-start">
      <Heading as="h4" className="text-center !text-pink-A400">
        About Company
      </Heading>
      <Heading as="h4" className="ml-0.5 mt-[3px] !text-gray-700_01 md:ml-0">
        Personalised Financial Services
      </Heading>
      <Text as="p" className="mt-[18px] !text-gray-700_01">
        Lorem ipsum dolor sit amet. Et accusamus necessitatibus eos ducimus
        optio aut tempora natus. 33 cupiditate quis et odit dignissimos et
        quaerat amet ut recusandae consequatur est omnis quae eum voluptatum
        nemo. Lorem ipsum dolor sit amet. Et accusamus necessitatibus eos
        ducimus optio aut tempora natus. 33 cupiditate quis et odit dignissimos
        et quaerat amet ut recusandae consequatur est omnis quae eum voluptatum
        nemo.
      </Text>
      <div className="mt-[21px] flex w-[27%] items-center gap-3.5 md:w-full md:p-5">
        <div className="relative h-[24px] w-[24px] md:h-auto">
          <Img
            src="images/img_arrow_1.svg"
            alt="arrowone_one"
            className="mb-2.5 h-[2px]"
          />
          <Button
            color="blue_600"
            size="xs"
            shape="circle"
            className="absolute bottom-0 left-0 right-0 top-0 m-auto w-[24px] !rounded-[12px]"
          >
            <Img src="images/img_arrow_1.svg" />
          </Button>
        </div>
        <Text as="p" className="!text-blue_gray-900">
          Quick Process
        </Text>
      </div>
      <div className="mt-[18px] flex items-center gap-3.5">
        <Button
          color="blue_600"
          size="xs"
          shape="circle"
          className="w-[24px] self-end !rounded-[12px]"
        >
          <Img src="images/img_arrow_1.svg" />
        </Button>
        <Text as="p" className="!text-blue_gray-900">
          Fast Disbursal
        </Text>
      </div>
    </div>
  );
}
