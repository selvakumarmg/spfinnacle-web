import { CareerButton } from "components/Button/CareerButton";
import React, { useState } from "react";
import FileUploadForm from "./FileUploadForm";

interface ResumeUploadProps {
  onSubmit: () => void;
}
const ResumeUpload: React.FC<ResumeUploadProps> = ({ onSubmit }) => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleFileUpload = (file: File) => {
    setUploadedFile(file);
  };

  return (
    <div className="w-[50%] h-[500px] bg-[#FFFFFF] mx-auto rounded-sm drop-shadow-2xl flex flex-col justify-center items-center gap-y-16 xl:w-[60%] xl:gap-y-8 md:w-[80%] md:h-[450px] sm:w-full sm:h-[350px] sm:gap-y-3">
      <div className="w-[60%] h-[70%] rounded-3xl flex flex-col justify-between items-center border-2 border-[#868181] sm:w-[75%]">
        <h2 className="font-medium text-xl text-[#E80D55] mt-8 sm:text-base sm:mt-4">
          Upload Your Resume
        </h2>
        <div className="w-full h-[80%] flex justify-center items-center bg-[#F7F9FB] rounded-b-3xl">
          <div className="flex justify-center items-center w-[80%] h-[80%] border-4 border-dashed rounded-3xl border-[#E2E6EA] sm:w-full sm:h-full">
            <FileUploadForm />
          </div>
        </div>
      </div>
      <CareerButton type="button" onClick={onSubmit}>
        Submit
      </CareerButton>
    </div>
  );
};

export default ResumeUpload;
