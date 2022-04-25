import React, { Fragment } from "react";
import "./styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Status from "./Status";
import Form from "./Form";
import Confirm from "./Confirm";
import useVisualMode from "hooks/useVisualMode";

export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const EDIT = "EDIT";
  const SAVING = "SAVING";
  const DELETING = "DELETING";
  const CONFIRM = "CONFIRM";

  // Import and set default visual modes
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  // Visual mode and function call to save new interview
  const save = (studentName, interviewer) => {
    if (mode === SHOW) {
      transition(EDIT);
    }
    if (mode === CREATE || mode === EDIT) {
      transition(SAVING);
      const interview = {
        student: studentName,
        interviewer,
      };
      props.bookInterview(props.id, interview).then(() => transition(SHOW));
    }
  };

  // Visual mode and function call to delete existing interview
  const onDelete = (id) => {
    if (mode !== CONFIRM) {
      transition(CONFIRM);
    }
    if (mode === CONFIRM) {
      transition(DELETING);
      props.cancelInterview(id).then(() => transition(EMPTY));
    }
  };
  console.log(props)

  return (
    <Fragment>
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === CONFIRM && (
        <Confirm
          id={props.id}
          message="Are you sure you want to cancel this appointment?"
          onCancel={back}
          onConfirm={onDelete}
        />
      )}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={onDelete}
          onEdit={save}
        />
      )}
      {mode === SAVING && <Status message="Saving" />}
      {mode === DELETING && <Status message="Deleting" />}
      {mode === CREATE && (
        <Form interviewers={props.interviewers} onCancel={back} onSave={save} />
      )}
      {mode === EDIT && (
        <Form student={props.interview.student} interviewers={props.interviewers} onCancel={back} onSave={save} />
      )}
    </Fragment>
  );
}
