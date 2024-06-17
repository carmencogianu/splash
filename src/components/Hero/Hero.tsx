import * as React from "react";
import styles from "./Hero.module.scss";
import HeroItem from "./HeroItem/HeroItem";

const Hero = (props: {
  content: {
    image: {
      url: string;
      altText: string;
    };
    title: string;
    text: string;
  }[];
}) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const heroItemsArr = props.content;
  const heroItems = heroItemsArr.map((item, index) => (
    <HeroItem
      key={index}
      id={index}
      imageUrl={item.image.url}
      imageAltText={item.image.altText}
      title={item.title}
      text={item.text}
      activeIndex={activeIndex}
    />
  ));
  return (
    <section className={styles.hero}>
      <div>
        <div className={styles.hero__carousel}>
          <>
            {heroItems}
            <div className={styles.carousel__indicators}>
              <span
                style={{
                  background:
                    activeIndex === heroItems[0].props.id
                      ? "#27ae60"
                      : "#c4c4c4",
                }}
                className={styles.carousel__btn}
                onClick={() => {
                  setActiveIndex(0);
                }}
              ></span>
              <span
                style={{
                  background:
                    activeIndex === heroItems[1].props.id
                      ? "#27ae60"
                      : "#c4c4c4",
                }}
                className={styles.carousel__btn}
                onClick={() => {
                  setActiveIndex(1);
                }}
              ></span>
              <span
                style={{
                  background:
                    activeIndex === heroItems[2].props.id
                      ? "#27ae60"
                      : "#c4c4c4",
                }}
                className={styles.carousel__btn}
                onClick={() => {
                  setActiveIndex(2);
                }}
              ></span>
              {/* <span
                className={styles.carousel__btn}
                onClick={() => {
                  setActiveIndex(1);
                }}
              ></span>
              <span
                className={styles.carousel__btn}
                className={`${
                  activeIndex === heroItems[2].props.id
                    ? styles.carousel__btn_selected
                    : styles.carousel__btn
                }`}

                className={`${`styles.carousel__btn${
                  activeIndex === heroItems[2].props.id ? "_selected" : ""
                }`}`}
                onClick={() => {
                  setActiveIndex(2);
                }}
              ></span> */}
            </div>
          </>
        </div>
      </div>
    </section>
  );
};

export default Hero;
