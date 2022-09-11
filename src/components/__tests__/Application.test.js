import React from "react";

import { render, cleanup } from "@testing-library/react";

import { fireEvent } from "@testing-library/react";

import { 
  waitForElement,
  prettyDOM, 
  getAllByTestId,
  getByAltText,
  getByPlaceholderText,
  queryByText,
  queryAllByTestId,
  getByText
} from "@testing-library/react";
// import { renderHook } from '@testing-library/react'

import Application from "components/Application";

afterEach(cleanup);

// We will mock the functions we use from the axios library.
// We will write a test to confirm that the scheduler can load data.
// We will write an asynchronous test that waits for a component to update before proceeding.
// We will use containers to find specific DOM nodes.
// We will chain promises to handle asynchronous testing.
// We will override mock implementations for specific tests.
// We will use setup and teardown functions provided by Jest to perform common tasks.

// The tests we are writing now are mostly integration tests. 
// We are testing the components and the custom hooks that they use. 
// In some cases, it will make more sense to isolate certain logic. 
// It will allow us to import the specific concern and test it in isolation.

// Testing is an art, not a science. These examples are intended to offer a limited introduction to a certain style of testing.

// Throughout these examples it is possible that coverage numbers and source code will differ between projects. 
// There will be a limited amount of detail in the instructions. 
// Use documentation, previous activities and existing tests to research the queries and matchers for some of these more challenging tests.

// change test.skip back to it to run test
// test.skip("renders without crashing", () => {
//   render(<Application />);
// });

// --------------------------------------------------------------------------------
// We can make our test asynchronous by returning a Promise.
// --------------------------------------------------------------------------------

// it("defaults to Monday and changes the schedule when a new day is selected", () => {
//   const { getByText } = render(<Application />);
//   return waitForElement(() => getByText("Monday")); // Uses waitForElement to wait until we are able to get a DOM element with the text "Monday" -- // The waitForElement function returns a promise that resolves when the callback returns a truthy value and rejects after a time out when it cannot find the specified text. 
// // When we return a Promise from the test function, the Jest framework knows that the test isn't complete until the promise chain has resolved or rejected.
// // The argument we pass to waitForElement is a function that returns a DOM node. In this case, it is looking for something based on the text "Monday".
// });

describe("Application", () => {

it("defaults to Monday and changes the schedule when a new day is selected", () => {
  const { getByText } = render(<Application />);

  return waitForElement(() => getByText("Monday"))
  
  .then(() => {
    fireEvent.click(getByText("Tuesday"));
    expect(getByText("Leopold Silvers")).toBeInTheDocument();
  });
});

// --------------------------------------------------------------------------------
// Check that the element with the text "Saving" is displayed.
// Wait until the element with the text "Lydia Miller-Jones" is displayed.
// Check that the DayListItem with the text "Monday" also has the text "no spots remaining".
// --------------------------------------------------------------------------------

  it("loads data, books an interview and reduces the spots remaining for Monday by 1", async () => {
    const { container, debug } = render(<Application />);

    await waitForElement(() => getByText(container, "Archie Cohen"));

    const appointments = getAllByTestId(container, "appointment");
    const appointment = appointments[0];
console.log(prettyDOM(appointment))
    fireEvent.click(getByAltText(appointment, "Add"));

    fireEvent.change(getByPlaceholderText(appointment, /Enter Student Name/i), {
      target: { value: "Lydia Miller-Jones" }
    });

    fireEvent.click(getByAltText(appointment, "Sylvia Palmer"));
    console.log(prettyDOM(appointment))
    fireEvent.click(getByText(appointment, "Save"));

    expect(getByText(appointment, "SAVING")).toBeInTheDocument();

    await waitForElement(() => getByText(appointment, "Lydia Miller-Jones"));

    const day = getAllByTestId(container, "day").find(day =>
      queryByText(day, "Monday")
    );

    expect(getByText(day, "no spots remaining")).toBeInTheDocument();
  });
})

//   it("loads data, books an interview and reduces the spots remaining for Monday by 1", async () => {
//     const { container, debug } = render(<Application />); // Render the Application.
//     // const { getByText } = render(<Application />);
  
//     console.log('CONTAINER')
//     console.log(prettyDOM(container))
//     // Use the async and await syntax
//     await waitForElement(() => getByText(container, "Archie Cohen")); // Wait until the text "Archie Cohen" is displayed.

//     const appointments = getAllByTestId(container, "appointment");
//     console.log('BEFORE APPOINTMENTS')
//     console.log(prettyDOM(appointments))

//     const appointment = appointments[0]; // get the first appointment on Monday (12 pm)
//     console.log('BEFORE APPOINTMENT')
//     console.log(prettyDOM(appointment));

//     fireEvent.click(getByAltText(appointment, "Add")); // Click the "Add" button on the first empty appointment
    
//     // await waitForElement(() => getByText(appointment, /enter student name/i)) // Wait until the text "Archie Cohen" is displayed.
    
//     expect(getByPlaceholderText(appointment, "Enter Student Name")).toBeInTheDocument();
//     // const studentNameInputField = getByPlaceholderText(appointment, /enter student name/i); // substring match, ignore case /i
//     const interviewerInput = getByAltText(appointment, "Tori Malcolm")
//     // debug()
//     // Enter a name e.g., "Lydia Miller-Jones" into the input with the placeholder "Enter Student Name".
//     fireEvent.change(getByPlaceholderText(appointment, "Enter Student Name"), {
//       target: { value: "Lydia Miller-Jones" }
//     });

//     fireEvent.click(interviewerInput); // Click an interviewer
  
//     fireEvent.click(getByText(appointment, /Save/i)); // Click the "Save" button on that same appointment.
    
//     expect(getByText(appointment, "SAVING")).toBeInTheDocument();
//     // waitForElementToBeRemoved

//     console.log('APPOINTMENT TEST')
//     console.log(prettyDOM(appointment));

//     // await waitForElement(() => getByAltText(appointment, "Sarah Moss"));
//     // expect(getByText(appointment, "SAVING")).not.toBeInTheDocument();

//     // debug()

//     const day = queryAllByTestId(container, "day").find(day =>
//       getByText(day, "Monday")
//     );

//     console.log('DAY')
//     console.log(prettyDOM(day))

//     console.log('AFTER APPOINTMENT')
//     console.log(prettyDom(appointment));
//     console.log('AFTER APPOINTMENTS')
//     // console.log(prettyDOM(appointments))
//     // expect(getByText(day, "no spots remaining")).toBeInTheDocument();
    
//   });

// })
  

it("loads data, cancels an interview and increases the spots remaining for Monday by 1", async () => {
  // 1. Render the Application.
  const { container } = render(<Application />);

  // 2. Wait until the text "Archie Cohen" is displayed.
  await waitForElement(() => getByText(container, "Archie Cohen"));

  // 3. Click the "Edit" button on the first empty appointment.
  // 4. Enter the name "Lydia Miller-Jones" into the input with the placeholder "Enter Student Name".
  // 5. Click the first interviewer in the list.
  // 6. Click the "Save" button on that same appointment.
  // 7. Check that the element with the text "Saving" is displayed.
  // 8. Wait until the element with the text "Lydia Miller-Jones" is displayed.
  // 9. Check that the DayListItem with the text "Monday" also has the text "no spots remaining".
});