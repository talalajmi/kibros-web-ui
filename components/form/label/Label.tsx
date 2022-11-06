import React from "react";
import styles from "./styles.module.css";

const Label = ({
  className,
  children,
}: {
  className?: string;
  children: string;
}) => {
  return <label className={`${styles.label} ${className}`}>{children}</label>;
};

export default Label;
