import React from "react";
import "components/Appointment/styles.scss";
import Header from "components/Appointment/Header.js";
import Show from "components/Appointment/Show.js";
import Empty from "components/Appointment/Empty.js";
import Form from "components/Appointment/Form.js";
// import classNames from "classnames";
import useVisualMode from "hooks/useVisualMode";
import Status from "components/Appointment/Status.js";

export default function Appointment(props) {
  
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );


  // Call the props.bookInterview function with the appointment id and interview as arguments from within the save function. 
  // Verify that the id and interview values are correct in the console output.

  function save(name, interviewer) {
    transition(SAVING) // transition to the SAVING mode when starting the save operation.


    const interview = {
      student: name,
      interviewer
    };
    // console.log('SAVE INTERVIEW:', interview)
    // console.log('SAVE NAME:', name)
    // console.log('SAVE INTERVIEWER:', interviewer)
    props.bookInterview(props.id, interview)

    transition(SHOW) // Within the save function in our Appointment component transition to the SHOW mode after calling props.bookInterview.

  }

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
          interviewers={props.interviewers}
          onCancel={() => back()}
          onSave={save}
        />
      }

      {mode === SAVING && 
        <Status 
          message={SAVING}
        />
      }

    </article>
  )
}