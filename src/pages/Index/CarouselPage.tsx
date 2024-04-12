import { Button, Heading, Slider, Text } from "components";
import React from "react";
import AliceCarousel, { DotsItem, EventObject } from "react-alice-carousel";

export default function CarouselPage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef<AliceCarousel>(null);
  return (
    <>
      <div className="relative h-[600px] self-stretch bg-[url(/public/images/img_group_73.png)] bg-cover bg-no-repeat md:h-auto">
        <div className="w-full">
          <Slider
            autoPlay
            autoPlayInterval={2000}
            responsive={{
              "0": { items: 1 },
              "550": { items: 1 },
              "1050": { items: 1 },
            }}
            renderDotsItem={(props: DotsItem) => {
              return props?.isActive ? (
                <div className="mr-[6.51px] h-[15px] w-[15px] rounded-[7px] border border-solid border-white-A700" />
              ) : (
                <div className="mr-[6.51px] h-[6px] w-[6px] bg-white-A700" />
              );
            }}
            activeIndex={sliderState}
            onSlideChanged={(e: EventObject) => {
              setSliderState(e?.item);
            }}
            ref={sliderRef}
            items={[...Array(3)].map(() => (
              <React.Fragment key={Math.random()}>
                <div className="mx-auto flex bg-gradient2 px-[90px] md:px-5">
                  <div className="mx-auto flex w-full max-w-[1161px] items-center justify-between gap-5 md:flex-col">
                    <div className="flex w-[70%] justify-between gap-5 md:w-full md:flex-col">
                      <div className="relative h-[598px] w-[88%] md:w-full">
                        <div className="absolute bottom-0 left-[14%] top-0 my-auto h-full w-px bg-white-A700_30" />
                        <div className="absolute bottom-0 right-[36%] top-0 my-auto h-full w-px bg-white-A700_30" />
                        <div className="absolute left-0 right-0 top-[31%] m-auto flex w-full flex-col gap-[17px]">
                          <Heading size="3xl" as="h1">
                            Unlock Your Financial Potential: Explore Our Loan
                            Services Today!
                          </Heading>
                          <Text
                            size="2xl"
                            as="p"
                            className="!font-normal !text-white-A700"
                          >
                            We make it easy for you to secure the ideal loan
                            from India&#39;s premier lenders effortlessly.
                          </Text>
                        </div>
                        <Button
                          size="xl"
                          className="absolute bottom-[23%] left-[0.00px] m-auto min-w-[206px] rounded-lg font-medium sm:px-5"
                        >
                          Get Loan
                        </Button>
                      </div>
                      <div className="h-[598px] w-px bg-white-A700_30 md:h-px md:w-[598px]" />
                    </div>
                    <div className="h-[598px] w-px bg-white-A700_30 md:h-px md:w-[598px]" />
                  </div>
                </div>
              </React.Fragment>
            ))}
          />
        </div>
      </div>
    </>
  );
}
