import React from "react";
import { ISvg } from "../../interfaces";

const FacebookIcon = ({ size, color, className, opacity }: ISvg) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_119_3489)">
        <path
          d="M34.999 17.6064C34.999 26.3404 28.5911 33.581 20.2261 34.895V22.6989H24.2934L25.0678 17.6531H20.2261V14.3792C20.2261 12.9981 20.9028 11.6535 23.0699 11.6535H25.2705V7.35728C25.2705 7.35728 23.2726 7.01603 21.3636 7.01603C17.3765 7.01603 14.7719 9.43249 14.7719 13.806V17.6517H10.3401V22.6975H14.7719V34.8935C6.4084 33.5781 -0.000976562 26.3389 -0.000976562 17.6064C-0.000976562 7.94207 7.83465 0.106445 17.499 0.106445C27.1634 0.106445 34.999 7.94061 34.999 17.6064Z"
          fill={color}
          opacity={opacity}
        />
      </g>
      <defs>
        <clipPath id="clip0_119_3489">
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

export default FacebookIcon;
