import Image from "next/image";
import React, { useState } from "react";
import { avatar, logo } from "../../../../constants";
import { iconColor } from "../../../../utils/colors";
import { LogoutIcon, SearchIcon, SettingsIcon } from "../../../icons";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="flex items-center justify-center p-[50px]">
      <div className="w-full rounded-10 bg-primaryLight py-10 px-20 text-white">
        <div className="grid grid-flow-col grid-rows-1 gap-[456px]">
          <div className="grid grid-flow-col items-center justify-start">
            <SearchIcon size="24" color={iconColor} />
          </div>
          <div className="grid grid-flow-col items-center justify-end">
            <Image
              src={logo}
              alt="kibros-logo"
              width={250}
              height={50}
              objectFit="cover"
            />
          </div>
          <div className="grid grid-flow-col items-center justify-end">
            <div className="grid grid-flow-col grid-rows-1 items-center justify-between gap-20">
              <div className="grid grid-cols-1 text-end">
                <div className="grid grid-rows-2">
                  <p className="text-white">Talal Al Ajmi</p>
                  <p className="text-success">Premium User</p>
                </div>
              </div>
              <div className="w-40 relative grid h-40 grid-cols-1">
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
                  <div className="grid grid-flow-col grid-rows-1 items-center justify-end gap-20 py-14 px-20">
                    <div className="grid grid-cols-1 text-end">
                      <div className="grid grid-rows-2">
                        <p className="text-white">Talal Al Ajmi</p>
                        <p className="text-success">Premium User</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1">
                      <Image
                        src={avatar}
                        alt="avatar-image"
                        objectFit="cover"
                        width={40}
                        height={40}
                      />
                    </div>
                  </div>
                  <div className="border-text-darkText/[0.12] flex cursor-pointer items-center justify-end space-x-10 border border-x-0 py-10 px-20">
                    <p className="text-white">الإعدادات</p>
                    <SettingsIcon size="20" color={iconColor} />
                  </div>
                  <div className="border-text-darkText/[0.12] flex cursor-pointer items-center justify-end space-x-10 py-10 px-20">
                    <p className="text-white">تسجيل الخروج</p>
                    <LogoutIcon size="20" color={iconColor} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
