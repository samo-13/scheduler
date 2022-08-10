import React from "react";
import "components/Appointment/styles.scss";
import Button from "components/Button";
import InterviewerList from "components/InterviewList"
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

export default function Error(props) {
  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            /*
              This must be a controlled component
              your code goes here
            */
          />
        </form>
        <InterviewerList 
          /* your code goes here */
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger {/* your code goes here */}>Cancel</Button>
          <Button confirm {/* your code goes here */}>Save</Button>
        </section>
      </section>
    </main>
  )
};