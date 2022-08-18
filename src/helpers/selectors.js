
// -----------------------------------------------------------------------------------------------

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

// -----------------------------------------------------------------------------------------------

// Our function needs to:

// -- Find the object state.days array who's name matches the provided day.

// -- Access that specific days appointment array.

// -- Iiterate through it, comparing where it's id matches the id of states.appointments and return that value.

// -- Do validation.

const getAppointmentsForDay = function(state, day) {
  // console.log('this.state:', this.state)
  // console.log('state.days.length:', state.days.length);
  // console.log('state.days:', state.days);
  // console.log('state:', state);
  // console.log('day:', day);
  // console.log('state.days.name:', state.days[0].name)
  // const daysAppointmentArray = [];
  console.log('STATE.DAYS:', state.days)
  const stateObj = state.days

  if (stateObj < 1) {
    console.log(`${day} --- returning empty array`)
    return []
  }

  const dayObj = stateObj.filter(e => e.name === day);
  if (dayObj.length > 0) {

    const foundDayObj = dayObj[0]
    const dayAppointments = foundDayObj.appointments;
    console.log('FOUND FOUND!!:', foundDayObj);
    console.log('dayAppointments:', dayAppointments)
  }  
 
  // state.days.forEach(stateDay => {
  //   console.log('-----------------------------------')
  //     if (stateDay.name === day) {
  //       console.log('FOUND:', stateDay.name)
  //         console.log('stateDay:', stateDay);
  //         const dayAppointments = stateDay.appoontments
  //         console.log('dayAppointments:', dayAppointments)
  //         return dayAppointments
  //     }
  // });

  // for (let actualDay of state.days) {
  //   console.log('state.days', state.days)
  //   console.log('actualDay:', actualDay)
  //   if (actualDay.name === day) {
  //     console.log('actualDay 2:', actualDay)
  //     console.log('day:', day)
  //   }
  //   else { 
  //     console.log(`${day} not found!`)
  //   }
  // }

//   for (let i = 0; i < state.days.length; i ++) {
//     console.log('-----------------------------------')
//     const storedDay = state.days[i].name

//     if (storedDay === day) { 
//         console.log (`Found! ${day}`)
//         console.log(`Appointments: ${state.days[i].appointments}`)
//         const daysAppointments = state.days[i].appointments
//         const numOfAppointments = daysAppointments.length
//         console.log('Number of appointments:', numOfAppointments);
//         // daysAppointmentArray.push(daysAppointments)
//         console.log(typeof(daysAppointments))
//         console.log(`${day}'s appointments: ${daysAppointments}`)
//         // console.log(typeof(daysAppointmentArray))
//         // return daysAppointments
//         console.log('-----------------------------------')
//     }
//     // console.log('state.days.name:', state.days[i].name)
//     // return state.days[i].name
//  }
 console.log(`${day} not found - returning empty array`)
 return [];
   // If there are no appointments on the given day, our days data will be empty -- return an empty array.
}

getAppointmentsForDay(state, "Monday")
getAppointmentsForDay(state, "Tuesday")
getAppointmentsForDay(state, "Wednesday")

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

// export function getInterview(state, interview){
//     // console.log('interview:', interview)
//     // console.log('state.appointments["3"].interview:', state.appointments["3"].interview)
//     if (interview) {
//       const newObj = {}
//       const interviewerID = interview.interviewer
//       newObj.student = interview.student
//       newObj.interviewer = state.interviewers[interviewerID]
//       // console.log('newObj:', newObj);
//       return newObj;
//     }
//   // console.log('No appt booked!')
//   return null;
// }

// getInterview(state,'2')