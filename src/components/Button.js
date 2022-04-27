import React from "react";
import classNames from "classnames";

import "./Button.scss";

// Generic button component
export default function Button(props) {
  // className declaration for constructive/destructive button actions
  const buttonClass = classNames("button", {
    " button--confirm": props.confirm,
    " button--danger": props.danger,
  });

  return (
    <button
      className={buttonClass}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}
