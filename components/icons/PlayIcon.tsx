import React from "react";
import { ISvg } from "../../interfaces";

const PlayIcon = ({ size, color, className, opacity }: ISvg) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_128_5610)">
        <path
          d="M20.492 7.96944L10.954 0.975435C10.209 0.42992 9.32755 0.101347 8.40727 0.0261376C7.48699 -0.0490718 6.56385 0.13202 5.74019 0.549339C4.91653 0.966658 4.22451 1.6039 3.74085 2.39044C3.25718 3.17698 3.00076 4.08209 3.00001 5.00543V19.0004C2.99857 19.9247 3.25365 20.8312 3.73686 21.6191C4.22006 22.407 4.91243 23.0453 5.7369 23.463C6.56137 23.8808 7.48559 24.0615 8.40668 23.9851C9.32777 23.9087 10.2096 23.5783 10.954 23.0304L20.492 16.0364C21.1249 15.572 21.6395 14.965 21.9942 14.2647C22.349 13.5644 22.5338 12.7905 22.5338 12.0054C22.5338 11.2204 22.349 10.4464 21.9942 9.74613C21.6395 9.04583 21.1249 8.43888 20.492 7.97444V7.96944Z"
          fill={color}
          opacity={opacity}
        />
      </g>
      <defs>
        <clipPath id="clip0_128_5610">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default PlayIcon;
