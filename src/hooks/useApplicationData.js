import React, { useState, useEffect } from 'react';
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

  const setDay = day => setState({ ...state, day });

  useEffect(() => {
    Promise.all([
      axios.get('http://localhost:8001/api/days'),
      axios.get('http://localhost:8001/api/appointments'),
      axios.get('http://localhost:8001/api/interviewers')
    ]).then((all) => {
      console.log(all[1].data)
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));
      console.log('ALL:', all)
      console.log('TEST:', all[2].data); // third
    })
  }, [])

  
  
  // -------------------------------------------------------------------------------------------

  function bookInterview(id, interview) {
    console.log('BOOK INTERVIEW:', id, interview);

    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    setState({
      ...state,
      appointments
    }); // call setState with our new state object

    return axios.put(`/api/appointments/${id}`, appointment)
    .then(() => {
      console.log(`in AXIOS PUT request for /api/appointments/${id}`)
      
      setState({...state, appointments})
      console.log('APPOINTMENTS:', appointments)
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
    
    return axios.delete(`/api/appointments/${id}`, appointment)
    .then(() => {
      console.log(`in AXIOS PUT request for /api/appointments/${id}`)
      
      setState({...state, appointments})
      console.log('APPOINTMENTS:', appointments)
    }
  )}

  return {
    state, 
    setDay,
    bookInterview,
    cancelInterview
  }
}