import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Img, Button, Text, Slider, SeekBar, Input, RatingBar } from "../../components";
import AliceCarousel, { EventObject, DotsItem } from "react-alice-carousel";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function WireframeFourPage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef<AliceCarousel>(null);

  return (
    <>
      <Helmet>
        <title>SP Finnacle</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-A700">
        <div className="flex flex-col items-start">
          <div className="h-px w-[11px] bg-blue_gray-100_01" />
          <div className="relative h-[6645px] self-stretch bg-black-900_2b">
            <div className="absolute bottom-[21%] right-[0.58px] m-auto flex w-[94%] flex-col items-start">
              <div className="flex items-center justify-between gap-5 self-stretch md:flex-col">
                <div className="flex w-[57%] flex-col items-start gap-[29px] md:w-full md:p-5">
                  <Heading as="h1" className="!font-montserrat !text-black-900">
                    <span className="text-black-900">The best offers from India’s most</span>
                    <span className="text-pink-A400">&nbsp;trusted banks</span>
                  </Heading>
                  <div className="flex gap-[30px] self-stretch md:flex-col">
                    <div className="flex w-full rounded border border-solid border-gray-400 bg-white-A700 p-[13px]">
                      <Img
                        src="images/img_image_1.png"
                        alt="imageone_one"
                        className="mb-3 mt-[11px] h-[94px] w-full object-cover md:h-auto"
                      />
                    </div>
                    <div className="flex w-full flex-col items-center rounded border border-solid border-gray-400 bg-white-A700 p-[25px] sm:p-5">
                      <Img src="images/img_image_2.png" alt="imagetwo_one" className="h-[45px] object-cover" />
                      <Img
                        src="images/img_image_5.png"
                        alt="imagefive_one"
                        className="mb-[9px] h-[39px] w-[82%] object-cover"
                      />
                    </div>
                    <div className="flex w-full flex-col items-center gap-[5px] rounded border border-solid border-gray-400 bg-white-A700 p-[25px] sm:p-5">
                      <Img
                        src="images/img_image_3.png"
                        alt="imagethree_one"
                        className="h-[47px] w-[48%] object-cover"
                      />
                      <Img
                        src="images/img_image_6.png"
                        alt="imagesix_one"
                        className="mb-[7px] h-[34px] w-[61%] object-cover"
                      />
                    </div>
                    <div className="flex w-full flex-col items-center gap-2.5 rounded border border-solid border-gray-400 bg-white-A700 p-[22px] sm:p-5">
                      <Img src="images/img_image_4.png" alt="imagefour_one" className="h-[50px] w-[34%] object-cover" />
                      <Img
                        src="images/img_image_7.png"
                        alt="imageseven_one"
                        className="mb-2.5 h-[29px] w-[88%] object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex w-[38%] flex-col items-start gap-1 rounded-[10px] bg-pink-A400_0f p-9 md:w-full md:p-5">
                  <Img
                    src="images/img_sentiment_satis.png"
                    alt="sentimentsatis"
                    className="ml-[47px] mt-3 h-[66px] w-[65px] object-cover md:ml-0"
                  />
                  <Text size="3xl" as="p" className="ml-[47px] !text-pink-A400 md:ml-0">
                    100000+
                  </Text>
                  <Text size="3xl" as="p" className="ml-[47px] !text-gray-700_01 md:ml-0">
                    Happy Customers
                  </Text>
                </div>
              </div>
              <Heading as="h2" className="mt-[149px] self-center text-center !text-pink-A400">
                Testimonials
              </Heading>
              <Text as="p" className="mt-2 w-[64%] self-center text-center !text-gray-700_01 md:w-full md:p-5">
                Lorem ipsum dolor sit amet. Et accusamus necessitatibus eos ducimus optio aut tempora natus. 33
                cupiditate quis et odit dignissimos et quaerat amet ut recusandae consequatur est{" "}
              </Text>
              <div className="mt-[60px] flex w-[93%] gap-[29px] md:w-full md:flex-col md:p-5">
                <div className="flex w-full flex-col items-start">
                  <Img
                    src="images/img_ellipse_11.png"
                    alt="tony_mathew_one"
                    className="relative z-[1] ml-[18px] h-[60px] w-[60px] rounded-[50%] md:ml-0"
                  />
                  <div className="relative mt-[-30px] h-[200px] self-stretch bg-white-A700 shadow-sm">
                    <div className="absolute left-[18.00px] top-[17%] m-auto flex w-[24%] flex-col items-start">
                      <RatingBar value={1} isEditable={true} size={20} starCount={4} className="flex justify-between" />
                      <Heading size="s" as="h3" className="mt-[5px] !font-montserrat !text-black-900">
                        Tony Mathew
                      </Heading>
                      <Heading size="xs" as="h4" className="!font-montserrat !text-gray-600">
                        Customer
                      </Heading>
                    </div>
                    <Text
                      size="xs"
                      as="p"
                      className="absolute bottom-[3.00px] left-0 right-0 m-auto w-[91%] !font-montserrat !text-gray-800"
                    >
                      Lorem ipsum dolor sit amet. Ex saepe fuga non porro autem sit doloremque nulla ut aliquam
                      dignissimos est corporis laboriosam cum eaque autem! Et quia itaque ab omnis alias id
                      reprehenderit tempore vel labore amet ut Quis Quis in nihil opt.
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
                  <div className="relative mt-[-30px] h-[198px] self-stretch bg-white-A700 shadow-sm">
                    <div className="absolute left-[18.00px] top-[17%] m-auto flex w-[24%] flex-col items-start">
                      <RatingBar value={1} isEditable={true} size={19} starCount={4} className="flex justify-between" />
                      <Heading size="s" as="h5" className="mt-1.5 !font-montserrat !text-black-900">
                        Tony Mathew
                      </Heading>
                      <Heading size="xs" as="h6" className="!font-montserrat !text-gray-600">
                        Customer
                      </Heading>
                    </div>
                    <Text
                      size="xs"
                      as="p"
                      className="absolute bottom-[3.00px] left-0 right-0 m-auto w-[90%] !font-montserrat !text-gray-800"
                    >
                      Lorem ipsum dolor sit amet. Ex saepe fuga non porro autem sit doloremque nulla ut aliquam
                      dignissimos est corporis laboriosam cum eaque autem! Et quia itaque ab omnis alias id
                      reprehenderit tempore vel labore amet ut Quis Quis in nihil opt.
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
                  <div className="relative mt-[-30px] h-[198px] self-stretch bg-white-A700 shadow-sm">
                    <div className="absolute left-[18.00px] top-[17%] m-auto flex w-[24%] flex-col items-start">
                      <RatingBar value={1} isEditable={true} size={19} starCount={4} className="flex justify-between" />
                      <Heading size="s" as="p" className="mt-1.5 !font-montserrat !text-black-900">
                        Tony Mathew
                      </Heading>
                      <Heading size="xs" as="p" className="!font-montserrat !text-gray-600">
                        Customer
                      </Heading>
                    </div>
                    <Text
                      size="xs"
                      as="p"
                      className="absolute bottom-[3.00px] left-0 right-0 m-auto w-[90%] !font-montserrat !text-gray-800"
                    >
                      Lorem ipsum dolor sit amet. Ex saepe fuga non porro autem sit doloremque nulla ut aliquam
                      dignissimos est corporis laboriosam cum eaque autem! Et quia itaque ab omnis alias id
                      reprehenderit tempore vel labore amet ut Quis Quis in nihil opt.
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
              <div className="mt-[149px] flex w-[64%] flex-col items-start gap-[17px] md:w-full md:p-5">
                <Heading as="h4" className="!text-pink-A400">
                  Meet Our Team
                </Heading>
                <Text as="p" className="!text-gray-700_01">
                  Lorem ipsum dolor sit amet. Et accusamus necessitatibus eos ducimus optio aut tempora natus. 33
                  cupiditate quis et odit dignissimos et quaerat amet ut recusandae consequatur est{" "}
                </Text>
              </div>
            </div>
            <div className="absolute left-[6%] top-[16%] m-auto h-[453px] w-[42%]">
              <div className="absolute bottom-[-0.18px] left-0 right-0 m-auto h-[430px] w-[90%] rounded-[10px] bg-pink-A400_1e" />
              <Img
                src="images/img_untitled_design.png"
                alt="untitleddesign"
                className="absolute left-0 right-0 top-[0.00px] m-auto h-[401px] w-full rounded-lg object-cover"
              />
            </div>
            <div className="absolute right-[6%] top-[16%] m-auto flex w-[42%] flex-col items-start">
              <Heading as="h4" className="text-center !text-pink-A400">
                About Company
              </Heading>
              <Heading as="h4" className="ml-0.5 mt-[3px] !text-gray-700_01 md:ml-0">
                Personalised Financial Services
              </Heading>
              <Text as="p" className="mt-[18px] !text-gray-700_01">
                Lorem ipsum dolor sit amet. Et accusamus necessitatibus eos ducimus optio aut tempora natus. 33
                cupiditate quis et odit dignissimos et quaerat amet ut recusandae consequatur est omnis quae eum
                voluptatum nemo. Lorem ipsum dolor sit amet. Et accusamus necessitatibus eos ducimus optio aut tempora
                natus. 33 cupiditate quis et odit dignissimos et quaerat amet ut recusandae consequatur est omnis quae
                eum voluptatum nemo.
              </Text>
              <div className="mt-[21px] flex w-[27%] items-center gap-3.5 md:w-full md:p-5">
                <div className="relative h-[24px] w-[24px] md:h-auto">
                  <Img src="images/img_arrow_1.svg" alt="arrowone_one" className="mb-2.5 h-[2px]" />
                  <Button
                    color="blue_600"
                    size="xs"
                    shape="circle"
                    className="absolute bottom-0 left-0 right-0 top-0 m-auto w-[24px] !rounded-[12px]"
                  >
                    <Img src="images/img_arrow_1.svg" />
                  </Button>
                </div>
                <Text as="p" className="!text-blue_gray-900">
                  Quick Process
                </Text>
              </div>
              <div className="mt-[18px] flex items-center gap-3.5">
                <Button color="blue_600" size="xs" shape="circle" className="w-[24px] self-end !rounded-[12px]">
                  <Img src="images/img_arrow_1.svg" />
                </Button>
                <Text as="p" className="!text-blue_gray-900">
                  Fast Disbursal
                </Text>
              </div>
            </div>
            <div className="absolute bottom-[9%] left-0 right-0 m-auto h-[727px] w-full max-w-[1258px] md:p-5">
              <div className="absolute bottom-[3.32px] left-0 right-0 m-auto flex w-[63%] flex-col items-center gap-9">
                <Heading size="xl" as="h2" className="text-center !font-lato leading-[50px] !text-gray-900">
                  <>
                    Get Touch With Us
                    <br /> Contact Now
                  </>
                </Heading>
                <div className="flex gap-5">
                  <a
                    href="#"
                    className="rounded-[5px] border-[0.5px] border-solid border-pink-A400 px-[35px] py-[13px] sm:px-5"
                  >
                    <Text size="lg" as="p" className="text-center !font-lato">
                      Contact Us
                    </Text>
                  </a>
                  <Button shape="round" className="min-w-[177px] font-lato font-medium sm:px-5">
                    Get Loan
                  </Button>
                </div>
              </div>
              <div className="absolute left-0 right-0 top-[4%] m-auto flex w-[95%] items-start justify-between gap-5 md:relative md:flex-col">
                <Img
                  src="images/img_rectangle_703_r.png"
                  alt="image"
                  className="mt-1 h-[337px] w-[24%] object-cover md:w-full"
                />
                <div className="flex w-[72%] flex-col items-start md:w-full">
                  <Text size="2xl" as="p" className="!text-pink-A400">
                    Starck
                  </Text>
                  <Text size="2xl" as="p" className="mt-0.5">
                    Managing Director
                  </Text>
                  <Text as="p" className="mt-[9px] !text-gray-700_01">
                    <>
                      Lorem ipsum dolor sit amet. Et accusamus necessitatibus eos ducimus optio aut tempora natus. 33
                      cupiditate quis et odit dignissimos et quaerat amet ut recusandae consequatur est <br />
                      Lorem ipsum dolor sit amet. Et accusamus necessitatibus eos ducimus optio aut tempora natus. 33
                      cupiditate quis et odit dignissimos et quaerat amet ut recusandae consequatur est omnis quae eum
                      voluptatum nemo.Lorem ipsum dolor sit amet. Et accusamus necessitatibus eos ducimus optio aut
                      tempora natus. 33 cupiditate quis et odit dignissimos et quaerat amet ut recusandae consequatur
                      est omnis quae eum voluptatum nemo.Lorem ipsum dolor sit amet. Et accusamus necessitatibus eos
                      ducimus optio aut tempora natus. 33 cupiditate quis et odit dignissimos et quaerat amet ut
                      recusandae consequatur est omnis quae eum voluptatum ,
                    </>
                  </Text>
                </div>
              </div>
              <div className="absolute left-0 right-0 top-[0.00px] m-auto h-[373px] w-full rounded bg-pink-A400_0a shadow-xs" />
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max w-full rounded-lg bg-white-A700 pr-[15px]">
                <div className="flex items-center justify-between gap-5 md:flex-col">
                  <div className="relative h-[712px] w-[36%] md:h-auto md:w-full">
                    <Img
                      src="images/img_untitled_design_712x451.png"
                      alt="untitleddesign"
                      className="h-[712px] w-full rounded-bl rounded-tl object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full flex-col items-center justify-end rounded-bl rounded-tl bg-gradient3 p-[31px] sm:p-5">
                      <Heading size="2xl" as="h1" className="mt-[549px] w-[87%] !font-lato leading-[50px] md:w-full">
                        Fill out the form to receive your loan
                      </Heading>
                    </div>
                  </div>
                  <div className="flex w-[59%] items-start justify-center gap-[11px] md:w-full md:flex-col">
                    <div className="mt-[47px] flex flex-1 flex-col items-start md:self-stretch">
                      <div className="flex justify-between gap-5 self-stretch md:flex-col">
                        <div className="flex w-[43%] flex-col gap-[50px] md:w-full">
                          <div className="flex flex-col items-start gap-[9px]">
                            <Text as="p" className="!text-blue_gray-900">
                              Name
                            </Text>
                            <Input shape="round" name="name" className="self-stretch sm:px-5" />
                          </div>
                          <div className="flex flex-col items-start gap-2.5">
                            <Text as="p" className="!text-blue_gray-900">
                              Mobile Number
                            </Text>
                            <Input shape="round" name="mobileNumber" className="self-stretch sm:px-5" />
                          </div>
                        </div>
                        <div className="flex w-[43%] flex-col items-start md:w-full">
                          <Text as="p" className="!text-blue_gray-900">
                            Email
                          </Text>
                          <Input shape="round" name="email" className="mt-2.5 self-stretch sm:px-5" />
                          <Text as="p" className="mt-[52px] !text-blue_gray-900">
                            Employee Type
                          </Text>
                          <Input shape="round" name="edittext" className="mt-[7px] self-stretch sm:px-5" />
                        </div>
                      </div>
                      <div className="mt-[50px] flex w-[77%] flex-wrap justify-between gap-5 md:w-full">
                        <Text as="p" className="!text-blue_gray-900">
                          Pincode
                        </Text>
                        <Text as="p" className="!text-blue_gray-900">
                          Annual Income
                        </Text>
                      </div>
                      <div className="mt-2.5 flex justify-between gap-5 self-stretch md:flex-col">
                        <Input shape="round" name="pincode" className="w-[43%] md:w-full sm:px-5" />
                        <Input shape="round" name="edittext_one" className="w-[43%] md:w-full sm:px-5" />
                      </div>
                      <Text as="p" className="mt-[52px] !text-blue_gray-900">
                        Type of Loan
                      </Text>
                      <Input
                        size="sm"
                        shape="round"
                        name="get_loan"
                        placeholder={`Get Loan`}
                        className="mt-2 w-[43%] font-lato font-medium sm:px-5"
                      />
                      <Button shape="round" className="mt-[50px] min-w-[300px] font-lato font-medium sm:px-5">
                        Submit
                      </Button>
                    </div>
                    <Img src="images/img_close.svg" alt="close_one" className="h-[17px] w-[17px] md:w-full" />
                  </div>
                </div>
              </div>
            </div>
            <footer className="absolute bottom-[0.50px] left-0 right-0 m-auto flex w-full items-center justify-center bg-gray-900 p-[26px] sm:p-5">
              <div className="mt-[30px] flex w-[78%] flex-col justify-center gap-20 md:w-full md:gap-[60px] sm:gap-10">
                <div className="mx-auto flex w-full max-w-[1078px] items-start justify-between gap-5 md:p-5 sm:flex-col">
                  <div className="flex flex-col items-start gap-[15px]">
                    <Heading size="md" as="p" className="!font-lato uppercase">
                      Navigation
                    </Heading>
                    <ul className="flex flex-col items-start gap-[13px]">
                      <li>
                        <a href="#">
                          <Text size="md" as="p" className="!font-lato !text-white-A700_cc">
                            Home
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text size="md" as="p" className="!font-lato !text-white-A700_cc">
                            Services
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text size="md" as="p" className="!font-lato !text-white-A700_cc">
                            Loan Calculator
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text size="md" as="p" className="!font-lato !text-white-A700_cc">
                            Blog
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text size="md" as="p" className="!font-lato !text-white-A700_cc">
                            Contact Us
                          </Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col items-start gap-[15px]">
                    <Heading size="md" as="p" className="!font-lato uppercase">
                      What We Do
                    </Heading>
                    <ul className="mb-[25px] flex flex-col items-start gap-[13px]">
                      <li>
                        <a href="#">
                          <Text size="md" as="p" className="!font-lato !text-white-A700_cc">
                            Home Loan
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text size="md" as="p" className="!font-lato !text-white-A700_cc">
                            Car Loan
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text size="md" as="p" className="!font-lato !text-white-A700_cc">
                            Medical Loan
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text size="md" as="p" className="!font-lato !text-white-A700_cc">
                            Education Loan
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text size="md" as="p" className="!font-lato !text-white-A700_cc">
                            Personal Loan
                          </Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col items-start gap-[15px]">
                    <Heading size="md" as="p" className="!font-lato uppercase">
                      LEGAL
                    </Heading>
                    <ul className="flex flex-col items-start gap-3.5">
                      <li>
                        <a href="#">
                          <Text size="md" as="p" className="!font-lato !text-white-A700_cc">
                            General Info
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text size="md" as="p" className="!font-lato !text-white-A700_cc">
                            Privacy Policy
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text size="md" as="p" className="!font-lato !text-white-A700_cc">
                            Terms of Service
                          </Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col items-start gap-[15px]">
                    <Heading size="md" as="p" className="!font-lato uppercase">
                      TALK TO US
                    </Heading>
                    <ul className="flex flex-col items-start gap-3">
                      <li>
                        <a href="#">
                          <Text size="md" as="p" className="!font-lato !text-white-A700_cc">
                            support@ercom.com
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text size="md" as="p" className="!font-lato !text-white-A700_cc">
                            +66 2399 1145
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text size="md" as="p" className="!font-lato !text-white-A700_cc">
                            Contact Us
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text size="md" as="p" className="!font-lato !text-white-A700_cc">
                            Facebook
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text size="md" as="p" className="!font-lato !text-white-A700_cc">
                            Linkedin
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text size="md" as="p" className="!font-lato !text-white-A700_cc">
                            Twitter
                          </Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col gap-[25px]">
                  <div className="mx-auto h-px w-full max-w-[1074px] bg-light_blue-900_19 md:p-5" />
                  <div className="flex items-end md:flex-col">
                    <Img
                      src="images/img_img_20240326_wa.png"
                      alt="img20240326wa"
                      className="h-[76px] w-[29%] object-cover md:w-full"
                    />
                    <Text size="s" as="p" className="mb-6 ml-[272px] text-center !font-lato !text-white-A700 md:ml-0">
                      © 2024 SP Finnacle. All Rights Reserved.{" "}
                    </Text>
                    <Button
                      color="white_A700_3f"
                      size="sm"
                      variant="outline"
                      className="mb-3.5 ml-[266px] w-[39px] rounded-[19px] md:ml-0"
                    >
                      <Img src="images/img_facebook.svg" />
                    </Button>
                    <Button
                      color="white_A700_3f"
                      size="sm"
                      variant="outline"
                      className="mb-3.5 ml-3.5 w-[39px] rounded-[19px] md:ml-0"
                    >
                      <Img src="images/img_link.svg" />
                    </Button>
                    <Button
                      color="white_A700_3f"
                      size="sm"
                      variant="outline"
                      className="mb-3.5 ml-3.5 w-[39px] rounded-[19px] md:ml-0"
                    >
                      <Img src="images/img_trash.svg" />
                    </Button>
                  </div>
                </div>
              </div>
            </footer>
            <div className="absolute bottom-0 left-[6%] top-0 my-auto h-[152px] w-[48%]">
              <div className="absolute left-[0.00px] top-[0.00px] m-auto h-[144px] w-[64%] md:h-auto">
                <Text size="5xl" as="p" className="bg-gradient bg-clip-text uppercase !text-transparent">
                  Services
                </Text>
                <Heading as="h4" className="absolute bottom-[24%] left-[4.35px] m-auto text-center !text-pink-A400">
                  What We’re Offering
                </Heading>
              </div>
              <Heading as="h4" className="absolute bottom-[-0.53px] left-0 right-0 m-auto w-max !text-gray-700_01">
                Select from a diverse array of financial options available
              </Heading>
            </div>
            <div className="absolute bottom-[38%] left-0 right-0 m-auto h-[60px] w-[17%] md:h-auto">
              <a href="#" className="mt-2.5">
                <Text size="3xl" as="p" className="!text-white-A700">
                  View More
                </Text>
              </a>
              <Button
                size="lg"
                className="absolute bottom-0 left-0 right-0 top-0 m-auto w-max min-w-[242px] rounded-lg font-lato font-medium sm:px-5"
              >
                Know More
              </Button>
            </div>
            <div className="absolute left-0 right-0 top-[11%] m-auto flex w-full max-w-[1042px] flex-col items-center md:p-5">
              <Text size="5xl" as="p" className="bg-gradient bg-clip-text uppercase !text-transparent">
                Finannacle
              </Text>
              <div className="relative mt-[-95px] flex flex-col items-center gap-[22px] self-stretch">
                <Heading as="h4" className="w-[86%] text-center !text-pink-A400 md:w-full">
                  <span className="text-pink-A400">
                    <>
                      Welcome to SP Finnacle <br />
                    </>
                  </span>
                  <span className="text-gray_700">Your Trusted Partner for Financial Solutions</span>
                </Heading>
                <Text as="p" className="text-center !text-blue_gray-900">
                  Lorem ipsum dolor sit amet. Et accusamus necessitatibus eos ducimus optio aut tempora natus. 33
                  cupiditate quis et odit dignissimos et quaerat amet ut recusandae consequatur est omnis quae eum
                  voluptatum nemo.
                </Text>
              </div>
            </div>
            <div className="absolute left-0 right-0 top-1/4 m-auto flex w-full max-w-[1258px] flex-col items-start gap-[37px] md:p-5">
              <Heading as="h4" className="w-[72%] !text-pink-A400 md:w-full">
                <span className="text-pink-A400">
                  <>
                    EMI Calculator
                    <br />
                  </>
                </span>
                <span className="text-gray_700">EMI Calculator for Home Loan, Car Loan & Personal Loan in India</span>
              </Heading>
              <div className="relative h-[1414px] self-stretch rounded-lg bg-[url(/public/images/img_group_35.svg)] bg-cover bg-no-repeat p-[23px] sm:p-5">
                <div className="absolute left-[28.68px] top-[23.77px] m-auto flex w-[39%] flex-wrap justify-between gap-5">
                  <Text as="p" className="!font-medium !text-pink-A400">
                    Home Loan
                  </Text>
                  <Text as="p" className="!font-medium">
                    Personal Loan
                  </Text>
                  <Text as="p" className="!font-medium">
                    Business Loan
                  </Text>
                </div>
                <Text as="p" className="absolute left-[28.68px] top-[8%] m-auto !text-blue_gray-900">
                  Home Loan Amount
                </Text>
                <Text as="p" className="absolute left-[28.68px] top-1/4 m-auto !text-blue_gray-900">
                  Interest Rate
                </Text>
                <Text as="p" className="absolute left-[28.68px] top-[42%] m-auto !text-blue_gray-900">
                  Loan Tenure
                </Text>
                <div className="absolute left-[19%] top-[8%] m-auto flex w-[17%] flex-col items-end">
                  <div className="flex self-stretch rounded border border-solid border-pink-A400 bg-pink-700_0f p-2.5">
                    <Text as="p" className="ml-3.5 self-end !text-blue_gray-900 md:ml-0">
                      5,00,000
                    </Text>
                  </div>
                  <Button className="relative mt-[-49px] min-w-[44px] rounded-br rounded-tr">₹</Button>
                </div>
                <div className="absolute left-[19%] top-[24%] m-auto flex w-[17%] flex-col items-end">
                  <div className="flex self-stretch rounded border border-solid border-pink-A400 bg-pink-700_0f p-[11px]">
                    <Text as="p" className="ml-[13px] !text-blue_gray-900 md:ml-0">
                      9
                    </Text>
                  </div>
                  <Button className="relative mt-[-49px] min-w-[44px] rounded-br rounded-tr">%</Button>
                </div>
                <div className="absolute left-[19%] top-[41%] m-auto flex w-[21%] flex-col items-end">
                  <div className="flex items-center justify-between gap-5 self-stretch rounded border border-solid border-pink-A400 bg-pink-700_0f">
                    <Text as="p" className="ml-6 !text-blue_gray-900">
                      12M
                    </Text>
                    <Button color="pink_800" className="min-w-[44px] rounded-br rounded-tr">
                      Mo
                    </Button>
                  </div>
                  <Button shape="square" className="relative mr-[45px] mt-[-49px] min-w-[44px] md:mr-0">
                    Yr
                  </Button>
                </div>
                <div className="absolute left-0 right-0 top-[14%] m-auto flex w-[97%] flex-col gap-1.5">
                  <SeekBar
                    inputValue={[90.81]}
                    trackColors={["#2d96d7", "#d9d9d9"]}
                    className="flex h-[20px] rounded"
                    trackClassName="h-[9px] w-full rounded-bl rounded-tl"
                    thumbClassName="flex justify-center items-center h-[20px] w-[20px] rounded-[50%] outline-none bg-blue-600"
                  />
                  <div className="flex flex-wrap justify-between gap-5">
                    <Text as="p">0</Text>
                    <Text as="p">50k</Text>
                    <Text as="p">1L</Text>
                    <Text as="p">1.5L</Text>
                    <Text as="p">2L</Text>
                    <Text as="p">2.5L</Text>
                    <Text as="p">3L</Text>
                    <Text as="p">3.5L</Text>
                    <Text as="p">4L</Text>
                    <Text as="p">4.5L</Text>
                    <Text as="p">5L</Text>
                    <Text as="p">5.5L</Text>
                  </div>
                </div>
                <div className="absolute left-0 right-0 top-[30%] m-auto flex w-[96%] flex-col gap-1.5">
                  <SeekBar
                    inputValue={[27.21]}
                    trackColors={["#2d96d7", "#d9d9d9"]}
                    className="flex h-[20px] rounded"
                    trackClassName="h-[9px] w-full rounded-bl rounded-tl"
                    thumbClassName="flex justify-center items-center h-[20px] w-[20px] rounded-[50%] outline-none bg-blue-600"
                  />
                  <div className="flex justify-between gap-5">
                    <Text as="p">5</Text>
                    <Text as="p">7.5</Text>
                    <Text as="p">10</Text>
                    <Text as="p">12.5</Text>
                    <Text as="p">15</Text>
                    <div className="flex w-[10%] flex-wrap justify-between gap-5">
                      <Text as="p">17.5</Text>
                      <Text as="p">20</Text>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-[96%] flex-col gap-1.5">
                  <SeekBar
                    inputValue={[53.97]}
                    trackColors={["#2d96d7", "#d9d9d9"]}
                    className="flex h-[20px] rounded"
                    trackClassName="h-[9px] w-full rounded-bl rounded-tl"
                    thumbClassName="flex justify-center items-center h-[20px] w-[20px] rounded-[50%] outline-none bg-blue-600"
                  />
                  <div className="flex justify-between gap-5">
                    <Text as="p">0</Text>
                    <Text as="p">3</Text>
                    <Text as="p">9</Text>
                    <Text as="p">12</Text>
                    <Text as="p">16</Text>
                    <div className="flex w-[10%] flex-wrap justify-between gap-5">
                      <Text as="p">24</Text>
                      <Text as="p">32</Text>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[7%] left-0 right-0 m-auto h-[548px] w-[97%] md:h-auto">
                  <div className="absolute left-0 right-0 top-[0.00px] m-auto flex w-full rounded border border-solid border-blue_gray-100 bg-gray-50">
                    <div className="ml-[119px] flex w-[76%] items-start justify-between gap-5 md:ml-0 md:w-full md:p-5 sm:flex-col">
                      <div className="flex w-[39%] items-start justify-between gap-5 sm:w-full">
                        <div className="mt-5 flex flex-col items-center">
                          <Text as="p" className="!text-blue_gray-900">
                            Loan EMI
                          </Text>
                          <Text size="4xl" as="p" className="mt-[15px] !text-blue_gray-900">
                            ₹ 500000
                          </Text>
                          <Text as="p" className="mt-16 !text-blue_gray-900">
                            Total Interest Payable
                          </Text>
                          <Text size="4xl" as="p" className="mt-2.5 !text-blue_gray-900">
                            ₹ 500000
                          </Text>
                          <Text as="p" className="mt-[63px] text-center !text-blue_gray-900">
                            <>
                              Total Payment
                              <br />
                              (Principal + Interest)
                            </>
                          </Text>
                          <Text size="4xl" as="p" className="mt-[9px] !text-blue_gray-900">
                            ₹ 50,16,157
                          </Text>
                        </div>
                        <div className="h-full w-px bg-blue_gray-100" />
                      </div>
                      <Text as="p" className="mt-[22px] !text-blue_gray-900">
                        Break-up of Total Payment
                      </Text>
                    </div>
                  </div>
                  <CircularProgressbar
                    strokeWidth={21}
                    value={33}
                    counterClockwise
                    styles={{ trail: { stroke: "#0f528b" }, path: { strokeLinecap: "square" } }}
                    className="mr-[153px] h-[433px] w-[37%] md:mr-0"
                  />
                  <div className="absolute bottom-[15%] right-[13%] m-auto flex w-[37%] border border-solid border-blue_gray-100 bg-white-A700 p-3">
                    <div className="ml-[9px] mt-2 flex w-[60%] flex-col gap-2.5 md:ml-0 md:w-full">
                      <div className="flex items-start gap-[18px]">
                        <div className="h-[20px] w-[20px] rounded-[10px] bg-blue-600" />
                        <Text as="p" className="!text-blue_gray-900">
                          Principal Loan Amount
                        </Text>
                      </div>
                      <div className="flex w-[65%] items-center gap-[18px] md:w-full">
                        <div className="h-[20px] w-[20px] rounded-[10px] bg-light_blue-900" />
                        <Text as="p" className="!text-blue_gray-900">
                          Total Interest
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-0 right-0 top-[14%] m-auto flex h-[97px] flex-col items-end bg-[url(/public/images/img_group_39.svg)] bg-cover bg-no-repeat p-[25px] md:h-auto sm:p-5">
                    <Text as="p" className="rotate-[50deg] !text-blue-600">
                      65%
                    </Text>
                  </div>
                  <div className="absolute right-[6%] top-[19%] m-auto flex h-[120px] w-[11%] items-center justify-center bg-[url(/public/images/img_group_38.svg)] bg-cover bg-no-repeat p-[34px] md:h-auto sm:p-5">
                    <Text as="p" className="rotate-[-61deg] self-end !text-blue-600">
                      45%
                    </Text>
                  </div>
                </div>
                <Button
                  shape="round"
                  className="absolute bottom-[4%] left-0 right-0 m-auto min-w-[177px] font-lato font-medium sm:px-5"
                >
                  Get Loan
                </Button>
              </div>
            </div>
            <div className="absolute left-0 right-0 top-[0.00px] m-auto flex w-full flex-col items-start">
              <header className="ml-[31px] flex w-[92%] items-center justify-between gap-5 md:ml-0 md:w-full md:flex-col md:p-5">
                <Img
                  src="images/img_img_20240326_wa0029.png"
                  alt="img20240326_one"
                  className="h-[100px] w-[15%] object-cover md:w-full"
                />
                <div className="flex w-[49%] flex-wrap justify-between gap-5 md:w-full">
                  <a href="Home" target="_blank" rel="noreferrer" className="self-start">
                    <Text size="lg" as="p" className="!font-lato !text-pink-A400">
                      Home
                    </Text>
                  </a>
                  <a href="Services" target="_blank" rel="noreferrer" className="self-start">
                    <Text size="lg" as="p" className="!font-lato">
                      Services
                    </Text>
                  </a>
                  <a href="#" className="self-start">
                    <Text size="lg" as="p" className="!font-lato">
                      Loan Calculator
                    </Text>
                  </a>
                  <a href="Blogs" target="_blank" rel="noreferrer" className="self-end">
                    <Text size="lg" as="p" className="!font-lato">
                      Blogs
                    </Text>
                  </a>
                  <a href="#" className="self-start">
                    <Text size="lg" as="p" className="!font-lato">
                      Contact Us
                    </Text>
                  </a>
                </div>
              </header>
              <div className="relative h-[600px] self-stretch bg-[url(/public/images/img_group_73.png)] bg-cover bg-no-repeat md:h-auto">
                <div className="w-full">
                  <Slider
                    autoPlay
                    autoPlayInterval={2000}
                    responsive={{ "0": { items: 1 }, "550": { items: 1 }, "1050": { items: 1 } }}
                    renderDotsItem={(props: DotsItem) => {
                      return props?.isActive ? (
                        <div className="mr-[6.51px] h-[15px] w-[15px] rounded-[7px] border border-solid border-white-A700" />
                      ) : (
                        <div className="mr-[6.51px] h-[6px] w-[6px] bg-white-A700" />
                      );
                    }}
                    activeIndex={sliderState}
                    onSlideChanged={(e: EventObject) => {
                      setSliderState(e?.item);
                    }}
                    ref={sliderRef}
                    items={[...Array(3)].map(() => (
                      <React.Fragment key={Math.random()}>
                        <div className="mx-auto flex bg-gradient2 px-[90px] md:px-5">
                          <div className="mx-auto flex w-full max-w-[1161px] items-center justify-between gap-5 md:flex-col">
                            <div className="flex w-[70%] justify-between gap-5 md:w-full md:flex-col">
                              <div className="relative h-[598px] w-[88%] md:w-full">
                                <div className="absolute bottom-0 left-[14%] top-0 my-auto h-full w-px bg-white-A700_30" />
                                <div className="absolute bottom-0 right-[36%] top-0 my-auto h-full w-px bg-white-A700_30" />
                                <div className="absolute left-0 right-0 top-[31%] m-auto flex w-full flex-col gap-[17px]">
                                  <Heading size="3xl" as="h1">
                                    Unlock Your Financial Potential: Explore Our Loan Services Today!
                                  </Heading>
                                  <Text size="2xl" as="p" className="!font-normal !text-white-A700">
                                    We make it easy for you to secure the ideal loan from India&#39;s premier lenders
                                    effortlessly.
                                  </Text>
                                </div>
                                <Button
                                  size="xl"
                                  className="absolute bottom-[23%] left-[0.00px] m-auto min-w-[206px] rounded-lg font-medium sm:px-5"
                                >
                                  Get Loan
                                </Button>
                              </div>
                              <div className="h-[598px] w-px bg-white-A700_30 md:h-px md:w-[598px]" />
                            </div>
                            <div className="h-[598px] w-px bg-white-A700_30 md:h-px md:w-[598px]" />
                          </div>
                        </div>
                      </React.Fragment>
                    ))}
                  />
                </div>
              </div>
            </div>
            <div className="absolute bottom-[40%] left-0 right-0 m-auto flex w-full max-w-[1151px] gap-[49px] md:relative md:flex-col md:p-5">
              <div className="relative mb-0.5 h-[502px] w-full bg-blue_gray-100_01 md:mb-0">
                <Img
                  src="images/img_untitled_design_500x352.png"
                  alt="untitleddesign"
                  className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[500px] w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full flex-col items-start justify-end bg-gradient1 p-[31px] sm:p-5">
                  <Heading as="h4" className="mb-[18px] mt-[390px] !font-montserrat">
                    Home Loan
                  </Heading>
                </div>
              </div>
              <div className="relative h-[502px] w-full md:h-auto">
                <Img
                  src="images/img_untitled_design_502x364.png"
                  alt="untitleddesign"
                  className="h-[502px] w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full flex-col items-start justify-end bg-gradient1 p-8 sm:p-5">
                  <Heading as="h4" className="mb-[18px] mt-[389px] !font-montserrat">
                    Credit Card
                  </Heading>
                </div>
              </div>
              <div className="relative h-[502px] w-full md:h-auto">
                <Img
                  src="images/img_untitled_design_500x350.png"
                  alt="untitleddesign"
                  className="h-[500px] w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full flex-col items-start justify-end bg-gradient1 p-8 sm:p-5">
                  <Heading as="h4" className="mb-[18px] mt-[389px] !font-montserrat">
                    Personal Loan
                  </Heading>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
