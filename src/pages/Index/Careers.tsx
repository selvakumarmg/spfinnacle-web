import RightArrowIcon from "assets/images/RightArrowIcon";
import { Text } from "components";
import { careers } from "pages/constants/careers";
import React, { useState } from "react";
import ResumeUpload from "./ResumeUpload";

export default function CareerUp() {
  // Define state to manage which job listing's dialog is open
  const [openJobDialog, setOpenJobDialog] = useState(null);

  // Function to open the dialog for a specific job listing
  const openDialog = (job) => {
    setOpenJobDialog(job);
  };

  // Function to close the dialog
  const closeDialog = () => {
    setOpenJobDialog(null);
  };

  const handleSubmit = () => {
    // This function will be called when the user submits the uploaded resume
    // Perform any further processing here, such as sending the file to a server
    console.log("Resume submitted!");
    alert("Resume Upload SuccessFull");
    closeDialog();
  };

  return (
    <>
      <div className="relative w-[80%] h-screen mx-auto md:grid-cols-1 grid grid-cols-2 gap-y-5 place-items-center sm:grid-cols-1 sm:h-[70%]">
        {/* Job listings */}
        {careers.map((job, index) => (
          <div
            key={index}
            className="w-[500px] h-[230px] border-2 border-[#E80D55] rounded-md flex flex-col gap-y-4 justify-center p-8 sm:w-full sm:h-fit sm:p-4"
          >
            <Text
              as="h2"
              className="text-[#E80D55] !font-semibold !text-xl sm:!text-lg"
            >
              {job.title}
            </Text>
            <Text
              as="p"
              className="!text-lg !font-normal sm:text-sm text-[#353535] sm:text-justify"
            >
              {job.description}
            </Text>
            {/* Apply button */}
            <button
              type="button"
              className="!font-medium !text-lg text-[#0F528B] flex gap-x-3 hover:cursor-pointer"
              onClick={() => openDialog(job)}
            >
              Apply Now <RightArrowIcon className="w-5 text-[#0F528B]" />
            </button>
          </div>
        ))}
        {/* Resume upload dialog */}
        {openJobDialog && (
          <div className="absolute w-full h-fit top-[-20%] md:top-[-15%]">
            {/* <ResumeUpload /> */}
            <ResumeUpload onSubmit={handleSubmit} />
            <button
              type="button"
              onClick={closeDialog}
              className="absolute text-2xl text-[#E80D55] top-4 right-[28%] md:right-[18%] xl:right-[24%] sm:right-3 sm:text-lg"
            >
              X
            </button>
          </div>
        )}
      </div>
    </>
  );
}
