import { Text } from "components";
import FileUploadForm from "pages/Index/FileUploadForm";
import React, { ChangeEvent, useState } from "react";

export default function ResumeUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>(
    "Click to browse your files"
  );

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    if (event.target.files && event.target.files.length > 0) {
      const uploadedFile = event.target.files[0];
      console.log(uploadedFile);
      setFile(uploadedFile);
      setFileName(uploadedFile.name);
    }
  };
  return (
    <>
      <div className="w-[50%] h-[600px] bg-[#FFFFFF] mx-auto rounded-sm drop-shadow-2xl flex flex-col justify-center items-center gap-y-16">
        <div className="w-[60%] h-[70%] rounded-3xl flex flex-col justify-between items-center border-2 border-[#868181]">
          <Text as="h2" className="!font-medium !text-xl text-[#E80D55] mt-8">
            Upload Your Resume
          </Text>
          {/* Division with gray background containing the div for input field */}
          <div className="w-full h-[80%] flex justify-center items-center bg-[#F7F9FB] rounded-b-3xl">
            {/* Contains the Label And Inout Field */}
            <div className="flex justify-center items-center w-[80%] h-[80%] border-4 border-dashed rounded-3xl border-[#E2E6EA]">
              {/* <label
                htmlFor="resumeUpload"
                className="flex justify-center items-center text-[#8e9098] w-full h-full text-center hover:cursor-pointer bg-transparent"
              >
                {fileName}
              </label>
              <input
                type="file"
                placeholder="Click to browse or drag and drop your files"
                id="resumeUpload"
                name="resumeUpload"
                className="text-[#8e9098] w-full h-full text-center hover:cursor-pointer bg-transparent focus:outline-none hidden"
                onChange={handleFileChange}
              /> */}
              <FileUploadForm />
            </div>
          </div>
        </div>
        <button
          type="button"
          className="bg-[#E80D55] w-44 h-14 rounded-md text-[#FFFFFF] font-medium text-[22px] hover:bg-[hsl(340,89%,58%)]"
        >
          Submit
        </button>
      </div>
    </>
  );
}
