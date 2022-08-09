import React from "react";
import "components/InterviwerListItem.scss";
import classNames from "classnames";

// A single interviewer object is structured like this:

// const interviewer = {
//   id: 1,
//   name: "Sylvia Palmer",
//   avatar: "https://i.imgur.com/LpaY82x.png"
// };

// the <InterviewerListItem> component should receive the following props:

// --- id:number - the id of the interviewer
// --- name:string - the name of the interviewer
// --- avatar:url - a url to an image of the interviewer

// The <InterviewerListItem> also needs a prop to know if it is selected.
// --- selected:boolean - determines if an interviewer is selected or not and displays the name and applies appropriate styles if selected.

// Finally, the <InterviewerListItem> should receive a function called setInterviewer.
// --- setInterviewer:function - is run when the <InterviewerListItem> is clicked. 
// This function receives the interviewer's id as an argument. 
// It sets the selected interviewer.


// Create the <InterviewerListItem> file and set up a React component that returns the base HTML below. 
// Make sure the component is exported.

export default function InterviewListItem(props) {

  return (
  <li className="interviewers__item">
    <img
      className="interviewers__item-image"
      src="https://i.imgur.com/LpaY82x.png"
      alt="Sylvia Palmer"
    />
    Sylvia Palmer
  </li>
  )
};