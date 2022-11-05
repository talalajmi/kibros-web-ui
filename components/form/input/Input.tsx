import React, { ChangeEventHandler } from "react";
import styles from "./styles.module.css";

const Input = ({
  type,
  placeholder,
  className,
  onChange,
}: {
  type?: string;
  placeholder?: string;
  className?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`h-full w-full appearance-none rounded-8 border border-inputOutline/[0.22] bg-primaryLight p-12 text-sm
      text-darkText placeholder:p-10 focus:border-secondary/[0.22] focus:outline-none focus:ring-0 ${className}`}
    />
  );
};

export default Input;
