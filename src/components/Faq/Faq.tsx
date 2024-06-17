import React from "react";
import styles from "./Faq.module.scss";
import FaqItem from "./FaqItem/FaqItem";

const Faq = (props: {
  content: {
    title: string;
    faqItems: {
      question: string;
      answer: string;
    }[];
  };
}) => {
  const faqItemsArr = props.content.faqItems;

  const faqItem = faqItemsArr.map((item, index) => (
    <FaqItem key={index} question={item.question} answer={item.answer} />
  ));

  return (
    <section className={styles.faq}>
      <div className={`container`}>
        <h2 className={styles.faq__title}>{props.content.title}</h2>
        <div className={styles.faq__items}>{faqItem}</div>
      </div>
    </section>
  );
};

export default Faq;
