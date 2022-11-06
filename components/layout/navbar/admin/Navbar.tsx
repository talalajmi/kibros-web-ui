import Image from "next/image";
import React, { useState } from "react";
import SettingsIcon from "../../../icons/SettingsIcon";
import { iconColor } from "../../../../utils/colors";
import LogoutIcon from "../../../icons/LogoutIcon";
import HomeIcon from "../../../icons/HomeIcon";
import LessonsIcon from "../../../icons/LessonsIcon";
import FileIcon from "../../../icons/FileIcon";
import { Filter } from "../../../icons";
import UserIcon from "../../../icons/UserIcon";
import { avatar, logo } from "../../../../constants";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="flex flex-col bg-primary">
      <div className="flex items-center justify-between py-[15px]">
        <div className="flex items-center justify-start">
          <Image
            src={logo}
            alt="kibros-logo"
            width={200}
            height={50}
            objectFit="cover"
          />
          <p className="text-xl font-bold text-darkText">Admin Panel</p>
        </div>
        <div className="px-29">
          <div className="w-40 relative h-40">
            <Image
              src={avatar}
              alt="avatar-image"
              objectFit="cover"
              width={40}
              height={40}
              className="cursor-pointer "
              onClick={() => setShowDropdown((current) => !current)}
            />
            <div
              className={`${
                showDropdown ? "block" : "hidden"
              } absolute top-58 right-0 h-[170px] w-[230px] rounded-8 bg-primaryLight`}
            >
              <div className="flex items-center justify-start space-x-10 py-14 px-20">
                <Image
                  src={avatar}
                  alt="avatar-image"
                  objectFit="cover"
                  width={40}
                  height={40}
                />
                <div className="flex flex-col">
                  <p className="text-white">Yasser Al Kiyomi</p>
                  <p className="text-darkTextSecondary/[0.38]">Admin</p>
                </div>
              </div>
              <div className="flex cursor-pointer items-center justify-start space-x-10 border border-x-0 border-darkText/[0.12] py-10 px-20 hover:bg-primary/[0.2]">
                <SettingsIcon size="20" color={iconColor} />
                <p className="text-white">Settings</p>
              </div>
              <div className="flex cursor-pointer items-center justify-start space-x-10 border-darkText/[0.12] py-10 px-20 hover:bg-primary/[0.5]">
                <LogoutIcon size="20" color={iconColor} />
                <p className="text-white">Logout</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row space-x-[8px] bg-primaryLight py-16 px-[24px]">
        <button className="flex cursor-pointer flex-row space-x-10 rounded-8 bg-secondary px-16 py-[8px]">
          <HomeIcon size="24" color={iconColor} />
          <p className="text-darkText">Dashboard</p>
        </button>
        <div className="flex cursor-pointer flex-row space-x-10 rounded-8 px-16 py-[8px] focus:bg-secondary">
          <LessonsIcon size="24" color={iconColor} />
          <p className="text-darkText">Lessons</p>
        </div>
        <div className="flex cursor-pointer flex-row space-x-10 rounded-8 px-16 py-[8px] focus:bg-secondary">
          <FileIcon size="24" color={iconColor} />
          <p className="text-darkText">Files</p>
        </div>
        <div className="flex cursor-pointer flex-row space-x-10 rounded-8 px-16 py-[8px] focus:bg-secondary">
          <Filter size="24" color={iconColor} />
          <p className="text-darkText">Categories</p>
        </div>
        <div className="flex cursor-pointer flex-row space-x-10 rounded-8 px-16 py-[8px] focus:bg-secondary">
          <UserIcon size="24" color={iconColor} />
          <p className="text-darkText">Users</p>
        </div>
        <div className="flex cursor-pointer flex-row space-x-10 rounded-8 px-16 py-[8px] focus:bg-secondary">
          <UserIcon size="24" color={iconColor} />
          <p className="text-darkText">Staff / Admin</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
