import React from "react";
import { ISvg } from "../../interfaces";

const GoogleIcon = ({ size, color, className, opacity }: ISvg) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M17.5296 7.37504H9.20255V10.826H13.9946C13.5486 13.019 11.6816 14.279 9.20255 14.279C6.27955 14.279 3.92355 11.923 3.92355 8.99904C3.92355 6.07604 6.27955 3.72004 9.20255 3.72004C10.4616 3.72004 11.5996 4.16704 12.4926 4.89804L15.0926 2.29904C13.5086 0.91804 11.4776 0.06604 9.20255 0.06604C4.24855 0.06604 0.268555 4.04504 0.268555 9.00004C0.268555 13.955 4.24755 17.934 9.20255 17.934C13.6696 17.934 17.7316 14.685 17.7316 9.00004C17.7316 8.47204 17.6506 7.90304 17.5296 7.37504Z"
        fill={color}
        opacity={opacity}
      />
    </svg>
  );
};

export default GoogleIcon;
