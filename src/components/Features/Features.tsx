import React from "react";
import styles from "./Features.module.scss";
import FeaturesItem from "./FeaturesItem/FeaturesItem";

const Features = (props: {
  title: string;
  items: {
    badgeText: string;
    image: {
      url: string;
      altText: string;
    };
    text: string;
  }[];
}) => {
  const featureItemsArr = props.items;
  const featureItems = featureItemsArr.map((item, index) => {
    return (
      <FeaturesItem
        badgeText={item.badgeText}
        image={item.image}
        text={item.text}
        key={index}
      />
    );
  });

  return (
    <section className={styles.features}>
      <div className={`container`}>
        <h2>{props.title}</h2>
        <div className={styles.features__content_box}>{featureItems}</div>
      </div>
    </section>
  );
};

export default Features;
