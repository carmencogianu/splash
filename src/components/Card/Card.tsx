import * as React from "react";
import styles from "./Card.module.scss";

const Card = (props: {
  content: {
    title: string;
    text: string;
    class: string;
  };
}) => {
  return (
    <section className={`${styles.card} ${styles[props.content.class]}`}>
      <div className={`container`}>
        <img
          className={styles.card__img}
          src="assets/img/scooters.jpeg"
          alt="parked scooters"
        />
        <div className={styles.card__text_box}>
          <h2 className={`orange_title`}>{props.content.title}</h2>
          <p>{props.content.text}</p>
        </div>
      </div>
    </section>
  );
};

export default Card;
