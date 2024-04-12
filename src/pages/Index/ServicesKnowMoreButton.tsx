import { Button } from "components";
import React from "react";

export default function ServicesKnowMoreButton() {
  return (
    <div className="absolute bottom-[10%] left-0 right-0 m-auto h-[60px] w-[17%] md:h-auto">
      <Button
        size="lg"
        className="absolute bottom-0 left-0 right-0 top-0 m-auto w-max min-w-[242px] rounded-lg font-lato font-medium sm:px-5 hover:bg-[hsl(340,89%,58%)]"
      >
        Know More
      </Button>
    </div>
  );
}
