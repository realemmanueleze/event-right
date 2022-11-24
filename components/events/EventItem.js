import Link from "next/link";
import React from "react";

function EventItem(props) {
  const { title, date, location, image, id } = props;
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(", ", "\n");
  return (
    <li>
      <div className='w-20'>
        <img src={"/" + image} alt={title}  />
      </div>
      <div>
        <h2>{title}</h2>
      </div>
      <div>
        <h2>{humanReadableDate}</h2>
      </div>
      <div>
        <address>{formattedAddress}</address>
      </div>
      <div>
        <Link href={`/events/${id}`}>Explore Events</Link>
      </div>
    </li>
  );
}

export default EventItem;
