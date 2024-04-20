import { Heading, Img, RatingBar, Text } from "components";
import React from "react";

export default function PeopleTestimonial() {
  return (
    <div className="absolute bottom-[21%] right-[0.58px] m-auto flex w-[94%] flex-col items-start md:relative md:items-center sm:relative sm:w-full">
      <div className="mt-[60px] flex w-[93%] gap-[29px] md:w-[80%] md:flex-col md:p-5 sm:w-full sm:flex-col sm:p-5 sm:mt-0">
        {window.innerWidth < 768 ? (
          <div className="flex w-full flex-col items-start">
            <Img
              src="images/img_ellipse_11.png"
              alt="tony_mathew_one"
              className="relative z-[1] ml-[18px] h-[60px] w-[60px] sm:w-[40px] sm:h-[40px] rounded-[50%]"
            />
            <div className="relative mt-[-30px] sm:mt-[-25px] h-[230px] sm:h-[250px] self-stretch bg-white-A700 drop-shadow-2xl">
              <div className="absolute left-[18.00px] top-[17%] m-auto flex w-[50%] flex-col items-start sm:w-[50%]">
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
                  className="mt-[5px] sm:!text-xs !font-montserrat !text-black-900"
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
                className="absolute bottom-[20px] left-5 right-0 m-auto w-[85%] !font-montserrat !text-gray-800 md:w-[85%] md:bottom-[30px] text-justify sm:w-[85%] sm:left-2"
              >
                Lorem ipsum dolor sit amet. Ex saepe fuga non porro autem sit
                doloremque nulla ut aliquam dignissimos est corporis laboriosam
                cum eaque autem! Et quia itaque ab omnis alias id reprehenderit
                tempore vel labore amet ut Quis Quis in nihil opt.
              </Text>
              <Img
                src="images/img_format_quote_fi.svg"
                alt="image"
                className="absolute right-[1.18px] top-[9.74px] m-auto h-[97px] w-[97px] sm:w-[60px] sm:h-[60px]"
              />
              <div className="absolute bottom-[26.80px] left-[20.44px] m-auto h-[69px] w-[2px] bg-pink-A400 sm:left-[15px] sm:h-[95px]" />
            </div>
          </div>
        ) : (
          <>
            <div className="flex w-full flex-col items-start">
              <Img
                src="images/img_ellipse_11.png"
                alt="tony_mathew_one"
                className="relative z-[1] ml-[18px] h-[60px] w-[60px] sm:w-[40px] sm:h-[40px] rounded-[50%] "
              />
              <div className="relative mt-[-30px] sm:mt-[-25px] h-[230px] sm:h-[250px] self-stretch bg-white-A700 drop-shadow-2xl">
                <div className="absolute left-[18.00px] top-[17%] m-auto flex w-[50%] flex-col items-start sm:w-[50%]">
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
                    className="mt-[5px] sm:!text-xs !font-montserrat !text-black-900"
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
                  className="absolute bottom-[20px] left-5 right-0 m-auto w-[85%] !font-montserrat !text-gray-800 md:w-[85%] md:bottom-[30px] text-justify sm:w-[85%] sm:left-2"
                >
                  Lorem ipsum dolor sit amet. Ex saepe fuga non porro autem sit
                  doloremque nulla ut aliquam dignissimos est corporis
                  laboriosam cum eaque autem! Et quia itaque ab omnis alias id
                  reprehenderit tempore vel labore amet ut Quis Quis in nihil
                  opt.
                </Text>
                <Img
                  src="images/img_format_quote_fi.svg"
                  alt="image"
                  className="absolute right-[1.18px] top-[9.74px] m-auto h-[97px] w-[97px] sm:w-[60px] sm:h-[60px]"
                />
                <div className="absolute bottom-[26.80px] left-[20.44px] m-auto h-[69px] w-[2px] bg-pink-A400 sm:left-[15px] sm:h-[95px]" />
              </div>
            </div>
            <div className="flex w-full flex-col items-start">
              <Img
                src="images/img_ellipse_11.png"
                alt="tony_mathew_one"
                className="relative z-[1] ml-[18px] h-[60px] w-[60px] sm:w-[40px] sm:h-[40px] rounded-[50%] "
              />
              <div className="relative mt-[-30px] sm:mt-[-25px] h-[230px] sm:h-[250px] self-stretch bg-white-A700 drop-shadow-2xl">
                <div className="absolute left-[18.00px] top-[17%] m-auto flex w-[50%] flex-col items-start sm:w-[50%]">
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
                    className="mt-[5px] sm:!text-xs !font-montserrat !text-black-900"
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
                  className="absolute bottom-[20px] left-5 right-0 m-auto w-[85%] !font-montserrat !text-gray-800 md:w-[85%] md:bottom-[30px] text-justify sm:w-[85%] sm:left-2"
                >
                  Lorem ipsum dolor sit amet. Ex saepe fuga non porro autem sit
                  doloremque nulla ut aliquam dignissimos est corporis
                  laboriosam cum eaque autem! Et quia itaque ab omnis alias id
                  reprehenderit tempore vel labore amet ut Quis Quis in nihil
                  opt.
                </Text>
                <Img
                  src="images/img_format_quote_fi.svg"
                  alt="image"
                  className="absolute right-[1.18px] top-[9.74px] m-auto h-[97px] w-[97px] sm:w-[60px] sm:h-[60px]"
                />
                <div className="absolute bottom-[26.80px] left-[20.44px] m-auto h-[69px] w-[2px] bg-pink-A400 sm:left-[15px] sm:h-[95px]" />
              </div>
            </div>
            <div className="flex w-full flex-col items-start">
              <Img
                src="images/img_ellipse_11.png"
                alt="tony_mathew_one"
                className="relative z-[1] ml-[18px] h-[60px] w-[60px] sm:w-[40px] sm:h-[40px] rounded-[50%] "
              />
              <div className="relative mt-[-30px] sm:mt-[-25px] h-[230px] sm:h-[250px] self-stretch bg-white-A700 drop-shadow-2xl">
                <div className="absolute left-[18.00px] top-[17%] m-auto flex w-[50%] flex-col items-start sm:w-[50%]">
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
                    className="mt-[5px] sm:!text-xs !font-montserrat !text-black-900"
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
                  className="absolute bottom-[20px] left-5 right-0 m-auto w-[85%] !font-montserrat !text-gray-800 md:w-[85%] md:bottom-[30px] text-justify sm:w-[85%] sm:left-2"
                >
                  Lorem ipsum dolor sit amet. Ex saepe fuga non porro autem sit
                  doloremque nulla ut aliquam dignissimos est corporis
                  laboriosam cum eaque autem! Et quia itaque ab omnis alias id
                  reprehenderit tempore vel labore amet ut Quis Quis in nihil
                  opt.
                </Text>
                <Img
                  src="images/img_format_quote_fi.svg"
                  alt="image"
                  className="absolute right-[1.18px] top-[9.74px] m-auto h-[97px] w-[97px] sm:w-[60px] sm:h-[60px]"
                />
                <div className="absolute bottom-[26.80px] left-[20.44px] m-auto h-[69px] w-[2px] bg-pink-A400 sm:left-[15px] sm:h-[95px]" />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
