import React from "react";
import "components/Appointment/styles.scss";

// import Header from "components/Appointment/Header.js";
// import classNames from "classnames";

// The <Show> component should accept the following props:

// --- student:String eg. "Lydia Miller-Jones"
// --- interviewer:Object we can use the interview object that already exists in stories/index.js for this
// --- onEdit:Function to be called when the user clicks the Edit button
// --- onDelete:Function to be called when the user clicks the Delete button

// Instruction
// --- Add the story for the <Show> component to stories/index.js.
// --- We want to pass the onEdit and onDelete named action callbacks to help confirm that the component behaves correctly when clicked. 
// --- In this case, we should pass onEdit={action("onEdit")} so that we can see the output in the action panel when we click the edit button.

// Warning
// --- With our story in place, don't forget to update the component to use the props it is now being passed.

export default function Show(props) {
  const student = props.student

  return (
    <main className="appointment__card appointment__card--show">
      <section className="appointment__card-left">
        <h2 className="text--regular">{student}</h2>
        <section className="interviewer">
          <h4 className="text--light">Interviewer</h4>
          <h3 className="text--regular">INTERVIEWER</h3>
      </section>
    </section>
    <section className="appointment__card-right">
      <section className="appointment__actions">
        <img
          className="appointment__actions-button" onClick={props.onEdit}
          src="images/edit.png"
          alt="Edit"
        />
        <img
          className="appointment__actions-button" onClick={props.onDelete}
          src="images/trash.png"
          alt="Delete"
        />
        </section>
      </section>
    </main>
  )
}