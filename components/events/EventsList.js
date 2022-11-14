import React from 'react'

function EventsList() {
    const {events} = props
    return (
      <div>{events.map((event)=> <EventItem event={event}/>)}</div>
    )
  }

export default EventsList