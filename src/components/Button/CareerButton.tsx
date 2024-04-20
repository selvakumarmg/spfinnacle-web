import React from "react";

export const CareerButton: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="bg-[#E80D55] w-44 h-14 rounded-md text-[#FFFFFF] font-medium text-[22px] hover:bg-[hsl(340,89%,58%)]"
    >
      {children}
    </button>
  );
};
