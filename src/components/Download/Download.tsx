import React from "react";
import styles from "./Download.module.scss";
import Button from "../Button/Button";

const Download = (props: {
  content: {
    title: string;
    text: string;
    buttons: {
      btnText: string;
      color: string;
    }[];
  };
}) => {
  const buttonsArr = props.content.buttons;
  const button = buttonsArr.map((button, index) => (
    <Button key={index} text={button.btnText} color={button.color} />
  ));

  return (
    <section className={styles.download}>
      <div className={`container`}>
        <h2>{props.content.title}</h2>
        <p>{props.content.text}</p>
        {button}
      </div>
    </section>
  );
};

export default Download;
