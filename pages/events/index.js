import React from "react";
import {useRouter} from 'next/router'
import EventSearch from "../../components/events/event-search";
import EventsList from "../../components/events/event-list";
import { getFeaturedEvent } from "../../data";

function AllEvents() {
  const events = getFeaturedEvent();
  const router = useRouter()

  function handleSearch(year, month){
    router.push(`/events/${year}/${month}`)

  }

  return (
    <>
      <EventSearch onSubmit={handleSearch}/>
      <EventsList events={events} />;
    </>
  );
}
export default AllEvents;
