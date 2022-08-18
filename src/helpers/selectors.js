
// // // -----------------------------------------------------------------------------------------------

const state = {
  days: [
    {
      id: 1,
      name: "Monday",
      appointments: [1, 2, 3]
    },
    {
      id: 2,
      name: "Tuesday",
      appointments: [4, 5]
    }
  ],
  appointments: {
    "1": { id: 1, time: "12pm", interview: null },
    "2": { id: 2, time: "1pm", interview: null },
    "3": {
      id: 3,
      time: "2pm",
      interview: { student: "Archie Cohen", interviewer: 2 }
    },
    "4": { id: 4, time: "3pm", interview: null },
    "5": {
      id: 5,
      time: "4pm",
      interview: { student: "Chad Takahashi", interviewer: 2 }
    }
  },
  interviewers: {
    "1": {  
      "id": 1,
      "name": "Sylvia Palmer",
      "avatar": "https://i.imgur.com/LpaY82x.png"
    },
    "2": {
      id: 2,
      name: "Tori Malcolm",
      avatar: "https://i.imgur.com/Nmx0Qxo.png"
    }
  }
};

// // -----------------------------------------------------------------------------------------------

// // Our function needs to:

// // -- Find the object state.days array who's name matches the provided day.

// // -- Access that specific days appointment array.

// // -- Iiterate through it, comparing where it's id matches the id of states.appointments and return that value.

// // -- Do validation.

// export default function getAppointmentsForDay(state, day) {
//   let result;
//   // let dayAppointmentsArray = [];

//   if (state.days.length < 1) {
//     result = []
//     return result;
//   };

//   // console.log('state.days:', state.days);
//   //  // If there are no appointments on the given day, our days data will be empty -- return an empty array.
//   // console.log('-----------------')

//   //  const dayName = state.days.name
//    const daysArray = state.days;
//   //  console.log('daysArray:', daysArray)
   
//    const findDayIndex = daysArray.findIndex(function(stateDay, index) {
//      if (stateDay.name === day)
//        return true; // success = index of element || failure = -1
//    });

//    if (findDayIndex === -1) {
//     console.log('Day not found')
//     return [];
//    }

//    if (findDayIndex > -1) {
//     const daysAppointments = daysArray[findDayIndex].appointments;
//     return daysAppointments
//    }
   
//   return result;
// };

// getAppointmentsForDay(state, "Monday")
// getAppointmentsForDay(state, "Tuesday")
// getAppointmentsForDay(state, "Wednesday")

// const getAppointmentArray = function(id, state) {
//   const appointmentResults = [];
  
//   for (const a of Object.values(state.appointments)) {
//     // console.log(a.id)
//     // console.log(id)
//     if (a.id === id) {
//       appointmentResults.push(a)
//     }
//     // console.log('appointment results:', appointmentResults)
//   }
//   return appointmentResults;
//   // return appointments.id
// }

// getAppointmentsForDay(state, 'Tuesday')

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

function getInterview(state, interview){
    console.log('interview:', interview)
    console.log('state.appointments[interview].interview:', state.appointments[interview].interview)
    console.log('state:', state)

    const interviewObject = state.appointments[interview].interview

    if (interviewObject !== null) {
      const newInterviewObj = {}
      const interviewerID = state.appointments[interview].interview.interviewer
      // console.log('state.appointments[interview].interview.student:', state.appointments[interview].interview.student)
      newInterviewObj.student = state.appointments[interview].interview.student
      // console.log('state.interviewers[interviewerID]:', state.interviewers[interviewerID])
      newInterviewObj.interviewer = state.interviewers[interviewerID]
      console.log('newInterviewObj:', newInterviewObj)
      return newInterviewObj
    }
  console.log('No appt booked!')
  return null;
}

getInterview(state,"2")
getInterview(state,"3")
getInterview(state,"4")