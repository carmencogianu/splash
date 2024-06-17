import React from "react";
import styles from "./Parallax.module.scss";

const Parallax = (props: {}) => {
  return (
    <section
      className={styles.parallax}
      style={{ backgroundImage: "url('assets/img/scooters-parallax.jpeg')" }}
    ></section>
  );
};

export default Parallax;
