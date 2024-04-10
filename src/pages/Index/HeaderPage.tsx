import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";

export default function HeaderPage() {
  return (
    <>
      <div className="w-[80%] md:w-[90%] mx-auto flex items-center justify-between text-white ">
        <Logo />
        <Menu />
      </div>

      {/* <header className="ml-[31px] flex w-[92%] items-center justify-between gap-5 md:ml-0 md:w-full md:flex-col md:p-5"> */}
      {/* <Img
          src="images/img_img_20240326_wa0029.png"
          alt="img20240326_one"
          className="h-[100px] w-[15%] object-cover md:w-full"
        /> */}
      {/* <div className="flex w-[49%] flex-wrap justify-between gap-5 md:w-full">
          <a
            href="Home"
            target="_blank"
            rel="noreferrer"
            className="self-start"
          >
            <Text size="lg" as="p" className="!font-lato !text-pink-A400">
              Home
            </Text>
          </a>
          <a
            href="Services"
            target="_blank"
            rel="noreferrer"
            className="self-start"
          >
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
      </header> */}
    </>
  );
}
