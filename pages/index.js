import React from "react";
import Head from "next/head";
import EventsList from "../components/events/event-list";
import { getFeaturedEvents } from "../utils/api-events";
import NewsletterRegistration from "../components/input/newsletter-registration";

function HomePage(props) {
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
      <NewsletterRegistration />
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
    revalidate: 1800,
  };
}

export default HomePage;
