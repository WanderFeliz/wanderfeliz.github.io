import Image from "next/image";
import styles from "./page.module.scss";
import Button from "@/components/Button"

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Full-stack developer who speaks both machine and human.
        </h1>
        <p className={styles.desc}>
          I build robust backends and intuitive frontends that solve real business problems. 
          I'll interpret your vision into code, and together we'll build something remarkable.
        </p>
        <Button url="/about" text="See more" variant="primary" />
      </div>
      <div className={styles.item}>
        <Image priority src={"/imgs/home.jpg"} alt="" className={styles.img} width={500} height={500} />
      </div>
    </div>
  );
}
