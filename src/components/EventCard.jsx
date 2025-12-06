
import { Link } from 'react-router-dom';

export default function EventCard({ event }) {
  return (
    <div className="card h-100">
      <img src={event.ImageFilename} className="card-img-top" alt={event.Title} />
      <div className="card-body">
        <h5 className="card-title">{event.Title}</h5>
        <p>{event.Date} - {event.LocationName}</p>
        <div className="d-flex justify-content-between">
          <Link to={`/event/${event.Id}`} className="btn btn-primary">View Details</Link>
          <Link to={`/purchase/${event.Id}`} className="btn btn-success">Buy Tickets</Link>
        </div>
      </div>
    </div>
  );
}
