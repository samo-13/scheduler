import { useState } from 'react';

export default function useVisualMode(initial) { // take in an initial mode

  // Track the current mode as a stateful variable that will be used to render the Appointment child components conditionally. 
  const [mode, setMode] = useState(initial); // set the mode state with the initial mode provided
  const [history, setHistory] = useState([initial]); // initializing our history as an array with the first mode that gets passed to useVisualMode

  // ---------------------------------------------------------------------------
  // As we interact with the application, we use the "back" and "transition" functions to change between the modes.
  // ---------------------------------------------------------------------------

  // A transition function allows  us to advance to any other mode
  // --- The transition function might be used to transition from the "EMPTY" component to the "CREATE" component when a user would like to create a new appointment in a currently empty time slot. 

  const transition = function(mode, replace = false) {
    if (replace === true) {
      setHistory(() => [...history, mode]) 
      setMode(mode)
        console.log('MODE TEST:', mode)
      return mode
    }

    if (replace === false) {
      setHistory(prev => [...prev, mode])
      setMode(mode)
      return mode
    } 
  }

// ---------------------------------------------------------------------------

// A back function allows us to return to the previous mode
// --- The back function is used to pop back to the most recent component, like backing out of the "CONFIRM" component by clicking "Cancel" to go back to the "SHOW" component.

  const back = function() {
    history.pop()
    return setMode(history[history.length-1])
  }

// ---------------------------------------------------------------------------

  return { mode, transition, back }
}

// ---------------------------------------------------------------------------



