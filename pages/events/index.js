import React from "react";
import { useRouter } from "next/router";
import EventSearch from "../../components/events/event-search";
import EventsList from "../../components/events/event-list";
import { getAllEvents } from "../../utils/api-events";

function AllEvents(props) {
  const { events } = props;

  const router = useRouter();

  function handleSearch(year, month) {
    router.push(`/events/${year}/${month}`);
  }

  if (!events) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <EventSearch onSubmit={handleSearch} />
      <EventsList events={events} />;
    </>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events,
    },
  };
}
export default AllEvents;
