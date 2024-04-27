import { Img } from "components";
import React from "react";

export default function AboutPageImage() {
  return (
    <div className="relative m-auto flex items-center justify-center flex-col h-[500px] w-[550px] sm:w-[300px] sm:h-[250px]">
      <div className="absolute bottom-[30px] left-0 right-0 m-auto h-[380px] w-[500px] sm:w-[80%] sm:h-[70%] sm:bottom-5  rounded-[10px] bg-pink-A400_1e" />
      <Img
        src="images/img_untitled_design.png"
        alt="untitleddesign"
        className="relative h-fit w-fit sm:w-[90%] rounded-lg object-cover"
      />
    </div>
  );
}
