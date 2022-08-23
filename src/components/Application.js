// This creates an object named React which contains methods necessary to use the React library
import React, { useState, useEffect, useRef } from 'react';
import "components/Application.scss";
import DayList from "components/DayList.js"
// import { statement_timeout } from 'pg/lib/defaults';
import "components/Appointment"
import Appointment from "components/Appointment/index.js"
import axios from 'axios';
import { getAppointmentsForDay, getInterview } from "helpers/selectors.js"

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
  // const setDays = (days) => {
  //   setState(prev => ({ ...prev, days }));
  // };

  // console.log('state.interviewers:', state.interviewers)

  // console.log('day:', day)
  // console.log('props:', props)
  // console.log('Object.values(appointments).map():', Object.values(appointments))
  // console.log('APPOINTMENT:', Appointment)
  // const appointmentsTest = Object.values(appointments)
  // console.log(typeof(appointmentsTest))
  // const appointmentsMapped = appointmentsTest.map()
  // console.log('appointmentsMapped:', appointmentsMapped)
  // const entries = Object.entries(appointments)
  // console.log('ENTRIES:', entries)
  // const mappedEntries = entries.map();
  // console.log('mappedEntries:', mappedEntries);
  // console.log('Object.values(appointments).map():', Object.values(appointments).map())
  // const appointmentList = Object.values(appointments).map()

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

  // setDays(days)
// const dailyAppointments = getAppointmentsForDay(state, state.day)
// console.log('days:', days)
// console.log('this.state:', this.state)
// getAppointmentsForDay(days, 'Tuesday');
// console.log('state.day:', state.day)
// console.log('state.interviewers:', state.interviewers)

const appointments = getAppointmentsForDay(state, state.day);

const schedule = appointments.map((appointment) => {
  const interview = getInterview(state, appointment.interview);

  return (
    <Appointment
      key={appointment.id}
      id={appointment.id}
      time={appointment.time}
      interview={interview}
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