
import EventCard from './EventCard';

export default function EventList({ events }) {
  return (
    <div className="row">
      {events.map(event => (
        <div key={event.Id} className="col-md-4 mb-3">
          <EventCard event={event} />
        </div>
      ))}
    </div>
  );
}
