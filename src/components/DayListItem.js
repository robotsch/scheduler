import React from "react";
import "./DayListItem.scss";
import classNames from "classnames";

export default function DayListItem(props) {
  // className declaration for day classes
  // unselected, selected and full (no spots remaining)
  const dayClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0,
  });
  return (
    <li className={dayClass} onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.value}</h2>
      {props.spots === 0 ? (
        <h3 className="text--light">no spots remaining</h3>
      ) : props.spots === 1 ? (
        <h3 className="text--light">1 spot remaining</h3>
      ) : (
        <h3 className="text--light">{props.spots} spots remaining</h3>
      )}
    </li>
  );
}
