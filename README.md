# Interview Scheduler

## Project
- Built for learning purposes at [Lighthouse Labs](https://www.lighthouselabs.ca/). 
- It is a React application that allows users to book and cancel interviews. 
- It combines a concise API with a WebSocket server to build a real-time experience.

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
<img alt="Scheduler Empty No Appointments" src="">

### Scheduler (Book Appointment Form)
<img alt="Scheduler Book Appointment Form" src="">

### Scheduler (Confirm Delete Appointment)
<img alt="Scheduler (Confirm Delete Appointment)" src="">

### Scheduler (Delete Appointment)
<img alt="Scheduler Delete Appointment" src="">

### Scheduler (Save Appointment)
<img alt="Scheduler (Save Appointment)" src="">

### Scheduler (Toggle Days)
<img alt="Scheduler (Toggle Days)" src="">

### Scheduler (Toggle Interviewers)
<img alt="Scheduler Toggle Interviewers" src="">

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