import React, { useState } from "react";
import { Eye, EyeCrossed } from "../../icons";
import { useRouter } from "next/router";
import LockOpen from "../../icons/LockOpen";

const ChangePassword = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const showPassword = () => {
    setIsPasswordShown((current) => !current);
  };

  const router = useRouter();

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex w-[500px] flex-col items-center space-y-20">
        <p className="font-sans text-[30px] font-semibold text-white">
          Change Password
        </p>
        <div className="relative w-full">
          {isPasswordShown ? (
            <EyeCrossed
              size={20}
              className="absolute top-[15px] right-20 cursor-pointer fill-darkTextSecondary transition duration-300 ease-in-out hover:fill-secondary-base"
              onClick={() => showPassword()}
            />
          ) : (
            <Eye
              size={20}
              className="absolute top-[15px] right-20 cursor-pointer fill-darkTextSecondary transition duration-300 ease-in-out hover:fill-secondary-base"
              onClick={() => showPassword()}
            />
          )}
          <input
            className="w-full rounded-8 border border-inputOutline/[.2] bg-primary-base p-12 font-sans text-white placeholder:p-12"
            type={isPasswordShown ? "text" : "password"}
          />
        </div>
        <button className="flex w-full items-center justify-center space-x-10 rounded-8 bg-secondary-base py-10 px-20 font-sans text-lg text-white transition duration-300 ease-out hover:bg-secondary-dark">
          <LockOpen size={20} className="fill-white" />
          <p>Submit</p>
        </button>
      </div>
    </div>
  );
};

export default ChangePassword;
