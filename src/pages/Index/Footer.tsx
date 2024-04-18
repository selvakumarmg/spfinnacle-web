import CompanyLogo from "assets/images/CompanyLogo";
import { Button, Heading, Img, Text } from "components";
import React from "react";

export default function Footer() {
  return (
    <div className="relative w-full h-screen sm:bottom-0 sm:h-max sm:top-20">
      <footer className="absolute bottom-[0.50px] left-0 right-0 m-auto flex w-full items-center justify-center bg-gray-900 p-[26px] sm:p-5 sm:relative">
        <div className="mt-[30px] flex w-[78%] flex-col justify-center gap-20 md:w-full md:gap-[60px] sm:gap-10">
          <div className="mx-auto flex w-full max-w-[1078px] items-start justify-between gap-5 md:p-5 sm:flex-col">
            <div className="flex flex-col items-start gap-[15px]">
              <Heading size="md" as="p" className="!font-lato uppercase">
                Navigation
              </Heading>
              <ul className="flex flex-col items-start gap-[13px]">
                <li>
                  <a href="#">
                    <Text
                      size="md"
                      as="p"
                      className="!font-lato !text-white-A700_cc"
                    >
                      Home
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text
                      size="md"
                      as="p"
                      className="!font-lato !text-white-A700_cc"
                    >
                      Services
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text
                      size="md"
                      as="p"
                      className="!font-lato !text-white-A700_cc"
                    >
                      Loan Calculator
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text
                      size="md"
                      as="p"
                      className="!font-lato !text-white-A700_cc"
                    >
                      Blog
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text
                      size="md"
                      as="p"
                      className="!font-lato !text-white-A700_cc"
                    >
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
                    <Text
                      size="md"
                      as="p"
                      className="!font-lato !text-white-A700_cc"
                    >
                      Home Loan
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text
                      size="md"
                      as="p"
                      className="!font-lato !text-white-A700_cc"
                    >
                      Car Loan
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text
                      size="md"
                      as="p"
                      className="!font-lato !text-white-A700_cc"
                    >
                      Medical Loan
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text
                      size="md"
                      as="p"
                      className="!font-lato !text-white-A700_cc"
                    >
                      Education Loan
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text
                      size="md"
                      as="p"
                      className="!font-lato !text-white-A700_cc"
                    >
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
                    <Text
                      size="md"
                      as="p"
                      className="!font-lato !text-white-A700_cc"
                    >
                      General Info
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text
                      size="md"
                      as="p"
                      className="!font-lato !text-white-A700_cc"
                    >
                      Privacy Policy
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text
                      size="md"
                      as="p"
                      className="!font-lato !text-white-A700_cc"
                    >
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
                    <Text
                      size="md"
                      as="p"
                      className="!font-lato !text-white-A700_cc"
                    >
                      support@ercom.com
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text
                      size="md"
                      as="p"
                      className="!font-lato !text-white-A700_cc"
                    >
                      +66 2399 1145
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text
                      size="md"
                      as="p"
                      className="!font-lato !text-white-A700_cc"
                    >
                      Contact Us
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text
                      size="md"
                      as="p"
                      className="!font-lato !text-white-A700_cc"
                    >
                      Facebook
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text
                      size="md"
                      as="p"
                      className="!font-lato !text-white-A700_cc"
                    >
                      Linkedin
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text
                      size="md"
                      as="p"
                      className="!font-lato !text-white-A700_cc"
                    >
                      Twitter
                    </Text>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-[25px] sm:gap-0">
            <div className="mx-auto h-px w-full max-w-[1074px] bg-light_blue-900_19" />
            <div className="flex items-end md:flex-col sm:flex-col">
              <CompanyLogo />
              <Text
                size="s"
                as="p"
                className="mb-6 ml-[272px] text-center !font-lato !text-white-A700 md:ml-0 sm:ml-0"
              >
                © 2024 SP Finnacle. All Rights Reserved.{" "}
              </Text>
              <div className="flex gap-3">
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
        </div>
      </footer>
    </div>
  );
}
