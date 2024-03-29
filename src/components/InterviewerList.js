import React from "react";
import "components/InterviewerListItem.js";
import "components/InterviewerList.scss";
import InterviewerListItem from "components/InterviewerListItem.js";
import PropTypes from 'prop-types'; // for testing
// import classNames from "classnames";

// ------------------------------------------------------------------------

// <InterviewerList> receives three props:

// --- interviewers:array - an array of objects as seen above
// --- </InterviewerList>setInterviewer:function - a function that accepts an interviewer id. 
//    --- This function will simply be passed down to the <InterviewerListItem>
// --- </InterviewerListItem>interviewer:number - a number that represents the id of the currently selected interviewer

// ------------------------------------------------------------------------

/* const interviewers = [
  { id: 1, name: "Sylvia Palmer", avatar: "https://i.imgur.com/LpaY82x.png" },
  { id: 2, name: "Tori Malcolm", avatar: "https://i.imgur.com/Nmx0Qxo.png" },
  { id: 3, name: "Mildred Nazir", avatar: "https://i.imgur.com/T2WwVfS.png" },
  { id: 4, name: "Cohana Roy", avatar: "https://i.imgur.com/FK8V841.jpg" },
  { id: 5, name: "Sven Jones", avatar: "https://i.imgur.com/twYrpay.jpg" }
]; */

// ------------------------------------------------------------------------

export default function InterviewerList(props) {
  const interviewerList = props.interviewers.map(interviewer => {
    return (
      <InterviewerListItem
      key={interviewer.id}
      name={interviewer.name}
      avatar={interviewer.avatar}
      selected={interviewer.id === props.interviewer}
      setInterviewer={() => props.setInterviewer(interviewer.id)}
    />)
  });

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewerList}</ul>
    </section>
  )
};

// ------------------------------------------------------------------------
// PropTypes Test Code

InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired
};

// ------------------------------------------------------------------------
// DEV NOTES
// for {props.selected && props.name} see https://reactjs.org/docs/conditional-rendering.html