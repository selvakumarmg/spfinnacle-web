import React from "react";

const sizes = {
  "5xl": "text-8xl font-medium md:text-5xl",
  xs: "text-xs font-normal",
  lg: "text-base font-medium",
  s: "text-sm font-normal",
  "2xl": "text-xl font-medium",
  "3xl": "text-2xl font-medium md:text-[22px]",
  "4xl": "text-[25px] font-medium md:text-[23px] sm:text-[21px]",
  xl: "text-lg font-normal",
  md: "text-[15px] font-normal",
};

export type TextProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  size = "xl",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-black-900 font-poppins ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
