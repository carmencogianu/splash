import React from "react";
import styles from "./ListItem.module.scss";
import parse from "html-react-parser";

const ListItem = (props: { text: string }) => {
  return <li className={styles.menu__item}>{parse(props.text)}</li>;
};

export default ListItem;
