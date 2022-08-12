import React, { useState } from 'react';
import "components/Appointment/styles.scss";
import Button from "components/Button";
import InterviewerList from "components/InterviewerList"
// import Header from "components/Appointment/Header.js";
// import classNames from "classnames";

// -------------------------------------------------------------------------------------------

// If we break the <Form> down, we can identify the following features:

// --- The <Form> component will need to track the state of the two elements 
// --- (1) the student's name (the text input field) as a string and 
// --- (2) the selected interviewer's ID as a number

// It will use an <input /> element to accept the name of the student, and the <InterviewerListItem /> component to display the selected interviewer.
// When we create the appointment
// --- the student will default to "". 
// --- the interviewer state will default to null.
// If there is an interview booked, then the name of the student and the ID of the interviewer should be used to initialize these values.

// -------------------------------------------------------------------------------------------

// The <Form> component should track the following state:

// student:String
// interviewer:Number

// The <Form> component should have the following actions:

// setStudent:Function
// setInterviewer:Function

// The <Form> component should take the following props:

// student:String
// interviewers:Array
// interviewer:Number
// onSave:Function
// onCancel:Function

// -------------------------------------------------------------------------------------------

// Adding the Create and Edit Stories
// Our <Form> component has two visual states depending on if the user is creating a new appointment or editing an existing appointment.
// We'll need to create stories that pass the correct props for each of these modes.

// As part of our Edit story, the <Form> component should take the following props:

// student:String
// interviewer:Number
// interviewers:Array
// onSave:Function
// onCancel:Function

// As part of our Create story, the <Form> component should take the following props:

// interviewers:Array
// onSave:Function
// onCancel:Function

// -------------------------------------------------------------------------------------------

export default function Form(props) {
    // student:String
    // interviewers:Array
    // interviewer:Number
    // onSave:Function
    // onCancel:Function

  const [student, setStudent] = useState(props.student || ""); // The solution uses the JavaScript || operator which will evaluate to props.student if it is truthy, if undefined then it will use the empty string.
  const [interviewer, setInterviewer] = useState(props.interviewer || null); // Same as the above for props.interviewer and null.


  // Add a reset() function to the Form component that calls setStudent("") and setInterviewer(null).
  const reset = function() {
    return (
      setStudent(""),
      setInterviewer(null)
    )
  };

  // Add a cancel function to the <Form> component that calls reset() and props.onCancel. We should also update our Form component so it's called when a user clicks the Cancel button.
  const cancel = function() {
    return (
      reset(),
      props.onCancel()
    )
  };

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            value={student}
            onChange={(event) => setStudent(event.target.value)}
            placeholder="Enter Student Name"
          />
        </form>
        <InterviewerList 
          interviewers={props.interviewers} interviewer={interviewer} setInterviewer={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>Cancel</Button>
          <Button confirm onClick={props.onSave}>Save</Button>
        </section>
      </section>
    </main>
  )
};

// DEV NOTES
// --- https://reactjs.org/docs/forms.html
// --- https://www.w3schools.com/react/react_forms.asp
// --- https://flex-web.compass.lighthouselabs.ca/c363aaf6-a93d-4664-ac46-032655e9460a --- CONTROLLED COMPONENTS
// --- https://bobbyhadz.com/blog/react-get-form-input-value-on-submit --- USE VALUE