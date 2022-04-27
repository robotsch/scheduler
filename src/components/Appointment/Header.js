import React from "react";
import "./styles.scss";

// Header component used to separate/display the timeslots of a day
export default function Header(props) {
  return (
    <header className="appointment__time">
      <h4 className="text--semi-bold">{props.time}</h4>
      <hr className="appointment__separator" />
    </header>
  );
}
