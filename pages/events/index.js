import React from "react";
import EventSearch from "../../components/events/EventSearch";
import EventsList from "../../components/events/EventsList";
import { getFeaturedEvent } from "../../data";

function AllEvents() {
  const events = getFeaturedEvent();

  return (
    <>
      <EventSearch />
      <EventsList events={events} />;
    </>
  );
}
export default AllEvents;
