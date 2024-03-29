import React from "react";
import "components/Appointment/styles.scss";
import Header from "components/Appointment/Header.js";
import Show from "components/Appointment/Show.js";
import Empty from "components/Appointment/Empty.js";
import Form from "components/Appointment/Form.js";
import useVisualMode from "hooks/useVisualMode";
import Status from "components/Appointment/Status.js";
import Confirm from "components/Appointment/Confirm.js";
import Error from "components/Appointment/Error.js";

export default function Appointment(props) {
  
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETING = "DELETING";
  const CONFIRM = "CONFIRM";
  const EDIT = "EDIT";
  const ERROR_SAVE = "ERROR_SAVE";
  const ERROR_DELETE = "ERROR_DELETE";

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );


// -------------------------------------------------------------------------------------------

  // Call the props.bookInterview function with the appointment id and interview as arguments from within the save function. 
  // Verify that the id and interview values are correct in the console output.

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
  
    transition(SAVING);
  
    props
      .bookInterview(props.id, interview)
      .then(() => transition(SHOW, true))
      .catch(error => { transition(ERROR_SAVE, true); console.log('ERROR', error)});
    
  }

  // -------------------------------------------------------------------------------------------

  function deleteAppointment() {
    transition(DELETING)

    props
    .cancelInterview(props.id)
    .then(() => transition(EMPTY))
    .catch(error => transition(ERROR_DELETE, true))
  }

  // -------------------------------------------------------------------------------------------

  function editAppointment() {
    transition(EDIT, true)
  }

  return (

    <article data-testid="appointment" className="appointment">
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
          onEdit={editAppointment}
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

      {mode === EDIT && (
        <Form
          interviewers={props.interviewers}
          name={props.interview.student}
          interviewer={props.interview.interviewer.id}
          onCancel={() => back()}
          onSave={save}
        />
      )}

      {mode === ERROR_SAVE && (
        <Error
          message={"Could not save appointment."}
          onClose={back}
        />
      )}

      {mode === ERROR_DELETE && (
        <Error
          message={"Could not cancel appointment."}
          onClose={() => transition(SHOW, true)}
        />
      )}

    </article>
  )
}