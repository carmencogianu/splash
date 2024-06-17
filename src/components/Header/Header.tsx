import * as React from "react";
import styles from "./Header.module.scss";
import Button from "../Button/Button";
import ListItem from "./ListItem/ListItem";

const Header = (props: {
  content: {
    image: {
      url: string;
      altText: string;
    };
    navItems: string[];
    navBtn: string;
  };
  color: string;
}) => {
  const [active, setActive] = React.useState(false);
  const toggleClass = () => {
    setActive((prevActive) => !prevActive);
  };

  const navItemsArr = props.content.navItems;
  const navItems = navItemsArr.map((item, index) => (
    <ListItem key={index} text={item} />
  ));
  return (
    <header className={styles.navigation} id="navigation">
      <nav
        className={`container ${styles.nav} ${active ? styles.active : ""}`}
        id="nav"
      >
        <img
          className={styles.nav__logo}
          src={props.content.image.url}
          alt={props.content.image.altText}
        />

        <div
          className={`${styles.nav__container} ${active ? styles.active : ""}`}
        >
          <div
            className={`${styles.toggler__container} ${
              active ? styles.active : ""
            }`}
            onClick={toggleClass}
            id="toggler-container"
          >
            <span
              className={`${styles.toggler__line} ${styles.toggler__line_1} ${
                active ? styles.active : ""
              }`}
              id="toggler-line-1"
            ></span>
            <span
              className={`${styles.toggler__line} ${styles.toggler__line_2} ${
                active ? styles.active : ""
              }`}
              id="toggler-line-2"
            ></span>
            <span
              className={`${styles.toggler__line} ${styles.toggler__line_3} ${
                active ? styles.active : ""
              }`}
              id="toggler-line-3"
            ></span>
          </div>

          <div
            className={`${styles.menu__container} ${
              active ? styles.active : ""
            }`}
            id="menu-container"
          >
            <ul className={styles.menu__list}>{navItems}</ul>

            <Button text={props.content.navBtn} color={props.color} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
