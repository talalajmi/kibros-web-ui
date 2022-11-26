import React from "react";

import styles from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  children?: React.ReactNode;
}

const Button = ({ text, className, ...rest }: ButtonProps) => {
  return (
    <button {...rest} className={`${styles.button} ${className}`}>
      {text}
    </button>
  );
};

export default Button;
