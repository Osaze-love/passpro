"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import React, { useState, useRef } from "react";

const Notifications = () => {
  const [selectedMethod, setSelectedMethod] = useState("email");
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null); // Create a ref for the file input

  // Handles file selection and enforces file type and size constraints
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files || []);
    const validFiles = selectedFiles.filter(
      (file) =>
        file.type.match("image/(png|jpg|jpeg)") &&
        file.size <= 256 * 1024 * 1024
    );

    // Limits the number of files to 5
    if (validFiles.length + files.length <= 5) {
      setFiles((prevFiles) => [...prevFiles, ...validFiles]);
    } else {
      alert("You can only upload a maximum of 5 files.");
    }
  };

  // Removes selected file by name
  const removeFile = (fileName: string) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
  };
  const handleButtonClick = () => {
    fileInputRef.current?.click(); // Trigger the file input click
  };

  return (
    <div className="px-[43px] py-[40px] bg-[#fdf7f4]">
      <section className="flex items-center justify-between mb-[32px]">
        <h3 className="text-[20px] font-semibold">
          Notification to Verified Organizers
        </h3>
      </section>
      <section className="bg-white px-4 py-5 rounded-[8px] shadow-sm space-y-[24px]">
        <div className="flex space-x-2 items-center">
          {/* Send via Email */}
          <div
            onClick={() => setSelectedMethod("email")}
            className={`flex flex-col items-center justify-center w-[212px] h-[85px] space-y-[8px] shadow-sm rounded-[8px] border-2 relative cursor-pointer ${
              selectedMethod === "email"
                ? "bg-[#F5F5F5] border-[#FC6435]"
                : "bg-[#F5F5F5] border-[#D9D9D9]"
            }`}
          >
            <Image
              src={"/icons/mailicon.svg"}
              width={24}
              height={24}
              alt="mailicon"
            />
            <p className="text-[15px] font-semibold">Send via Email</p>
            {selectedMethod === "email" && (
              <>
                <div className="absolute -top-[9px] right-0 w-0 h-0 border-t-[40px] border-t-[#FC6435] border-l-[40px] border-l-transparent rounded-tr-[8px]" />
                <div className="absolute z-30 top-[-7px] right-[2px] flex items-center justify-center w-[20px] h-[20px] rounded-full">
                  <Image
                    src={"/icons/checkicon.svg"}
                    width={12}
                    height={12}
                    alt="checkicon"
                  />
                </div>
              </>
            )}
          </div>

          {/* Send via Firebase */}
          <div
            onClick={() => setSelectedMethod("firebase")}
            className={`flex flex-col items-center justify-center w-[212px] h-[85px] space-y-[8px] shadow-sm rounded-[8px] border-2 relative cursor-pointer ${
              selectedMethod === "firebase"
                ? "bg-[#F5F5F5] border-[#FC6435]"
                : "bg-[#F5F5F5] border-[#D9D9D9]"
            }`}
          >
            <Image
              src={"/icons/bellicon.svg"}
              width={24}
              height={24}
              alt="bellicon"
            />
            <p className="text-[15px] font-semibold">Send via Firebase</p>
            {selectedMethod === "firebase" && (
              <>
                <div className="absolute -top-[9px] right-0 w-0 h-0 border-t-[40px] border-t-[#FC6435] border-l-[40px] border-l-transparent rounded-tr-[8px]" />
                <div className="absolute z-30 top-[-7px] right-[2px] flex items-center justify-center w-[20px] h-[20px] rounded-full">
                  <Image
                    src={"/icons/checkicon.svg"}
                    width={12}
                    height={12}
                    alt="checkicon"
                  />
                </div>
              </>
            )}
          </div>
        </div>
        <div className="grid w-full items-center gap-[8px]">
          <Label htmlFor="send" className="">
            <div className="flex items-start font-bold text-[20px] text-[#333333]">
              <p>Being sent to</p>
              <span className="text-[#F24455] text-md">*</span>
            </div>
          </Label>
          <select
            id="send"
            className=" py-[8px] outline-none border rounded-[8px] px-4 shadow-sm h-[50px]"
          >
            <option value="lagos">Lagos</option>
            <option value="abuja">Abuja</option>
          </select>
        </div>
        <div className="grid w-full items-center gap-[8px]">
          <Label htmlFor="subject" className="">
            <div className="flex items-start font-bold text-[20px] text-[#333333]">
              <p>Subject</p>
              <span className="text-[#F24455] text-md">*</span>
            </div>
          </Label>
          <select
            id="subject"
            className=" py-[8px] outline-none border rounded-[8px] px-4 shadow-sm h-[50px]"
          >
            <option value="lagos">Lagos</option>
            <option value="abuja">Abuja</option>
          </select>
        </div>
        <div className="grid w-full items-center gap-[8px]">
          <Label htmlFor="subject" className="">
            <div className="flex space-x-1 items-center font-bold text-[20px] text-[#333333]">
              <p>Upload Image (Optional)</p>
              <span className="text-[#F24455] text-[12px] font-normal">
                Max 5 files can be uploaded. Maximum upload size is 256M
              </span>
            </div>
          </Label>
          <div className="py-[8px] border rounded-[8px] px-4 shadow-sm h-[50px] flex items-center space-x-2">
            <Button
              className="py-[10px] font-bold text-white bg-[#FC6435] hover:bg-[#FC6435] transition-all active:scale-95"
              onClick={handleButtonClick} // Use button click to open the file dialog
            >
              Choose File
            </Button>
            <input
              type="file"
              id="upload"
              multiple
              ref={fileInputRef} // Attach the ref to the input
              onChange={handleFileChange}
              className="hidden"
            />
            {files.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {files.map((file) => (
                  <div
                    key={file.name}
                    className="flex items-center bg-[#F5F5F5] p-2 rounded-md shadow-md space-x-2"
                  >
                    <p className="text-[#49454F] text-[14px] truncate max-w-[100px]">
                      {file.name}
                    </p>
                    <button
                      onClick={() => removeFile(file.name)}
                      className="text-[#FC6435] font-bold"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-[#49454F] text-[20px]">No File Chosen</p>
            )}
          </div>
          <p className="text-[14px] font-medium text-[#999999]">
            Supported files: .png, .jpg, .jpeg. Image will be resized into
            1920x460 px
          </p>
        </div>
      </section>
    </div>
  );
};

export default Notifications;