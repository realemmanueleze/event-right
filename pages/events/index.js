import React from "react";
import {useRouter} from 'next/router'
import EventSearch from "../../components/events/EventSearch";
import EventsList from "../../components/events/EventsList";
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
