import { Button, Text } from "components";
import React from "react";

export default function ServicesKnowMoreButton() {
  return (
    <div className="absolute bottom-[38%] left-0 right-0 m-auto h-[60px] w-[17%] md:h-auto">
      <a href="#" className="mt-2.5">
        <Text size="3xl" as="p" className="!text-white-A700">
          View More
        </Text>
      </a>
      <Button
        size="lg"
        className="absolute bottom-0 left-0 right-0 top-0 m-auto w-max min-w-[242px] rounded-lg font-lato font-medium sm:px-5"
      >
        Know More
      </Button>
    </div>
  );
}
