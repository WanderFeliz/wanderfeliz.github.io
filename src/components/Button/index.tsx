import { ButtonProps } from "@/types/components";
import Link from "next/link";
import React from "react";
import styles from "./button.module.scss";

const Button: React.FC<ButtonProps> = ({ text, url, className, variant="default" }) => {
  const buttonClass = `${styles.btn} ${styles[variant]} ${className || ''}`;
  return (
    <Link href={url} className={buttonClass}>
      {text}
    </Link>
  );
};



export default Button;
