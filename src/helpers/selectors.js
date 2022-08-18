
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
  let result;
  // let dayAppointmentsArray = [];

  if (state.days.length < 1) {
    result = []
    console.log('RESULT 1:', result)
    return result;
  };

//   // console.log('this.state:', this.state)
//   // console.log('state.days.length:', state.days.length);
  console.log('state.days:', state.days);
//   // console.log('state:', state);
//   // console.log('day:', day);
//   // console.log('state.days.name:', state.days[0].name)
//   // const daysAppointmentArray = [];
//   console.log('STATE.DAYS:', state.days)
//   console.log('STATE.DAYS.LENGTH:', state.days.length)
  // const numOfDays = state.days.length
  // const stateObj = state.days

  // const hasDay = stateObj.some(function(day) {
  //   return day.name === day;
  // })
  
  // console.log('hasDay:', hasDay);
  // console.log('numOfDays:', numOfDays)

  // if (checkDayExists(day) === false) {
  //   return [];
  // }

  // if (checkDayExists(day) === true) {
  //   dayAppointmentsArray = state.days.appointments
  //   console.log('dayAppointmentsArray:', dayAppointmentsArray);
  //   state.days.forEach(day => {
  //     console.log('-----------------------------------')
  //     console.log('state.days:', state.days.name)
  //     console.log('state.days.name:', state.days.name)
  //       if (stateDay.name === day) {
  //         console.log('FOUND:', stateDay.name)
  //           console.log('stateDay:', stateDay);
  //           const dayAppointments = stateDay.appointments
  //           console.log('dayAppointments:', dayAppointments)
  //           return dayAppointments
  //       }
  //   });
  // }

  // console.log('checkDayExists 1:', checkDayExists('Monday'));
  // console.log('checkDayExists 2:', checkDayExists('Wednesday'));

//   if (numOfDays < 1) {
//     console.log(`${day} --- returning empty array`)
//     return []
//   }

//     const dayObj = stateObj.filter(e => e.name === day);
//     if (dayObj.length > 0) {

//       const foundDayObj = dayObj[0]
//       const dayAppointments = foundDayObj.appointments;
//       console.log('FOUND FOUND!!:', foundDayObj);
//       console.log('dayAppointments:', dayAppointments)
      
//       if (dayAppointments.length < 1) {
//         console.log(`${day} not found ------ returning empty array`)
//         return []
//       }
//       return dayAppointments;
//     }


// outputs: true

    // const checkKey = (state, day) => {
    //   const stateObj = state.days
    
    //   let keyExist = Object.keys(stateObj).some(name => name === day);
    //   console.log('NAME:', name);
    //   console.log('CHECK.KEY:', keyExist);
    // };
    


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
//   console.log(`${day} not found 2 ------ returning empty array`)
//  return [];
   // If there are no appointments on the given day, our days data will be empty -- return an empty array.
   console.log('-----------------')

  //  const dayName = state.days.name
   const daysArray = state.days;
   console.log('daysArray:', daysArray)
   
   const findDayIndex = daysArray.findIndex(function(stateDay, index) {
     if (stateDay.name === day)
       return true; // success = index of element || failure = -1
   });

   if (findDayIndex === -1) {
    console.log('Day not found')
    return [];
   }

   if (findDayIndex > -1) {
    console.log('daysArray[findDayIndex].name:', daysArray[findDayIndex].name)
    console.log('daysArray[findDayIndex].appointments:', daysArray[findDayIndex].appointments)
    const daysAppointments = daysArray[findDayIndex].appointments;
    console.log('-----------------')
    console.log('daysAppointments:', daysAppointments)
    return daysAppointments
   }
   
  //  console.log('found index:', findDayIndex)

  //  console.log('RESULT:', result)
  // checkDayExists(day)
  return result;
};

// const checkDayExists = function(day) {
//   const stateObj = state.days
  
//   return stateObj.some(function(element) {
//     let dayExists = (element.name === day)
//     console.log('ELEMENT:', element.name)
//     console.log('ELEMENT 1:', element.appointments)

//     if (dayExists === true) {
//       let dayAppointmentsArray = element.appointments
//       // console.log('RESULT:', dayAppointmentsArray)
//       result = dayAppointmentsArray
//       console.log('RESULT 2:', result)
//       return result;
//     }

//     if (!dayExists) {
//       // console.log('EMPTY ARRAY!')
//       result = [];
//       console.log('RESULT 3:', result)
//       return result;
//     }
//   });
// }



// getAppointmentsForDay(state, "Monday")
// getAppointmentsForDay(state, "Tuesday")
// getAppointmentsForDay(state, "Wednesday")

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