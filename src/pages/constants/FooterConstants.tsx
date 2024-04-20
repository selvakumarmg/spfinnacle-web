import CompanyLogo from "assets/images/CompanyLogo";
import React from "react";

// Replace the phone number with your own
const phoneNumber = "+918122302260";

// For openIn give any one value "blank" or "parent"
export const footerData = [
  {
    title: "Navigation",
    links: [
      { title: "Home", url: "#home", openIn: "parent" },
      { title: "Services", url: "#services-page", openIn: "parent" },
      { title: "Loan Calculator", url: "#welcome-page", openIn: "parent" },
      { title: "Blog", url: "#product-page", openIn: "parent" },
      { title: "Contact Us", url: "#career-page", openIn: "parent" },
    ],
  },
  {
    title: "What We Do",
    links: [
      { title: "Home Loan", url: "#", openIn: "blank" },
      { title: "Car Loan", url: "#", openIn: "blank" },
      { title: "Medical Loan", url: "#", openIn: "blank" },
      { title: "Education Loan", url: "#", openIn: "blank" },
      { title: "Personal Loan", url: "#", openIn: "blank" },
    ],
  },
  {
    title: "Legal",
    links: [
      { title: "General Info", url: "#", openIn: "parent" },
      { title: "Privacy Policy", url: "#", openIn: "parent" },
      { title: "Terms of Service", url: "#", openIn: "parent" },
    ],
  },
  {
    title: "Talk To Us",
    links: [
      { title: "support@ercom.com", url: "support@ercom.com", openIn: "blank" },
      {
        title: "+91 8122302260",
        url: `https://wa.me/${phoneNumber}`,
        openIn: "blank",
      },
      { title: "Facebook", url: "https://www.facebook.com", openIn: "blank" },
      { title: "Linkedin", url: "https://in.linkedin.com/", openIn: "blank" },
      {
        title: "Twitter",
        url: "https://twitter.com/?lang=en",
        openIn: "blank",
      },
      {
        title: "Instagram",
        url: "https://www.instagram.com/sp_finnacle?igsh=djJyZWIyengxMHE1",
        openIn: "blank",
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
    icon: "images/img_trash.svg",
    alt: "Instagram",
    url: "https://www.instagram.com/sp_finnacle?igsh=djJyZWIyengxMHE1",
  },
];
