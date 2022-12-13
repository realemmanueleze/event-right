 import React from 'react'
import EventLogistics from '../../components/event-detail/event-logistics'
import EventSummary from '../../components/event-detail/event-summary'
import {useRouter} from 'next/router'
 
 function EventDetails() {
  const router = useRouter()
   return (
     <>
      <EventSummary />
      <EventLogistics />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
     </>
   )
 }
 
 export default EventDetails