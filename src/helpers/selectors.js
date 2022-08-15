// Our function needs to:

// -- Find the object state.days array who's name matches the provided day.
// -- Access that specific days appointment array.
// -- Iiterate through it, comparing where it's id matches the id of states.appointments and return that value.
// -- Do validation.
// -- If there are no appointments on the given day, our days data will be empty. 
// -- According to our tests, in a case like this, we should return an empty array.

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
//   }
// };

export function getAppointmentsForDay(state, day) {
  // console.log('this.state:', this.state)
  // console.log('day:', state.days)
  for (const d of state.days) {
    // console.log('d:', d);
    // const d = days[i];
    // console.log('d.name:', d.name)
    if (d.name === day) {
      // console.log('d.appointments:', d.appointments)
      // console.log('appointments:', state.appointments)
      const appointmentsArray = d.appointments;
      // console.log('appointmentsArray:', appointmentsArray);
      const results = appointmentsArray.map((a ) => getAppointmentArray(a, state));
      // console.log('results:', results.flat())
      return results.flat();
      // return appointmentsArray;
    }
  }
  return [];
}

const getAppointmentArray = function(id, state) {
  const appointmentResults = [];
  
  for (const a of Object.values(state.appointments)) {
    // console.log(a.id)
    // console.log(id)
    if (a.id === id) {
      appointmentResults.push(a)
    }
    // console.log('appointment results:', appointmentResults)
  }
  return appointmentResults;
  // return appointments.id
}

// getAppointmentsForDay(state, 'Tuesday')