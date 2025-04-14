import React from "react";
import Image from "next/image";
import styles from "./card.module.scss";
import Button from "../Button";
import Tooltip from "../Tooltip";

const Card: React.FC<{ project: Models.Client.IProject }> = ({ project }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardWrapper}>
        <figure className={styles.cardImageWrapper}>
          <Image
            src={project.image}
            alt={`${project.name} image`}
            fill={true}
            className={styles.cardImage}
          />
          <Tooltip
            text={project.description}
            position="bottom"
            transitionTime={0.3}
            maxWidth={300}
          >

            <figcaption className={styles.cardCaption}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </figcaption>
          </Tooltip>

        </figure>

        <div className={styles.cardButtons}>
          <Button url={project.readme} text="Readme" variant="primary-flex" className={styles.cardButton} isExternal/>
          <Button url={project.liveDemo} text="Live Demo" className={styles.cardButton} isExternal/>
        </div>
      </div>
    </div >
  );
};

export default Card;
