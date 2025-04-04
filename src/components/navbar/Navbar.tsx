"use client";
import { NavLinkType } from "@/types/components";
import Link from "next/link";
import React from "react";
import styles from "./navbar.module.scss";

const links: NavLinkType[] = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "About me",
    url: "/about",
  },
  {
    id: 3,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 4,
    title: "Contact",
    url: "/contact",
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
