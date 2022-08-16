
// We will need to track the current mode as a stateful variable that will be used to render the Appointment child components conditionally. As we interact with the application, we will use two different functions to change between the modes:

// A transition function that will allow us to advance to any other mode
// A back function will allow us to return to the previous mode
// The transition function might be used to transition from the "EMPTY" component to the "CREATE" component when a user would like to create a new appointment in a currently empty time slot. 
// The back function could be used to pop back to the most recent component, such as backing out of the "CONFIRM" component by clicking "Cancel" to go back to the "SHOW" component.

export default function useVisualMode(initial) { // take in an initial mode

  const [mode, setMode] = useState(initial); // set the mode state with the initial mode provided
  const [previousMode, setPreviousMode] = useState([initial])

  // Create a transition function within useVisualMode that will take in a new mode and update the mode state with the new value. 
  // If we used useState to initialize the mode state in useVisualMode, what will we have to do to update the mode value?
  // This custom Hook will need to add the transition property to the object that useVisualMode returns. 
  // The property will point to a function that we implement directly in the custom Hook.

  function transition(mode, replace = false) { // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters
    if (replace === false) {
      console.log('Replace is false!')
      console.log('mode false:', mode)
    } else {
      console.log('mode else:', mode)
    }
  }

  function back() {
    console.log('hi')
  }

  return { mode, transition, back }; // return an object with a mode property
};

