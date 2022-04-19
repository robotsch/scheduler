import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  const days = [];

  props.days.forEach((day) => {
    days.push(
      <DayListItem
        key={day.id}
        name={day.name}
        spots={day.spots}
        selected={day.name === day}
        setDay={props.setDay}
      />
    );
  });

  return (
    <ul>{days}</ul>
  );
}
