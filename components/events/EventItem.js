import React from 'react'

function EventItem(props) {
    const {event} = props
  return (
   <li>{event}</li>
  )
};

export default EventItem;