import { Button, Heading, Text } from "components";
import React, { useState } from "react";
import LoanForm from "./LoanForm";

export default function ContactUs() {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };
  return (
    <div
      className="relative w-full h-screen flex items-center"
      id="contact-us-page"
    >
      <div className="m-auto flex w-[63%] flex-col items-center gap-9">
        <Heading
          size="xl"
          as="h2"
          className="text-center !font-lato leading-[50px] !text-gray-900"
        >
          <>
            Get Touch With Us
            <br /> Contact Now
          </>
        </Heading>

        <div className="flex gap-5">
          <a
            href="#home-page"
            className="rounded-[5px] border-[0.5px] border-solid border-pink-A400 px-[44px] py-[11px] sm:px-5"
          >
            <Text size="lg" as="p" className="text-center !font-lato">
              Contact Us
            </Text>
          </a>
          <Button
            shape="round"
            className="min-w-[177px] font-lato font-medium sm:px-5"
            onClick={openDialog}
          >
            Get Loan
          </Button>
          {isOpen && (
            <div className="absolute top-14 left-16">
              <LoanForm />
              <button
                type="button"
                onClick={closeDialog}
                className="absolute text-2xl text-[#E80D55] top-3 right-[11%]"
              >
                X
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
function openDialog() {
  throw new Error("Function not implemented.");
}
