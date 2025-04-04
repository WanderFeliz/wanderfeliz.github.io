import Card from "@/components/Card";

import styles from "./page.module.scss";

const Porfolio = () => {
  return (
    <>
      <div className={styles.title}>
        <h1 className={styles.title}>Let&apos;s see the projects</h1>
      </div>
      <main className={styles.projectContainer}>

        <section className={styles.cardContainer}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
      </main>
    </>
  );
};

export default Porfolio;
