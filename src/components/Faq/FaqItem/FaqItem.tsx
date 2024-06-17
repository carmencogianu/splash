import React from "react";
import styles from "./FaqItem.module.scss";
import parse from "html-react-parser";

const FaqItem = (props: { question: string; answer: string }) => {
  const [active, setActive] = React.useState(false);
  const toggleActive = () => {
    setActive((prevActive) => !prevActive);
  };
  return (
    <div className={styles.faq__item}>
      <div
        className={`${styles.faq__question_box} ${styles.first} ${
          active ? styles.active : ""
        }`}
        onClick={toggleActive}
      >
        <h3>{parse(props.question)}</h3>
      </div>
      <div
        className={`${styles.faq__answer_box} ${styles.first} ${
          active ? styles.active : ""
        }`}
      >
        <div>{parse(props.answer)}</div>
      </div>
    </div>
  );
};

export default FaqItem;
