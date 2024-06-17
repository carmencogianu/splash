import React from "react";
import styles from "./TeamMember.module.scss";

const TeamMember = (props: {
  image: {
    url: string;
    altText: string;
  };
  name: string;
  occupation: string;
  description: string;
}) => {
  return (
    <div className={styles.team__item}>
      <img
        className={styles.team__image}
        src={props.image.url}
        alt={props.image.altText}
      />
      <h3 className={`blue_title`}>{props.name}</h3>
      <h5>{props.occupation}</h5>
      {props.description && <p>{props.description}</p>}
    </div>
  );
};

export default TeamMember;
