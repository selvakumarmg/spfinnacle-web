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
          className="fixed bottom-4 right-4 bg-[#E80D55] text-white p-3 rounded-lg drop-shadow shadow-[#000000]/100 z-0 opacity-50  hover:opacity-100 hover:shadow-inner hover:shadow-[#E5E5E5]"
          onClick={scrollToTop}
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
            <path
              d="M7 11L12 6L17 11M12 18V7"
              stroke="#FFFFFF"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
