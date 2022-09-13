
// // // // // -----------------------------------------------------------------------------------------------

// const state = {
//   days: [
//     {
//       id: 1,
//       name: "Monday",
//       appointments: [1, 2, 3]
//     },
//     {
//       id: 2,
//       name: "Tuesday",
//       appointments: [4, 5]
//     }
//   ],
//   appointments: {
//     "1": { id: 1, time: "12pm", interview: null },
//     "2": { id: 2, time: "1pm", interview: null },
//     "3": {
//       id: 3,
//       time: "2pm",
//       interview: { student: "Archie Cohen", interviewer: 2 }
//     },
//     "4": { id: 4, time: "3pm", interview: null },
//     "5": {
//       id: 5,
//       time: "4pm",
//       interview: { student: "Chad Takahashi", interviewer: 2 }
//     }
//   },
//   interviewers: {
//     "1": {  
//       "id": 1,
//       "name": "Sylvia Palmer",
//       "avatar": "https://i.imgur.com/LpaY82x.png"
//     },
//     "2": {
//       id: 2,
//       name: "Tori Malcolm",
//       avatar: "https://i.imgur.com/Nmx0Qxo.png"
//     }
//   }
// };

// // -----------------------------------------------------------------------------------------------

// // Our function needs to:

// // -- Find the object state.days array who's name matches the provided day.

// // -- Access that specific days appointment array.

// // -- Iiterate through it, comparing where it's id matches the id of states.appointments and return that value.

// // -- Do validation.

export function getAppointmentsForDay(state, day) {
  // let dayAppointmentsArray = [];

  if (state.days.length < 1) {
    return [];
  };

  //  // If there are no appointments on the given day, our days data will be empty -- return an empty array.

  //  const dayName = state.days.name
  const daysArray = state.days;
  const findDayIndex = daysArray.map(daysObject => daysObject.name).indexOf(day)
  
   if (findDayIndex === -1) {
    return [];
   }

   if (findDayIndex > -1) {
    const daysAppointments = daysArray[findDayIndex].appointments;
    const apps = daysAppointments.map(appointment_id => {
    return state.appointments[appointment_id];
    });
    return apps;
   }
  return [];
};

// -----------------------------------------------------------------------------------------------

export function getInterviewersForDay(state, day) {

  if (state.days.length < 1) {
    return [];
  };
  //  // If there are no appointments on the given day, our days data will be empty -- return an empty array.
  const daysArray = state.days;
  const findDayIndex = daysArray.map(daysObject => daysObject.name).indexOf(day)

   if (findDayIndex === -1) {
    return [];
   }

   if (findDayIndex > -1) {
    const daysInterviewers = daysArray[findDayIndex].interviewers;
    const interviewersArray = daysInterviewers.map(interviewer_id => {
    return state.interviewers[interviewer_id];
    });
    return interviewersArray;
   }
   
  return [];
};

// -----------------------------------------------------------------------------------------------

// Should return a new object containing the interview data when we pass it an object that contains the interviewer. 
// Otherwise, the function should return null. The object it returns should look like this:
// {  
//   "student": "Lydia Miller-Jones",
//   "interviewer": {  
//     "id": 1,
//     "name": "Sylvia Palmer",
//     "avatar": "https://i.imgur.com/LpaY82x.png"
//   }
// }

export function getInterview(state, interview) {

    if (interview === null) {
      return null;
    }
    
    if (interview !== null) {
      const newInterviewObj = {}
      const interviewerID = interview.interviewer
      newInterviewObj.interviewer = state.interviewers[interviewerID]
      newInterviewObj.student = interview.student
      
      return newInterviewObj;
    }

  return null;
}