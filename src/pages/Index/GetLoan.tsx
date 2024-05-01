import { Heading, Img } from "components";
import React from "react";

export default function GetLoan() {
  return (
    <>
      <div className="relative w-full h-full ">
        <Img
          src="images/img_untitled_design_712x451.png"
          alt="untitleddesign"
          className="w-full h-full rounded-bl-md rounded-tl-md md:rounded-bl-none md:rounded-tr-md sm:rounded-bl-none sm:rounded-tr-md object-cover"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex  w-full flex-col items-center justify-end rounded-bl-md rounded-tl-md bg-gradient3 p-[30px] sm:p-5 md:rounded-bl-none md:rounded-tr-md sm:rounded-bl-none sm:rounded-tr-md">
        <Heading
          size="2xl"
          as="h1"
          className="mt-[400px] !font-lato leading-[50px] md:w-full md:mt-0 sm:w-full sm:mt-0 sm:!text-lg"
        >
          Fill out the form to receive your loan
        </Heading>
      </div>
    </>
  );
}
