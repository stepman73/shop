import React from "react";

import styles from "../../styles/Home.module.css";

import BG from "../../images/computer.png";

const Poster = () => (
  <section className={styles.home}>
    <div className={styles.title}>BIG SALE 25%</div>
    <div className={styles.product}>
      <div className={styles.text}>
        <div className={styles.subtitle}>the bestseller of 2024</div>
        <h1 className={styles.head}>Modern Laptop with Nvidia 4090</h1>
        <a href="/products/23">
          <button className={styles.button}>Shop Now</button>
        </a>
      </div>
      <div className={styles.image}>
        <img src={BG} alt="PC" />
      </div>
    </div>
  </section>
);

export default Poster;
