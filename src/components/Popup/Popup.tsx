import React from "react";
import styles from "./Popup.module.scss";
import parse from "html-react-parser";

const Popup = (props: {
  text: string;
  setTrigger: React.Dispatch<React.SetStateAction<boolean>>;
  trigger: boolean;
}) => {
  return props.trigger ? (
    <section className={styles.popup} id="first-popup">
      <div className={`container ${styles.popup__text_box}`}>
        <button
          onClick={() => props.setTrigger(false)}
          className={`${styles.popup__btn} ${styles.close}`}
        >
          x
        </button>
        {parse(props.text)}
      </div>
    </section>
  ) : (
    <></>
  );
};

export default Popup;
