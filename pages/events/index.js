import React from "react";
import EventsList from "../../components/events/EventsList";
import { getFeaturedEvent } from "../../data";

function AllEvents() {
  const events = getFeaturedEvent();

  return <EventsList events={events} />;
}
export default AllEvents;
