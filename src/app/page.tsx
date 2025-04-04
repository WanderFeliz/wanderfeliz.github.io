import Image from "next/image";
import styles from "./page.module.scss";
import Button from "@/components/Button"

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Build better web apps for your company.
        </h1>
        <p className={styles.desc}>
          Turning your idea into Reality. Let&apos;s make it happen together.
        </p>
        <Button url="/about" text="See more" variant="primary"/>
      </div>
      <div className={styles.item}>
        <Image priority src={"/imgs/home.jpg"} alt="" className={styles.img} width={500} height={500} />
      </div>
    </div>
  );
}
