import React from "react";
import { ISvg } from "../../interfaces";

const ArrowLeft = ({ size, color, opacity, className }: ISvg) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 8 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M7.41 1.41L6 0L0 6L6 12L7.41 10.59L2.83 6L7.41 1.41Z"
        fill={color}
        fillOpacity={opacity}
      />
    </svg>
  );
};

export default ArrowLeft;
