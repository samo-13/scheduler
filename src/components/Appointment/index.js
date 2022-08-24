import React from "react";
import "components/Appointment/styles.scss";
import Header from "components/Appointment/Header.js";
import Show from "components/Appointment/Show.js";
import Empty from "components/Appointment/Empty.js";
import Form from "components/Appointment/Form.js";
// import classNames from "classnames";
import useVisualMode from "hooks/useVisualMode";

export default function Appointment(props) {
  
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  return (
    <article className="appointment">
      <Header time={props.time}></Header>

      {mode === EMPTY && 
        <Empty 
          onAdd={() => transition(CREATE, true)} 
        />
      }

      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
        />
      )}

      {mode === CREATE &&
        <Form
          interviewers={[]}
          onCancel={() => back()}
        />
      }
      
    </article>
  )
}