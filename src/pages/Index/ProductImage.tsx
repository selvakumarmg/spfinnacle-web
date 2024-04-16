import ImageOfProduct from "assets/images/ImageOfProduct";
import React from "react";

export default function ProductImage() {
  return (
    <div className="w-[50%] h-full p-20 flex flex-col justify-center items-center">
      <ImageOfProduct className="md:w-50% h-50%" />
    </div>
  );
}
