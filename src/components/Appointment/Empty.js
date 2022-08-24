import React from "react";
import "components/Appointment/styles.scss";
// import DayListItem from "components/DayListItem.js";
// import classNames from "classnames";

export default function Empty(props) {
  return (
    <main className="appointment__add">
      <img
        className="appointment__add-button"
        src="images/add.png"
        alt="Add"
        onClick={props.onAdd}
      />
    </main>
  )
}