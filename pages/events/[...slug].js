import React from "react";
import { useRouter } from "next/router";
import EventsList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import ErrorAlert from "../../components/ui/error-alert";
import Button from "../../components/ui/button";
import { getEventById, getFilteredEvents } from "../../utils/api-events";

function FilteredEvents(props) {
  const { events: filteredEvents, eventDate } = props;
  // const router = useRouter();

  // const eventQuery = router.query.slug;

  // if (!eventQuery) {
  //   return <div className="center">Loading...</div>;
  // }

  // const year = +eventQuery[0];
  // const month = +eventQuery[1];

  if (props.isError) {
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

  // const filteredEvents = getFilteredEvents({ year, month });

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

  const date = new Date(eventDate.year, eventDate.month - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventsList events={filteredEvents} />
    </>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const year = +params.slug[0];
  const month = +params.slug[1];

  if (
    isNaN(year) ||
    isNaN(month) ||
    month > 12 ||
    month < 1 ||
    year > 2030 ||
    year < 2021
  ) {
    return { props: { isError: true } };
  }

  const events = await getFilteredEvents({ year, month });

  return {
    props: { events, eventDate: { year: year, month: month } },
  };
}
export default FilteredEvents;
