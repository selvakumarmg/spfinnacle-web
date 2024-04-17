interface Slide {
  url: string;
  heading?: string;
  context?: string;
  button?: {
    text: string;
    onClick: () => void;
  };
}

export const slides: Slide[] = [
  {
    url: "/public/images/img_group_73.png",
    heading:
      "Unlock Your Financial Potential: Explore Our Loan Services Today!",
    context:
      "We make it easy for you to secure the ideal loan from India's premier lenders effortlessly.",
    button: {
      text: "Know More",
      onClick: () => {
        /* Add functionality for Know More button */
      },
    },
  },
  {
    url: "https://cdn.pixabay.com/photo/2016/07/16/16/21/flower-1522260_640.jpg",
    heading: "Join Our Team",
    context:
      "Welcome to SP Finnacle, where we are passionate about innovation and creating meaningful impact. Join us in shaping the future of Accounting!",
    button: {
      text: "Join Us",
      onClick: () => {
        /* Add functionality for Know More button */
      },
    },
  },
  {
    url: "https://cdn.pixabay.com/photo/2020/07/17/18/26/flowers-5415011_640.jpg",
    heading:
      "Unlock Your Financial Potential: Explore Our Loan Services Today!",
    context:
      "We make it easy for you to secure the ideal loan from India's premier lenders effortlessly.",
    button: {
      text: "Know More",
      onClick: () => {
        /* Add functionality for Know More button */
      },
    },
  },
  {
    url: "https://cdn.pixabay.com/photo/2021/04/27/18/26/cygnet-6212139_640.jpg",
    heading:
      "Unlock Your Financial Potential: Explore Our Loan Services Today!",
    context:
      "We make it easy for you to secure the ideal loan from India's premier lenders effortlessly.",
    button: {
      text: "Know More",
      onClick: () => {
        /* Add functionality for Know More button */
      },
    },
  },
];
