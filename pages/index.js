import React from "react";
import { getFeaturedEvents } from "../data";
import EventsList from "../components/events/event-list";

function FeaturedEvents() {
  const events = getFeaturedEvents();
  return (
    <div>
      <EventsList events={events} />
    </div>
  );
}

export default FeaturedEvents;
