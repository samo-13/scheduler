import React from "react";
import "components/Appointment/styles.scss";
// import Button from "components/Button";
// import Header from "components/Appointment/Header.js";
// import classNames from "classnames";

// The <Error> component should accept the following props:

// --- message:String eg. "Could not delete appointment."
// --- onClose:Function to be called when the user clicks the Close button

export default function Error(props) {
  return (
    <main className="appointment__card appointment__card--error">
      <section className="appointment__error-message">
        <h1 className="text--semi-bold">Error</h1>
        <h3 className="text--light">Could not delete appointment</h3>
      </section>
      <img
        className="appointment__error-close" onClick={props.onClose}
        src="images/close.png"
        alt="Close"
      />
    </main>
  )
}