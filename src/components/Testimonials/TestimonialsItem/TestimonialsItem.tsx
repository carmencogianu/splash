import React from "react";
import styles from "./TestimonialsItem.module.scss";
import parse from "html-react-parser";

const TestimonialsItem = (props: {
  indicator: number;
  image1: {
    url: string;
    altText: string;
  };
  image2: {
    url: string;
    altText: string;
  };
  text: string;
  id: number;
  active: boolean;
  activeIndex: number;
}) => {
  return (
    <div className={styles.testimonials__container}>
      <div
        className={`${
          styles.testimonial
        } ${`styles.testimonial_${props.activeIndex}`} ${
          props.active ? styles.active : styles.inactive
        }`}
      >
        <img
          className={`${styles.testimonial__img} ${styles.left}`}
          src={props.image1.url}
          alt={props.image1.altText}
        />
        <img
          className={`${styles.testimonial__img} ${styles.right}`}
          src={props.image2.url}
          alt={props.image2.altText}
        />
        <div className={styles.container_quote}>{parse(props.text)}</div>
      </div>
    </div>
  );
};

export default TestimonialsItem;
