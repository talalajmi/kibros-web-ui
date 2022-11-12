import React from "react";
import { ISvg } from "../../interfaces";

const YoutubeIcon = ({ size, color, className, opacity }: ISvg) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_119_3497)">
        <path
          d="M34.2669 9.02139C33.8644 7.50618 32.6788 6.3118 31.1724 5.90639C28.4438 5.17139 17.499 5.17139 17.499 5.17139C17.499 5.17139 6.55423 5.17139 3.82423 5.90639C2.31923 6.3118 1.13361 7.50472 0.731107 9.02139C-0.000976562 11.7689 -0.000976562 17.5001 -0.000976562 17.5001C-0.000976562 17.5001 -0.000976562 23.2314 0.731107 25.9789C1.13361 27.4941 2.31923 28.6885 3.82569 29.0939C6.55423 29.8289 17.499 29.8289 17.499 29.8289C17.499 29.8289 28.4438 29.8289 31.1738 29.0939C32.6788 28.6885 33.8644 27.4956 34.2684 25.9789C34.999 23.2314 34.999 17.5001 34.999 17.5001C34.999 17.5001 34.999 11.7689 34.2669 9.02139ZM13.9203 22.7049V12.2953L23.0669 17.5001L13.9203 22.7049Z"
          fill={color}
          opacity={opacity}
        />
      </g>
      <defs>
        <clipPath id="clip0_119_3497">
          <rect
            width="35"
            height="35"
            fill="white"
            transform="translate(-0.000976562)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default YoutubeIcon;
