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
    url: "images/ai-generated-8298890.jpg",
    heading: "Step into your Dream Home with us",
    context:
      "We make it easy for you to secure the ideal loan from India's premier lenders effortlessly.",
    button: {
      text: "Get Loan",
      onClick: () => {
        /* Add functionality for Know More button */
      },
    },
  },
  {
    url: "images/finance-4858797.jpg",
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
  // https://cdn.pixabay.com/photo/2024/04/12/15/46/home-8692174_640.jpg
  {
    url: "images/home-8692174.jpg",
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
    url: "images/money-2724235.jpg",
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
