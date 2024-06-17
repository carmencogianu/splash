import React from "react";
import styles from "./FeaturesItem.module.scss";

const FeaturesItem = (props: {
  badgeText: string;
  image: {
    url: string;
    altText: string;
  };
  text: string;
}) => {
  return (
    <div className={styles.features__item}>
      {props.badgeText && <span className={styles.new}>{props.badgeText}</span>}
      <img src={props.image.url} alt={props.image.altText} />
      <p>{props.text}</p>
    </div>
  );
};

export default FeaturesItem;
