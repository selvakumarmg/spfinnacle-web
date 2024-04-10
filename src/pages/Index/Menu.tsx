import { Text } from "components";
import React from "react";

export default function Menu() {
  return (
    <div>
      <ul className="flex md:gap-[1vw] gap-[4vw] sm:hidden flex-1">
        <li>
          <a
            href="#home-page"
            className="cursor-pointer text-base font-medium text-[hsl(0,0%,0%)]"
          >
            <Text size="lg" as="p">
              Home
            </Text>
          </a>
        </li>
        <li>
          <a
            href="#services-page"
            className="cursor-pointer text-base font-medium text-[hsl(0,0%,0%)]"
          >
            <Text size="lg" as="p">
              Services
            </Text>
          </a>
        </li>
        <li>
          <a
            href="#welcome-page"
            className="cursor-pointer text-base font-medium text-[hsl(0,0%,0%)]"
          >
            <Text size="lg" as="p">
              Loan Calculator
            </Text>
          </a>
        </li>
        <li>
          <a
            href="#blogs-page"
            className="cursor-pointer text-base font-medium text-[hsl(0,0%,0%)]"
          >
            <Text size="lg" as="p">
              Blogs
            </Text>
          </a>
        </li>
        <li>
          <a
            href="#contact-us-page"
            className="cursor-pointer text-base font-medium text-[hsl(0,0%,0%)]"
          >
            <Text size="lg" as="p">
              Conatct Us
            </Text>
          </a>
        </li>
      </ul>
    </div>
  );
}
