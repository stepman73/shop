import React from "react";

import styles from "../../styles/Home.module.css";

import banner from "../../images/banner.jpg";

const Banner = () => (
  <section className={styles.banner}>
    <div className={styles.left}>
      <p className={styles.content}>
        SPRING
        <span>SALE</span>
      </p>
      <a href="/categories/2">
        <button className={styles.more}>See more</button>
      </a>
    </div>
    <div
      className={styles.right}
      style={{ backgroundImage: `url(${banner})` }}
    ></div>
  </section>
);

export default Banner;
