import { Heading, Img } from "components";
import React from "react";

export default function GetLoan() {
  return (
    <>
      <div className="relative w-full h-full overflow-hidden">
        <Img
          src="images/img_untitled_design_712x451.png"
          alt="untitleddesign"
          className="w-fill h-fill rounded-bl rounded-tl object-cover"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex  w-full flex-col items-center justify-end rounded-bl rounded-tl bg-gradient3 p-[30px] sm:p-5">
        <Heading
          size="2xl"
          as="h1"
          className="mt-[400px] !font-lato leading-[50px] md:w-full"
        >
          Fill out the form to receive your loan
        </Heading>
      </div>
    </>
  );
}
