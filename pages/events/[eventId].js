import React from "react";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventSummary from "../../components/event-detail/event-summary";
import EventContent from "../../components/event-detail/event-content";
import { getFeaturedEvents, getEventById } from "../../utils/api-events";
import ErrorAlert from "../../components/ui/error-alert";
import Head from "next/head";

function EventDetails(props) {
  const { event } = props;

  if (!event) {
    return (
      <>
        <ErrorAlert>
          <p>No event with the id of {eventId} found</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Explore All Events</Button>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents();
  const eventIds = events.map((event) => ({ params: { eventId: event.id } }));
  return {
    paths: eventIds,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const { eventId } = params;
  const event = await getEventById(eventId);

  return {
    props: {
      event,
    },
    revalidate: 30,
  };
}

export default EventDetails;
