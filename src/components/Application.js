// This creates an object named React which contains methods necessary to use the React library
import React from 'react';
import "components/Application.scss";
import DayList from "components/DayList.js"
import "components/Appointment"
import Appointment from "components/Appointment/index.js"
import { getAppointmentsForDay, getInterviewersForDay, getInterview } from "helpers/selectors.js"
import useApplicationData from 'hooks/useApplicationData';

// ----------------------------------------------------------------
// const appointmentsTest = Object.values(appointments)
// console.log('TYPEOF:', typeof(appointmentsTest))
// getAppointmentsForDay();
// console.log('state', state)
// ----------------------------------------------------------------

export default function Application(props) {

  const {
    state,
    setDay,
    bookInterview,
    cancelInterview
  } = useApplicationData();

  const appointments = getAppointmentsForDay(state, state.day);

  const schedule = appointments.map((appointment) => {
    const interview = getInterview(state, appointment.interview);
    const interviewers = getInterviewersForDay(state, state.day);
    console.log('INTERVIEWERS:', interviewers)

    return (
      <Appointment
        key={appointment.id}
        id={appointment.id}
        time={appointment.time}
        interviewers={interviewers}
        interview={interview}
        bookInterview={bookInterview}
        cancelInterview={cancelInterview}
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