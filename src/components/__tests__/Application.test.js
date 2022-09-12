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
  // Render the Application.
  const { container, debug } = render(<Application />);

  // Wait until the text "Archie Cohen" is displayed.
  await waitForElement(() => getByText(container, "Archie Cohen"));

  // Click the "Edit" button on the first empty appointment.
  const appointments = getAllByTestId(container, "appointment");
  const appointment = appointments[0];

  console.log(prettyDOM(appointment))
  fireEvent.click(getByAltText(appointment, "Add"));

  // Enter the name "Lydia Miller-Jones" into the input with the placeholder "Enter Student Name".
  fireEvent.change(getByPlaceholderText(appointment, /Enter Student Name/i), {
    target: { value: "Lydia Miller-Jones" }
  });

  // Click the first interviewer in the list.
  fireEvent.click(getByAltText(appointment, "Sylvia Palmer"));
  console.log(prettyDOM(appointment))
  
  // Click the "Save" button on that same appointment.
  fireEvent.click(getByText(appointment, "Save"));

  // Check that the element with the text "Saving" is displayed.
  expect(getByText(appointment, "SAVING")).toBeInTheDocument();

  // Wait until the element with the text "Lydia Miller-Jones" is displayed.
  await waitForElement(() => queryByText(appointment, "Lydia Miller-Jones"));

  // Check that the DayListItem with the text "Monday" also has the text "no spots remaining".
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
  const { container } = render(<Application />);

  // Wait until the text "Archie Cohen" is displayed.
  await waitForElement(() => getByText(container, "Archie Cohen"));

  // Click the "Delete" button on the booked appointment.
  const appointment = getAllByTestId(container, "appointment").find(
    appointment => queryByText(appointment, "Archie Cohen")
  );

  fireEvent.click(queryByAltText(appointment, "Delete"));

  // Check that the confirmation message is shown.
  expect(
    getByText(appointment, "Are you sure you would like to delete?")
  ).toBeInTheDocument();

  // Click the "Confirm" button on the confirmation.
  fireEvent.click(queryByText(appointment, "Confirm"));

  // Wait until the element with the "Add" button is displayed.
  await waitForElement(() => getByAltText(appointment, "Add"));

  // Check that the DayListItem with the text "Monday" also has the text "2 spots remaining".
  const day = getAllByTestId(container, "day").find(day =>
    queryByText(day, "Monday")
  );

  expect(getByText(day, "2 spots remaining")).toBeInTheDocument();
});
})

// --------------------------------------------------------------------------------
// Editing an interview
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// Handling errors when either fails
// --------------------------------------------------------------------------------