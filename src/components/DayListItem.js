import React from "react";
import "components/DayListItem.scss";
import classNames from "classnames";

// ------------------------------------------------------------------------
// DayListItem
// Each day displays slightly differently depending on what state it is in.
// ------------------------------------------------------------------------

// We display the name of the day, whether it is selected or unselected, and the interview spots remaining. 
// The user must also be able to select a particular day to view the interview information for that day. 

// ------------------------------------------------------------------------
// To put this all together we will need the following props:
    // --- name:String the name of the day
    // --- spots:Number the number of spots remaining
    // --- selected:Boolean true or false declaring that this day is selected
    // --- setDay:Function accepts the name of the day eg. "Monday", "Tuesday"
// ------------------------------------------------------------------------

// We use the spots prop for two purposes. 
    // 1) To display the text "{props.spots} spots remaining" and to determine if the day is full. 
    // 2) The DayListItem knows what it means to be full but not what it means to be selected. 
      // It uses this prop directly to determine which styles to apply.

export default function DayListItem(props) {

// Give classes to the <li> in DayListItem by passing a variable called dayClass to className. Use the classnames library to conditionally apply the correct classes based on the following rules:
// day-list__item all the time
// day-list__item--selected class name if props.selected is true
// day-list__item--full class name if props.spots is 0.

  const dayListClass = classNames(
    'day-list__item', {
      'day-list__item--selected': props.selected,
      'day-list__item--full': props.spots === 0 // https://flex-web.compass.lighthouselabs.ca/workbooks/flex-m07w17/activities/850?journey_step=54&workbook=22
  })

  // Write a function called formatSpots in the DayListItem component that will format the props.spots to make our tests pass. 
  // (Note that the tests expect certain output and they are case sensitive!)

  // it("renders 'no spots remaining' when there are 0 spots", () => {
  //   const { getByText } = render(<DayListItem name="Monday" spots={0} />);
  //   expect(getByText("no spots remaining")).toBeInTheDocument();
  // });
  
  // it("renders '1 spot remaining' when there is 1 spot", () => {
  //   const { getByText } = render(<DayListItem name="Monday" spots={1} />);
  //   expect(getByText("1 spot remaining")).toBeInTheDocument();
  // });

  const formatSpots = (spots) => {
    if (spots <= 0) {
      console.log("no spots remaining")
      return `no spots remaining`;
    } else if (spots === 1) {
      console.log("1 spots remaining")
      return "1 spot remaining"
    } else { 
      console.log(`${spots} spots remaining`)
      return `${spots} spots remaining`
    }
  };

  return (
    <li className={dayListClass} onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  );
};