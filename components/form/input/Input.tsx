import React, { ChangeEventHandler } from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({ className, ...rest }: InputProps) => {
  return (
    <input
      className={`w-full rounded-8 border border-inputOutline/[0.22] bg-primary-light p-12
      text-white placeholder:p-12 focus:border-secondary-base/[0.22] focus:outline-none focus:ring-0 ${className}`}
      {...rest}
    />
  );
};

export default Input;
