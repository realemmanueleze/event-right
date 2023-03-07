import React from "react";
import Head from "next/head";
import EventsList from "../components/events/event-list";
import { getFeaturedEvents } from "../utils/api-events";

function FeaturedEvents(props) {
  const { events } = props;
  
  return (
    <div>
      <Head>
        <title>Event Right</title>
        <meta
          name="description"
          content="Your favorite and latest events in single place"
        />
      </Head>
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
