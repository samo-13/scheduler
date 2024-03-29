import { useState, useEffect } from 'react';
import axios from 'axios';

// Our useApplicationData Hook will return an object with four keys:
// --- The state object will maintain the same structure.
// --- The setDay action can be used to set the current day.
// --- The bookInterview action makes an HTTP request and updates the local state.
// --- The cancelInterview action makes an HTTP request and updates the local state.

export default function useApplicationData() {
  
  const [state, setState] = useState({ // maintain the same structure.
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  useEffect(() => {
    Promise.all([
      axios.get('http://localhost:8001/api/days'),
      axios.get('http://localhost:8001/api/appointments'),
      axios.get('http://localhost:8001/api/interviewers')
    ]).then((all) => {
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));
    })
  }, [])
  
  const setDay = day => setState({ ...state, day }); // used to set the current day

  // -------------------------------------------------------------------------------------------
  // Both the visual design and the API use the term spots to mean appointments. 
  // We can book up to five interviews per day, each one takes up a spot.
  // https://bobbyhadz.com/blog/react-update-nested-state-object-property#:~:text=To%20update%20nested%20properties%20in,properties%20you%20need%20to%20update
  // -------------------------------------------------------------------------------------------


  function bookInterview(id, interview) { // makes an HTTP request and updates the local state.

    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
      
    return axios.put(`http://localhost:8001/api/appointments/${id}`, appointment) // 
    .then(() => axios.get('http://localhost:8001/api/days')) // added to update spots
    .then((response) => {
      const days = response.data
      setState({...state, appointments, days})
    })
  }

  // -------------------------------------------------------------------------------------------
  // Uses the appointment id to find the right appointment slot and set it's interview data to null.
  // The rest of the local and remote delete behaviour is at the Appointment component.
  
  function cancelInterview(id) { // makes an HTTP request and updates the local state.
    const appointment = {
      ...state.appointments[id],
      interview: null // after we delete an interview, it will need to have its value set to null. If we are still in the SHOW mode and the interview isn't set to null, we may get a TypeError. 
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    
    return axios.delete(`http://localhost:8001/api/appointments/${id}`, appointment)
    .then(() => axios.get(`http://localhost:8001/api/days`)) // added to update spots
    .then((response) => {
      const days = response.data
      setState({...state, appointments, days})
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