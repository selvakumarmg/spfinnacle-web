import type { UploadProps } from "antd";
import { message, Upload } from "antd";
import React, { useState } from "react";

const { Dragger } = Upload;
const MAX_FILE_SIZE_MB = 2; // Maximum file size allowed in MB

const FileUploadForm: React.FC = () => {
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const [fileList, setFileList] = useState([]);

  const props: UploadProps = {
    name: "file",
    multiple: false,
    accept: ".jpeg,.jpg,.doc,.docx,.pdf", // Specify accepted file types
    action: "https://api.escuelajs.co/api/v1/files/upload",
    fileList: fileList,
    onChange(info) {
      const { status } = info.file;
      if (status === "done") {
        const uploadedFileName = info.file.name;
        setUploadedFile(uploadedFileName);
        message.success(`${uploadedFileName} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    beforeUpload(file) {
      // Check if the file type is accepted
      const acceptedTypes = [".jpeg", ".jpg", ".doc", ".docx", ".pdf"];
      const fileExtension = file.name.split(".").pop();
      if (!acceptedTypes.includes(`.${fileExtension}`)) {
        message.error(`File type ${fileExtension} is not allowed.`);
        return false; // Prevent upload
      }

      // Check if the file size is within the limit
      const fileSizeMB = file.size / 1024 / 1024; // Convert bytes to MB
      if (fileSizeMB > MAX_FILE_SIZE_MB) {
        message.error(
          `File size exceeds the maximum limit of ${MAX_FILE_SIZE_MB} MB.`,
        );
        return false; // Prevent upload
      }

      // Clear the uploaded file state before uploading a new file
      setUploadedFile(null);
      setFileList([file]);
      return true; // Proceed with the upload
    },
    onDrop(e) {
      const files = e.dataTransfer.files;
      if (files.length > 1) {
        message.warning(
          "Multiple files dropped. Only one file can be uploaded at a time.",
        );
        setFileList([]); // Clear the file list to prevent upload
        return;
      }

      const unsupportedFiles = Array.from(files).filter((file) => {
        const fileExtension = file.name.split(".").pop();
        return ![".jpeg", ".jpg", ".doc", ".docx", ".pdf"].includes(
          `.${fileExtension}`,
        );
      });
      if (unsupportedFiles.length > 0) {
        message.error("One or more dropped files are not supported.");
      }
    },
  };

  return (
    <Dragger {...props} className="w-full h-full">
      <p className="ant-upload-text sm:text-base">
        Click or drag file to this area to upload
      </p>
      <p className="ant-upload-hint sm:text-xs">
        *.jpg, *.jpeg, *.pdf, *.doc, *.docx files only accepted
      </p>
      <p className="ant-upload-hint sm:text-xs">
        (File Size should not exceed 2MB)
      </p>
    </Dragger>
  );
};

export default FileUploadForm;
