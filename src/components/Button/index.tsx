import { ButtonProps } from "@/typing/components";
import Link from "next/link";
import React from "react";
import styles from "./button.module.scss";

const Button: React.FC<ButtonProps> = ({ text, url, className, variant="default", isExternal=false }) => {
  const buttonClass = `${styles.btn} ${styles[variant]} ${className || ''}`;
  return (
    <Link href={url} className={buttonClass} target={isExternal ? "_blank" : "_self"}>
      {text}
    </Link>
  );
};



export default Button;
