import React from "react";
import "components/InterviewerListItem.scss";
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

export default function InterviewerListItem(props) {

  // The SCSS file generates a class called interviewers__item--selected that should only be applied if an interviewer is selected.
  const interviewerListClass = classNames(
    'interviewers__item', {
      'interviewers__item--selected': props.selected
    }
  );

  return (
    <li className={interviewerListClass} onClick={() => props.setInterviewer(props.name)}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  )
};

// for {props.selected && props.name} see https://reactjs.org/docs/conditional-rendering.html