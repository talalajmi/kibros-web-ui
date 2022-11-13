import React from "react";
import { ISvg } from "../../interfaces";

const UserIcon = ({ size, color, className, opacity }: ISvg) => {
  return (
    <svg
      width={(size as number) + 6}
      height={size}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_128_5723)">
        <path
          d="M12.6833 12C13.8631 12 15.0165 11.6481 15.9975 10.9888C16.9785 10.3295 17.7431 9.39246 18.1946 8.2961C18.6461 7.19975 18.7643 5.99335 18.5341 4.82946C18.3039 3.66558 17.7358 2.59648 16.9015 1.75736C16.0672 0.918247 15.0042 0.346802 13.8471 0.115291C12.6899 -0.11622 11.4904 0.00259972 10.4004 0.456726C9.31031 0.910851 8.37863 1.67989 7.72314 2.66658C7.06764 3.65328 6.71777 4.81331 6.71777 6C6.71935 7.59081 7.34836 9.11602 8.46677 10.2409C9.58517 11.3658 11.1016 11.9984 12.6833 12ZM12.6833 2C13.4698 2 14.2387 2.2346 14.8927 2.67412C15.5468 3.11365 16.0565 3.73836 16.3575 4.46927C16.6585 5.20017 16.7373 6.00444 16.5838 6.78036C16.4304 7.55629 16.0516 8.26902 15.4954 8.82843C14.9392 9.38784 14.2306 9.7688 13.4591 9.92314C12.6877 10.0775 11.888 9.99827 11.1613 9.69552C10.4346 9.39277 9.81351 8.88008 9.37651 8.22228C8.93951 7.56449 8.70627 6.79113 8.70627 6C8.70627 4.93914 9.12527 3.92172 9.8711 3.17158C10.6169 2.42143 11.6285 2 12.6833 2V2Z"
          fill={color}
          opacity={opacity}
        />
        <path
          d="M12.6836 14.0005C10.3112 14.0031 8.03668 14.9522 6.35913 16.6395C4.68158 18.3267 3.73798 20.6144 3.73535 23.0005C3.73535 23.2657 3.8401 23.5201 4.02656 23.7076C4.21302 23.8951 4.46591 24.0005 4.7296 24.0005C4.99329 24.0005 5.24618 23.8951 5.43264 23.7076C5.61909 23.5201 5.72384 23.2657 5.72384 23.0005C5.72384 21.144 6.4571 19.3635 7.7623 18.0507C9.0675 16.738 10.8377 16.0005 12.6836 16.0005C14.5294 16.0005 16.2996 16.738 17.6048 18.0507C18.91 19.3635 19.6433 21.144 19.6433 23.0005C19.6433 23.2657 19.748 23.5201 19.9345 23.7076C20.121 23.8951 20.3738 24.0005 20.6375 24.0005C20.9012 24.0005 21.1541 23.8951 21.3406 23.7076C21.527 23.5201 21.6318 23.2657 21.6318 23.0005C21.6292 20.6144 20.6856 18.3267 19.008 16.6395C17.3305 14.9522 15.056 14.0031 12.6836 14.0005V14.0005Z"
          fill={color}
          opacity={opacity}
        />
      </g>
      <defs>
        <clipPath id="clip0_128_5723">
          <rect
            width="23.8619"
            height="24"
            fill="white"
            transform="translate(0.752441)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default UserIcon;
