import React, { useState } from "react";
import "./styles.scss";
import InterviewerList from "../InterviewerList";
import Button from "../Button";

/**
 * Form component that displays when creating/editing an appointment
 * When editing, uses existing student's name, otherwise display placeholder
 */

export default function Form(props) {
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [error, setError] = useState("");

  function validate() {
    if (student === "") {
      setError("Student name cannot be blank");
      return;
    }
    if (interviewer === null) {
      setError("Please select an interviewer");
      return;
    }
    props.onSave(student, interviewer);
    console.log('happening')
  }

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={(e) => e.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            defaultValue={student}
            placeholder="Enter Student Name"
            onChange={(e) => setStudent(e.target.value)}
            data-testid="student-name-input"
          />
        </form>
        <section className="appointment__validation">{error}</section>
        <InterviewerList
          value={interviewer}
          interviewers={props.interviewers}
          onChange={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={props.onCancel}>
            Cancel
          </Button>
          <Button confirm onClick={() => {
            validate()
            if(error.length > 0){
              props.onSave(student, interviewer)
            }
            }}>
            Save
          </Button>
        </section>
      </section>
    </main>
  );
}
