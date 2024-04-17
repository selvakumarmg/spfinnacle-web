import React from "react";

export default function HappyCustomers() {
  return (
    <div className="flex w-[28%] h-[30%] justify-center flex-col items-start gap-1 rounded-[10px] bg-pink-A400_0f p-9 md:w-[75%] md:mx-auto md:justify-center md:items-center sm:w-[80%] sm:h-[50%] sm:p-2 sm:items-center sm:justify-center">
      <img
        src="images/img_sentiment_satis.png"
        alt="sentimentsatis"
        className="ml-[47px] sm:ml-0 mt-3 sm:mt-0 h-[66px] w-[65px] object-cover md:ml-0"
      />
      <p className="ml-[47px] sm:ml-0 text-[#E80D55] text-2xl sm:text-lg font-medium md:ml-0">
        100000+
      </p>
      <p className="ml-[47px] sm:ml-0 text-[#555555] text-2xl sm:text-lg font-medium md:ml-0">
        Happy Customers
      </p>
    </div>
  );
}
