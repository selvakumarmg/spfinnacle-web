import { slides } from "pages/constants/carousel";
import React, { useEffect, useState } from "react";
import { RxDotFilled } from "react-icons/rx";

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const goToSlide = (slideIndex: number): void => {
    setCurrentIndex(slideIndex);
  };

  // useEffect added for autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]); // useEffect dependency on slides length
  return (
    <div className="max-w-full md:w-full md:h-[350px] sm:h-[300px] h-[550px] bg-no-repeat w-full m-auto relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="relative w-full h-full bg-center bg-slate-500 self-stretch bg-cover duration-500"
      >
        <div className="flex w-[60%] h-full gap-y-10 md:gap-y-5 sm:gap-y-5 justify-center flex-col px-20 md:w-[60%] md:px-10 sm:px-5 sm:w-[100%] sm:h-[95%] sm:justify-center">
          {slides[currentIndex].heading && (
            <h1 className="font-semibold text-[40px] md:text-xl sm:text-lg text-[#FFFFFF]">
              {slides[currentIndex].heading}
            </h1>
          )}
          {slides[currentIndex].context && (
            <p className="font-normal text-xl md:text-base sm:text-sm text-[#FFFFFF]">
              {slides[currentIndex].context}
            </p>
          )}
          {slides[currentIndex].button && (
            <button
              type="button"
              className="w-52 rounded-lg h-16 bg-[#E80D55] hover:bg-[hsl(340,89%,58%)] text-[#FFFFFF] text-lg md:text-base font-medium md:w-28 md:h-10 sm:text-sm sm:w-28 sm:h-10"
              onClick={slides[currentIndex].button.onClick}
            >
              {slides[currentIndex].button.text}
            </button>
          )}
        </div>
      </div>
      <div className="absolute left-[50%] translate-x-[-50%] top-[90%] md:top-[85%] sm:top-[87%] flex invisible group-hover:visible hover:ease-in-out py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer ${
              slideIndex === currentIndex ? "text-black" : "text-slate-500"
            }`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
