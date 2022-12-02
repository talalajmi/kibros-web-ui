import React, { useState } from "react";
import { borderColor, kiBrosDarkBlueColor } from "../../../../utils/colors";
import { Input } from "../../../form";
import Select from "react-select";
import {
  reactSelectTheme,
  getReactSelectStyles,
} from "../../../../utils/ReactSelectTheme";
import { Switch } from "@mui/material";
import { lessonLevelOptions } from "../../../../helpers/lessonHelper";
import Image from "next/image";
import { X } from "../../../icons";

const AddLesson = () => {
  const [img, setImg] = useState("");

  const handleImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImg(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex h-full flex-col space-y-48 space-x-60 p-60 lg:flex-row lg:items-center lg:justify-center">
        <div className="flex flex-1 flex-col space-y-20">
          <div className="flex flex-col items-start justify-between">
            <p className="text-xl text-white">Add Lesson</p>
            <p className="text-lg text-darkTextSecondary/[.6]">
              Please enter lesson details here
            </p>
          </div>
          <form className="flex flex-col items-center space-y-20">
            <div className="flex w-full space-x-20">
              <Input className="bg-primary-base" placeholder="Lesson Name" />
              <Input
                className="bg-primary-base"
                placeholder="Lesson Subtitle"
              />
            </div>
            <Input
              className="bg-primary-base"
              placeholder="Lesson Description"
            />
            <div className="flex w-full space-x-20">
              <Input className="bg-primary-base" placeholder="Video Url" />
              <Input className="bg-primary-base" placeholder="Vimeo Video Id" />
            </div>
            <Input className="bg-primary-base" placeholder="Instructor Name" />
            <div className="flex w-full space-x-20">
              <Input className="bg-primary-base" placeholder="Duration" />
              <Input className="bg-primary-base" placeholder="Sorting Number" />
            </div>
            <Select
              placeholder="Choose Level"
              className="w-full"
              theme={reactSelectTheme}
              options={lessonLevelOptions}
              styles={getReactSelectStyles(kiBrosDarkBlueColor)}
            />
            <div className="flex w-full space-x-20">
              <Select
                placeholder="Choose category"
                className="w-full"
                theme={reactSelectTheme}
                styles={{
                  control: (baseStyles: any) => ({
                    ...baseStyles,
                    backgroundColor: kiBrosDarkBlueColor,
                    borderColor: borderColor,
                    padding: 6,
                  }),
                }}
              />
              <Select
                placeholder="Choose Lessons"
                className="w-full"
                theme={reactSelectTheme}
                styles={{
                  control: (baseStyles: any) => ({
                    ...baseStyles,
                    backgroundColor: kiBrosDarkBlueColor,
                    borderColor: borderColor,
                    padding: 6,
                  }),
                }}
              />
            </div>
            <div className="flex w-full flex-col space-y-5">
              <label className="w-full text-white">Upload Thumbnail</label>
              <input
                className="block w-full cursor-pointer rounded-8 border border-inputOutline/[.2] bg-primary-base text-sm text-white file:p-12 focus:outline-none"
                id="file_input"
                type="file"
                onChange={handleImg}
              />
            </div>
            <div className="flex w-full flex-col space-y-20">
              <p className="text-white">Attachments</p>
              <div className="flex w-full space-x-20">
                <Input className="bg-primary-base" placeholder="File Name" />
                <Input className="bg-primary-base" placeholder="Download Url" />
              </div>
              <div className="flex justify-start">
                <button className="rounded-8 bg-secondary-base py-10 px-20 uppercase text-white">
                  Add Attachment
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="flex h-full flex-1 flex-col space-y-20">
          <div className="flex flex-[2] justify-center">
            <div className="flex w-full flex-col">
              <p className="text-lg text-white">Lesson Thumbnail Preview</p>
              <Image
                src={img}
                alt=""
                objectFit="contain"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className="flex flex-1 items-end">
            <div className="grid w-full grid-flow-row grid-cols-1 gap-20">
              <div className="grid grid-flow-col grid-rows-1 gap-20">
                <div className="flex items-center justify-between rounded-8 border border-inputOutline/[0.22] p-10 text-darkText/[0.5] transition duration-300 ease-in-out hover:bg-white/[0.05]">
                  <p>My File</p>
                  <X
                    size="15"
                    className="cursor-pointer fill-white transition duration-300 ease-in-out hover:fill-secondary-base"
                  />
                </div>
                <div className="flex items-center justify-between rounded-8 border border-inputOutline/[0.22] p-10 text-darkText/[0.5] transition duration-300 ease-in-out hover:bg-white/[0.05]">
                  <p>My File</p>
                  <X
                    size="15"
                    className="cursor-pointer fill-white transition duration-300 ease-in-out hover:fill-secondary-base"
                  />
                </div>
                <div className="flex items-center justify-between rounded-8 border border-inputOutline/[0.22] p-10 text-darkText/[0.5] transition duration-300 ease-in-out hover:bg-white/[0.05]">
                  <p>My File</p>
                  <X
                    size="15"
                    className="cursor-pointer fill-white transition duration-300 ease-in-out hover:fill-secondary-base"
                  />
                </div>
              </div>
              <div className="grid grid-flow-col grid-rows-1 gap-20">
                <div className="flex items-center justify-between rounded-8 border border-inputOutline/[0.22] p-10 text-darkText/[0.5] transition duration-300 ease-in-out hover:bg-white/[0.05]">
                  <p>My File</p>
                  <X
                    size="15"
                    className="cursor-pointer fill-white transition duration-300 ease-in-out hover:fill-secondary-base"
                  />
                </div>
                <div className="flex items-center justify-between rounded-8 border border-inputOutline/[0.22] p-10 text-darkText/[0.5] transition duration-300 ease-in-out hover:bg-white/[0.05]">
                  <p>My File</p>
                  <X
                    size="15"
                    className="cursor-pointer fill-white transition duration-300 ease-in-out hover:fill-secondary-base"
                  />
                </div>
                <div className="flex items-center justify-between rounded-8 border border-inputOutline/[0.22] p-10 text-darkText/[0.5] transition duration-300 ease-in-out hover:bg-white/[0.05]">
                  <p>My File</p>
                  <X
                    size="15"
                    className="cursor-pointer fill-white transition duration-300 ease-in-out hover:fill-secondary-base"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center space-y-20">
        <div className="flex space-x-20">
          <div className="flex items-center justify-center">
            <Switch defaultChecked color="secondary" />
            <p className="mt-[8px] text-darkTextSecondary/[0.68]">is Paid?</p>
          </div>
          <div className="flex items-center justify-center">
            <Switch defaultChecked color="secondary" />
            <p className="mt-[8px] text-darkTextSecondary/[0.68]">
              is Highlighted?
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Switch defaultChecked color="secondary" />
            <p className="mt-[8px] text-darkTextSecondary/[0.68]">is New?</p>
          </div>
          <div className="flex items-center justify-center">
            <Switch defaultChecked color="secondary" />
            <p className="mt-[8px] text-darkTextSecondary/[0.68]">
              is Activated?
            </p>
          </div>
        </div>
        <div className="flex space-x-20">
          <button className="flex items-center justify-center rounded-8 bg-secondary-base py-5 px-20 text-white transition duration-300 ease-in-out hover:bg-secondary-dark">
            Submit
          </button>
          <button className="flex items-center justify-center rounded-8 border border-inputOutline/[0.2] bg-primary-light py-5 px-20 text-white transition duration-300 ease-in-out hover:bg-white/[0.05]">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddLesson;
