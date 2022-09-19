import { useState } from 'react';

export default function useVisualMode(initial) { // take in an initial mode

  // Track the current mode as a stateful variable that will be used to render the Appointment child components conditionally. 
  const [mode, setMode] = useState(initial); // set the mode state with the initial mode provided
  const [history, setHistory] = useState([initial]); // initializing our history as an array with the first mode that gets passed to useVisualMode

  // ---------------------------------------------------------------------------
  // As we interact with the application, we use the "back" and "transition" functions to change between the modes.
  // ---------------------------------------------------------------------------

  // Allows  us to advance to any other mode
  // --- e.g., transition from the "EMPTY" component to the "CREATE" component when a user would like to create a new appointment in a currently empty time slot. 

  const transition = function(mode, replace = false) {
    if (replace === true) {
      setHistory(() => [...history, mode]) 
      setMode(mode)
      return mode
    }

    if (replace === false) {
      setHistory(prev => [...prev, mode])
      setMode(mode)
      return mode
    } 
  }

// ---------------------------------------------------------------------------
// Allows us to return to the previous mode
// --- Pops back to the most recent component
// --- e.g., backing out of the "CONFIRM" component by clicking "Cancel" to go back to the "SHOW" component

  const back = function() {
    if (history.length > 1) {
      const newHistory = history.splice(0, history.length-1)
      // console.log(`Back to ${newHistory[newHistory.length-1]} from ${mode}.`)
      setMode(newHistory[newHistory.length-1])
      setHistory(() => [...newHistory])
    }
  }

// ---------------------------------------------------------------------------

  return { mode, transition, back }
}

// ---------------------------------------------------------------------------



