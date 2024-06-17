import React from "react";
import styles from "./Footer.module.scss";
import ListItem from "components/Header/ListItem/ListItem";

const Footer = (props: {
  content: {
    infoItem1: {
      title: string;
      text: string;
    };
    infoItem2: {
      title: string;
      footerItems: string[];
    };
    infoItem3: {
      url: string;
      altText: string;
    };
    infoItem4: {
      copyright: string;
    };
  };
}) => {
  const { ...content } = props.content;
  const footerItemsArr = content.infoItem2.footerItems;
  const footerItems = footerItemsArr.map((item, index) => (
    <ListItem key={index} text={item} />
  ));

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.info}`}>
        <div className={styles.info__item}>
          <h4>{content.infoItem1.title}</h4>
          <p>{content.infoItem1.text}</p>
        </div>
        <div className={styles.info__item}>
          <h4>{content.infoItem2.title}</h4>
          <ul>{footerItems}</ul>
        </div>
        <div className={styles.info__item}>
          <img src={content.infoItem3.url} alt={content.infoItem3.altText} />
        </div>
      </div>
      <div className={styles.copyright}>
        <div className={`container ${styles.copyright__inner_container}`}>
          <p>{content.infoItem4.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
