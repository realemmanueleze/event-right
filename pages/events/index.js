import React from "react";
import { useRouter } from "next/router";
import EventSearch from "../../components/events/event-search";
import EventsList from "../../components/events/event-list";
import { getAllEvents } from "../../utils/api-events";
import Head from "next/head";

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
      <Head>
        <title>All Events</title>
        <meta name="description" content="All event page" />
      </Head>
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
    revalidate: 300,
  };
}
export default AllEvents;
