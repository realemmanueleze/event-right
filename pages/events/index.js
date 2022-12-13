import React from "react";
import { getFeaturedEvents } from "../../data";
import EventsList from "../../components/events/EventsList";

function AllEvents() {
  const events = getFeaturedEvents();
  return (
    <div>
      <EventsList events={events} />
    </div>
  );
}

export default AllEvents;
