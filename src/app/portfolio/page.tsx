import Card from "@/components/Card";

import styles from "./page.module.css";

const Porfolio = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1 className={styles.title}>Let&apos;s see the projects</h1>
      </div>
      <div className={styles.projectContainer}>
        <div className={styles.row}>
          <div className={styles.col}>
            <Card />
          </div>
          <div className={styles.col}>
            <Card />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.col}>
            <Card />
          </div>
          <div className={styles.col}>
            <Card />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.col}>
            <Card />
          </div>
          <div className={styles.col}>
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Porfolio;
