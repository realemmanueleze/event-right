import React from "react";
import EventsList from "../components/events/event-list";
import { getFeaturedEvents } from "../utils/api-events";

function FeaturedEvents(props) {
  const { events } = props;
  return (
    <div>
      <EventsList events={events} />
    </div>
  );
}

export async function getStaticProps() {
  const events = await getFeaturedEvents();

  return {
    props: {
      events,
    },
  };
}

export default FeaturedEvents;
