const fixtures = {
  days: [
    {
      id: 1,
      name: "Monday",
      appointments: [1, 2], // Archie Cohen is ID 2 -- ID 1 is an available appointment
      interviewers: [1, 2],
      spots: 1
    },
    {
      id: 2,
      name: "Tuesday",
      appointments: [3, 4],
      interviewers: [3, 4],
      spots: 1
    }
  ],
  appointments: {
    "1": { id: 1, time: "12pm", interview: null },
    "2": {
      id: 2,
      time: "1pm",
      interview: { student: "Archie Cohen", interviewer: 2 }
    },
    "3": {
      id: 3,
      time: "2pm",
      interview: { student: "Leopold Silvers", interviewer: 4 }
    },
    "4": { id: 4, time: "3pm", interview: null }
  },
  interviewers: {
    "1": {
      id: 1,
      name: "Sylvia Palmer",
      avatar: "https://i.imgur.com/LpaY82x.png"
    },
    "2": {
      id: 2,
      name: "Tori Malcolm",
      avatar: "https://i.imgur.com/Nmx0Qxo.png"
    },
    "3": {
      id: 3,
      name: "Mildred Nazir",
      avatar: "https://i.imgur.com/T2WwVfS.png"
    },
    "4": {
      id: 4,
      name: "Cohana Roy",
      avatar: "https://i.imgur.com/FK8V841.jpg"
    }
  }
};

// --------------------------------------------------------------------------------
// fixture: can be used to describe reusable static data that is imported or embedded into a test file. 
// make sure we have accurate data that matches the schema from the server.
// --------------------------------------------------------------------------------

export default { // export our fake axios library
  defaults: { baseURL: "" },
  get: jest.fn(url => { // mocks the get function using jest.fn() to create the mock
    if (url === "http://localhost:8001/api/days") {
      return Promise.resolve({ // return a resolved Promise to match the interface used by axios -- skip the whole sequence of HTTP operations and resolve a hardcoded version of the response data.
        status: 200,
        statusText: "OK",
        data: fixtures.days
      });
    }

    if (url === "http://localhost:8001/api/appointments") {
      return Promise.resolve({ // return a resolved Promise to match the interface used by axios -- skip the whole sequence of HTTP operations and resolve a hardcoded version of the response data.
        status: 200,
        statusText: "OK",
        data: fixtures.appointments
      });
    }

    if (url === "http://localhost:8001/api/interviewers") {
      return Promise.resolve({ // return a resolved Promise to match the interface used by axios -- skip the whole sequence of HTTP operations and resolve a hardcoded version of the response data.
        status: 200,
        statusText: "OK",
        data: fixtures.interviewers
      });
    }
  }),
  // We use our mock implementation of axios to isolate our tests to the client code. All of the data that is retrieved using GET requests is static and predictable. When a user books or cancels an interview, we request to PUT or DELETE the appointment resource.

// Mocking axios.put or axios.delete is similar to axios.get. 
// We edit the src/__mocks__/axios.js to include a put key on the exported object. 
  put: jest.fn(url => { 
      return Promise.resolve({
        status: 204, 
        statusText: "No Content",
    
      })
    }),

    delete: jest.fn(url => { 
      return Promise.resolve({
        status: 204, 
        statusText: "No Content",
        
      })
    })
  }
  

// https://jestjs.io/docs/asynchronous 
// https://jestjs.io/docs/manual-mocks 