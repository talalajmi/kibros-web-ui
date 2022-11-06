import React from "react";

const HomeIcon = ({
  size,
  color,
  className,
}: {
  size: string;
  color?: string;
  className?: string;
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69ZM12 3L2 12H5V20H11V14H13V20H19V12H22L12 3Z"
        fill={color}
        fillOpacity="0.87"
      />
    </svg>
  );
};

export default HomeIcon;
