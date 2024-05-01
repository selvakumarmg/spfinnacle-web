import { Heading } from "components";
import React from "react";
import { Link } from "react-router-dom";

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
  <div className="flex flex-col items-start gap-[15px]" id="footer-page">
    <Heading size="md" as="p" className="!font-lato uppercase">
      {title}
    </Heading>
    <ul className="flex flex-col items-start gap-[13px]">
      {links.map((link, index) =>
        title != "Talk To Us" ? (
          <li key={index}>
            <Link
              to={link.url}
              target={link.openIn}
              rel="noopener noreferrer"
              className="!font-lato !text-white-A700_cc hover:cursor-pointer"
            >
              {link.title}
            </Link>
          </li>
        ) : (
          <li key={index}>
            <a
              className="!font-lato !text-white-A700_cc hover:cursor-pointer"
              onClick={() => navigate(link.url, link.openIn)}
              rel="noopener noreferrer"
            >
              {link.title}
            </a>
          </li>
        )
      )}
    </ul>
  </div>
);

export default FooterSection;
