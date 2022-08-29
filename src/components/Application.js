// This creates an object named React which contains methods necessary to use the React library
import React, { useState, useEffect } from 'react';
import "components/Application.scss";
import DayList from "components/DayList.js"
// import { statement_timeout } from 'pg/lib/defaults';
import "components/Appointment"
import Appointment from "components/Appointment/index.js"
import axios from 'axios';
import { getAppointmentsForDay, getInterviewersForDay, getInterview } from "helpers/selectors.js"

// ----------------------------------------------------------------

// const appointments = {
//   "1": {
//     id: 1,
//     time: "12pm",
//   },
//   "2": {
//     id: 2,
//     time: "1pm",
//     interview: {
//       student: "Lydia Miller-Jones",
//       interviewer:{
//         id: 3,
//         name: "Sylvia Palmer",
//         avatar: "https://i.imgur.com/LpaY82x.png",
//       }
//     }
//   },
//   "3": {
//     id: 3,
//     time: "2pm",
//   },
//   "4": {
//     id: 4,
//     time: "3pm",
//     interview: {
//       student: "Archie Andrews",
//       interviewer:{
//         id: 4,
//         name: "Cohana Roy",
//         avatar: "https://i.imgur.com/FK8V841.jpg",
//       }
//     }
//   },
//   "5": {
//     id: 5,
//     time: "4pm",
//   }
// };

// ----------------------------------------------------------------

// const days = [
//   {
//     id: 1,
//     name: "Monday",
//     spots: 2,
//   },
//   {
//     id: 2,
//     name: "Tuesday",
//     spots: 5,
//   },
//   {
//     id: 3,
//     name: "Wednesday",
//     spots: 0,
//   },
// ];

// ----------------------------------------------------------------
// const appointmentsTest = Object.values(appointments)
// console.log('TYPEOF:', typeof(appointmentsTest))
// getAppointmentsForDay();
// console.log('state', state)
// ----------------------------------------------------------------

export default function Application(props) {
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

  const appointments = getAppointmentsForDay(state, state.day);
  
  const schedule = appointments.map((appointment) => {
    const interview = getInterview(state, appointment.interview);
    const interviewers = getInterviewersForDay(state, state.day);
    console.log('INTERVIEWERS:', interviewers)

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
        
        setState(prev => ({...state, appointments}))
        console.log('APPOINTMENTS:', appointments)
      })

    } 

    return (
      <Appointment
        key={appointment.id}
        id={appointment.id}
        time={appointment.time}
        interviewers={interviewers}
        interview={interview}
        bookInterview={bookInterview}
      />
    );
  });

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
        
        <DayList
          days={state.days}
          day={state.day}
          setDay={setDay}
        />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
      {schedule}
      <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}

// DEV NOTES
// getting this error: https://github.com/facebook/create-react-app/issues/11773
// https://bobbyhadz.com/blog/react-map-object