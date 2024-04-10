import { Img, Text } from "components";
import React from "react";

export default function HappyCustomers() {
  return (
    <div className="flex w-[28%] h-[30%] justify-center flex-col items-start gap-1 rounded-[10px] bg-pink-A400_0f p-9 md:w-full md:p-5">
      <Img
        src="images/img_sentiment_satis.png"
        alt="sentimentsatis"
        className="ml-[47px] mt-3 h-[66px] w-[65px] object-cover md:ml-0"
      />
      <Text size="3xl" as="p" className="ml-[47px] !text-pink-A400 md:ml-0">
        100000+
      </Text>
      <Text size="3xl" as="p" className="ml-[47px] !text-gray-700_01 md:ml-0">
        Happy Customers
      </Text>
    </div>
  );
}
