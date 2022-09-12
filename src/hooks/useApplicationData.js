// import { useState, useEffect } from 'react';
// import axios from 'axios';

// // Our useApplicationData Hook will return an object with four keys:
// // --- The state object will maintain the same structure.
// // --- The setDay action can be used to set the current day.
// // --- The bookInterview action makes an HTTP request and updates the local state.
// // --- The cancelInterview action makes an HTTP request and updates the local state.

// export default function useApplicationData() {
  
//   const [state, setState] = useState({
//     day: "Monday",
//     days: [],
//     appointments: {}
//   });

//   useEffect(() => {
//     Promise.all([
//       axios.get('http://localhost:8001/api/days'),
//       axios.get('http://localhost:8001/api/appointments'),
//       axios.get('http://localhost:8001/api/interviewers')
//     ]).then((all) => {
//       // console.log(all[1].data)
//       setState(prev => ({
//         ...prev, 
//         days: all[0].data, 
//         appointments: all[1].data, 
//         interviewers: all[2].data 
//       }));
//       // console.log('ALL:', all)
//       // console.log('APPOINTMENTS TEST:', all[1].data);
//       // console.log('DAYS TEST:', all[0].data.day);
//       // console.log('SPOTS TEST:', all[0].data[0].spots);
//     })
//   }, [])
  
//   const setDay = day => setState({ ...state, day });
//   // console.log('SET DAY:', setDay)
//   // console.log('STATE:', state)

//   // -------------------------------------------------------------------------------------------
  
//   // function updateSpots(id, state) {
//   //   console.log('updateSpots STATE:', state)
//   //   console.log('updateSpots STATE.day:', state.day)
//   //   console.log('UPDATE SPOTS ID:', id)
//   //   console.log('DAYS SPOTS:', state.day.spots)
//   //   for (let day of state) {
//   //     console.log('updateSpots day:', day)
//   //   }
//   // }
  
//   // -------------------------------------------------------------------------------------------

//   function bookInterview(id, interview) {
//     // console.log('BOOK INTERVIEW:', id, interview);

//     const appointment = {
//       ...state.appointments[id],
//       interview: { ...interview }
//     };

//     const appointments = {
//       ...state.appointments,
//       [id]: appointment
//     };

//     // setState({
//     //   ...state,
//     //   appointments
//     // }); // call setState with our new state object
//     console.log('APPOINTMENT TEST', appointment)

//     return axios.put(`http://localhost:8001/api/appointments/${id}`, appointment)
//     .then(() => axios.get('http://localhost:8001/api/days')) // added to axios to update spots
//     .then((response) => {
//       // updateSpots(id, state)
//       // const days = response.data
//       // const day = state.day
//       // console.log('DAYS.STATE:', days.day)
//       // console.log('STATE:', state)
//       // console.log('STATE.DAY:', state.day)
//       setState({...state, appointments, days})
//     })
//   }

//   function editInterview(id, interview) {
//     // console.log('BOOK INTERVIEW:', id, interview);

//     const appointment = {
//       ...state.appointments[id],
//       interview: { ...interview }
//     };

//     const appointments = {
//       ...state.appointments,
//       [id]: appointment
//     };

//     return axios.put(`http://localhost:8001/api/appointments/${id}`, appointment)
//     .then(() => axios.get('http://localhost:8001/api/days')) // added to axios to update spots
//     .then((response) => {
//       const days = response.data
//       setState({...state, appointments, days})
//     })
//   } 

//   // -------------------------------------------------------------------------------------------

//   // create the main cancelInterview function in Application.js, 
//   // --- it uses the appointment id to find the right appointment slot and set it's interview data to null.
//   // Add the rest of the local and remote delete behaviour to the Appointment component.
  

//   function cancelInterview(id) {
//     const appointment = {
//       ...state.appointments[id],
//       interview: null // after we delete an interview, it will need to have its value set to null. // If we are still in the SHOW mode and the interview isn't set to null, we may get a TypeError. 
//     };

//     const appointments = {
//       ...state.appointments,
//       [id]: appointment
//     };
    
//     return axios.delete(`http://localhost:8001/api/appointments/${id}`, appointment)
//     .then(() => axios.get(`http://localhost:8001/api/days`)) // added to axios to update spots
//     .then((response) => {
//       const days = response.data
//       // updateSpots(id)
//       // console.log(`in AXIOS PUT request for /api/appointments/${id}`)
//       setState({...state, appointments, days})
//       // console.log('APPOINTMENTS:', appointments)
//       // console.log('cancelInterview DAYS:', days)
//     }
//   )}

//   return {
//     state, 
//     setDay,
//     bookInterview,
//     editInterview,
//     cancelInterview
//   }
// }

// // --------------------------------------------------------------------
// // https://www.freecodecamp.org/news/how-to-use-axios-with-react/

import { useState, useEffect } from 'react';
import axios from 'axios';

// Our useApplicationData Hook will return an object with four keys:
// --- The state object will maintain the same structure.
// --- The setDay action can be used to set the current day.
// --- The bookInterview action makes an HTTP request and updates the local state.
// --- The cancelInterview action makes an HTTP request and updates the local state.

export default function useApplicationData() {
  
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {}
  });


  useEffect(() => {
    Promise.all([
      axios.get('http://localhost:8001/api/days'),
      axios.get('http://localhost:8001/api/appointments'),
      axios.get('http://localhost:8001/api/interviewers')
    ]).then((all) => {
      // console.log(all[1].data)
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));
      // console.log('ALL:', all)
      // console.log('APPOINTMENTS TEST:', all[1].data);
      // console.log('DAYS TEST:', all[0].data.day);
      // console.log('SPOTS TEST:', all[0].data[0].spots);
    })
  }, [])
  
  const setDay = day => setState({ ...state, day });
  // console.log('SET DAY:', setDay)
  // console.log('STATE:', state)

  // -------------------------------------------------------------------------------------------
  
  // function updateSpots() {
  //   console.log('updateSpots')
  // }
  
  // -------------------------------------------------------------------------------------------

  function bookInterview(id, interview) {
    // console.log('BOOK INTERVIEW:', id, interview);

    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    // setState({
    //   ...state,
    //   appointments
    // }); // call setState with our new state object
console.log('APPOINTMENT TEST', appointment)
    return axios.put(`http://localhost:8001/api/appointments/${id}`, appointment)
    .then(() => axios.get('http://localhost:8001/api/days')) // added to axios to update spots
    .then((response) => {
      const days = response.data
      setState({...state, appointments, days})
      // console.log('APPOINTMENTS:', appointments)
      // console.log('BOOK INTERVIEW STATE:', state)
      // console.log('BOOK INTERVIEW STATE.DAYS:', state.days)
      // console.log('STATE DAYS NAME:', state.days.name("Monday"))
      // console.log('BOOK INTERVIEW SPOTS TEST:', state.day.spots);
    })
  } 

  // -------------------------------------------------------------------------------------------

  // create the main cancelInterview function in Application.js, 
  // --- it uses the appointment id to find the right appointment slot and set it's interview data to null.
  // Add the rest of the local and remote delete behaviour to the Appointment component.
  

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null // after we delete an interview, it will need to have its value set to null. // If we are still in the SHOW mode and the interview isn't set to null, we may get a TypeError. 
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    
    return axios.delete(`http://localhost:8001/api/appointments/${id}`, appointment)
    .then(() => axios.get(`http://localhost:8001/api/days`)) // added to axios to update spots
    .then((response) => {
      const days = response.data
      // console.log(`in AXIOS PUT request for /api/appointments/${id}`)
      setState({...state, appointments, days})
      // console.log('APPOINTMENTS:', appointments)
      // console.log('cancelInterview DAYS:', days)
    }
  )}

  return {
    state, 
    setDay,
    bookInterview,
    cancelInterview
  }
}

// --------------------------------------------------------------------
// https://www.freecodecamp.org/news/how-to-use-axios-with-react/ 