import React from "react";
import Image from "next/image";
import styles from "./card.module.scss";
import Button from "../Button";

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardWrapper}>
        <figure className={styles.cardImageWrapper}>
          <Image
            src="/imgs/home.jpg"
            alt="project"
            fill={true}
            className={styles.cardImage}
          />
          <figcaption className={styles.cardCaption}>
            <h3>Project Title</h3>
            <p>Project description goes here Lorem ipsum dolor sit dfdfdfgfghfghfhg.</p>
          </figcaption>
        </figure>
        <div className={styles.cardButtons}>
          <Button url="/portfolio" text="Readme" variant="primary-flex" className={styles.cardButton}/>
          <Button url="/portfolio" text="Live Demo" className={styles.cardButton}/>
        </div>
      </div>
    </div>
  );
};

export default Card;
