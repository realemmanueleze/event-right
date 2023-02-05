import React from "react";
import { useRouter } from "next/router";
import EventsList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import ErrorAlert from "../../components/ui/error-alert";
import Button from "../../components/ui/button";
import { getFilteredEvents } from "../../utils/api-events";
// import { getFilteredEvents } from "../../data";

function FilteredEvents() {
  const router = useRouter();

  const eventQuery = router.query.slug;

  if (!eventQuery) {
    return <div className="center">Loading...</div>;
  }

  const year = +eventQuery[0];
  const month = +eventQuery[1];

  if (
    isNaN(year) ||
    isNaN(month) ||
    month > 12 ||
    month < 1 ||
    year > 2030 ||
    year < 2021
  ) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid filters. Please review your values and try again.</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Explore All Events</Button>
        </div>
      </>
    );
  }

  const filteredEvents = getFilteredEvents({ year, month });

  if (!filteredEvents || filteredEvents.length < 0) {
    return (
      <>
        <ErrorAlert>
          <p>No event found for the chosen filter.</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Explore All Events</Button>
        </div>
      </>
    );
  }

  const date = new Date(year, month - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventsList events={filteredEvents} />
    </>
  );
}

export default FilteredEvents;
