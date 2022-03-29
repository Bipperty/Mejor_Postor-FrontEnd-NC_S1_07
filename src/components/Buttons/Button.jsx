import React from "react";

const Button = (props) => {
  return <button className={props.styles}>{props.name}</button>;
};

export default Button;
