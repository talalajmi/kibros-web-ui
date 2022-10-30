import React from "react";

const ArrowLeft = ({ size, color }: { size: number; color: string }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 21 20"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_9855_79012)">
        <path
          d="M10.225 3.22512L8.75 1.75012L0.5 10.0001L8.75 18.2501L10.225 16.7751L3.45 10.0001L10.225 3.22512Z"
          fill="#FF8400"
        />
      </g>
      <defs>
        <clipPath id="clip0_9855_79012">
          <rect
            width={size}
            height={size}
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ArrowLeft;
