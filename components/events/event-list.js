import React from "react";
import EventItem from "./event-items";
import classes from "./event-list.module.css"

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
