import { Heading, Img, RatingBar, Text } from "components";
import React from "react";

export default function PeopleTestimonial() {
  return (
    <div className="absolute bottom-[21%] right-[0.58px] m-auto flex w-[94%] flex-col items-start">
      <div className="mt-[60px] flex w-[93%] gap-[29px] md:w-full md:flex-col md:p-5">
        <div className="flex w-full flex-col items-start">
          <Img
            src="images/img_ellipse_11.png"
            alt="tony_mathew_one"
            className="relative z-[1] ml-[18px] h-[60px] w-[60px] rounded-[50%] md:ml-0"
          />
          <div className="relative mt-[-30px] h-[200px] self-stretch bg-white-A700 drop-shadow-2xl">
            <div className="absolute left-[18.00px] top-[17%] m-auto flex w-[24%] flex-col items-start">
              <RatingBar
                value={1}
                isEditable={true}
                size={20}
                starCount={4}
                className="flex justify-between"
              />
              <Heading
                size="s"
                as="h3"
                className="mt-[5px] !font-montserrat !text-black-900"
              >
                Tony Mathew
              </Heading>
              <Heading
                size="xs"
                as="h4"
                className="!font-montserrat !text-gray-600"
              >
                Customer
              </Heading>
            </div>
            <Text
              size="xs"
              as="p"
              className="absolute bottom-[15.00px] left-5 right-0 m-auto w-[91%] !font-montserrat !text-gray-800"
            >
              Lorem ipsum dolor sit amet. Ex saepe fuga non porro autem sit
              doloremque nulla ut aliquam dignissimos est corporis laboriosam
              cum eaque autem! Et quia itaque ab omnis alias id reprehenderit
              tempore vel labore amet ut Quis Quis in nihil opt.
            </Text>
            <Img
              src="images/img_format_quote_fi.svg"
              alt="image"
              className="absolute right-[1.18px] top-[9.74px] m-auto h-[97px] w-[97px]"
            />
            <div className="absolute bottom-[26.80px] left-[20.44px] m-auto h-[69px] w-[2px] bg-pink-A400" />
          </div>
        </div>
        <div className="flex w-full flex-col items-start">
          <Img
            src="images/img_ellipse_11.png"
            alt="circleimage"
            className="relative z-[2] ml-[18px] h-[60px] w-[60px] rounded-[50%] md:ml-0"
          />
          <div className="relative mt-[-30px] h-[198px] self-stretch bg-white-A700 drop-shadow-2xl">
            <div className="absolute left-[18.00px] top-[17%] m-auto flex w-[24%] flex-col items-start">
              <RatingBar
                value={1}
                isEditable={true}
                size={19}
                starCount={4}
                className="flex justify-between"
              />
              <Heading
                size="s"
                as="h5"
                className="mt-1.5 !font-montserrat !text-black-900"
              >
                Tony Mathew
              </Heading>
              <Heading
                size="xs"
                as="h6"
                className="!font-montserrat !text-gray-600"
              >
                Customer
              </Heading>
            </div>
            <Text
              size="xs"
              as="p"
              className="absolute bottom-[15.00px] left-5 right-0 m-auto w-[90%] !font-montserrat !text-gray-800"
            >
              Lorem ipsum dolor sit amet. Ex saepe fuga non porro autem sit
              doloremque nulla ut aliquam dignissimos est corporis laboriosam
              cum eaque autem! Et quia itaque ab omnis alias id reprehenderit
              tempore vel labore amet ut Quis Quis in nihil opt.
            </Text>
            <Img
              src="images/img_format_quote_fi.svg"
              alt="formatquotefi"
              className="absolute right-[1.00px] top-[10.00px] m-auto h-[96px] w-[97px]"
            />
            <div className="absolute bottom-[26.00px] left-[21.00px] m-auto h-[69px] w-[2px] bg-pink-A400" />
          </div>
        </div>
        <div className="flex w-full flex-col items-start">
          <Img
            src="images/img_ellipse_11.png"
            alt="circleimage"
            className="relative z-[3] ml-[18px] h-[60px] w-[60px] rounded-[50%] md:ml-0"
          />
          <div className="relative mt-[-30px] h-[198px] self-stretch bg-white-A700 drop-shadow-2xl">
            <div className="absolute left-[18.00px] top-[17%] m-auto flex w-[24%] flex-col items-start">
              <RatingBar
                value={1}
                isEditable={true}
                size={19}
                starCount={4}
                className="flex justify-between"
              />
              <Heading
                size="s"
                as="p"
                className="mt-1.5 !font-montserrat !text-black-900"
              >
                Tony Mathew
              </Heading>
              <Heading
                size="xs"
                as="p"
                className="!font-montserrat !text-gray-600"
              >
                Customer
              </Heading>
            </div>
            <Text
              size="xs"
              as="p"
              className="absolute bottom-[15.00px] left-5 right-0 m-auto w-[90%] !font-montserrat !text-gray-800"
            >
              Lorem ipsum dolor sit amet. Ex saepe fuga non porro autem sit
              doloremque nulla ut aliquam dignissimos est corporis laboriosam
              cum eaque autem! Et quia itaque ab omnis alias id reprehenderit
              tempore vel labore amet ut Quis Quis in nihil opt.
            </Text>
            <Img
              src="images/img_format_quote_fi.svg"
              alt="formatquotefi"
              className="absolute right-[1.00px] top-[10.00px] m-auto h-[96px] w-[97px]"
            />
            <div className="absolute bottom-[26.00px] left-[21.00px] m-auto h-[69px] w-[2px] bg-pink-A400" />
          </div>
        </div>
      </div>
    </div>
  );
}