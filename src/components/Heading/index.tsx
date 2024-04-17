import React from "react";

const sizes = {
  "3xl": "text-[40px] font-semibold md:text-[38px] sm:text-4xl",
  "2xl": "text-[39px] font-semibold md:text-[37px] sm:text-[35px]",
  xl: "text-[35px] font-bold md:text-[33px] sm:text-[31px]",
  s: "text-sm font-semibold",
  md: "text-[15px] font-bold",
  xs: "text-[10px] font-semibold",
  lg: "text-2xl font-semibold md:text-[22px]",
};

export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "lg",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component
      className={`text-white-A700 font-poppins ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Heading };
