// Navbar.tsx
import React, { useEffect, useState } from "react";

interface MenuItem {
  name: string;
  id: string; // Change link to ID
}

interface NavbarProps {
  logo: React.ReactNode;
  menuItems: MenuItem[];
}

const Navbar: React.FC<NavbarProps> = ({ logo, menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Close the menu on item click
  };

  return (
    <nav className="bg-white-A700 p-4 ">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div>
          <a href="#home">{logo}</a>
        </div>
        {isMobile ? (
          <div>
            <button
              className="text-slate-900 focus:outline-none"
              onClick={toggleMenu}
            >
              {/* Hamburger Icon */}
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        ) : (
          <div className="md:block">
            <ul className="flex space-x-10">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleItemClick(item.id)} // Handle click and pass ID
                    className="text-white text-base font-medium text-[hsl(0,0%,0%)] hover:underline hover:underline-offset-8 hover:text-[#E80D55]"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {/* Mobile Menu */}
      {isOpen && isMobile && (
        <div className=" mt-2">
          <ul className="flex flex-col space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => handleItemClick(item.id)} // Handle click and pass ID
                  className="block px-4 py-2 text-white"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
