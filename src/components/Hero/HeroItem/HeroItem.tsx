import React from "react";
import parse from "html-react-parser";
import styles from "./HeroItem.module.scss";

const HeroItem = (props: {
  imageUrl: string;
  imageAltText: string;
  title: string;
  text: string;
  id: number;
  activeIndex: number;
}) => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))," +
          `url("${props.imageUrl}")`,
      }}
      className={`${styles.carousel__item} 
      ${
        props.activeIndex === props.id
          ? styles.carousel__item_selected
          : styles.carousel__item_not_selected
      }
    `}
    >
      <div className={`container ${styles.hero__text_box}`}>
        <h1>{props.title}</h1>
        <p>{parse(props.text)}</p>
      </div>
    </div>
  );
};

export default HeroItem;
