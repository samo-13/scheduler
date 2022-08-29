import React from "react";
import "components/Appointment/styles.scss";
import Header from "components/Appointment/Header.js";
import Show from "components/Appointment/Show.js";
import Empty from "components/Appointment/Empty.js";
import Form from "components/Appointment/Form.js";
// import classNames from "classnames";
import useVisualMode from "hooks/useVisualMode";
import Status from "components/Appointment/Status.js";
import Confirm from "./Confirm";

export default function Appointment(props) {
  
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETING = "DELETING";
  const CONFIRM = "CONFIRM";

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );


// -------------------------------------------------------------------------------------------

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

    transition(SHOW) // transition to the SHOW mode after calling props.bookInterview.
  }

  function deleteAppointment() {
    transition(CONFIRM)

    props.cancelInterview(props.id)
    console.log(`Appointment with id: ${props.id} has been deleted`)
    transition(EMPTY)
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
          onDelete={() => transition(CONFIRM, true)}
        />
      )}

      {mode === CREATE &&
        <Form
          interviewers={props.interviewers}
          onCancel={back}
          onSave={save}
        />
      }

      {mode === SAVING && 
        <Status 
          message={SAVING}
        />
      }

      {mode === DELETING && 
        <Status 
          message={DELETING}
        />
      }

      {mode === CONFIRM && 
        <Confirm
          onCancel={() => back()}
          onConfirm={deleteAppointment}
        />
      }

    </article>
  )
}