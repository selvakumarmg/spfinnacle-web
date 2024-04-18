import RightArrowIcon from "assets/images/RightArrowIcon";
import { Text } from "components";
import React, { useState } from "react";
import ResumeUpload from "./ResumeUpload";

export default function Careers() {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className="relative w-[80%] h-screen mx-auto md:grid-cols-1 grid grid-cols-2 gap-y-5 place-items-center sm:grid-cols-1 sm:h-[70%]">
        {/* Career 1 */}
        <div className="w-[500px] h-[230px] border-2 border-[#E80D55] rounded-md flex flex-col gap-y-4 justify-center p-8 sm:w-full sm:h-fit sm:p-4">
          <Text
            as="h2"
            className="text-[#E80D55] !font-semibold !text-xl sm:!text-lg"
          >
            Voice Processing
          </Text>
          <Text
            as="p"
            className="!text-lg !font-normal sm:text-sm text-[#353535] sm:text-justify"
          >
            Lorem ipsum dolor sit amet. Et accusamus necessitatibus eos ducimus
            optio aut tempora natus. 33 cupiditate quis et odit dignissimos et
            quaerat amet ut recusandae consequatur est.
          </Text>
          <button
            type="button"
            className="!font-medium !text-lg text-[#0F528B] flex gap-x-3 hover:cursor-pointer"
            onClick={openDialog}
          >
            Apply Now <RightArrowIcon className="w-5 text[#0F528B]" />
          </button>
        </div>
        {/* Career 1 */}
        {/* Career 2 */}
        <div className="w-[500px] h-[230px] border-2 border-[#E80D55] rounded-md flex flex-col gap-y-4 justify-center p-8 sm:w-full sm:h-fit sm:p-4">
          <Text
            as="h2"
            className="text-[#E80D55] !font-semibold !text-xl sm:!text-lg"
          >
            Non Voice Processing
          </Text>
          <Text
            as="p"
            className="!text-lg !font-normal sm:text-sm text-[#353535] sm:text-justify"
          >
            Lorem ipsum dolor sit amet. Et accusamus necessitatibus eos ducimus
            optio aut tempora natus. 33 cupiditate quis et odit dignissimos et
            quaerat amet ut recusandae consequatur est.
          </Text>
          <button
            type="button"
            className="!font-medium !text-lg text-[#0F528B] flex gap-x-3 hover:cursor-pointer"
            onClick={openDialog}
          >
            Apply Now <RightArrowIcon className="w-5 text[#0F528B]" />
          </button>
        </div>
        {/* Career 2 */}
        {/* Career 3 */}
        <div className="w-[500px] h-[230px] border-2 border-[#E80D55] rounded-md flex flex-col gap-y-4 justify-center p-8 sm:w-full sm:h-fit sm:p-4">
          <Text
            as="h2"
            className="text-[#E80D55] !font-semibold !text-xl sm:!text-lg"
          >
            Analyst
          </Text>
          <Text
            as="p"
            className="!text-lg !font-normal sm:text-sm text-[#353535] sm:text-justify"
          >
            Lorem ipsum dolor sit amet. Et accusamus necessitatibus eos ducimus
            optio aut tempora natus. 33 cupiditate quis et odit dignissimos et
            quaerat amet ut recusandae consequatur est.
          </Text>
          <button
            type="button"
            className="!font-medium !text-lg text-[#0F528B] flex gap-x-3 hover:cursor-pointer"
            onClick={openDialog}
          >
            Apply Now <RightArrowIcon className="w-5 text[#0F528B]" />
          </button>
        </div>
        {/* Career 3 */}
        {/* Career 4 */}
        <div className="w-[500px] h-[230px] border-2 border-[#E80D55] rounded-md flex flex-col gap-y-4 justify-center p-8 sm:w-full sm:h-fit sm:p-4">
          <Text
            as="h2"
            className="text-[#E80D55] !font-semibold !text-xl sm:!text-lg"
          >
            Customer Management
          </Text>
          <Text
            as="p"
            className="!text-lg !font-normal sm:text-sm text-[#353535] sm:text-justify"
          >
            Lorem ipsum dolor sit amet. Et accusamus necessitatibus eos ducimus
            optio aut tempora natus. 33 cupiditate quis et odit dignissimos et
            quaerat amet ut recusandae consequatur est.
          </Text>
          <button
            type="button"
            className="!font-medium !text-lg text-[#0F528B] flex gap-x-3 hover:cursor-pointer"
            onClick={openDialog}
          >
            Apply Now <RightArrowIcon className="w-5 text[#0F528B]" />
          </button>
        </div>
        {/* Career 4 */}
        {isOpen && (
          <div className="absolute w-full h-fit top-[-25%]">
            <ResumeUpload />
            <button
              type="button"
              onClick={closeDialog}
              className="absolute text-2xl text-[#E80D55] top-4 right-[28%]"
            >
              X
            </button>
          </div>
        )}
      </div>
      {/* <FileUploadForm /> */}
    </>
  );
}
