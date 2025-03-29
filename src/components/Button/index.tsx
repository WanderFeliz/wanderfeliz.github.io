import { ButtonProps } from "@/types/components";
import Link from "next/link";
import React from "react";
import styles from "./button.module.css";

const Button: React.FC<ButtonProps> = ({ text, url }) => {
  return (
    <Link href={url}>
      <button className={styles.button}>{text}</button>
    </Link>
  );
};



export default Button;
