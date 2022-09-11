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
  queryByAltText,
  getByText
} from "@testing-library/react";

import Application from "components/Application";

afterEach(cleanup);

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
  // 1. Render the Application.
  const { container, debug } = render(<Application />);

  // 2. Wait until the text "Archie Cohen" is displayed.
  await waitForElement(() => getByText(container, "Archie Cohen"));

  // 3. Click the "Edit" button on the first empty appointment.
  const appointments = getAllByTestId(container, "appointment");
  const appointment = appointments[0];

  console.log(prettyDOM(appointment))
  fireEvent.click(getByAltText(appointment, "Add"));

  // 4. Enter the name "Lydia Miller-Jones" into the input with the placeholder "Enter Student Name".
  fireEvent.change(getByPlaceholderText(appointment, /Enter Student Name/i), {
    target: { value: "Lydia Miller-Jones" }
  });

  // 5. Click the first interviewer in the list.
  fireEvent.click(getByAltText(appointment, "Sylvia Palmer"));
  console.log(prettyDOM(appointment))
  
  // 6. Click the "Save" button on that same appointment.
  fireEvent.click(getByText(appointment, "Save"));

  // 7. Check that the element with the text "Saving" is displayed.
  expect(getByText(appointment, "SAVING")).toBeInTheDocument();

  // 8. Wait until the element with the text "Lydia Miller-Jones" is displayed.
  await waitForElement(() => queryByText(appointment, "Lydia Miller-Jones"));

  // 9. Check that the DayListItem with the text "Monday" also has the text "no spots remaining".
  const day = getAllByTestId(container, "day").find(day =>
    getByText(day, "Monday")
  );

  console.log(prettyDOM(container))

  expect(getByText(day, /no spots remaining/i)).toBeInTheDocument();
  });


// --------------------------------------------------------------------------------
// Cancelling an interview
// --------------------------------------------------------------------------------

  it("loads data, cancels an interview and increases the spots remaining for Monday by 1", async () => {
    // 1. Render the Application.
    const { container, debug } = render(<Application />);

    // 2. Wait until the text "Archie Cohen" is displayed.
    await waitForElement(() => getByText(container, "Archie Cohen"));

    // 3. Click the "Delete" button on the booked appointment.
    const appointment = getAllByTestId(container, "appointment").find(
      appointment => queryByText(appointment, "Archie Cohen")
    );

    fireEvent.click(queryByAltText(appointment, "Delete"));

    // 4. Check that the confirmation message is shown.
    // 5. Click the "Confirm" button on the confirmation.
    // 6. Check that the element with the text "Deleting" is displayed.
    // 7. Wait until the element with the "Add" button is displayed.
    // 8. Check that the DayListItem with the text "Monday" also has the text "2 spots remaining".

    debug();
  })
})

// --------------------------------------------------------------------------------
// Editing an interview
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// Handling errors when either fails
// --------------------------------------------------------------------------------