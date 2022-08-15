
// We will need to track the current mode as a stateful variable that will be used to render the Appointment child components conditionally. As we interact with the application, we will use two different functions to change between the modes:

// A transition function that will allow us to advance to any other mode
// A back function will allow us to return to the previous mode
// The transition function might be used to transition from the "EMPTY" component to the "CREATE" component when a user would like to create a new appointment in a currently empty time slot. 
// The back function could be used to pop back to the most recent component, such as backing out of the "CONFIRM" component by clicking "Cancel" to go back to the "SHOW" component.

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);

  function transition(mode, replace = false) { // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters


  }

  function back() {

  }

  return { mode, transition, back };
};