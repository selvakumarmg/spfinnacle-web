import React from "react";

export default function ProductImage() {
  return (
    <div className="w-[50%] h-full p-10 flex flex-col justify-center md:w-[80%] md:p-10 items-center sm:w-[80%] sm:p-0">
      {/* <ImageOfProduct /> */}
      <img
        src="images/leadership.svg"
        alt="product-image"
        className="object-cover w-[500px] sm:w-[60%]"
      />
    </div>
  );
}
