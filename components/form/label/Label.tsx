import React from "react";
import styles from "./styles.module.css";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  text: string;
  children?: React.ReactNode;
}

const Label = ({ text, className, ...rest }: LabelProps) => {
  return (
    <label className={`${styles.label} ${className}`} {...rest}>
      {text}
    </label>
  );
};

export default Label;
