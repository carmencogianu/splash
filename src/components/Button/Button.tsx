import React from "react";

const Button = (props: { text: string; color: string }) => {
  return <a className={`btn ${props.color}`}>{props.text}</a>;
};

export default Button;
