import React from "react";
import EventItem from "./EventItem";

function EventsList({ events }) {
  return (
    <ul>
      {events.map((event) => (
        <EventItem {...event} key={events.id}/>
      ))}
    </ul>
  );
}
export default EventsList;
