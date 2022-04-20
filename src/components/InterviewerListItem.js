import React from "react";
import classNames from "classnames";

import "./InterviewerListItem.scss";

export default function Button(props) {
  const interviewerClass = classNames("interviewers__item", {
    "interviewers__item--selected": props.selected,
  });

  return (
    <li className={interviewerClass} onClick={props.setInterviewer}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.value}
      />
      {props.selected && props.value}
    </li>
  );
}
