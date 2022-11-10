import React from "react";
import { ISvg } from "../../interfaces";

const LockOpen = ({ size, color, className, opacity }: ISvg) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M9.5 12.75C10.325 12.75 11 12.075 11 11.25C11 10.425 10.325 9.75 9.5 9.75C8.675 9.75 8 10.425 8 11.25C8 12.075 8.675 12.75 9.5 12.75ZM14 6H13.25V4.5C13.25 2.43 11.57 0.75 9.5 0.75C7.43 0.75 5.75 2.43 5.75 4.5H7.175C7.175 3.2175 8.2175 2.175 9.5 2.175C10.7825 2.175 11.825 3.2175 11.825 4.5V6H5C4.175 6 3.5 6.675 3.5 7.5V15C3.5 15.825 4.175 16.5 5 16.5H14C14.825 16.5 15.5 15.825 15.5 15V7.5C15.5 6.675 14.825 6 14 6ZM14 15H5V7.5H14V15Z"
        fill={color}
        fillOpacity={opacity}
      />
    </svg>
  );
};

export default LockOpen;
