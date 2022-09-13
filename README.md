# Interview Scheduler

## Project
- Built for learning purposes at [Lighthouse Labs](https://www.lighthouselabs.ca/). 
- It is a React application that allows users to book and cancel interviews. 
- It combines a concise API with a WebSocket server to build a real-time experience.
- Built using [this provided API](https://github.com/lighthouse-labs/scheduler-api)

## About Interview Scheduler

- A single-page application (SPA) that allows users to book technical interviews between students and mentors. 
- Appointments can be between the hours of 12 PM and 5 PM, Monday to Friday. 
- Each appointment has one student and one interviewer. 
- When creating a new appointment, the user can enter any student name while the interviewer is chosen from a predefined list. 
- The user can save the appointment and view the entire schedule of appointments on any day of the week. 
- Appointments can also be edited or deleted. 
- The front end is built with React and makes requests to an API to fetch and store appointment data from a database.

## Final Product

### Scheduler (Empty)
<img alt="Scheduler Empty No Appointments" src="https://github.com/samo-13/scheduler/blob/master/docs/scheduler-empty-day.png">

### Scheduler (Booked Appointments)
<img alt="Scheduler Booked Appointments" src="https://github.com/samo-13/scheduler/blob/master/docs/scheduler-two-appointments.png?raw=true">

### Scheduler (Book Appointment)
<img alt="Scheduler Book Appointment Form" src="https://github.com/samo-13/scheduler/blob/master/docs/scheduler-add-new-appointment.gif">

### Scheduler (Edit Appointment)
<img alt="Scheduler Delete Appointment" src="https://github.com/samo-13/scheduler/blob/master/docs/scheduler-edit-appointment.gif">

### Scheduler (Delete Appointment)
<img alt="Scheduler Delete Appointment" src="https://github.com/samo-13/scheduler/blob/master/docs/scheduler-delete-appointment.gif">

### Scheduler (Toggle Days)
<img alt="Scheduler (Toggle Days)" src="https://github.com/samo-13/scheduler/blob/master/docs/scheduler-toggle-days.gif">

### Scheduler (Fill Day)
<img alt="Scheduler Toggle Interviewers" src="https://github.com/samo-13/scheduler/blob/master/docs/scheduler-no-appointments-remaining.gif">

## Getting Started

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## Dependencies
- axios
- @testing-library/react-hooks
- react-test-renderer