import React from "react";

const shapes = {
  square: "rounded-[0px]",
  circle: "rounded-[50%]",
  round: "rounded-[5px]",
} as const;
const variants = {
  fill: {
    pink_800: "bg-pink-800 text-white-A700",
    blue_600: "bg-blue-600",
    pink_A400: "bg-pink-A400 text-white-A700",
  },
  outline: {
    white_A700_3f: "border-white-A700_3f border border-solid",
  },
} as const;
const sizes = {
  lg: "h-[60px] px-[35px] text-base",
  xl: "h-[61px] px-[35px] text-2xl",
  xs: "h-[24px] px-[5px]",
  sm: "h-[39px] px-3",
  md: "h-[47px] px-[35px] text-base",
} as const;

type ButtonProps = Omit<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "onClick"
> &
  Partial<{
    className: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
  }>;
const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "md",
  color = "pink_A400",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
