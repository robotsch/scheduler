import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  const days = [];

  // Generate DayListItem components for every day passed in props
  props.days.forEach((day) => {
    days.push(
      <DayListItem
        key={day.id}
        value={day.name}
        spots={day.spots}
        selected={props.value === day.name}
        setDay={() => props.setDay(day.name)}
        data-testid="day"
      />
    );
  });

  return <ul>{days}</ul>;
}
