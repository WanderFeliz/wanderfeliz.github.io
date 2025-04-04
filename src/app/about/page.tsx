import Image from "next/image";
import profilePic from "./../../../public/imgs/me.jpg";
import styles from "./page.module.scss";
import TypeWriter from "@/components/TypeWriter";
import Button from "@/components/Button";

const About = () => {
  const strings: Array<string> = [
    "Backend Developer",
    "Frontend Developer",
    "Fullstack",
  ];
  return (
    <div id="intro" className={styles.intro}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image
            src={profilePic}
            priority
            className={styles.image}
            alt="Wander Paniagua image"
          />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Hi there, I&apos;m</h2>
          <h1 className={styles.name}>Wander Paniagua</h1>
          <h3 className={styles.subtitle}>
            Software Engineer
            <span className={styles.occupation}>
              <TypeWriter
                strings={strings}
                loop={true}
                typeSpeed={100}
                deleteSpeed={50}
                delayBetweenStrings={1500}
              />
            </span>
          </h3>
          <p className={styles.description}>
            I&apos;m a software developer based in San Cristóbal, Dominican
            Republic. I enjoy building things that live on the internet, whether
            that be websites, applications, or anything in between. My goal is
            to always build products that provide pixel-perfect, performant
            experiences.
          </p>
          <div className={styles.btnContainer}>
            <Button url="/portfolio" text="My Work" variant="primary-flex"/>
            <Button url="/contact" text="Contact Me" variant="secondary-flex"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;