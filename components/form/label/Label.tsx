import React from "react";

const Label = ({
  className,
  children,
}: {
  className?: string;
  children: string;
}) => {
  return (
    <label
      className={`absolute bottom-[2.8rem] left-[1rem] z-10 bg-primaryLight px-5 text-darkTextSecondary/[0.68] ${className}`}
    >
      {children}
    </label>
  );
};

export default Label;
