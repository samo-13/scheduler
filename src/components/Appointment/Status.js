import React from "react";
import "components/Appointment/styles.scss";
// import Button from "components/Button";
// import Header from "components/Appointment/Header.js";
// import classNames from "classnames";

export default function Status(props) {
  return (
    <main className="appointment__card appointment__card--status">
      <img
        className="appointment__status-image"
        src="images/status.png"
        alt="Loading"
      />
      <h1 className="text--semi-bold">Deleting</h1>
    </main>
  )
}