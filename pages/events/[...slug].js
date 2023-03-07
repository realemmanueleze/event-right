import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import EventsList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import ErrorAlert from "../../components/ui/error-alert";
import Button from "../../components/ui/button";

function FilteredEvents() {
  const [filteredEvents, setFilteredEvents] = useState();
  const [data, setData] = useState();
  const router = useRouter();

  useEffect(() => {
    fetch("https://test-35fa6-default-rtdb.firebaseio.com/events.json")
      .then((jsonRes) => jsonRes.json())
      .then((res) => setData(res));
  }, []);

  const eventQuery = router.query.slug;
  const year = +eventQuery[0];
  const month = +eventQuery[1];

  const filteredEventHead = (
    <Head>
      <title>Filtered Events</title>
      <meta name="description" content={`All events for ${year}/${month}`} />
    </Head>
  );

  useEffect(() => {
    // Convert data to an array of objects
    if (data) {
      const events = [];
      for (const key in data) {
        events.push({ ...data[key] });
      }
      // Filter Events
      const filteredEvents = events.filter((event) => {
        const eventDate = new Date(event.date);
        return (
          eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
        );
      });
      setFilteredEvents(filteredEvents);
    }
  }, [data]);

  if (!filteredEvents || !eventQuery) {
    return (
      <div className="center">
        {filteredEventHead}
        Loading...
      </div>
    );
  }

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
        {filteredEventHead}
        <ErrorAlert>
          <p>Invalid filters. Please review your values and try again.</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Explore All Events</Button>
        </div>
      </>
    );
  }

  if (filteredEvents.length < 0) {
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
      {filteredEventHead}
      <ResultsTitle date={date} />
      <EventsList events={filteredEvents} />
    </>
  );
}

export default FilteredEvents;
