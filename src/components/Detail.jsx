import React, { useContext } from "react";
import Forme from "./EventForm";
import { Detail } from "./Context";
import { NavLink } from "react-router-dom";
export default function DetailPage() {
  const { Event, setEvent } = useContext(Detail);
  const { prat, setPrat } = useContext(Detail);

  return (
    <div className="detailpage">
      <NavLink to="/" id="NavLink">
              <button>
              back             
               </button>
            </NavLink>
      <h1>Detail page</h1>
      <div className="eventdetails">
        <h1>{prat.name}</h1> <br />
        start date: {prat.startdate}
        <br />
        <br />
        end date: {prat.enddate}
        <br />
        <br /> <br />
        {prat.description}
        <br />
        <br />
      </div>
    </div>
  );
}
