import React from "react";
import DayListItem from "components/DayListItem.js";
// import classNames from "classnames";

// The <DayList> is responsible for rendering a list of <DayListItem> components. 
// It doesn't have any styles of its own so we don't need a DayList.scss file.

// ------------------------------------------------------------------------

// The DayList Component

// ------------------------------------------------------------------------

// Our <DayList> component will take in three props.

// --- days:Array an array of objects (each object represents a day and includes an id, name, and spots)
// --- day:String the currently selected day
// --- setDay:Function sets the currently selected day and accepts the name of the day eg. "Monday", "Tuesday"

// Note: The <DayList> is responsible for rendering a list of <DayListItem> components. 
// It doesn't have any styles of its own so we don't need a DayList.scss file.

// ------------------------------------------------------------------------

// The <DayList> component should return a single <ul></ul> element with <DayListItem> components as children. 
// We'll need to pass the correct data to each <DayListItem></DayListItem>

export default function DayList(props) {
    const dayList = props.days.map(day => {
      return (
        <DayListItem
        key={day.id}
        name={day.name} 
        spots={day.spots} 
        selected={day.name === props.day}
        setDay={props.setDay} 
      />)
    });
    return (
<ul>{dayList}</ul>
  )
};