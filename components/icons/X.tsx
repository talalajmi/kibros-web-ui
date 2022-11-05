import React from "react";

const X = ({
  size,
  color,
  className,
}: {
  size: string;
  color: string;
  className?: string;
}) => {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 6.63708L17.59 5.22708L12 10.8171L6.41 5.22708L5 6.63708L10.59 12.2271L5 17.8171L6.41 19.2271L12 13.6371L17.59 19.2271L19 17.8171L13.41 12.2271L19 6.63708Z"
        fill={color}
        fillOpacity="0.54"
      />
    </svg>
  );
};

export default X;
