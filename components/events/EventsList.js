import React from "react";
import EventItem from "./EventItem";
import classes from "./EventList.module.css"

function EventsList({ events }) {
  return (
    <ul className={classes.list}>
      {events.map((event) => (
        <EventItem {...event} key={events.id}/>
      ))}
    </ul>
  );
}
export default EventsList;
