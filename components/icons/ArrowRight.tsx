import React from "react";
import { ISvg } from "../../interfaces";

const ArrowRight = ({ size, color, opacity, className }: ISvg) => {
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
        d="M2.00009 0L0.590088 1.41L5.17009 6L0.590088 10.59L2.00009 12L8.00009 6L2.00009 0Z"
        fill={color}
        fillOpacity={opacity}
      />
    </svg>
  );
};

export default ArrowRight;
