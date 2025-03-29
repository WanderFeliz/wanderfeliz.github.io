import React from "react";
import Image from "next/image";
import styles from "./card.module.css";

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardWrapper}>
        <div className={styles.cardImage}>
          <Image
            src="/imgs/home.jpg"
            alt="project"
            fill={true}
            className={styles.image}
          />
        </div>
        <div className={styles.cardBody}>
          <h2 className={styles.cardTitle}>This is some title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
          <div className={styles.buttonContainer}>
            <button>Read More</button>
            <button>See Live Demo</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
