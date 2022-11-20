import React, { ChangeEventHandler } from "react";
import styles from "./styles.module.css";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({
  type,
  placeholder,
  className,
  onChange,
  ...rest
}: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`h-full w-full rounded-8 border border-inputOutline/[0.22] bg-primaryLight p-12
      text-darkText placeholder:p-12 focus:border-secondary/[0.22] focus:outline-none focus:ring-0 ${className}`}
      {...rest}
    />
  );
};

export default Input;
