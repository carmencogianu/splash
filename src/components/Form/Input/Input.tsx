import React from "react";
import styles from "./Input.module.scss";

const Input = (props: {
  title: string;
  type: string;
  id: string;
  name: string;
  placeholder: string;
  handle: any;
}) => {
  return (
    <div className={styles.form__field}>
      <label htmlFor={props.title}>
        <h5>{props.title}</h5>
      </label>
      <input
        onChange={props.handle}
        type={props.type}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        required
      />
    </div>
  );
};

export default Input;
