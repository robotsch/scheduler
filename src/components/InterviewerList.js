import React from "react";
import InterviewerListItem from "./InterviewerListItem";

import "./InterviewerList.scss";

export default function Button(props) {
  
  const interviewers = [];

  props.interviewers.forEach((interviewer) => {
    interviewers.push(
      <InterviewerListItem
        key={interviewer.id}
        value={interviewer.name}
        avatar={interviewer.avatar}
        selected={interviewer.name === props.name}
        onChange={() => props.onChange(interviewer.id)}
      />
    );
  });

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {interviewers}
      </ul>
    </section>
  );
}
