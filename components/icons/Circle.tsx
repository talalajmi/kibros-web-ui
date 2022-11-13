import React from "react";
import { ISvg } from "../../interfaces";

const Circle = ({ size, color, className, opacity }: ISvg) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 61 61"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="30.5" cy="30.5" r="30.5" fill={color} opacity={opacity} />
    </svg>
  );
};

export default Circle;
