import React from "react";
import { ISvg } from "../../interfaces";

const MenuIcon = ({ size, color, opacity, className, onClick }: ISvg) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <g clipPath="url(#clip0_403_3280)">
        <path
          d="M23 10.9997H1C0.447715 10.9997 0 11.4474 0 11.9997C0 12.552 0.447715 12.9997 1 12.9997H23C23.5523 12.9997 24 12.552 24 11.9997C24 11.4474 23.5523 10.9997 23 10.9997Z"
          fill={color}
          opacity={opacity}
        />
        <path
          d="M23 4.00031H1C0.447715 4.00031 0 4.44802 0 5.0003C0 5.55259 0.447715 6.0003 1 6.0003H23C23.5523 6.0003 24 5.55259 24 5.0003C24 4.44802 23.5523 4.00031 23 4.00031Z"
          fill={color}
          opacity={opacity}
        />
        <path
          d="M23 18H1C0.447715 18 0 18.4477 0 19C0 19.5523 0.447715 20 1 20H23C23.5523 20 24 19.5523 24 19C24 18.4477 23.5523 18 23 18Z"
          fill={color}
          opacity={opacity}
        />
      </g>
      <defs>
        <clipPath id="clip0_403_3280">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default MenuIcon;
