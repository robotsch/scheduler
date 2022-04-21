import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  const days = [];

  props.days.forEach((day) => {
    days.push(
      <DayListItem
        key={day.id}
        value={day.name}
        spots={day.spots}
        selected={props.value === day.name}
        setDay={() => props.setDay(day.name)}
      />
    );
  });

  return (
    <ul>{days}</ul>
  );
}
