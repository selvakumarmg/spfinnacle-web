import React, { useEffect, useState } from "react";

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle scrolling to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Function to handle showing/hiding the button based on scroll position
  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 300) {
      // You can adjust this threshold value as needed
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Add scroll event listener when component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          title="scroll-to-the-top"
          className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-md"
          onClick={scrollToTop}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="w-6 h-6"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 2L1 13h6v9h10v-9h6z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
