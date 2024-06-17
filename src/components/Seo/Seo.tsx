import React from "react";
import styles from "./Seo.module.scss";
import parse from "html-react-parser";
import Popup from "components/Popup/Popup";

const Seo = (props: {
  popup: string;
  content: {
    title: string;
    text: string;
    btnText: string;
  };
}) => {
  const [buttonPopup, setButtonPopup] = React.useState(false);

  return (
    <>
      <section className={styles.seo}>
        <div className={`container`}>
          <div className={styles.seo__text_box}>
            <h2 className={`green_title`}>{parse(props.content.title)}</h2>
            {parse(props.content.text)}
          </div>
          <button
            onClick={() => setButtonPopup(true)}
            className={`btn btn_primary ${styles.open}`}
            data-toggle="modal"
            data-target="#first-popup"
          >
            {props.content.btnText}
          </button>
        </div>
      </section>
      <Popup
        trigger={buttonPopup}
        setTrigger={setButtonPopup}
        text={props.popup}
      />
    </>
  );
};

export default Seo;
