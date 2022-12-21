import React from "react";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventSummary from "../../components/event-detail/event-summary";
import EventContent from "../../components/event-detail/event-content";
import { useRouter } from "next/router";
import { getEventById } from "../../data";
import ErrorAlert from "../../components/ui/error-alert";

function EventDetails() {
  const router = useRouter();
  const eventId = router.query.eventId;
  console.log(eventId);
  const event = getEventById(eventId);

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

export default EventDetails;
