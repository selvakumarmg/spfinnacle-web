import { Button, Img, Text } from "components";
import React from "react";
import { footerData, socialButtons } from "../constants/FooterConstants";
import FooterSection from "./FooterSection";

interface FooterProps {
  companyName: string;
  companyLogoSrc: React.ReactNode;
  companyRights: string;
}

const Footer: React.FC<FooterProps> = ({
  companyName,
  companyLogoSrc,
  companyRights,
}) => {
  const handleButtonClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <footer className="relative bottom-[0.50px] left-0 right-0 m-auto flex w-full h-fit items-center justify-center bg-gray-900 p-[26px] sm:bottom-0 sm:h-max sm:top-20 md:top-80">
      <div className="mt-[30px] flex w-[78%] flex-col justify-center gap-20 md:w-full md:gap-[60px] sm:gap-10">
        <div className="mx-auto flex w-full max-w-[1078px] items-start justify-between gap-5 md:p-5 sm:flex-col">
          {footerData.map((section, index) => (
            <FooterSection key={index} {...section} />
          ))}
        </div>
        <div className="flex flex-col gap-[25px] sm:gap-0">
          <div className="mx-auto h-px w-full max-w-[1074px] bg-light_blue-900_19" />
          <div className="flex items-center justify-between md:flex-col sm:flex-col">
            <div>{companyLogoSrc}</div>
            <Text
              size="md"
              as="p"
              className="mb-6 text-center !font-lato sm:!text-xs !text-white-A700 md:ml-0 sm:ml-0"
            >
              © {companyName}. {companyRights}
            </Text>
            <div className="flex">
              {socialButtons.map((button, index) => (
                <Button
                  key={index}
                  color="white_A700_3f"
                  size="sm"
                  variant="outline"
                  className="mb-3.5 ml-3.5 w-[39px] rounded-[19px]"
                  onClick={() => handleButtonClick(button.url)}
                >
                  <Img src={button.icon} alt={button.alt} />
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
