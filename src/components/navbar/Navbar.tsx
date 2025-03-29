"use client";
import { NavLinkType } from "@/types/components";
import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";

const links: NavLinkType[] = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 3,
    title: "About me",
    url: "/about",
  },
];

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        W.P
      </Link>
      <div className={styles.links}>
        {links.map((link) => {
          return (
            <Link href={link.url} key={link.id} className={styles.link}>
              {link.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
