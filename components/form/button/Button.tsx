import React from "react";

import styles from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  children?: React.ReactNode;
}

const Button = ({ text, disabled, className, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className={`${
        disabled ? styles.buttonDisabled : styles.button
      } ${className}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
