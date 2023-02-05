import React from "react";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventSummary from "../../components/event-detail/event-summary";
import EventContent from "../../components/event-detail/event-content";
import { getAllEvents, getEventById } from "../../utils/api-events";
import ErrorAlert from "../../components/ui/error-alert";

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
  const events = await getAllEvents();
  const eventIds = events.map((event) => ({params: {eventId: event.id}}));
  return {
    paths: eventIds,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const {eventId} = params;
  const event = await getEventById(eventId);

  return {
    props: {
      event,
    },
  };
}

export default EventDetails;
