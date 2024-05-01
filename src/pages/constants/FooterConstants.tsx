import CompanyLogo from "assets/images/CompanyLogo";
import React from "react";

// Replace the phone number with your own
const phoneNumber = "+918122302260";

// For openIn give any one value "blank" or "parent"
export const footerData = [
  {
    title: "Navigation",
    links: [
      { title: "Home", url: "/#home", openIn: "_parent" },
      { title: "Loan Calculator", url: "/#welcome-page", openIn: "_parent" },
      { title: "Services", url: "/#services-page", openIn: "_parent" },
      { title: "Jobs", url: "/#career-page", openIn: "_parent" },
      { title: "Contact Us", url: "/#footer-page", openIn: "_parent" },
    ],
  },
  {
    title: "What We Do",
    links: [
      { title: "Home Loan", url: "/emicalcualtor", openIn: "_blank" },
      { title: "Car Loan", url: "/emicalcualtor", openIn: "_blank" },
      { title: "Medical Loan", url: "/emicalcualtor", openIn: "_blank" },
      { title: "Education Loan", url: "/emicalcualtor", openIn: "_blank" },
      { title: "Personal Loan", url: "/emicalcualtor", openIn: "_blank" },
    ],
  },
  {
    title: "Legal",
    links: [
      { title: "General Info", url: "#", openIn: "_parent" },
      { title: "Privacy Policy", url: "#", openIn: "_parent" },
      { title: "Terms of Service", url: "#", openIn: "_parent" },
    ],
  },
  {
    title: "Talk To Us",
    links: [
      {
        title: "support@ercom.com",
        url: "mailto:support@ercom.com",
        openIn: "_blank",
      },
      {
        title: "+91 8122302260",
        url: `https://wa.me/${phoneNumber}`,
        openIn: "_blank",
      },
      { title: "Facebook", url: "https://www.facebook.com", openIn: "_blank" },
      { title: "Linkedin", url: "https://in.linkedin.com/", openIn: "_blank" },
      {
        title: "Twitter",
        url: "https://twitter.com/?lang=en",
        openIn: "_blank",
      },
      {
        title: "Instagram",
        url: "https://www.instagram.com/sp_finnacle?igsh=djJyZWIyengxMHE1",
        openIn: "_blank",
      },
    ],
  },
];

export const footerCmpny = {
  companyName: "SP Finnacle",
  companyLogoSrc: <CompanyLogo />,
  companyRights: " All Rights Reserved.",
};

interface SocialButton {
  icon: string;
  alt: string;
  url: string;
}

export const socialButtons: SocialButton[] = [
  {
    icon: "images/img_facebook.svg",
    alt: "Facebook",
    url: "https://www.facebook.com",
  },
  {
    icon: "images/img_link.svg",
    alt: "LinkedIn",
    url: "https://www.linkedin.com",
  },
  { icon: "images/img_trash.svg", alt: "Twitter", url: "https://twitter.com" },
  {
    icon: "images/instagram.svg",
    alt: "Instagram",
    url: "https://www.instagram.com/sp_finnacle?igsh=djJyZWIyengxMHE1",
  },
];
