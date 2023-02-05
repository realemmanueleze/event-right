export async function getAllEvents() {
  const eventsJson = await fetch(
    "https://test-35fa6-default-rtdb.firebaseio.com/events.json"
  );
  const eventsData = await eventsJson.json();
  const sortedEvent = [];
  for (const key in eventsData) {
    sortedEvent.push({ ...eventsData[key] });
  }
  return sortedEvent;
}

export async function getFeaturedEvents() {
  const events = await getAllEvents();
  return events.filter((event) => event.isFeatured);
}
export async function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;
  const events = await getAllEvents();

  let filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export async function getEventById(id) {
  const events = await getAllEvents();
  return events.find((event) => event.id === id);
}
