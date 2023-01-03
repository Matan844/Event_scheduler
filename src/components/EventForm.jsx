import React from "react";
import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { Detail } from "./Context";
// import { useEffect } from "react";
export default function Forme() {
  const [EventName, setEventName] = useState("");
  const [EventStartDate, setEventStartDate] = useState("");
  const [EventEndDate, setEventEndDate] = useState("");
  const [Description, setEventDescription] = useState("");
  const { Event, setEvent } = useContext(Detail);
  const { setPrat } = useContext(Detail);
  
  const HandleSubmit = (e) => {
    e.preventDefault();
    setEvent([
      ...Event,
      {
        name: EventName,
        startdate: EventStartDate,
        enddate: EventEndDate,
        description: Description,
      },
    ]);
  };     
  const removeElement = (index) => {
    const newEvent = Event.filter((_, i) => i !== index);
    setEvent(newEvent);
  };

  const MoveToDetailPage = (single) => {
    setPrat(single);
  };
//   useEffect(() => {
//     removeElement(0);
// }, []);
  return (
    <div>
      <h1>Event scheduler</h1>
      <h4>add your event</h4>
      <form onSubmit={HandleSubmit}>
        <input
          type="text"
          id="name"
          placeholder="event name"
          onChange={(e) => setEventName(e.target.value)}
        />
        <input
          type="date"
          id="start"
          placeholder="start date"
          onChange={(e) => setEventStartDate(e.target.value)}
        />
        <input
          type="date"
          id="end"
          placeholder="end date"
          onChange={(e) => setEventEndDate(e.target.value)}
        />
        <textarea
          id="description"
          placeholder="description"
          onChange={(e) => setEventDescription(e.target.value)}
        />
        <input type="submit" value={"add event"} />
      </form>
      {Event.map((single, index) => {
        return (
          <div className="Events">
            <p key={index} className="event">
              {single.name}
              <br />
              <br />
              start date: {single.startdate}
              <br />
              <br />
              end date: {single.enddate} <br />
              <br />
              {single.description}
            </p>
            <button onClick={() => removeElement(index)}>delete</button>
            <NavLink to="./detail" id="NavLink">
              <button onClick={() => MoveToDetailPage(single)}>
                detail page
              </button>
            </NavLink>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
