import React from "react";
import styles from "./Team.module.scss";
import TeamMember from "./TeamMember/TeamMember";

const Team = (props: {
  title: string;
  members: {
    image: {
      url: string;
      altText: string;
    };
    tmName: string;
    tmOccupation: string;
    tmDescription: string;
  }[];
}) => {
  const memberItemsArr = props.members;
  const memberItems = memberItemsArr.map((member, index) => {
    return (
      <TeamMember
        image={member.image}
        name={member.tmName}
        occupation={member.tmOccupation}
        description={member.tmDescription}
        key={index}
      />
    );
  });
  return (
    <section className={styles.team}>
      <div className={`container`}>
        <h2 className={styles.team__title}>Our fantastic team</h2>
        <div className={styles.team__container}>{memberItems}</div>
      </div>
    </section>
  );
};

export default Team;
