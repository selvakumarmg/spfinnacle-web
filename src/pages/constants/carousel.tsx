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
    heading:
      "Unlock the Power of Your Finances: Discover Our Loan Offerings Now!",
    context:
      "Easily secure the perfect loan from India's top lenders with our hassle-free process.",
    button: {
      text: "Get Loan",
      onClick: () => {
        /* Add functionality for Know More button */
      },
    },
  },
  {
    url: "images/finance-4858797.jpg",
    heading: "Ready to turn your dreams into reality?",
    context:
      "With our seamless loan services, you can access the funds you need to make it happen.",
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
    context: "Empowering ambitious individuals to reach new heights of success",
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
      "Your Trusted Partner in Financial Growth: Start Your Loan Journey Today",
    context:
      "Experience peace of mind with our transparent process, competitive rates, and personalized support.",
    button: {
      text: "Know More",
      onClick: () => {
        /* Add functionality for Know More button */
      },
    },
  },
];
