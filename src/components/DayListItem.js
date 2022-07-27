import React from "react";  

export default function DayListItem(props) {
  const setDay = function() {
    console.log('Hi from setDay function');
  }


  return (
    <li onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular" onClick={setDay}>{props.name}</h2> 
      <h3 className="text--light">{props.spots} Left Remaining</h3>
    </li>
  );
}