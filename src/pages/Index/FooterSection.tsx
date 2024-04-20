import { Heading, Text } from "components";
import React from "react";

interface NavLink {
  title: string;
  url: string;
  openIn: string;
}

interface FooterSectionProps {
  title: string;
  links: NavLink[];
}

const navigate = (url: string, target: string) => {
  window.open(url, `_${target}`);
};

const FooterSection: React.FC<FooterSectionProps> = ({ title, links }) => (
  <div className="flex flex-col items-start gap-[15px]">
    <Heading size="md" as="p" className="!font-lato uppercase">
      {title}
    </Heading>
    <ul className="flex flex-col items-start gap-[13px]">
      {links.map((link, index) => (
        <li key={index}>
          <a onClick={() => navigate(link.url, link.openIn)}>
            <Text
              size="md"
              as="p"
              className="!font-lato !text-white-A700_cc hover:cursor-pointer"
            >
              {link.title}
            </Text>
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default FooterSection;
