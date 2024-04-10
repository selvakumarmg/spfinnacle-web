import { Img } from "components";
import React from "react";

export default function AboutPageImage() {
  return (
    <div className="absolute left-[6%] top-[16%] m-auto h-[453px] w-[42%]">
      <div className="absolute bottom-[-0.18px] left-0 right-0 m-auto h-[430px] w-[90%] rounded-[10px] bg-pink-A400_1e" />
      <Img
        src="images/img_untitled_design.png"
        alt="untitleddesign"
        className="absolute left-0 right-0 top-[0.00px] m-auto h-[401px] w-full rounded-lg object-cover"
      />
    </div>
  );
}
